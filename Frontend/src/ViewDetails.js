// // import React, { useEffect, useState } from "react";
// // import { useParams , Link } from "react-router-dom";
// // import './ViewDetails.css'

// // function ViewDetails() {
// //     const [data, setData] = useState({});
// //     const { id } = useParams(); 

// //     useEffect(() => {
// //         // const apiUrl = `http://localhost:3050/jobs`;
// //         fetch(`http://localhost:3050/jobs`)
// //             .then(res => {
// //                 if (!res.ok) {
// //                     throw new Error('Network response was not ok');
// //                 }
// //                 return res.json();
// //             })
// //             .then(res => setData(res))
// //             .catch(error => console.error('Fetch error:', error));
// //     });

// //     return ( <>
// //         <div className="view-details-container">
// //         <div className="view-details-card">
// //             <h2 className="view-details-title">Job Details</h2>
// //             <p><strong>ID:</strong> {data.Id}</p>
// //             <p><strong>Name:</strong> {data.Company_Name}</p>
// //             <p className="image-container">
// //                 <strong>Company Image:</strong>
// //                 <img src={data.Company_image} alt={data.Company_image} className="company-image" />
// //             </p>
// //             <p><strong>Package:</strong> {data.Package}</p>
// //             <p><strong>Eligibility:</strong> {data.Eligibility}</p>
// //             <p><strong>Job For:</strong> {data.Job_for}</p>
// //             <p><strong>Company Details:</strong> {data.Company_Details}</p>
// //         </div>
// //     </div>
        
// //     <div className="button-group">
// //         <Link to="/back" className="btn btn-back">Back</Link>
// //         <Link to="/register" className="btn btn-register">Register</Link>
// //     </div>
  
// //     </>
// //     );
// // }

// // export default ViewDetails;

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import './ViewDetails.css';

// function ViewDetails() {
//     const [data, setData] = useState({}); // Start with null to handle loading state
//     const { id } = useParams(); 

//     useEffect(() => {
//         const apiUrl = `http://localhost:3050/jobs/${id}`; // Fetch specific job by ID
//         fetch(apiUrl,{method: 'GET'})
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//         .then(res => {
//             console.log("Fetched data:", res); // Log the fetched data
//             setData(res);
//         })
        
//     }, [id]); // Add id as a dependency

//     if (!data || Object.keys(data).length === 0) {
//         return <div>Loading...</div>; // Show loading message or a better fallback
//     }
    

//     return (
//         <>
//             <div className="view-details-container">
//                 <div className="view-details-card">
//                     <h2 className="view-details-title">Job Details</h2>
//                     <p><strong>ID:</strong> {data.Id}</p>
//                     <p><strong>Name:</strong> {data.Company_Name || 'N/A'}</p>
//                     <p className="image-container">
//                         <strong>Company Image:</strong>
//                         <img src={data.Company_image || ''} alt={data.Company_image || 'Company Image'} className="company-image" />
//                     </p>
//                     <p><strong>Package:</strong> {data.Package || 'N/A'}</p>
//                     <p><strong>Eligibility:</strong> {data.Eligibility || 'N/A'}</p>
//                     <p><strong>Job For:</strong> {data.Job_for || 'N/A'}</p>
//                     <p><strong>Company Details:</strong> {data.Company_Details || 'N/A'}</p>
//                 </div>
//             </div>
            
//             <div className="button-group">
//                 <Link to="/back" className="btn btn-back">Back</Link>
//                 <Link to="/register" className="btn btn-register">Register</Link>
//             </div>
//         </>
//     );
// }

// export default ViewDetails;


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './ViewDetails.css';

function ViewDetails() {
    const [data, setData] = useState({}); // Start with null for loading state
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost:5000/jobs`; // Fetch specific job by ID
        console.log("Fetching job with ID:", id); // Log the ID

        fetch(apiUrl)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(res => {
                console.log("Fetched data:", res); // Log the fetched data
                setData(res);
            })
    }, [id]);

    if (!data) {
        return <div>Loading...</div>; // Show loading message while fetching
    }

    return (
        <>
            <div className="view-details-container">
                <div className="view-details-card">
                    <h2 className="view-details-title">Job Details</h2>
                    <p> {data.Company_Name || 'N/A'}</p>
                    <p className="image-container">
                        <img src={data.Company_image || ''} alt={data.Company_image || 'Company Image'} className="company-image" />
                    </p>
                    <p><strong>Package:</strong> {data.Package || 'N/A'}</p>
                    <p><strong>Eligibility:</strong> {data.Eligibility || 'N/A'}</p>
                    <p><strong>Job For:</strong> {data.Job_for || 'N/A'}</p>
                    <p><strong>Company Details:</strong> {data.Company_Details || 'N/A'}</p>
                </div>
            </div>
            
            <div className="button-group">
                <Link to="/back" className="btn btn-back">Back</Link>
                <Link to="/register" className="btn btn-register">Register</Link>
            </div>
        </>
    );
}

export default ViewDetails;


