import React from "react";
import Navbar from "../../Web/Navbar";

import { BookingCard } from "./BookingCard";
import UserSideBar from './UserSideBar';


const Favourites = () => {


    return (
        <>
            <div className="flex flex-col min---h-screen bg-gray-100">
                <Navbar />
                <div className="flex flex-grow overflow-hidden h-[90vh]">
                    <UserSideBar />

                    <main className="flex-grow p-6 overflow-y-auto">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h1 className="text-3xl font-semibold text-blue-600">Favourites</h1>
                            <p className="text-gray-600 mt-2">Check out the halls you favourites!</p>
                        </div>

                        <BookingCard />
                    </main>
                </div>
            </div>
        </>
    )
}

export default Favourites;