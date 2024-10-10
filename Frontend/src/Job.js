import React from "react";

function Job() {
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item list-group-item-primary" style={{width: "700px" , marginBottom:"70px" , marginTop:"50px" , textAlign: "center" , fontSize:"20px"}}>DataBase Designer</li>
                <li className="list-group-item list-group-item-secondary" style={{width: "700px",marginLeft:"250px",marginBottom:"70px" , textAlign: "center" , fontSize:"20px"}}>App Developer</li>
                <li className="list-group-item list-group-item-success" style={{width: "700px",marginLeft:"450px" , marginBottom:"70px" , textAlign: "center" , fontSize:"20px"}}>Full Stack Developer</li>
                <li className="list-group-item list-group-item-danger" style={{width: "700px",marginLeft:"650px" , marginBottom:"70px" , textAlign: "center" , fontSize:"20px"}}>Backend Developer</li>
                <li className="list-group-item list-group-item-warning" style={{width: "700px",marginLeft:"850px" , textAlign: "center" , fontSize:"20px"}}>Frontend Developer</li>
            </ul>
        </>
    )
}

export default Job;


