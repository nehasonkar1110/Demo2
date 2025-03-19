import React from 'react'
import './Header1.css'
import image1 from './exam form.png'
import image2 from './admit.png'
import image3 from './answer ley.png'
import image4 from './result.png'
import { Link } from 'react-router-dom'

function Apply() {
    return (
        <div className='cardholder'>
            <div class="card">
                <div class="first-content">
                 <Link to='/exam form'><span>Exam Form</span></Link> 
                    <img src={image1}></img>
                </div>
                <div class="second-content">
                <Link to='/exam form'><span>Exam Form</span></Link> 
                <img src={image1}></img>

                </div>


            </div>
            <div class="card">
                <div class="first-content">
                    <Link to='/admit card'><span>Admit Card</span></Link>
                    <img src={image2}></img>
                </div>
                <div class="second-content">
                <Link to='/admit card'><span>Admit Card</span></Link>
                <img src={image2}></img>

                </div>


            </div>
            <div class="card">
                <div class="first-content">
                    <Link to='/answer key'><span>Answer Key</span></Link>
                    <img src={image3}></img>
                </div>
                <div class="second-content">
                <Link to='/answer key'><span>Answer Key</span></Link>
                <img src={image3}></img>

                </div>


            </div>
            <div class="card">
                <div class="first-content">
                  <Link to='/result'><span>Result</span></Link> 
                    <img src={image4}></img>
                </div>
                <div class="second-content">
                <Link to='/result'><span>Result</span></Link> 
                <img src={image4}></img>

                </div>


            </div>
        </div>
    )
}

export default Apply