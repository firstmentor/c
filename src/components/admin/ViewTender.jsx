import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./style.css";
import { Link, useNavigate, useParams } from 'react-router-dom';

function ViewTender() {

const {id} = useParams();
  const [tender ,setTender] =useState([])

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/ViewTender/${id}`)
    .then((response)=>{
      setTender(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])

 console.log(tender)


  return (
    <>
      <div className='userTable'>
       
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Description</th>
              <th>Start_time</th>
              <th>End_time</th>
              <th>buffer_time</th>
             

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tender.name}</td>
              <td>{tender.description}</td>
              <td>{tender.start_time}</td>
              <td>{tender.end_time}</td>
              <td>{tender.buffer_time}</td>
              
            </tr>


          </tbody>
        </table>
      </div>

     



    </>
  )
}

export default ViewTender