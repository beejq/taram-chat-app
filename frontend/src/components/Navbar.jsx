import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" 
            className="flex flex-col items-center gap-2.5 transform transition-transform duration-400 hover:scale-110"
            >
              <div>
                <img src="/icon.png" alt="" />
              </div>
              <h1 className="text-lg font-bold">Taram</h1>
            </Link>
          </div>

          <div className="flex flex-row gap-8">
            <Link
              to={"/settings"}
              className="flex flex-col items-center gap-2.5 transform transition-transform duration-400 hover:scale-110"
            >
              <img src="/settings.png" alt="" />
              <span>Settings</span>
            </Link >

            {authUser && (
              <>
                <Link to={"/profile"} 
                className="flex flex-col items-center gap-2.5 transform transition-transform duration-400 hover:scale-110" 
                >
                  <img src="/profile.png" alt="" />
                  <span>Profile</span>
                </Link>

                <button className="flex flex-col items-center gap-2.5 transform transition-transform duration-400 hover:scale-110" onClick={logout}>
                  <img src="logout.png" alt="" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;