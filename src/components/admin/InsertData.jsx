import React, { useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'
import "./style.css";


function InsertData() {
    const tender = {
        name: '',
        description: '',
        start_time: '',
        end_time: '',
        buffer_time: ''
    }

    const [data, setData] = useState(tender)

    const inputHandler = (e) => {
        //console.log(e.target.value)
        const { name, value } = e.target;
        setData({ ...data, [name]: value });


    }
    const navigate =useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        //console.log(data)
        try {
            const response = await axios.post("http://localhost:4000/api/tenderinsert", data)
            if (response.status === 200) {

                toast.success(response.data.message, { position: "top-right" })
                setData(tender); // Reset the form fields
                navigate('/')


            } else {
                console.error('Failed to insert data');
            }

        } catch (error) {
            console.error('Error inserting data:', error);

        }


    }
    return (
        <>
            <div className='addUser'>

                <h3>Add Tender</h3>
                <form className='addUserForm' onSubmit={submitForm}>

                    <div className="inputGroup">
                        <label htmlFor="fname">Name</label>
                        <input type="text" value={data.name} onChange={inputHandler} name="name" autoComplete='off' placeholder='First name' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="lname">Description</label>
                        <input type="text" onChange={inputHandler} name="description" autoComplete='off' placeholder='Description' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="email">Start Time</label>
                        <input type="date" onChange={inputHandler} name="start_time" autoComplete='off' placeholder='start_time' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">End Time</label>
                        <input type="date" onChange={inputHandler} name="end_time" autoComplete='off' placeholder='end_time' />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">Buffer Time</label>
                        <input type="number" onChange={inputHandler} name="buffer_time" autoComplete='off' placeholder='buffer_time' />
                    </div>

                    <div className="inputGroup">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default InsertData