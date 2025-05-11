import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

import { useTheme } from '../components/ThemeContext.jsx';
import { Link } from "react-router-dom";



const Sidebar = () => {
    const { toggleTheme, theme } = useTheme();
    
    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading} = useChatStore();

    const { onlineUsers } = useAuthStore();
    const [showOnlineOnly, setShowOnlineOnly] = useState(false);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const filteredUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users;

    if(isUsersLoading) return <SidebarSkeleton />

  return (
    <>
    <aside className="h-full w-40 lg:w-72 flex flex-col transition-all duration-200">
        <div className={`top-bar ${theme}`}>
            <div className="top-bar-content">
                <p>Contact Page</p>
            <ul className={`top-bar-buttons ${theme}`}>
            </ul>
            </div>
        </div>
      <div className="w-full p-5 border-[2px] border-[#143d60] bg-white">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
        {/* TODO: Online filter toggle */}

        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm border-[2px] border-[#143d60]"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
        </div>      

        <div className="overflow-y-auto max-h-[300px] w-full py-3 xl:max-h-[350px]">
            {filteredUsers.map((user) => (
                <button
                key={user._id}
                onClick={() => setSelectedUser (user)}
                className={`
                    w-full p-3 flex items-center gap-3
                    hover:bg-gray-200 transition-colors
                    ${selectedUser?._id === user._id ? "bg-gray-300" : ""}
                `}
            >
                <div className="relative mx-auto lg:mx-0">
                    <img
                        src={user.profilePic || "/avatar.png"}
                        alt={user.name}
                        className="size-12 object-cover rounded-full"
                    />
                {onlineUsers.includes(user._id) && (
                    <span
                    className="absolute bottom-0 right-0 size-3 bg-green-500 
                    rounded-full ring-2 ring-zinc-900"
                    />
                )}
                </div>

                {/* User info - only visible on larger screens */}
                <div className="hidden lg:block text-left min-w-0">
                    <div className="font-medium truncate">{user.fullName}</div>
                    <div className="text-sm text-zinc-400">
                        {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                    </div>
                </div>               
            </button>
            ))}

            {filteredUsers.length === 0 && (
                <div className="text-center text-zinc-500 py-4"> No online users </div>
            )}
            
        </div>
      </div>
    </aside>
    </>
  )
};

export default Sidebar