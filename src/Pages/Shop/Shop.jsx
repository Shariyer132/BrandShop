import { FaAngleRight } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
import img1 from '../../assets/tshirt7-300x300.jpg';
import img2 from '../../assets/product-hoodie2-300x300.jpg';
import img3 from '../../assets/product-m-jeans2-300x300.jpg';
import NavbarTwo from "../../Shared/NavbarTwo/NavbarTwo";

const Shop = () => {
    return (
        <>
       <div>
       <NavbarTwo/>
       </div>
            <div className="bg-[#F5F7F9]">
                <div className="flex flex-col lg:flex-row ">
                    {/* filter functions */}
                    <div className="lg:w-1/4 flex md:p-5 flex-col items-center gap-3 px-5 pt-5">
                        {/* search bar */}
                        <div className="join py-5 pl-5">
                            <input type="text" placeholder="Search products..." className="input input-bordered join-item" />
                            <button className="btn btn-info text-white join-item"><FaAngleRight /></button>
                        </div>
                        {/* filter by price */}
                        <div className="w-full max-w-md">
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
                        {/* Shortby field */}
                        {/* <div className="w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text font-medium">Short By</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Normal</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                        </div> */}
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

                    <div className="lg:w-3/4 bg-white">
                        {/* cards */}
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:py-10">
                            {/* card one */}
                            <div className="card bg-base-100 shadow-lg">
                                <figure className="px-10 pt-10">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes</h2>
                                    <p><span className="font-medium">Price:</span> $500</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            {/* card two */}
                            <div className="card bg-base-100 shadow-lg">
                                <figure className="px-10 pt-10">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes</h2>
                                    <p><span className="font-medium">Price:</span> $500</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            {/* card three */}
                            <div className="card bg-base-100 shadow-lg">
                                <figure className="px-10 pt-10">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes</h2>
                                    <p><span className="font-medium">Price:</span> $500</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Add to Cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Pagination */}
                        <div className="join flex justify-center p-6">
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