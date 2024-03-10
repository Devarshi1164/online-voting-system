import React from "react";
import {callApi , errorResponse} from './main';

const HS1 = {"cursor" : "pointer"};
const space = {"height" : "12px"};
const space1 = {"height" : "60px"};

function Login(){

        function validate()
        {
            var RT1=document.getElementById('RT1');
            var RT2=document.getElementById('RT2');
    
            var url = "http://localhost:5000/login/signin";
            var data = JSON.stringify({
                emailid : RT1.value,
                password : RT2.value
            });
            callApi("POST", url, data, loginSuccess, errorResponse);
        }
    
        function loginSuccess(res)
        {
            var data = JSON.parse(res);
            if(data === 1)
            {
                window.location.replace("/home");
            }
            else
                alert("Invalid Credentials!");
        }


    function logout()
    {
        window.location.replace("/");
    }
    function signup()
    {
        window.location.replace("/signup");
    }

    return(
        <div className="full-height">
            <div className="loginheader"><label style = {HS1} onClick={logout}>Online Voting System</label></div>
            <div className="logincontent"></div>
            <div className="loginbox">
            <div style={space}></div>
                <h2 class="fs-title">Login</h2>
                <div style={space1}></div>
                <input type="text" id="RT1" name="email" placeholder="Email" />
                <input type="password" id="RT2" name="pass" placeholder="Password" />
                <div><button className="btn1" onClick={validate}>Sign In</button></div>
                <div style={space}></div>
                <new>New User? <label className="linklabel1" onClick={signup}> Click Here</label></new>
            </div>
            <div className="loginfooter">@Online Voting System</div>
        </div>
    );

}
export default Login;