import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { BrowserRouter,Switch,Route } from "react-router-dom";
import './Login.css'
const Login = () => {

    //  const history = useHistory()
    const navigate=useNavigate()

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const Login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
               alert(res.data.message)
               navigate("/")
            })
    }
    return (
        <>
            <div className="maincontainer">
                <div className="inputcontainer">

                    <h1>Login</h1>
                    <section className="input">
                        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
                    </section>
                    <section className="input">
                        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                    </section>
                    {/* <section className="input">
              <input type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleChange} placeholder="ConfirmPassword" />
              </section> */}
                    <section className="input buttonsection">
                        <button onClick={Login}>Login</button>
                    </section>
                    <section className="input buttonsection">
                        <button onClick={() => navigate("/register")}>Register</button>
                    </section>


                </div>

            </div>
        </>
    )
}

export default Login;