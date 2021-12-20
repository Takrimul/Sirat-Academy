import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><h2>Sirat Academy</h2></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/forum">Competition Update</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Courses
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to='/course-details' class="dropdown-item" href="#">Muhammad ﷺ</Link></li>
                                <li><Link to='/course-details' class="dropdown-item" href="#">Abu Bakar As Siddik</Link></li>
                                <li><Link to='/course-details' class="dropdown-item" href="#">Umar Ibnul Khattab</Link></li>
                                <li><Link to='/course-details' class="dropdown-item" href="#">Uthman Ibn Affan</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Islamic Site</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='/blog' class="dropdown-item" href="http://response-to-anti-islam.com/">Response to anti Islam</Link></li>
                                    <li><Link to='/blog' class="dropdown-item" href="https://bibijaan.com/">Bibijan</Link></li>
                                    <li><Link to='/blog' class="dropdown-item" href="https://islamask.net/">Islam Ask(Bangladesh)</Link> </li>
                                    <li><Link to='/blog' class="dropdown-item" href="https://islamqa.info/en">Islam QA(Global)</Link> </li>
                                    <li><Link to='/blog' class="dropdown-item" href="https://www.alkawsar.com/bn/">Al Kawsar</Link> </li>
                                    <li><Link to='/blog' class="dropdown-item" href="#">Al Kalam</Link> </li>
                                    

                                 </ul>   
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/forum">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/login'>Login/Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
