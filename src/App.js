// // // import React from 'react'
// // // import './App.css';
// // // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // // import Header from './Header';


// // // function App() {
// // //   return (
// // //    <BrowserRouter>
// // //    <FontSizeProvider1> 
// // //     <FontSize></FontSize>
// // //    <Routes>
// // //     <Route path='/'element={<Header/>}></Route>
// // //    </Routes>
// // //    </FontSizeProvider1>
// // //    </BrowserRouter>
// // //   );
// // // }

// // //  export default App;



// // import React, { useState } from "react";
// // import { Layout } from "antd";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import FontSizeControl from "./FontSizeControl";
// // import Home from "./Home";
// // import Header1 from './Header1';
// // import './App.css';


// // const { Header, Content } = Layout;

// // const App = () => {
// //   const [fontSize, setFontSize] = useState(16);

// //   const increaseFontSize = () => setFontSize((prev) => prev + 2);
// //   const decreaseFontSize = () => setFontSize((prev) => (prev > 8 ? prev - 2 : prev));
// //   const resetFontSize = () => setFontSize(16);

// //   return (
// //     <Router>
// //       <div style={{ fontSize: `${fontSize}px`, transition: "font-size 0.3s" }}>
// //         {/* <Layout> */}
// //           <Header
// //             style={{
// //               background: "#001529",
// //               padding: 0,
// //               display: "flex",
// //               justifyContent: "space-between",
// //               alignItems: "center",
// //             }}
// //           >
// //             <div style={{ color: "white", fontSize: "18px", padding: "0 20px" }}>
// //               Website
// //             </div>
// //             <div style={{ marginRight: "20px" }}>
// //               <FontSizeControl
// //                 increaseFontSize={increaseFontSize}
// //                 decreaseFontSize={decreaseFontSize}
// //                 resetFontSize={resetFontSize}
// //               />
// //             </div>
// //           </Header>
// //           <Content style={{ padding: "20px" }}>
// //             <Routes>
// //               <Route path="/" element={<Home />} />
// //               <Route path="/header1" element={<Header1 />} />
// //             </Routes>
// //           </Content>
// //         {/* </Layout> */}
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import React, { useState } from "react";
// import { Layout } from "antd"; 
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import FontSizeControl from "./FontSizeControl";
// import Home from "./Home";
// import Header1 from './Header1';
// import './App.css';
// import NotificationComponent from "./NotificationComponent";

// const { Header, Content } = Layout;

// const App = () => {
//   const [fontSize, setFontSize] = useState(16);

//   const increaseFontSize = () => setFontSize((prev) => prev + 2);
//   const decreaseFontSize = () => setFontSize((prev) => (prev > 8 ? prev - 2 : prev));
//   const resetFontSize = () => setFontSize(16);

//   return (
//     <Router>
      
//       <div style={{ fontSize: `${fontSize}px`, transition: "font-size 0.3s" }}>
//         <Layout>
        
//           <Header
//             // style={{
//             //   background: "#001529",
//             //   padding: 0,
//             //   display: "flex",
//             //   justifyContent: "space-between",
//             //   alignItems: "center",
//             // }}
//           >
//             {/* <div style={{ color: "white", fontSize: "18px", padding: "0 20px" }}>
//               Website
//             </div> */}
//             <div style={{ marginRight: "20px" }}>
//            <FontSizeControl
//                 increaseFontSize={increaseFontSize}
//                 decreaseFontSize={decreaseFontSize}
//                 resetFontSize={resetFontSize}
//               />
//             </div>
//           </Header>
//           <Header1></Header1>
//            <NotificationComponent></NotificationComponent> 
//           <Content style={{ padding: "20px" }}>
//             <Routes>
//               <Route path="/" element={<Home />} />
             
//               {/* <Route path="/Header1" element={<Header1 />} /> */}
//             </Routes>
//           </Content>
//         </Layout>
//       </div>
//     </Router>
//   );
// };

// export default App;



// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import FontSizeControl from "./FontSizeControl"; 
import './App.css'; 
import Home from "./Home";
import Header1 from './Header1';
import NotificationComponent from './NotificationComponent';
import Registration from './Registration';
import Login from "./Login";


const App = () => {
  const [fontSize, setFontSize] = useState(16);
  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize - 2);

  
  const resetFontSize = () => setFontSize(16);

  return (
    <Router>
      <div style={{ fontSize: `${fontSize}px` }} className="App">
     
        <FontSizeControl 
          increaseFontSize={increaseFontSize} 
          decreaseFontSize={decreaseFontSize} 
          resetFontSize={resetFontSize} 
        />
     <Header1></Header1>
     <NotificationComponent></NotificationComponent>
     
     {/* <Login></Login> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />


          {/* <Route path="home1"element={<Home1/>}></Route> */}
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
