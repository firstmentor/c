import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
// import "./style.css";
import { Link, useNavigate } from 'react-router-dom'

function AddTender() {
    const navigate = useNavigate();

    const initialFormData = {
        name: '',
        description: '',
        start_time: '',
        end_time: '',
        buffer_time: ''
    };

    const [formData, setFormData] = useState(initialFormData);


    const submitForm = async (e) => {
        e.preventDefault();
        // Basic form validation

        try {
            const response = await axios.post("http://localhost:4000/api/tenderinsert", formData)
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

    const inputHandler = (e) => {
        //console.log(e.target.value)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); //append
        //console.log(user)
        // console.log(name)
        // console.log(value)
    }


    return (
        <>
            {/* <div className='addUser'>
                <Link to={"/"}>Back</Link>
                <h3>Add Tender</h3>
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
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div> */}

            <div className="p-4">
                <h2 className="mb-2 text-2xl font-bold">Create Tender</h2>
                <form
                    onSubmit={submitForm}
                    className="p-2 space-y-2 bg-white rounded-lg shadow-md flex flex-col border divide-x *:p-4"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={inputHandler}
                        placeholder="Tender Name"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={inputHandler}
                        placeholder="Tender Description"
                        required
                    />
                    <input
                        type="datetime-local"
                        name="startTime"
                        value={formData.start_time}
                        onChange={inputHandler}
                        placeholder="Start Time"
                        required
                    />
                    <input
                        type="datetime-local"
                        name="endTime"
                        value={formData.end_time}
                        onChange={inputHandler}
                        placeholder="End Time"
                        required
                    />
                    <input
                        type="number"
                        name="bufferTime"
                        value={formData.buffer_time}
                        onChange={inputHandler}
                        placeholder="Buffer Time (minutes)"
                    />
                    <button type="submit" className="btn btn-primary">
                        Create Tender
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddTender