import React, { useState } from 'react';
import { user, menuItems, footerItems } from './../data/sidebar'; // Replace 'yourFile.js' with the actual file path
import { NavLink } from 'react-router-dom';

// Sidebar Component
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <aside style={{ borderRight: '3px solid #262630' }}
            className={`transition-all duration-300 ${isOpen ? "w-72" : "w-18"
                } h-full flex flex-col justify-between`}
        >
            {/* Header Section */}
            <div className="p-4 pe-0">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <img
                            src={user.avatar}
                            onClick={toggleSidebar}
                            alt="User avatar"
                            className="size-8 rounded-full mr-2"
                        />
                        {isOpen && (
                            <h2 className="text-base font-semibold text-gray-300">{user.name}</h2>
                        )}
                    </div>
                    <div className='flex'>
                        {isOpen && <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </>}

                    </div>
                </div>
                {/* Menu Items */}
                <nav className="overflow-y-auto h-[calc(100vh-16rem)] pe-4">
                    <ul>
                        {menuItems.map(({ label, icon, link, subItems, indicator,separate }, index) => (
                            <li key={index} className={`mb-4 text-gray-400 ${separate && "border-t border-[#2d2d39] border-b py-4"} ${index+1 == menuItems.length && "border-[#2d2d39] border-b"}`}>
                                <NavLink to={link} className='flex justify-between rounded-lg p-1.5'>
                                    <a
                                        // href={link}
                                        className="flex items-center gap-3  hover:text-white font-bold"
                                    >
                                        <span>{icon}</span>
                                        {isOpen && label}
                                    </a>
                                    {(indicator && isOpen) && <div className='cursor-pointer flex items-center'>
                                        {indicator}
                                    </div>}
                                </NavLink>
                                {/* Render SubItems if present */}
                                {subItems && isOpen && (
                                    <ul className="ml-9 mt-4">
                                        {subItems.map((subItem, idx) => (
                                            <li key={idx} className="mb-3 p-1.5">
                                                <a
                                                    href={subItem.link}
                                                    className="flex items-center justify-between font-bold text-gray-300 hover:text-white"
                                                >
                                                    {subItem.label}
                                                    <span className="text-sm backdrop-blur-sm bg-gray-500/30 rounded px-1.5 py-1 flex justify-center items-center">
                                                        {subItem.count}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Footer Section */}
            <div className="p-4">
                <nav>
                    <ul>
                        {footerItems.map(({ label, icon, link }, index) => (
                            <li key={index} className={index+1 !== footerItems.length && "mb-4"}>
                                <a
                                    href={link}
                                    className={`flex items-center gap-3 text-gray-300 hover:text-white font-bold`}
                                >
                                    <span>{icon}</span>
                                    {isOpen && label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;