// import React from "react";

// import Navbar from '../user-pages/Navbar';

// import '../css/UserDashboard.css';
// import { BookingCard } from "./BookingCard";

// const UserDashboard =()=> {

//     const amenities = [
//         { icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z", tooltip: "$129 per night" },
//         { icon: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z", tooltip: "Free wifi" },
//         { icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z", tooltip: "2 bedrooms" },
//         { icon: "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z", tooltip: '65" HDTV' },
//         { icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z", tooltip: "Fire alert" },
//       ];


//     return(
//         <>
//             <Navbar/>
//             <div className="user-dashboard-body">
//                 <div className="user-dash-body">
//                     <div className="user-side-panel">
//                         <div className="user-side-panel-links">
//                             <li className="user-side-list">Explore Halls</li>
//                             <li className="user-side-list">Reserved Halls</li>
//                             <li className="user-side-list">Favourites</li>
//                             <li className="user-side-list">Contact Us</li>
//                         </div>
//                         <div className="thoughts">
//                             <p>Share Your Thoughts</p>
//                         </div>
//                     </div>
//                     <div className="user-main-content">
//                         <div className="user-greetings">
//                             <div className="u-greetings">
//                                 <p>Hello, Username!</p>
//                             </div>
//                         </div>
//                         <div className="user-dash-halls">
//                         <div className="w-full max-w-[26rem] rounded-xl bg-white shadow-lg">
//       <div className="relative">
//         <img
//           className="w-full h-auto rounded-t-xl"
//           src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//           alt="Wooden House"
//         />
//         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
//         <button
//           className="!absolute top-4 right-4 rounded-full p-2 text-white hover:bg-white/10"
//           aria-label="Like"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="h-6 w-6"
//           >
//             <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
//           </svg>
//         </button>
//       </div>
//       <div className="p-6">
//         <div className="mb-3 flex items-center justify-between">
//           <h5 className="text-xl font-medium text-blue-gray-900">
//             Wooden House, Florida
//           </h5>
//           <p className="flex items-center gap-1.5 font-normal text-blue-gray-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="-mt-0.5 h-5 w-5 text-yellow-700"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             5.0
//           </p>
//         </div>
//         <p className="text-gray-700">
//           Enter a freshly updated and thoughtfully furnished peaceful home
//           surrounded by ancient trees, stone walls, and open meadows.
//         </p>
//         <div className="mt-8 flex flex-wrap items-center gap-3">
//           {amenities.map((item, index) => (
//             <div key={index} className="group relative">
//               <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-900/5 bg-gray-100 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-200">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="h-5 w-5"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
//                 </svg>
//               </span>
//               <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
//                 {item.tooltip}
//               </span>
//             </div>
//           ))}
//           <div className="group relative">
//             <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-900/5 bg-gray-100 text-sm font-medium text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-200">
//               +20
//             </span>
//             <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
//               And +20 more
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="p-6 pt-3">
//         <button
//           className="block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//           type="button"
//         >
//           Reserve
//         </button>
//       </div>
//     </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default UserDashboard;



import React from "react";
import Navbar from '../../Web/Navbar';
import { Search, BookMarked, Heart, Mail, LayoutDashboard } from "lucide-react";
import { BookingCard } from "./BookingCard";

import UserSideBar from './UserSideBar';


const UserDashboard = () => {
  
  return (
    <div className="flex flex-col min---h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-grow overflow-hidden h-[90vh]">
        {/* Sidebar */}
        <UserSideBar/>

        {/* Main Content */}
        <main className="flex-grow p-6 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-3xl font-semibold text-gray-800">Welcome back, <span className="text-blue-600">Username!</span></h1>
            <p className="text-gray-600 mt-2">Explore our latest offerings and find your perfect stay.</p>
          </div>

          <BookingCard/>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;