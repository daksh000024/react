import React from "react";
import ReactDOM from "react-dom/client";

const Navbar = ()=>{
    return(
    <div className="">
        <h1>LOGO</h1>
        <ul>
            <li>MEN</li>
            <li>WOMAN</li>
            <li>KIDS</li>
        </ul>
    </div>
    );
};

const App = ()=>{
   return(
     <Navbar/>
   );

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)