import React from 'react';
import { useTheme } from '../components/ThemeContext.jsx';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className='whole flex justify-center items-center px-4'>
      <motion.div
        className="w-full max-w-[1010px] bg-white/80 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`top-bar ${theme}`}>
          <div className="top-bar-content">
            <p>Settings Page</p>
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

        <div className="bottom-bar p-6">
          <h1 className='mb-6 text-center'>Change your wallpaper!</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-16">
            <button onClick={() => toggleTheme('default')} disabled={theme === 'default'}>
              <img className='w-48 h-36 border-2 border-[#143D60] rounded-lg object-cover' src='/bg.png' alt="Default Theme" />
            </button>

            <button onClick={() => toggleTheme('old-windows')} disabled={theme === 'old-windows'}>
              <img className='w-48 h-36 border-2 border-[#143D60] rounded-lg object-cover' src='/bg2.webp' alt="Old Windows Theme" />
            </button>

            <button onClick={() => toggleTheme('horse')} disabled={theme === 'horse'}>
              <img className='w-48 h-36 border-2 border-[#143D60] rounded-lg object-cover' src='/bg3.webp' alt="Horse Theme" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
