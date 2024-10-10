import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [formData, setFormData] = useState({
        fullname: '',
        company: '',
        job: '',
        mobile: '',
        email: '',
        age: '',
        gender: '',
        city: ''
    });
    const [dataList, setDataList] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { mobile, email } = formData;
        if (mobile.length !== 10) {
            alert("Mobile number must be 10 digits.");
            return false;
        }
        if (!email.includes('@')) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (editingIndex !== null) {
                const updatedList = [...dataList];
                updatedList[editingIndex] = formData;
                setDataList(updatedList);
                setEditingIndex(null);
            } else {
                setDataList([...dataList, formData]);
            }
            resetForm();
        }
    };

    const resetForm = () => {
        setFormData({
            fullname: '',
            company: '',
            job: '',
            mobile: '',
            email: '',
            age: '',
            gender: '',
            city: ''
        });
    };

    const handleEdit = (index) => {
        setFormData(dataList[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedList = dataList.filter((_, i) => i !== index);
        setDataList(updatedList);
        if (editingIndex === index) resetForm();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="styled-form">
                <h2>{editingIndex !== null ? 'Edit Entry' : 'Register'}</h2>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Enter your full name" value={formData.fullname} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <select id="company" name="company" className="form-control" value={formData.company} onChange={handleChange} required>
                        <option value="" disabled>Select your company</option>
                        <option value="Google">Google</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="Infosys">Infosys</option>
                        <option value="TCS">TCS</option>
                        <option value="Zomato">Zomato</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Mem0">Mem0</option>
                        <option value="Coincent">Coincent</option>
                        <option value="TatvaSoft">TatvaSoft</option>
                        <option value="Miracle">Miracle</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input type="text" id="job" name="job" className="form-control" placeholder="Enter your job title" value={formData.job} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile No.</label>
                    <input type="tel" id="mobile" name="mobile" className="form-control" placeholder="Enter your mobile number" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" name="age" className="form-control" placeholder="Enter your age" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div>
                        <label>
                            <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required /> Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} required /> Other
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="city">Current Living City</label>
                    <input type="text" id="city" name="city" className="form-control" placeholder="Enter your current living city" value={formData.city} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">{editingIndex !== null ? 'Update' : 'Submit'}</button>
            </form>

            <h2 className="mt-4">Registered Entries</h2>
            <ul className="entry-list">
                {dataList.map((data, index) => (
                    <li key={index} className="entry-item">
                        {data.fullname} - {data.company}
                        <div className="button-group">
                            <button className="btn btn-edit" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="btn btn-delete" onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Form;

