import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./style.css";
import { Link, useNavigate ,useParams} from 'react-router-dom'

function UpdateTender() {

    const navigate = useNavigate();
    const {id} = useParams();

    const initialFormData = {
        name: '',
        description: '',
        start_time: '',
        end_time: '',
        buffer_time: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const inputHandler = (e) => {
       
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); //append
        
    }


    useEffect(()=>{
        axios.get(`http://localhost:4000/api/ViewTender/${id}`)
        .then((response)=>{
            setFormData(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
     },[id])
     
    const submitForm = async (e) => {
        e.preventDefault();
        // Basic form validation

        try {
            const response = await axios.post(`http://localhost:4000/api/UpdateTender/${id}`, formData)
            if (response.status === 200) {
                toast.success(response.data.message, { position: "top-right" })
                setFormData(initialFormData); // Reset the form fields
                navigate('/')
            } else {
                console.error('Failed to insert data');
            }

        } catch (error) {
            console.error('Error inserting data:', error);

        }


    }
 

    
  return (
    <div className='addUser'>
                <Link to={"/"}>Back</Link>
                <h3>Update Tender</h3>
                <form className='addUserForm' onSubmit={submitForm}>
                    <div className="inputGroup">
                        <label htmlFor="fname">Name</label>
                        <input type="text" value={formData.name} onChange={inputHandler} name="name" autoComplete='off' placeholder='First name' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="lname">Description</label>
                        <input type="text" value={formData.description} onChange={inputHandler} name="description" autoComplete='off' placeholder='Description' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="email">Start Time</label>
                        <input type="date" value={formData.start_time} onChange={inputHandler} name="start_time" autoComplete='off' placeholder='start_time' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">End Time</label>
                        <input type="date" value={formData.end_time} onChange={inputHandler} name="end_time" autoComplete='off' placeholder='end_time' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">Buffer Time</label>
                        <input type="number" value={formData.buffer_time} onChange={inputHandler} name="buffer_time" autoComplete='off' placeholder='buffer_time' />
                    </div>

                    <div className="inputGroup">
                        <button type="submit">UPDATE USER</button>
                    </div>
                </form>
            </div>
  )
}

export default UpdateTender