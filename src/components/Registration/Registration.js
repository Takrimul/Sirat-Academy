import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Registration.css'

const Registration = () => {
    return (
        <div>
            <Navbar/>
            <form action="action_page.php">
                <div class="container">
                    <h1 >Registration Form</h1>
                    {/* <h3 style="text-align: center;color: rgb(26, 106, 172);">Please fill in this form to create an account.</h3> */}
                    <hr />
                    <label for="email"><b>Username</b></label>
                    <input type="text" placeholder="Enter Name" name="email" id="email" required />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    <hr />

                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" class="registerbtn">Register</button>
                </div>

                <div class="container signin">
                    <p>Already have an account? <Link to='/login'>Log in</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Registration
