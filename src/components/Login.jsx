import schoolImage from "../images/cohy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = ({ userRole }) => {
  const navigate = useNavigate()

  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  function handleLogin(e){
    e.preventDefault()
    if(userName.trim() === 'lecturer' && parseInt(password.trim()) === 1234){
      navigate('/LecturerDashBoard')
    }
    else if(userName.trim() === 'student' && parseInt(password.trim()) === 1234){
      navigate('/StudentDashboard')

    }
    else if(userName === '' || password === ''){
      alert("Please fill all fields")
    }else  alert("Username or password is incorrect")
  }

  return (
    <div className={style.mainBody}>
      <div className={style.modernLoginContainer}>
        <div className={style.glassCard}>
          <div className={style.logoArea}>
            <img src={schoolImage} alt="School Logo" />
          </div>
          <h2 className={style.welcomeText}>Welcome to COHY exam Bank</h2>
          <form className={style.loginForm} onSubmit={handleLogin}>
            <div className={style.inputGroup}>
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <input type="text" placeholder="Email or Username" 
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className={style.inputGroup}>
              <i>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder="Password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
              
            </div>
            <div className={style.footer}>
              <button type="submit" className={style.btnLogin}>
                Login
              </button>
              <a href="#" className={style.forgotPassword}>
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
