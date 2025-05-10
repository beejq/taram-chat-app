import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import '../styles/ProfilePage.css'
import { FaCamera } from "react-icons/fa";
import { useState } from 'react';
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useTheme } from '../components/ThemeContext.jsx';

const ProfilePage = () => {
  const { toggleTheme, theme } = useTheme();  

  const {authUser, isUpdatingProfile, updateProfile} = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const   file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile( {profilePic: base64Image} );
    };
  };

  return (
    <div className='whole'>
      <motion.div
        className="w-full max-w-[1010px] mx-auto bg-white/80 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
      <div>
        <div className={`top-bar ${theme}`}>
          <div className="top-bar-content">
            <p>Profile Page</p>
            <ul className={`top-bar-buttons ${theme}`}>
            <Link to="/">
              <li><button><img src="/minimize.png" alt="" /></button></li>
            </Link>
              <li><button><img src="/maximize.png" alt="" /></button></li>
            <Link to="/">
              <li><button><img src="/close.png" alt="" /></button></li>
            </Link>
            </ul>
          </div>
        </div>
        <div className="bottom-bar h-auto md:h-[350px]">
          <div className="left-to-right">
            <div className="camera-instruct relative w-full h-full max-h-[240px] max-w-[240px] m-8">
              <div className="profilepic h-full w-full rounded-full overflow-hidden border-[2px] border-[#143D60]">
                <img src={selectedImg || authUser.profilePic || '/cat.gif'} alt="Profile" className='w-full h-full object-cover' />
              </div>
                <label
                  htmlFor="avatar-upload"
                  className={`
                    absolute bottom-2 right-2 
                    bg-white hover:scale-105
                    p-2 rounded-full cursor-pointer 
                    transition-all duration-200
                    border-[2px] border-[#143D60]
                    ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                  `}
                >
                  <FaCamera className="w-8 h-8 text-[#EB5B00] " />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
            </div>
            <div className='account-info-wrapper justify-center gap-4 mt-4'>
                <div className='account-info flex'>
                  <span className='content-center'>Full Name:</span>
                  <p className='w-[438px] mr-[32px] border-[2px] border-[#143D60] rounded-lg bg-white p-[4px] ml-4'>{authUser?.fullName}</p>
                </div>
                    
                <div className='account-info flex'>
                  <span className='content-center'>Email:</span>
                  <p className='w-[438px] mr-[32px] border-[2px] border-[#143D60] rounded-lg bg-white p-[4px] ml-4'>{authUser?.email}</p>
                </div>
              <p className=''>Member Since: {authUser?.createdAt?.split("T")[0]}</p>  
              <div className='flex flex-row gap-2'>
                <span>Account Status: </span>
                <span className='text-[#EB5B00]'>Active</span>
              </div>
                <p className='font-bold mt-4 mb-4' >
                  {isUpdatingProfile ? "Uploading..." : "Click the camera icon to change profile picture"}
                </p>              
          </div>                   
          </div>
        </div>
      </div>
      </motion.div>
    </div>    
  );
}

export default ProfilePage