import { Col, Container, Row } from "react-bootstrap";
import "./TeamTable.css"
function MeetTheTeam() {
    return (
        <div>
            <h1>Meet our team!</h1>
                <div className="image-table">
                    <table className="center">
                        <tr>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Joey Powers</h3>
                                <h4><i>President</i></h4>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Otavio Piza</h3>
                                <h4><i>Treasurer</i></h4>
                            </td>
                        </tr>
                    </table>
                    <h2>Events Team:</h2>
                    <table className="center">        
                        <tr>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Ishaan Raja</h3>
                                <h4><i>Lead</i></h4>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Aryan Wadhani</h3>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Elise Miller</h3>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Akshaya Kumar</h3>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Sean Lee</h3>
                            </td>
                        </tr>
                    </table>
                    <h2>Advertisement and Communications Team:</h2>
                    <table className="center">
                        <tr>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Rohan Purandare</h3>
                                <h4><i>Lead</i></h4>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Jisoo Kim</h3>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Vidya Vuppala</h3>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Joseph Lee</h3>
                            </td>
                            <td>
                                <img src={require("../images/profilepic.png")} width="150" alt="profilepic" className="circle" onClick={()=> window.open("https://www.linkedin.com", "_blank")} />
                                <h3>Ayushi Mohanty</h3>
                            </td>
                        </tr>
                    </table>
                </div>
        </div>
    );
  }
  
  export default MeetTheTeam;