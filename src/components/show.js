import React, { useState, useEffect } from 'react';
import { BsChatText } from 'react-icons/bs';
import { FaRetweet } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';

import '../main.css'


function Show({ data }) {
    const arr = data?.map(send => send.name);
    const rearr = arr.reverse();

    return rearr.map(tw =>

        <div >

            <div className='row p-4' style={{ marginTop: "0px", border: "1px solid #d9d4d4", borderOpacity: "0.2" }}>
                <div
                    className='col-2'
                    style={{ background: "white", padding: "2%", paddingLeft: "4%" }}>

                    <img src="https://picsum.photos/seed/picsum/50/50" style={{ width: "50px", borderRadius: "50%" }}></img>
                </div>
                <div
                    className='col-10 p-2'
                    style={{ background: "white" }}>
                    <p style={{ wordWrap: "break-word", fontSize: "14px" }}>{tw}</p>

                    <br />
                    <h2 style={{ marginLeft: "0px", display: "inline" }}><BsChatText /></h2>
                    <h2 style={{ marginLeft: "25%", display: "inline" }}><FaRetweet /></h2>
                    <h2 style={{ marginLeft: "25%", display: "inline" }}><BsHeart /></h2>
                    <h2 style={{ marginLeft: "25%", display: "inline" }}><FiShare /></h2>

                </div>

            </div>


        </div >

    );

}

export default Show;
