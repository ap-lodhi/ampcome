import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (name == ""  || password == ""){
            alert("please fill all the detail")
        }
     navigate("/dashboard")

    }
    return (
        <div id='container'>

            <div className='login-left'>
                <div className='left-content'>
                    <h1 className='wlc'>Wlecome to  Ampcome</h1>
                    <p className='para'>Get ahead of the curve. Join the next generation of health heroes.</p>

                    <img src="images/Frame.jpg" alt="logo" />
                </div>
            </div>

            <div className='login-right'>
                <div>
                    <h1>sign-in your account</h1>
                    <form action="#">
                        <input type="text" placeholder='USERNAME'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <br />
                        <br />
                        <input type="text" placeholder='PASSWORD' value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />


                        <br />
                        <br />
                        <select placeholder='select unit Name'>

                            <option value="prk">Select unit Name</option>
                            <option value="prk">prk Hospital</option>

                            <option value="rkp">prk Hospital</option>
                            <option value="krp">prk Hospital</option>
                        </select>
                        <br />
                        <br />
                        <Link to="/dashboard">

                        <button className='btn' onClick={handleLogin}>Sign in</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;