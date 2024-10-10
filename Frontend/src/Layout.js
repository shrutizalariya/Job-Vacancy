import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style = {{backgroundColor : "#dcf5f5" }}>
                    <img src="https://static.wixstatic.com/media/76bb99_f4491375efd346f18e29b62d129f67f8~mv2.png/v1/fill/w_259,h_259,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Careers360%20Final%20Logo.png"
                    style={{width:"250px", height:"100px" , backgroundColor : "#a8a8a8" , borderRadius : "50%" ,border : "5px solid #38748a"}}></img>
                    <div className="collapse navbar-collapse">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                    aria-label="Toggle navigation"></button>
                        <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"1100px"}}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="Home" style={{fontSize:"20px", color:"black"}}><b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="About" style={{fontSize:"20px", color:"black"}}><b>About</b></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="Job" style={{fontSize:"20px", color:"black"}}><b>Job</b></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="Company" style={{fontSize:"20px", color:"black"}}><b>Company</b></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="page">
                <Outlet/>
            </div>
        </>
    );
}

export default Layout;