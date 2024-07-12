import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./style.css";
import { Link } from 'react-router-dom'

function DisplayTender() {
    const [tenders, setTenders] = useState([]);


    const fetchData = async () => {
        const response = await axios.get("http://localhost:4000/api/getTenders");
        //console.log(response)
        setTenders(response.data);
    }

    const deleteTender = async (userId) => {
        await axios.delete(`http://localhost:4000/api/deleteTender/${userId}`)
            .then((respones) => {
                setTenders((prevUser) => prevUser.filter((user) => user._id !== userId))
                toast.success(respones.data.msg, { position: 'top-right' })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {

        fetchData();

    }, [])

       const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
      };



    return (
        <>

            <div className='userTable'>
                <Link to={"/add"} className='addButton'>Add Tender</Link>
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start_time</th>
                            <th>End_time</th>
                            <th>buffer_time</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tenders.map((user, index) => {
                                return (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.description}</td>
                                        <td>{formatDate(user.start_time)}</td>
                                        <td>{formatDate(user.end_time)}</td>
                                        <td>{user.buffer_time}</td>
                                        <td className='actionButtons'>
                                            <button onClick={() => deleteTender(user._id)}><i className="fa-solid fa-trash"></i></button>
                                            <Link to={`/edit/` + user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                            
                                            <Link to={`/view/` + user._id}><i className="fa-solid fa-eye"></i></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DisplayTender