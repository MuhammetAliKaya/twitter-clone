import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Show from './show';
import { GoLocation, GoFileMedia } from 'react-icons/go';
import { BiPoll } from 'react-icons/bi';
import { MdOutlineSchedule } from 'react-icons/md';

function Mid() {

    const [tweet, setTweet] = useState("");
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3001/Tweets").then(res =>
            setData(res.data))
    }, [counter])

    const handleOnChange = (e) => {
        setTweet(e.target.value);
        console.log(tweet)
    }
    const handleOnClick = (event) => {
        event.preventDefault();
        const obj = {
            name: tweet,
            id: null
        }
        axios.post("http://localhost:3001/Tweets", obj);
        setCounter(counter + 1)
        setTweet("")

        console.log("butona basıldı");
    }

    return (
        <div className='container' style={{ marginTop: "50px" }} >
            <div className='row p-4' style={{ border: "1px solid #d9d4d4", borderTop: "0px", borderOpacity: "0.2" }}>
                <div className='col-2' style={{ background: "white", padding: "1%", paddingLeft: "5%" }}>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={{ width: "50px", borderRadius: "50%" }}></img>
                </div>
                <div className='col-10'>
                    <form>
                        <textarea placeholder="Whats happening?" type="textbox" onChange={handleOnChange} style={{ fontSize: "16px", width: "100%", height: "70px", border: "0" }} value={tweet} >
                        </textarea>
                        <br />
                        <h2 style={{ padding: "5px", display: "inline" }}><GoLocation style={{ color: "00acee" }} /></h2>
                        <h2 style={{ marginLeft: "5%", padding: "5px", display: "inline" }}><GoFileMedia style={{ color: "00acee" }} /></h2>
                        <h2 style={{ marginLeft: "5%", padding: "5px", display: "inline" }}><BiPoll style={{ color: "00acee" }} /></h2>
                        <h2 style={{ marginLeft: "5%", padding: "5px", display: "inline" }}><MdOutlineSchedule style={{ color: "00acee" }} /></h2>

                        <button

                            onClick={handleOnClick}
                            style={{ display: "inline", color: "white", paddingBottom: "2%", paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%", border: "0", marginLeft: "40%", borderRadius: "20px", backgroundColor: "#00acee" }}
                        >
                            <b>TWEET</b>

                        </button>
                    </form>

                </div>


            </div>
            <div >

                <Show data={data} />
            </div>
        </div >


    );
}

export default Mid;
