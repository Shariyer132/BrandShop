import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1-free-img-140x47.png';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="navbar text-white bg-[#333333] min-h-24 bg-opacity-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><img src={logo1} alt="" /></a>
                <div className='hidden lg:block'>
                    <ul className='flex gap-5'>
                        <li><Link to="/shop">EVERYTHING</Link></li>
                        <li><Link to="/shop">WOMEN</Link></li>
                        <li><Link to="/shop">MEN</Link></li>
                        <li><Link to="/shop">ACCESSORIES</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex-none">
                <div className='hidden lg:block'>
                    <ul className='flex gap-5'>
                        <li><a>ABOUT</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                </div>
                <div className="drawer drawer-end px-6">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button flex items-center gap-4 cursor-pointer">
                            <span className="text-bold">$0.00</span>
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                    </div>
                    <div className="drawer-side z-20">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="text-2xl flex items-center justify-between px-4"><RxCross2/> Shoping Cart</label>
                            <li><Link to="/shop">EVERYTHING</Link></li>
                            <li><Link to="/shop">WOMEN</Link></li>
                            <li><Link to="/shop">MEN</Link></li>
                            <li><Link to="/shop">ACCESSORIES</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className=" text-xl">
                        <FaUser />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;