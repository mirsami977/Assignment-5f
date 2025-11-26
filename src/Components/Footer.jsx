import React from 'react';
import useAuth from '../hooks/useAuth';
import { Link, NavLink } from 'react-router';

const Footer = () => {

    const { user, } = useAuth();
    return (
        <div className='max-w-11/12 mx-auto'>
            <footer className="px-6 w-full text-sm text-slate-500 bg-white pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/">
                            <svg width="40" height="40" viewBox="0 0 59 40" fill="none" xmlns="">
                                <path d="M10 15.1533L56.0254 27.3643C57.7788 27.8295 59 29.4164 59 31.2305V40H49V35.8457L29.501 30.6729L10 35.8457V40H0V31.2305C4.53996e-06 29.4164 1.22118 27.8295 2.97461 27.3643L10.001 25.499L2.97461 23.6357C1.22116 23.1706 3.02567e-05 21.5836 0 19.7695V14C0 11.7909 1.79086 10 4 10H10V15.1533Z" fill="#0BDC85"></path>
                                <path d="M55 10C57.2091 10 59 11.7909 59 14V20H49V10H55Z" fill="#0BDC85"></path>
                                <path d="M45 0C47.2091 0 49 1.79086 49 4V10H10V4C10 1.79086 11.7909 2.81866e-08 14 0H45Z" fill="#0BDC85"></path>
                            </svg>
                        </Link>
                        <p className="text-sm/7 mt-6">This MERN stack web app lets users report and track local environmental issues such as garbage, road damage, and illegal construction. Users can submit issues, contribute cleanup funds, view personal reports, and join community clean-up activities. Features include secure authentication, responsive UI, and real-time data.</p>
                    </div>
                    <div className="flex flex-col lg:items-center lg:justify-center">
                        <div className="flex flex-col text-sm space-y-2.5">
                            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                            <NavLink to="/" className="block">Home</NavLink>
                            <NavLink to="/AllIssues" className="block">All Issues</NavLink>
                            {
                                user && <>
                                    <NavLink to="/addissue" className="block">Add Issues</NavLink>
                                    <NavLink to="/myIssues" className="block">My Issues</NavLink>
                                    <NavLink to="/" className="block">My Contribution</NavLink>
                                </>
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
                        <div className="text-sm space-y-6 max-w-sm">
                            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">
                                <input className="focus:ring-2 bg-white ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2" type="email" placeholder="Enter your email" />
                                <button className="bg-indigo-600 px-4 py-2 text-white rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="py-4 text-center border-t mt-6 border-slate-200">
                    Copyright 2025 © <a href="">PrebuiltUI</a> All Right Reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;