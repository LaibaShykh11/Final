import { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import { APIs } from '../const/APIs'
import { useMyInformation } from '../context/PersonalInfoContext'
import { Image } from 'react-bootstrap'

async function getReviews() {
  try {
    const res = await axios.get(APIs.PORTFOLIO.REVIEWS.GET_ALL_REVIEWS)
    return res.data.data
  } catch (err) {
    return { error: err.message }
  }
}
function Reviews() {
  const [error, setError] = useState(null)
  const { reviews, setReviews } = useMyInformation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews()
        if (data.error) {
          console.log('error@getReviews: ', data.error)
          setError(data.error)
        } else {
          setReviews(data)
          console.log('reviews@getReviews: ', data)
        }
      } catch (error) {
        console.error('Error in useEffect:', error)
        setError('Failed to fetch reviews.')
      }
    }

    fetchData()
  }, [setReviews])

  return (
    <div className={'my-4'}>
      <Carousel data-bs-theme='dark'>
        {reviews?.map((review) => {
          return (
            <Carousel.Item>
              <div className='d-flex justify-content-center flex-column align-items-center'>
                <Image
                  className='d-block w-10'
                  style={{ height: '150px' }}
                  src={review.clientImageURL}
                  roundedCircle
                  alt='sliding'
                />
                <h1>{review.clientName}</h1>
                <p>{review.review}</p>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Reviews
