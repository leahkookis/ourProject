import { useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
import { useState } from "react";
import ISuccessfulLoginData from "../../Modal/ISuccessfulLoginData";

function HomePage(){
    let userName = useSelector((state:AppState)=>state.userName)
    
    return(
        <div className="home-page"><h2>Welcome <p>{userName}</p></h2> </div>
    )
}
export default HomePage;