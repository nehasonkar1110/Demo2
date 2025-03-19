// import React, { useState } from "react";
// // import { Button } from "antd";
// import { Link } from 'react-router-dom';
// // import { Button, Typography, setFontSize, Space,Input } from 'antd';
// import { Button, Typography, setFontSize, Space, Input } from "antd";
// import './FontSizeControl.css'

// const { Text } = Typography;
// const { Search } = Input;

// const FontSizeControl = ({ increaseFontSize, decreaseFontSize, resetFontSize }) => {
//   const [searchText, setSearchText] = useState("");

//   const onSearch = (value) => {
//     console.log("Search Value: ", value);
//     setSearchText(value);
//   };
//   return (

//     <div className="header">

//       <ul type='none'>
//         <li className="number"></li>
//         <li>📞1912 |1800-233-1920|<Link to="/feedback">Feedback </Link></li>
//         </ul>
//         <div className="main">
//           <Space direction="vertical" size="middle">
//             <Search
//               placeholder="Enter your search"
//               enterButton="Search"
//               size="large"
//               onSearch={onSearch}
//               // style={{ width: ' 400px' }}
//               className="search"
//             />
//           </Space>
//         </div>
//         <select className="select">
//           <option>English</option>
//           <option>Hindi</option>
//         </select>
//         <div className="main1">
//           <Button onClick={increaseFontSize} >
//             +A
//           </Button>
//           <Button onClick={decreaseFontSize} >
//             -A
//           </Button>
//           <Button onClick={resetFontSize}>A</Button>
//         </div>



//     </div>

//   );
// };

// export default FontSizeControl;

// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import { Button, Space, Input } from "antd";
// import './FontSizeControl.css';

// const { Search } = Input;

// const FontSizeControl = ({ increaseFontSize, decreaseFontSize, resetFontSize }) => {
//   const [searchText, setSearchText] = useState("");

//   const onSearch = (value) => {
//     console.log("Search Value: ", value);
//     setSearchText(value);  // Store the search text if necessary
//   };

//   return (
//     <div className="header">
//       <ul style={{ listStyleType: 'none' }}>
//         <li className="number"></li>
//         <li>📞1912 |1800-233-1920| <Link to="/feedback">Feedback</Link></li>
//       </ul>

//       <div className="main">
//         <Space direction="vertical" size="middle">
//           <Search
//             placeholder="Enter your search"
//             enterButton="Search"
//             size="large"
//             onSearch={onSearch}
//             className="search"
//           />
//         </Space>
//       </div>

//       <select className="select">
//         <option>English</option>
//         <option>Hindi</option>
//       </select>

//       <div className="main1">
//         <Button onClick={increaseFontSize}>+A</Button>
//         <Button onClick={decreaseFontSize}>-A</Button>
//         <Button onClick={resetFontSize}>A</Button>
//       </div>
//     </div>
//   );
// };

// export default FontSizeControl;

// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import './FontSizeControl.css';
// import { Button, Space, Input,Tooltip } from "antd";
// import { SearchOutlined } from '@ant-design/icons';

// function FontSizeControl(){

  

//   return (
//     <div className='header'>
//       <ul type='none'>
//         <li>📞1912|1800-233-1920 | <Link to="/feedback">Feedback</Link></li>
//         <li></li>
//       </ul>
//       <div className="main">
//       <Tooltip title="search">
//       </Tooltip>
//       <Button type="dashed" icon={<SearchOutlined />}>
//         Search
//       </Button>
//       </div>
//       <select className="select">
//          <option>English</option>
//          <option>Hindi</option>
//        </select>
//     </div>
//   )
// }

// export default FontSizeControl

// FontSizeControl.js
import React from "react";
import { Link } from "react-router-dom";
import './FontSizeControl.css';
import { Button, Space, Input,Tooltip } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const FontSizeControl = ({ increaseFontSize, decreaseFontSize, resetFontSize }) => {
  return (
    <div className="header">
      <ul style={{ listStyleType: 'none' }}>
        {/* <li className="number"></li> */}
        <li>📞1912 | 1800-233-1920 | <Link to="/feedback">Feedback</Link></li>
      </ul>
      <div className="main">
     <Tooltip title="search">
     </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      </div>
      <select className="select">
         <option>English</option>
         <option>Hindi</option>
       </select>

      <div className="font-size-controls">
        <Space direction="horizontal" size="middle">
          <Button onClick={increaseFontSize}>+A</Button>
          <Button onClick={decreaseFontSize}>-A</Button>
          <Button onClick={resetFontSize}>A</Button>
        </Space>
      </div>
    </div>
  );
};

export default FontSizeControl;

