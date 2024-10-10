import React from "react";
import {useEffect, useState} from 'react';
import {Link , useParams , useNavigate} from 'react-router-dom';
import { ViewDetails } from "./ViewDetails";

//get all
function Company() {
    
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(res=>setData(res))
    },[]);
    

    var formattedData = data.map((com)=>{
        return <>
            <div className="card" style={{width: "18rem", display:'inline-block',
                margin:'40px',padding:'10px',border:'1px solid black',borderRadius:'10px',
                backgroundColor:'#dff6f7',boxShadow:'5px 5px 5px 5px grey'
            }} align='center'>
                <div className="card-body" style={{backgroundColor:'#f7dff6' , borderRadius:'10px'}} align='center' >
                    <img src={com.Company_image} style={{width:'100px',height:'100px',borderRadius:'20%'}} align='center'/>
                    <h5 className="card-title">{com.Company_Name}</h5>
                    <Link  to={'/ViewDetails'} className="btn btn-primary">ViewDetails</Link>
                </div>
            </div>
        </>
    })

    return<>
            {formattedData}
        </>
}

export default Company;