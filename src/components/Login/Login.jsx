import React from 'react';
import Navbar from '../Navbar/Navbar'
import FacebookSign from './FacebookSign';
import GoogleSignIn from './GoogleSignIn';
import background from '../../data/images/loginback.jpg'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <>
            <Navbar />
            <div style={{backgroundImage: `url(${background})`}}>
            <div class="container login-body">
                <h2>Welcome </h2>
                <p>Welcome to one of the finest online institution for authentic knowledge of life value and fundamental
                    concepts of Islam. Register to introduce yourself with the ocean of knowledge and endless possibilities.</p>
            </div>
            <div class="container mt-5">
                <form class="form-horizontal">
                    <div class="form-group"> <label class="control-label col-sm-2" for="email">User Name</label>
                        <div class="col-sm-10"> <input type="email" class="form-control" id="email" placeholder="Enter email" /> </div>
                    </div>
                    <div class="form-group"> <label class="control-label col-sm-2" for="pwd">Password</label>
                        <div class="col-sm-10"> <input type="password" class="form-control" id="pwd" placeholder="Enter password" /> </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox"> <label><input type="checkbox" /> Remember me</label> </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10"> <button type="submit" class="btn btn-primary">Log in</button> </div>
                    </div>
                    <div className="forgotpassword"><a href="#">Forgot Password?</a><br/></div>

                    <div className="signup">Don't have an account?<Link to='/registration'> Register Now</Link></div>
                </form>
            </div>

            <div className='container mt-2 p-3'>
                <GoogleSignIn/> <br />
                <FacebookSign/>
            </div>
            
            </div>

        </>
    )
}

export default Login
