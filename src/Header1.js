// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { SearchOutlined } from '@ant-design/icons';
// import { Button, Typography, setFontSize } from 'antd';
// import './Header.css'

// const { Text } = Typography;

// function Header1() {
//   return (
//     <div className='head'>
//       <ul type='none'>
//         <li><Link to="/feedback">Feedback |</Link></li>
      
//         {/* <Flex gap="small" vertical>
//           <Flex wrap gap="small">
//             <Button icon={<SearchOutlined />}>Search</Button>
//           </Flex>
//         </Flex> */}
//         <select>
//           <option>English</option>
//           <option>Hindi</option>
//         </select>
       
//       </ul>
//     </div>
//   )
// }

// export default Header1

import React from 'react'
import image from './logo2.jpg'
import "./Header1.css"
import img1 from './home.jpg'
import img2 from './about.png'
import img3 from './notice11.png'
import img4 from './login.jpg'
import { Link } from 'react-router-dom'


function Header1() {
  return (
    <div className='parent'>
        <div className='main4'>
        <img src={image}></img>
        </div>
        <h2>Chhattisgarh State Power Distribution Company Limited</h2>
        
        <div className='main5'>
        {/* <img src={img1}></img> */}
        {/* <img src={img2}></img> */}
        {/* <img src={img3}></img> */}
        {/* <img src={img4}></img> */}
        <ul type='none'>
           <Link to="/"> <img src={img1}></img><li><h4>Home</h4></li></Link>
            <Link to="/about"><img src={img2}></img><li><h4>About</h4></li></Link>
            <Link to="/notice"><img src={img3}></img><li><h4>Notice</h4></li></Link>
            <Link to="/login"><img src={img4}></img><li><h4>Login</h4></li></Link>
          </ul>
        
        </div>       
    </div>
    
  )
}

export default Header1






