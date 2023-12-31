import React from 'react'
import Image from '../assets/images/about.png'
export default function About() {
  return (
    <div
      className='container-fluid pb-3'
      style={{ backgroundColor: '#C1C3C0' }}
    >
      <div className='row'>
        <div className=' col-sm-12 col-lg-6 col-md-12'>
          <h1
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            About Us
          </h1>
        </div>
        <div className=' col-sm-12 col-lg-6 col-md-12'>
          <img src={Image} alt='' />
        </div>
      </div>
      <div className=' container-fluid' style={{ paddingLeft: '100px' }}>
        <p>
          At our bakery, baking isn't just a process; it's an art, a passion
          that's woven into every loaf, pastry, and confection we create.
          Established with a vision to redefine indulgence, we take pride in
          crafting experiences that transcend the ordinary. Our story began with
          a small kitchen and a big dream – to infuse the world with the warmth
          of freshly baked goods. What sets us apart is our unwavering
          commitment to quality.<br></br>
          <br></br> We meticulously source the finest ingredients, from velvety
          chocolate to locally grown fruits, ensuring that every bite tells a
          tale of exceptional flavor. But it's not just about ingredients; it's
          about the hands that shape them. Our dedicated team of master bakers
          pours their heart into each recipe, combining time-honored techniques
          with innovative twists.<br></br>
          <br></br>From the moment you step into our bakery, you're enveloped in
          a symphony of scents and sights that awaken your senses. Every
          creation that graces our shelves is a result of countless hours of
          experimentation, dedication, and a genuine love for baking. But we're
          more than just bakers; we're a community brought together by a shared
          love for all things delicious. As we knead, roll, and bake, we're not
          just making pastries – we're crafting memories. <br></br>
          From birthday celebrations marked by our custom cakes to lazy Sunday
          mornings made better with our artisanal bread, we're there for life's
          sweetest moments. Our journey is one of passion, flavor, and the joy
          that comes from spreading happiness, one delectable treat at a time.
        </p>
      </div>
    </div>
  )
}
