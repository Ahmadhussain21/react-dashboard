import React from 'react';
import '../index.css'; // or wherever your Tailwind CSS file is imported


const NavBar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <span className="text-white font-bold text-lg md:text-xl lg:text-2xl">Data Virtualization Dashboard</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;
