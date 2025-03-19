import React from 'react'
import image1 from './about cs.jpg'
import img1 from './cspdcl1.jpg'

function About() {
  return (
    <div className='about'>
        <div className='about_para'>
        <h2>About Us</h2>
        <div className='img'>
            <img src={image1 } ></img>
            <h3>Chhattisgarh State Power Distribution Company Limited (CSPDCL) is a government-owned electricity distribution company responsible for the distribution and supply of electrical power across the state of Chhattisgarh, India. <br/>It was established to manage the distribution of electricity in the state after <br/> the unbundling of the Chhattisgarh State Electricity Board (CSEB) in 2008.</h3>
            </div>
           
            <h2>Mission</h2>
            <div className='img1'>
            <img src={img1}></img>
            <h3>The mission of CSPDCL is to provide safe, reliable, affordable, and sustainable electricity while fostering growth and development in the state. The company is committed to delivering high-quality service to its customers while focusing on innovation and technological advancements in the power distribution sector.</h3>
        </div>
        </div>
    </div>
  )
}
export default About