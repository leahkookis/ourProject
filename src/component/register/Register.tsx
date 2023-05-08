import { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const options = ["MALE", "FEMALE"];
  const [selectGender, setSelectGender] = useState("");
  const navigate = useNavigate();
  let dispatch = useDispatch();

  async function register() {
    try {
      if (password !== verifyPassword) {
        alert("passwords don't match");
        return;
      }
      await axios.post("http://localhost:8080/users", {
        userName,
        password,
        gender,
        age,
      });
      navigate("/login");
    } catch (e: any) {
      if (e?.response?.data?.errorMessage) {
        alert(e.response.data.errorMessage);
      }
      alert("Something went wrong , we're very sorry ");
    }
  }

  return (
    <div className="Register">
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder="user name"
            onChange={(event) => setUserName(event.target.value)}
          />
          <i className="fa fa-envelope"></i>
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <i className="fa fa-lock"></i>
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="verify-password"
            id="verify-password"
            placeholder="verify-password"
            onChange={(event) => setVerifyPassword(event.target.value)}
          />
          <i className="fa fa-lock"></i>
        </div>
        <div className="form-group">
          <label htmlFor="age"></label>
          <input
            type="text"
            id="age"
            value={age}
            placeholder="age"
            onChange={(event) => setAge(event.target.value)}
          />
          <i className="fa fa-phone"></i>
        </div>
        <div className="form">
          <label htmlFor="gender"></label>
          <div className="gender">
          <select 
       value={gender} 
       onChange={(e) => setGender(e.target.value)}>
         {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
         ))}
      </select>
          </div>
        </div>
        <button type="button" className="submit-btn" onClick={register}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Register;
