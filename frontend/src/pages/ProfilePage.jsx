import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import '../styles/ProfilePage.css'
import { FaCamera } from "react-icons/fa";
import { useState } from 'react';

const ProfilePage = () => {
  const {authUser, isUpdatingProfile, updateProfile} = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
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
      <div className="w-1010 h-338">
        <div className="top-bar">
          <div className="top-bar-content">
            <p>Profile Page</p>
            <ul className='top-bar-buttons'>
              <li><button><img src="/minimize.png" alt="" /></button></li>
              <li><button><img src="/maximize.png" alt="" /></button></li>
              <li><button><img src="/close.png" alt="" /></button></li>
            </ul>
          </div>
        </div>
        <div className="bottom-bar h-[400px]">
          <div className="left-to-right">
            <div className="relative w-[240px] h-[240px] m-8">
              <div className="w-full h-full rounded-full overflow-hidden border-[2px] border-[#143D60]">
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
                <p className='text-center mt-4' >
                  {isUpdatingProfile ? "Uploading..." : "Click the camera icon to change profile picture"}
                </p>
            </div>
            <div className='account-info-wrapper justify-center gap-4'>
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
          </div>                   
          </div>
        </div>
      </div>
    </div>    
  )
}

export default ProfilePage