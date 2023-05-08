import React, { useState } from "react";
import logo from "./logo.svg";
import "./login.css";
import jwt_decode from "jwt-decode";
import { json } from "stream/consumers";
//import ISuccessfulLoginData from '../../modal/ISuccessfulLoginData';
//import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from "axios";
import { ActionType } from "../../redux/action-types";
import { useNavigate } from "react-router-dom";
//import { ActionType } from '../../redux/action-types';

function Login() {
  const navigate = useNavigate();
  let navigateToUserHomePage = ()=>{
    navigate('/userHomePage');
  }
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let dispatch = useDispatch();
  async function onButtonClick() {
    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        userName,
        password,
      });
      let token = response.data;
      let decodeToken: any = jwt_decode(token);
      let strLoginData: string = decodeToken.sub;
      let loginData = JSON.parse(strLoginData);
      axios.defaults.headers.common["Authorization"] = "Bearer" + token;
      dispatch({ type: ActionType.LoginData, payload: { loginData } });
      dispatch({ type: ActionType.saveUserName, payload: { userName } });
      navigateToUserHomePage();
    } catch (e: any) {
      console.error(e);
      if (e.response?.data?.errorMessage) {
        alert(e.response.data.errorMessage);
      } else {
        alert("Login invalid, try later");
      }
    }
  }
  return (
    <div className="main">
      <div></div>
      <form className="login-form" >
        <label><h2>LOGIN</h2></label>
        <label form="name">Name</label>
        <input
          className="input"
          type="text"
          placeholder="Type your user name"
          onChange={(event) => setUserName(event?.target.value)}
        />
        <label form="password">Paswword</label>
        <input
          className="input"
          type="password"
          placeholder="Type your password"
          onChange={(event) => setPassword(event?.target.value)}
        />
        <input
          className="submit"
          type="button"
          onClick={onButtonClick}
          value="Submit"
        />
        
      </form>
    </div>
  );
}

export default Login;
