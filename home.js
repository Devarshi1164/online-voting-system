import React from "react";
import './home.css';
import voting from './Voting-Security.jpg';
import photo from './photo.png';

const HS1 = {"cursor" : "pointer"};
const HS3 = {"float" : "right" , "padding-right" : "30px" , "cursor" : "pointer"};
const HS2 = {"font-size" : "38px" , "font-weight" : "500" ,"margin-top" : "35px", "line-height ": "100px" ,"text-align": "center" ,"font-family": "poppins"};
const space = {height : "10px"};








class Home extends React.Component
{

    logout()
    {
        window.location.replace("/");
    }

    vote(){
        window.location.replace("/vote");
    }
    profile()
    {
        window.location.replace("/");
    }
    contact()
    {
        window.location.replace("/");
    }
    about()
    {
        window.location.replace("/");
    }
    redirect()
    {
        window.location.replace("/home");
    }

    render()
    {

        return(
            <div className="full-height">
                <div className="homeheader">
                    <label style={HS1} onClick={this.redirect}> Online Voting System</label>
                    <label style={HS3} onClick={this.logout}>Logout</label>
                    <label style={HS3} onClick={this.vote}>Vote</label>
                    <label style={HS3} onClick={this.profile}>Profile</label>
                    <label style={HS3} onClick={this.contact}>Contact Us</label>
                    <label style={HS3} onClick={this.about}>About</label>
                </div>

                <div className="home-content">
                    
                    <img src={photo.php} alt=""></img>

                </div>
                <div className="home-box">
                    <div style={HS2}>What is an Online Voting System?</div>
                    <p>An online voting system is a software platform that allows groups to securely conduct votes and elections. High-quality online voting systems balance ballot security, accessibility, and the overall requirements of an organization's voting event.</p>
                </div>
                <div style={space}></div>
                <div style={space}></div>
                <div style={space}></div>
                <h2>Cost Savings and Efficiency</h2>
                <p1>The cost savings and efficiencies you’ll gain are unparalleled to any other method of voting. Groups switching to web-based online voting systems from more expensive and less efficient voting technologies like voting machines, paper ballots, and in-person meetings will reap these benefits without increasing risk.</p1>
                <h2>Voter Accessibility</h2>
                <p1>Needing to fly halfway around the world to vote at your organization’s annual meeting is an example of a vote with low accessibility. On the other hand, tapping a link on your mobile device that securely logs you into the online voting system website is an example of a vote or election with high accessibility.</p1>
                <h2>Auditability and Verifiability</h2>
                <p1>With an online voting system, you can easily showcase election results to eliminate concern. Sharing all administrator activity during your election to prove no one went in altered the results is just one of the many trust-building tactics you’ll be able to use in light of a vote challenge.</p1>
                <h2>Security, Confidence, and Trust in Your Election Results</h2>
                <p1>The confidence in your voting and election results is by far the most valuable aspect that online voting systems will offer to your group. The fallout of a vote being perceived as unfair is expensive, time-consuming, and wrecks havoc on the hard-earned trust you’ve built among group members. From this perspective, an online voting system offers unparalleled election security.</p1>
                <div className="home-footer">@Online Voting System</div>
            </div>
        );
    }
}

export default Home;