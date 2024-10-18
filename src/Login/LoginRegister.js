import React, { useState } from 'react';
import './LoginRegister.css';
// import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';

const LoginRegister = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`wrapper ${active ? 'active' : ''}`}>
      <span className="rotate-bg"></span>
      <span className="rotate-bg2"></span>

      <div className="form-box login">
        <h2 className="title animation" style={{ "--i": 0, "--j": 21 }}>Login</h2>
        <form action="#">
          <div className="input-box animation" style={{ "--i": 1, "--j": 22 }}>
            <input type="text" required />
            <label>Username</label>
            {/* <i className='bx bxs-user'></i> */}
          </div>

          <div className="input-box animation" style={{ "--i": 2, "--j": 23 }}>
            <input type="password" required />
            <label>Password</label>
            {/* <i className='bx bxs-lock-alt'></i> */}
          </div>

          <button type="submit" className="btn animation" style={{ "--i": 3, "--j": 24 }}>Login</button>
          <div className="linkTxt animation" style={{ "--i": 5, "--j": 25 }}>
            <p>Don't have an account? <a href="#" className="register-link" onClick={() => setActive(true)}>Sign Up</a></p>
          </div>
        </form>
      </div>

      <div className="info-text login">
        <h2 className="animation" style={{ "--i": 0, "--j": 20 }}>Welcome Back!</h2>
        <p className="animation" style={{ "--i": 1, "--j": 21 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem?</p>
      </div>

      <div className="form-box register">
        <h2 className="title animation" style={{ "--i": 17, "--j": 0 }}>Sign Up</h2>
        <form action="#">
          <div className="input-box animation" style={{ "--i": 18, "--j": 1 }}>
            <input type="text" required />
            <label>Username</label>
            {/* <i className='bx bxs-user'></i> */}
          </div>

          <div className="input-box animation" style={{ "--i": 19, "--j": 2 }}>
            <input type="email" required />
            <label>Email</label>
            {/* <i className='bx bxs-envelope'></i> */}
          </div>

          <div className="input-box animation" style={{ "--i": 20, "--j": 3 }}>
            <input type="password" required />
            <label>Password</label>
            {/* <i className='bx bxs-lock-alt'></i> */}
          </div>

          <button type="submit" className="btn animation" style={{ "--i": 21, "--j": 4 }}>Sign Up</button>

          <div className="linkTxt animation" style={{ "--i": 22, "--j": 5 }}>
            <p>Already have an account? <a href="#" className="login-link" onClick={() => setActive(false)}>Login</a></p>
          </div>
        </form>
      </div>

      <div className="info-text register">
        <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>Welcome Back!</h2>
        <p className="animation" style={{ "--i": 18, "--j": 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem?</p>
      </div>
    </div>
  );
};

export default LoginRegister;
