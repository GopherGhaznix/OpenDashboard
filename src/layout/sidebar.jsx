import React, { useState } from 'react';
import { user, menuItems, footerItems } from './../data/sidebar'; // Replace 'yourFile.js' with the actual file path
import { NavLink } from 'react-router-dom';

// Sidebar Component
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <aside style={{ borderRight: '3px solid #262630' }}
            className={`fade-in transition-all duration-300 pb-4 ${isOpen ? "w-72" : "w-18"
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
                            <h2 className="fade-in text-base font-semibold text-gray-300">{user.name}</h2>
                        )}
                    </div>
                    {isOpen && <div className='flex fade-in'>
                         <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </>

                    </div>}
                </div>
                {/* Menu Items */}
                <nav className="overflow-y-auto h-[calc(100vh-16rem)] pe-4">
                    <ul>
                        {menuItems.map(({ label, icon, link, subItems, indicator, separate }, index) => (
                            <li key={index} className={`mb-4 text-gray-400 ${separate && "border-t border-[#2d2d39] border-b py-4"} ${index + 1 == menuItems.length && "border-[#2d2d39] border-b pb-4"}`}>
                                <NavLink to={link} className='flex justify-between sideitemHoverEffect rounded-lg p-1.5'>
                                    <a
                                        // href={link}
                                        className="flex items-center gap-3  hover:text-white font-bold"
                                    >
                                        <span>{icon}</span>
                                        {isOpen && <span className='fade-in'>{label}</span> }
                                    </a>
                                    {(indicator && isOpen) && <div className='cursor-pointer fade-in flex items-center'>
                                        {indicator}
                                    </div>}
                                </NavLink>
                                {/* Render SubItems if present */}
                                {subItems && isOpen && (
                                    <ul className="ml-9 my-2 fade-in">
                                        {subItems.map((subItem, idx) => (
                                            <li key={idx} className="mb-1.5">
                                                <NavLink
                                                    to={subItem.link}
                                                    className="flex items-center justify-between font-bold text-gray-300 hover:text-white sideitemHoverEffect rounded-lg py-1 px-2 "
                                                >
                                                    {subItem.label}
                                                    <div className="text-sm backdrop-blur-sm bg-gray-500/30 rounded px-1.5 py-1.5 flex justify-center items-center leading-none">
                                                        {subItem.count}
                                                    </div>

                                                </NavLink>
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
            <div className="px-4 ">
                <nav>
                    <ul>
                        {footerItems.map(({ label, icon, link }, index) => (
                            <li key={index} className={index + 1 !== footerItems.length && "mb-4"}>
                                <NavLink
                                    to={link}
                                    className={`flex items-center gap-3 text-gray-300 hover:text-white font-bold sideitemHoverEffect rounded-lg p-1.5`}
                                >
                                    <span>{icon}</span>
                                    {isOpen && <span className='fade-in'>{label}</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;