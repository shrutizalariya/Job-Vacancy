import React from "react";
import { Link } from "react-router-dom";

function Img() {

    return ( <>
        <Link className="btn" to="/job" style={{ borderRadius: "50px", width: "300px", height: "30px" , position:"absolute" , marginTop: "10px" , marginLeft: "300px"  , backgroundColor: "#FF7F30" , color: "white" , alignContent:"center"}}><b>Find Your Dream Job Now</b></Link>
          <div className="row">
                <div className="col-8">
                    <img src="https://media.licdn.com/dms/image/v2/D4D12AQE4hR28aAhx2Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677648857816?e=2147483647&v=beta&t=1qUNjwY2QSPG9HHqMs7hn35nQaT7QpflZSNz49caOdA"
                    style={{height:"100%" , border : "2px solid #38748a" }}></img>
                </div>
                <div className="col-4">
                    <img src="https://media.licdn.com/dms/image/v2/C5612AQFjL-PtsVvNXA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520123455268?e=2147483647&v=beta&t=rUsjUBAKPWnK29Oi1eIU7hCNlkDtCAhQl9lORHQwxyE"
                    style={{height:"600px", width:"480px" , border : "2px solid #38748a" }}></img>
                </div>
            </div>
        </>
      );
    }

export default Img;