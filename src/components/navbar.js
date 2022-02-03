import React from 'react';
import { BsSearch, BsStars } from 'react-icons/bs';

function navbar() {
    return (


        <div className='container fixed-top background'  >
            <div className="row" >
                <div className='col-3' style={{ paddingTop: "15px  " }}>
                    <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp" style={{ width: "50px", marginLeft: "10%" }}></img>
                </div>

                <div className='col-6' style={{ paddingTop: "15px  ", paddingLeft: "15px", paddingRight: "15px" }} >
                    <div style={{ borderRight: "1px solid #d9d4d4", borderLeft: "1px solid #d9d4d4", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5px" }} >
                        <h3 style={{ fontSize: "25px" }}>Home</h3>
                        <BsStars style={{ fontSize: "25px" }} />

                    </div>

                </div>
                <div className='col-3' style={{ paddingTop: "15px  " }}>
                    <div style={{ background: "#eeeeee", width: "100%", padding: "3%", borderRadius: "9999px" }}>

                        <form >
                            <h3 style={{ display: "inline", marginLeft: "2%" }}><BsSearch /></h3>
                            <input placeholder='Search Twitter' style={{ marginLeft: "3%", height: "25px", width: "80%", border: "0", background: "#eeeeee", fontSize: "15PX" }} /></form></div>


                </div>
            </div>
        </div >
    );
}

export default navbar;
