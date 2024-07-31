import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("user"); 


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:9090/sign-up", {
                name,
                email,
                password,
                contact,
                role
            });

            console.log(response.data, "userRegister");

            if (response.data.message.includes("SignUp Successful")) {
                window.location.href = "login";
            } else {
                alert("Invalid Data");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Something went wrong");
        }
    };

    const navigateto =useNavigate()
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3 style={{ color: "black" }}>Sign Up</h3>
                    <br />

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Contact No."
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <select className="form-control" onChange={(e) => setRole(e.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="d-grid" style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                    <h6>Already have an account <span style={{color:"blue" , cursor:"pointer"}}  onClick={() => navigateto("/login")}>Login</span></h6>
                        <button type="submit" className="btn btn-danger" style={{ width: "180px" }}>
                            SIGN UP
                        </button>
               
                    </div>
                   
                </form>
            </div>
        </div>
    );
}