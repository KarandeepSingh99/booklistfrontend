import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const View = () => {
    const [getbookdata, setBookData] = useState([])
    console.log(getbookdata)
  //  const navigate = useNavigate()

    const getData = async (e) => {
        const res = await fetch("http://localhost:9002/view", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()
        console.log(data)
        if (!data) {
            alert("error")
        } else {
            setBookData(data)
            console.log("data shown")
        }

    }

    useEffect(()=>{
        getData();
    },[])

    return (

        <>

           

            <table>
            </table>
            <button>Update</button>
            <button>Delete</button>

        </>
    )
}

export default View