import { MessageSquare } from "lucide-react";
import { useTheme } from '../components/ThemeContext.jsx';
import { Link } from "react-router-dom";


const NoChatSelected = () => {
    
    const { toggleTheme, theme } = useTheme();

  return (
    <>
    <div className='flex flex-col'>
        
        <div className="w-full flex flex-1 flex-col items-center justify-center p-16 ">
        <div className="max-w-md text-center space-y-6 flex flex-col items-center">
            {/* Icon Display */}
            <div className="flex justify-center gap-4 mb-4">
            <div className="relative">
                <div
                className="flex items-center
                justify-center animate-bounce"
                >
                    <img src="/icon.png" alt="Taram" />

                </div>
            </div>
            </div>

            {/* Welcome Text */}
            <h2 className="text-2xl font-bold text-[#143d60]">Welcome to Chatty!</h2>
            <p className="text-base-content/60 text-[#143d60]">
            Select a conversation from the sidebar to start chatting
            </p>
        </div>
        </div>
    </div>
    </>
  );
};

export default NoChatSelected;