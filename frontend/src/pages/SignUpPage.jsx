import React from 'react'
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import '../styles/SignUpPage.css'
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {};

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    // <div className='min-h-screen grid lg:grid-cols-1'>
    //   {/* Middle Content */}
    //   <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
    //     <div className='w-full max-w-md space-y-8'>
    //     </div>

    //   </div>
    // </div>
    <div className='whole'>
      <div className="middle-box">
        <div className="top-bar">
          <div className="top-bar-content">
            <p>Account Page</p>
            <ul className='top-bar-buttons'>
              <li><button><img src="/minimize.png" alt="" /></button></li>
              <li><button><img src="/maximize.png" alt="" /></button></li>
              <li><button><img src="/close.png" alt="" /></button></li>
            </ul>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="heading">
            <h1>Create an Account</h1>
            <h4>Get ready to create an account to chat with other people!</h4>
          </div>
          
        <form onSubmit={handleSubmit} className='form'>
          <div className="form-control">
            <label className='label'>
              <span className="label-input-field">Full Name:</span>
              <input 
              type="text" 
              className='input-field' 
              placeholder='John Doe' 
              value={formData.fullName} 
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
              />
            </label>
          </div>

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
          
          <div className="btn-center">
            <button type="submit" className='submit-btn' disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="notif text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link">
                Sign in
              </Link>
          </p>
        </div>

        </div>
      </div>
    </div>

  )
}

export default SignUpPage