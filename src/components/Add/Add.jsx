import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Add.css"

const Add = () => {
    const navigate=useNavigate()
    const [details,setDetails]=useState({
        title:"",
        isbn:"",
        author:"",
        described:"" ,
        publisheddate:"",
        publisher:""

       })
//console.log(details)
    const handleChange=(e)=>{
        setDetails({
            ...details,[e.target.name]:e.target.value
        })

    }

    const AddBook=()=>{
        axios.post("http://localhost:9002/add", details)
            .then(res => {
               alert(res.data.message)
               navigate("/view")
            })
    }
    return (
        <>
            <div className='container'>
                <h1>Add bOOK</h1>
                <h3>Create new book</h3>
                <section className="input">
                    <input type="text" name="title"  onChange={handleChange} placeholder="Title" />
                </section>
                <section className="input">
                    <input type="text" name="isbn" onChange={handleChange} placeholder="ISBN" />
                </section>
                <section className="input">
                    <input type="text" name="author" onChange={handleChange} placeholder="Author" />
                </section>
                <section className="input">
                    <input type="text" name="decribed"  onChange={handleChange} placeholder="Described This Book" />
                </section>
                <section className="input">
                    <input type="date" name="publisheddate"  onChange={handleChange} placeholder="PublishedDate" />
                </section>
                <section className="input">
                    <input type="text" name="publisher"  onChange={handleChange} placeholder="Publisher Of This Book" />
                </section>
                <section className="input buttonsection">
                        <button onClick={AddBook}>Submit</button>
                    </section>
            </div>

        </>
    )
}

export default Add