import React from 'react';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import '../styles/LoginPage.css'
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useTheme } from '../components/ThemeContext.jsx';


const LoginPage = () => {

  const { toggleTheme, theme } = useTheme();  

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIng } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault()
    login(formData);
  };

  return (

    <div className='whole'>
      <div className="middle-box">
        <div className={`top-bar ${theme}`}>
          <div className="top-bar-content">
            <p>Account Page</p>
            <ul className={`top-bar-buttons ${theme}`}>
              <li><button><img src="/minimize.png" alt="" /></button></li>
              <li><button><img src="/maximize.png" alt="" /></button></li>
              <li><button><img src="/close.png" alt="" /></button></li>
            </ul>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="heading">
            <h1>Login to your account!</h1>
            <h4>Already have an account? Login to start chatting with other people!</h4>
          </div>
          
        {/* FORM */}
        <form onSubmit={handleSubmit} className='form'>

          <div className="form-control">
            <label className='label'>
              <span className="label-input-field">Email:</span>
              <input 
              type="email" 
              className='input-field' 
              placeholder='you@example.com' 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              />
            </label>
          </div>

          <div className="form-control">
            <label className='label'>
              <span className="label-input-field">Password:</span>

              <div className="relative inline-block">
                <input 
                type={showPassword ? "text" : "password"}
                className='input-field pr-10 w-70' 
                placeholder='**********' 
                value={formData.password} 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                />

                <button
                  type='button'
                  className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}

                </button>
              </div>
            </label>
          </div>
          
          {/* Submit Button */}
          <div className="btn-center">
            <button type="submit" className={`submit-btn ${theme}`} disabled={isLoggingIng}>
              {isLoggingIng ? (
                <>
                <div className=" flex justify-center items-center">
                  <Loader2 className="size-8 animate-spin" />
                  <p className='ml-4'>Loading...</p>
                </div>
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <div className="text-center">
          <p className="notif text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link">
                Create account
              </Link>
          </p>
        </div>

        </div>
      </div>
    </div>
  )
};

export default LoginPage;