import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
import { useState } from "react";
import ISuccessfulLoginData from "../../models/ISuccessfulLoginData";
import { Link, useNavigate } from "react-router-dom";

function HomePage(){
    let userName = useSelector((state:AppState)=>state.userName)
    let messageList = useSelector((state:AppState)=>state.messages)
    let navigate = useNavigate()
    let navigateToMessages = ()=>{
        navigate("/messages");
    }
    
    return(
        <div className="home-page"><h1>Welcome 
            {userName?
             <p>{userName}</p>:
             <p>Please login or register</p>}
            </h1> 
            <div className="messages">
            <button onClick={navigateToMessages}>Messages</button>
                {/* {messageList?<button onClick={navigateToMessages}>Messages</button>:"no messages"} */}
            </div>
            </div>
    )
}
export default HomePage;