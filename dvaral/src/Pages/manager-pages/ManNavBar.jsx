import React, { useState } from 'react';
import { PackageOpen, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


const ManNavBar = () => {
    const navigate = useNavigate();



    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md h-[9vh]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <PackageOpen className="h-8 w-8 text-blue-600" />
                        <Link to="/">
                            <span className="ml-2 text-3xl font-bold text-blue-600 font-['Dancing_Script']">
                                DvaraL
                            </span>
                        </Link>
                    </div>

                    
                </div>
            </div>
        </nav>
    );
};

export default ManNavBar;
