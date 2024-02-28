import { Link, NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Drawer from "./Dawer";
import Header from "./Header";
import logo1 from '../../assets/logo@2x-free-img-120x40.png';
import cartImg1 from '../../assets/product-hoodie2-300x300.jpg';
import { RxCross2, RxCrossCircled } from "react-icons/rx";


const NavbarTwo = () => {
    const shopingCart = true;
    const [isOpen, setIsOpen] = useState(false)

    const Links = <>
        <li className="indicator"><Link to='/shop' className="text-white"><FaShoppingBag /></Link></li>
        <li><Link to='/shopingCart' className="text-white"><FaShoppingCart /></Link></li>
    </>

    const links = <>
        <li><NavLink to='/orders'>ORDERS</NavLink></li>
        <li><NavLink to='/dashboard/adminHome'>DASHBOARD</NavLink></li>
        <li><NavLink className="flex items-center">Logout<IoIosLogOut /></NavLink></li>
    </>

    return (
        <div className="navbar justify-between h-24 bg-blue-400 px-16">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-white text-xl"><img src={logo1} alt="" /></Link>
                <div className='hidden lg:block'>
                    <ul className='flex gap-5'>
                        <li><Link to="/shop">EVERYTHING</Link></li>
                        <li><Link to="/shop">WOMEN</Link></li>
                        <li><Link to="/shop">MEN</Link></li>
                        <li><Link to="/shop">ACCESSORIES</Link></li>
                    </ul>
                </div>
            </div>

            {/* large device view */}
            <div className="flex-none ">
                <div className="hidden lg:block">
                    <ul className='flex gap-5'>
                        <li><a>ABOUT</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                </div>

                {/* Shoping Cart */}
                <div className="drawer drawer-end px-6 ">
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
                        <div className="p-4 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="text-2xl border-b-2 pb-5 flex items-center justify-between px-4"><RxCross2 className="cursor-pointer" /> Shoping Cart</label>

                            {/* cards*/}
                            <div className="min-h-[calc(100vh-220px)]">
                                {/* card one */}
                                <div className="flex items-center py-5 border-t-2 px-5 gap-5 text-lg">
                                    <figure className="w-1/5">
                                        <img src={cartImg1} alt="" />
                                    </figure>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <p>Basic Gray Jeans</p>
                                            <button><RxCrossCircled /></button>
                                        </div>
                                        <p><span>1</span>x<span>$150.00</span></p>
                                    </div>
                                </div>
                                {/* card one */}
                                <div className="flex items-center py-5 border-t-2 px-5 gap-5 text-lg">
                                    <figure className="w-1/5">
                                        <img src={cartImg1} alt="" />
                                    </figure>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <p>Basic Gray Jeans</p>
                                            <button><RxCrossCircled /></button>
                                        </div>
                                        <p><span>1</span>x<span>$150.00</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* btns */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5">
                                    {
                                        shopingCart ? <button className="btn btn-info rounded-none text-white"><Link>VIEW CART</Link></button> : <></>
                                    }
                                    <button className="btn btn-info rounded-none text-white"><Link to="/shop">CONTINUE SHOPPING</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* user dropdown */}
                <div className="dropdown dropdown-end hidden lg:block">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className=" text-xl">
                            <FaUser />
                        </div>
                    </div>
                    {/* dropdown content */}
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

             {/* moblie view */}
             <main className="md:hidden">
                <Header setIsOpen={setIsOpen} />
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <ul onClick={() => (setIsOpen(false))} className="menu">
                        {Links}
                        {links}
                    </ul>
                </Drawer>
            </main>
        </div >
    );
};

export default NavbarTwo;




