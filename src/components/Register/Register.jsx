import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory} from "react-router-dom";
import axios from "axios"
import './Register.css'
const Register=()=>{
     //const history=useHistory()
    const navigate=useNavigate()
    const [user,setUser]=useState({
        username:"",
        password:"",
        confirmpassword:""      
    })

    const handleChange=(e)=>{
           setUser({
            ...user,[e.target.name]:e.target.value
           })
    }

    const Register=()=>{
        const {username,password,confirmpassword}=user
        if(username && password && (password===confirmpassword)) {
            axios.post("http://localhost:9002/register",user)
            .then(res=>alert(res.data.message))
            navigate("/login")
        }else {
            alert("Invalid Details")
        }
       
    }
    return (
        <>
        <div className="maincontainer">
            <div className="inputcontainer">
                

                <h1>Register</h1>
                <section className="input">
                <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
                </section>
                <section className="input">
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                </section>
              <section className="input">
              <input type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleChange} placeholder="ConfirmPassword" />
              </section>
              <section className="input buttonsection">
                <button onClick={Register}>Register</button>
              </section>
              <section className="input buttonsection">
                <button onClick={()=>navigate("/login")}>Member login</button>
              </section>
               

            </div>

        </div>
        </>
    )
}

export default Register;