import React from 'react'
import { useChatStore } from '../store/useChatStore';
import NoChatSelected from '../components/NoChatSelected';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';

import { useTheme } from '../components/ThemeContext.jsx';
import { Link } from "react-router-dom";



const HomePage = () => {
  const { toggleTheme, theme } = useTheme();
  const { selectedUser } = useChatStore();

  return (
    <div className='h-screen '>
        
      <div className="flex items-center justify-center pt-20 px-4 gap-12">

      <Sidebar />
      
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className={`top-bar ${theme}`}>
            <div className="top-bar-content">
              <p>Chat Page</p>
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

          <div className="flex flex-col h-full rounded-bl-lg rounded-br-lg  overflow-hidden bg-white justify-center border-[2px] border-[#143d60]">
 
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage