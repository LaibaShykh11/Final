import { useEffect, useState } from 'react'
import { APIs } from '../const/APIs'
import axios from 'axios'

function AllProducts() {
  const [product, setProducts] = useState([''])
  const fetchAllProductsData = async () => {
    await axios
      .get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCT)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchAllProductsData()
  }, [])

  return (
    <>
      <div className='row container'>
        {product.length === 0 ? (
          <h1>No data found</h1>
        ) : (
          product.map((p) => (
            <div className='col-sm-12 pt-4 col-md-6 col-lg-3 '>
              <div className='card' style={{ width: '18rem', height: '40rem' }}>
                <img className='card-img-top' src={p.image} alt='card'></img>
                <div className='card-body'>
                  <h5 className='card-title'>{p.title}</h5>
                  {/*<p className='card-text'>{p.description}</p>*/}
                  <a href='\' className='btn btn-dark'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}
export default AllProducts
