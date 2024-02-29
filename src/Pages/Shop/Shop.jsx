import { FaAngleRight } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
import img1 from '../../assets/tshirt7-300x300.jpg';
import img2 from '../../assets/product-hoodie2-300x300.jpg';
import img3 from '../../assets/product-m-jeans2-300x300.jpg';
import NavbarTwo from "../../Shared/NavbarTwo/NavbarTwo";
import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedCards from "../../Components/FeaturedCards/FeaturedCards";

const Shop = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('featuredCards.json')
            .then(data => {
                setCards(data.data)
            })
    }, [cards])

    return (
        <>
            <div>
                <NavbarTwo />
            </div>
            <div className="bg-[#F5F7F9]">
                <div className="flex flex-col-reverse justify-center lg:gap-16 lg:flex-row">
                    {/* filter functions */}
                    <div className="lg:w-1/4 flex lg:my-12 flex-col items-center  gap-3 px-5 pt-5">
                        {/* search bar */}
                        <div className="join py-5 pl-5">
                            <input type="text" placeholder="Search products..." className="input input-bordered join-item" />
                            <button className="btn btn-info text-white join-item"><FaAngleRight /></button>
                        </div>
                        {/* filter by price */}
                        <div className="w-full max-w-md mx-auto">
                            <label className="label">
                                <span className="text-2xl">Filter by Price</span>
                            </label>
                            <input type="range" min={0} max="100" value="50" className="range range-xs mt-2 mb-3 range-info " />
                            <div className="flex items-center justify-between gap-5">
                                <button className="btn btn-sm text-white btn-info">FILTER</button>
                                <p className="flex items-center">
                                    Price:<span className="font-medium">$20</span><IoRemoveOutline /><span className="font-medium">$290</span>
                                </p>
                            </div>
                        </div>
                        {/* categories */}
                        <div className="w-full max-w-md pt-5">
                            <h5 className="text-2xl py-5">Categories</h5>
                            <ul>
                                <li className="flex justify-between"><a>Accessories</a><span>(7)</span></li>
                                <li className="flex py-2 justify-between"><a>Men</a><span>(3)</span></li>
                                <li className="flex justify-between"><a>Women</a><span>(3)</span></li>
                            </ul>
                        </div>
                        {/* Best seller cards */}
                        <div>
                            <h5 className="text-2xl py-5">Our Best Sellers</h5>
                            <div className="flex flex-col gap-3">
                                {/* card one */}
                                <div className="flex gap-4 py-4 border-b-2">
                                    <figure className="w-1/4">
                                        <img src={img1} className="" alt="" />
                                    </figure>
                                    <div>
                                        <h5>Dark Blue Denim Jeans</h5>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                        </div>
                                        <p>$150</p>
                                    </div>
                                </div>
                                {/* card two */}
                                <div className="flex gap-4 py-4 border-b-2">
                                    <figure className="w-1/4">
                                        <img src={img2} className="" alt="" />
                                    </figure>
                                    <div>
                                        <h5>Dark Blue Denim Jeans</h5>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                        </div>
                                        <p>$150</p>
                                    </div>
                                </div>
                                {/* card three */}
                                <div className="flex gap-4 py-4 border-b-2">
                                    <figure className="w-1/4">
                                        <img src={img3} className="" alt="" />
                                    </figure>
                                    <div>
                                        <h5>Dark Blue Denim Jeans</h5>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                        </div>
                                        <p>$150</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Shop card Products */}
                    <div className="max-w-4xl sm:p-24 px-5 py-10 my-16 lg:mx-2 mx-auto bg-white">
                        <p className="text-sm sm:text-left text-center">Home / Shop</p>
                        <div className="flex pt-4 justify-between flex-col sm:flex-row gap-3 items-center">
                            <p>Showing 1–12 of 31 results</p>

                        {/* Shortby field */}
                            <div>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option selected>Default sorting</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by latest</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        {/* cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-10">
                            {
                                cards.map((card, idx) => <FeaturedCards key={idx} card={card}></FeaturedCards>)
                            }

                        </div>
                        {/* Pagination */}
                        <div className="join flex justify-center">
                            <button className="join-item btn">«</button>
                            <button className="join-item btn">Page 22</button>
                            <button className="join-item btn">»</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;