import React from "react";
import { LayoutDashboard, ClipboardList, Clock, Building, Edit } from "lucide-react";

const ManagerSideBar = () => {
    const sidebarLinks = [
        { name: "Dashboard", icon: LayoutDashboard, href: "/manager-dashboard" },
        { name: "All Requests", icon: ClipboardList, href: "/hall-requests" },
        { name: "Pending Requests", icon: Clock, href: "/pending-requests" },
        { name: "Your Hall", icon: Building, href: "/add-hall" },
        { name: "Edit Hall", icon: Edit, href: "/edit-hall" },
    ];

    return (
        <>
            <aside className="w-64 bg-white shadow-md hidden lg:flex flex-col">
                <nav className="flex-grow mt-10">
                    <ul>
                        {sidebarLinks.map((link, index) => (
                            <li key={index} className="mb-2 cursor-pointer">
                                <a href={link.href} className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-200">
                                    <link.icon className="h-5 w-5 mr-3" />
                                    <span className="text-sm font-medium">{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="p-6">
                    <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center">
                        <span>Share Your Thoughts</span>
                    </button>
                </div>
            </aside>
        </>
    )
}

export default ManagerSideBar;