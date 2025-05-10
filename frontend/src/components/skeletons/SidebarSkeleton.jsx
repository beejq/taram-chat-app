import { Users } from "lucide-react";
import { useTheme } from "../ThemeContext";

const SidebarSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(8).fill(null);
  const { toggleTheme, theme } = useTheme();


  return (
    <aside
      className="h-full w-20 lg:w-72
    flex flex-col transition-all duration-200"
    >
      {/* Header */}
        <div className={`top-bar ${theme}`}>
            <div className="top-bar-content">
                <p>Contact Page</p>
            <ul className={`top-bar-buttons ${theme}`}>
            </ul>
            </div>
        </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full py-3 bg-white border-[2px] border-[#143d60]" >
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0 ">
              <div className="skeleton size-12 rounded-full bg-[#143d60]" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-4 w-32 mb-2 bg-[#143d60]" />
              <div className="skeleton h-3 w-16 bg-[#143d60]" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;