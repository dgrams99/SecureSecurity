import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-12 text-center first-col">
    <div className="border-bottom border-warning">
    <h1 className="head1">Secure Security</h1>
    <p>Where We Keep You Safe</p>
    </div>

   <Link to="/login-signup" className={window.location.pathname === "/login-signup"} >
   <button className="btn btn-warning first-btn"> 
   Login/SignUp
   </button> 
   </Link>
    </div>
    <div className="col-12 text-left sec-col">
    <div className="head2">
    <h1>What is Secure Security? </h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptas, quos soluta unde nisi, aliquam accusantium reiciendis commodi suscipit sunt laudantium hic? Enim praesentium sint nam deserunt libero maiores laboriosam!</p>
    </div>
   </div>
   <div className="col-12 text-right third-col">
<div className="head3">
   <h1>Keep your money safe.</h1>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab odit ut ipsam magni veritatis tenetur odio eaque earum fugiat dolores nam culpa dolorum, nisi, officiis ea impedit mollitia deleniti quas?</p>
   </div>
   </div>
    </div>
    </div>
    


  

  
 
  
  );
}

export default Home;

