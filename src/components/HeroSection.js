import profileImage from '../assets/images/image.png'
//import Carousel from 'react-bootstrap/Carousel'

export const HeroSection = () => {
  return (
    <>
      <div style={{ backgroundColor: '#464343' }} className='row'>
        <div
          className='text-white container-fluid col-lg-6'
          style={{ paddingLeft: '100px' }}
        >
          <p>
            Indulge in a symphony of flavors at our artisanal bakery. Welcome to
            a world where the aroma of freshly baked wonders captivates your
            senses. Our master bakers craft each creation with passion, using
            only the finest ingredients to ensure every bite is pure delight.
            <br></br>
            <br></br>
            From flaky croissants to decadent cakes, experience the epitome of
            taste and craftsmanship. Whether it's a special occasion or a
            craving for the extraordinary, our bakery offers a haven for your
            palate. Elevate your moments with the magic of our oven-fresh
            delights. Your journey to exceptional taste begins here.
          </p>
        </div>
        <div className='container col-sm-12 col-md-12 col-lg-6'>
          <img src={profileImage} alt='' />
        </div>
      </div>
    </>
  )
}
export default HeroSection
