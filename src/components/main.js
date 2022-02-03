import React from 'react';
import Mid from './mid';
import Navbar from './navbar';
import Right from './right';
import { BsHash } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { MdOutlineListAlt } from 'react-icons/md';
import { CgProfile, CgMoreO } from 'react-icons/cg';
import { BiHomeCircle } from 'react-icons/bi';

import '../main.css'
function main() {

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossorigin="anonymous"
            />

            <Navbar />


            <div className="container">
                <div className="row" >
                    <div className='col-3 ' style={{ marginTop: "1%" }}  >

                        <div className='p-5  ' style={{ position: "fixed" }}
                        >
                            <h2 className='p-4' style={{ marginTop: "8%" }}><BiHomeCircle />  Home</h2>
                            <h2 className='p-4'><BsHash />  Explore</h2>
                            <h2 className='p-4'><AiOutlineBell /> Notifications</h2>
                            <h2 className='p-4'><MdOutlineLocalPostOffice /> Messages</h2>

                            <h2 className='p-4'><BsBookmark /> Bookmarks</h2>
                            <h2 className='p-4'><MdOutlineListAlt /> Lists</h2>
                            <h2 className='p-4'><CgProfile /> Profile</h2>
                            <h2 className='p-4'><CgMoreO /> More</h2>
                            <h3 className='tweetbutton'><span style={{ paddingLeft: "10%", paddingRight: "10%" }}>Tweet </span></h3>

                            <div className='row p-4' style={{ marginTop: "10%", border: "1px solid #d9d4d4", borderOpacity: "0.2", width: "140%" }}>
                                <div
                                    className='col-3'
                                    style={{ background: "white", padding: "2%", paddingLeft: "4%" }}>

                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={{ width: "50px", borderRadius: "50%" }}></img>
                                </div>
                                <div
                                    className='col-7 p-2'
                                    style={{ background: "white" }}>
                                    <b style={{ wordWrap: "break-word", fontSize: "14px" }}>Kullanıcı Adı </b><br />

                                    <span style={{ fontSize: "16px" }}>@uhudkacagi</span>

                                </div>
                                <div
                                    className='col-2 p-2'
                                    style={{ background: "white" }}>
                                    <p style={{ wordWrap: "break-word", fontSize: "14px" }}><b>...</b></p>

                                    <br />


                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='col-6'>
                        <Mid />
                    </div>
                    <div className='col-3 '>
                        <Right />
                    </div>
                </div>

            </div></>
    );
}

export default main;
