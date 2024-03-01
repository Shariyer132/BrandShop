import { RxCrossCircled } from "react-icons/rx";
import NavbarTwo from "../../Shared/NavbarTwo/NavbarTwo";
import img1 from '../../assets/product-accessory1-300x300.jpg';
import { Link } from "react-router-dom";

const CartPage = () => {
    return (
        <>
            <NavbarTwo />
            <div className="bg-[#F5F7F9] py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl text-center pb-16 font-semibold">Cart</h2>
                    {/* table */}
                    <div className="overflow-x-auto mx-5">
                        {/* large veiw */}
                        <div className="overflow-x-auto hidden lg:block">
                            <table className="table border">
                                {/* head */}
                                <thead className="bg-[#FBFBFB]">
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th className="text-xl">
                                            <RxCrossCircled className="cursor-pointer" />
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-[72px] h-[72px]">
                                                    <img src={img1} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Zemlak, Daniel and Leannon</td>
                                        <td>$150.00</td>
                                        <td>
                                            <label>
                                                <input type="number" value={1} className=" rounded-none max-w-14 text-center focus:outline-dotted h-9" />
                                            </label>
                                        </td>
                                        <td>$300.00</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th className="text-xl">
                                            <RxCrossCircled className="cursor-pointer" />
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-[72px] h-[72px]">
                                                    <img src={img1} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Zemlak, Daniel and Leannon</td>
                                        <td>$150.00</td>
                                        <td>
                                            <label>
                                                <input type="number" value={1} className=" rounded-none max-w-14 text-center focus:outline-dotted h-9" />
                                            </label>
                                        </td>
                                        <td>$300.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* small view table */}
                        <table className="table border lg:hidden">
                            {/* card one */}
                            <tbody className="border">
                                {/* row 1 */}
                                <tr className="">
                                    <th></th>
                                    <td className="text-xl flex justify-end">
                                        <RxCrossCircled className="cursor-pointer" />
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>
                                        <div className="flex justify-center w-full">
                                            <div className="w-[72px] h-[72px]">
                                                <img src={img1} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>Product</th>
                                    <td className="text-end">Zemlak, Daniel and Leannon</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>Price</th>
                                    <td className="text-end">$150.00</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <th>Quantity</th>
                                    <td className="text-end">
                                        <label>
                                            <input type="number" value={1} className=" rounded-none max-w-14 text-center focus:outline-dotted h-9" />
                                        </label>
                                    </td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    <th>Subtotal</th>
                                    <td className="text-end">$300.00</td>
                                </tr>
                            </tbody>
                            {/* card one */}
                            <tbody>
                                {/* row 1 */}
                                <tr className="">
                                    <th></th>
                                    <td className="text-xl flex justify-end">
                                        <RxCrossCircled className="cursor-pointer" />
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>
                                        <div className="flex justify-center w-full">
                                            <div className="w-[72px] h-[72px]">
                                                <img src={img1} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>Product</th>
                                    <td className="text-end">Zemlak, Daniel and Leannon</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>Price</th>
                                    <td className="text-end">$150.00</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <th>Quantity</th>
                                    <td className="text-end">
                                        <label>
                                            <input type="number" value={1} className=" rounded-none max-w-14 text-center focus:outline-dotted h-9" />
                                        </label>
                                    </td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    <th>Subtotal</th>
                                    <td className="text-end">$300.00</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* Coupon input and buttons */}
                        <div className="flex justify-between flex-col md:flex-row gap-5 p-4 border-b border-x">
                            <div className="flex flex-col sm:flex-row gap-5">
                                <input type="text" placeholder="Coupon Code" className="input input-bordered join-item" />
                                <div>
                                    <button className="btn btn-info text-white ">APPLY COUPON</button>
                                </div>
                            </div>
                            <button className="btn btn-info text-white">UPDATE CART</button>

                        </div>
                    </div>
                    {/* check out */}
                    <div className="flex">
                        <div className="lg:w-1/2"></div>
                        <div className="lg:w-1/2 w-full my-10 border flex mx-5 flex-col gap-4">
                            <h5 className="text-xl font-semibold border-b py-4 pl-5 bg-[#FBFBFB]">Card totals</h5>
                            <div className="flex flex-col px-8 gap-4">
                                <div className="flex lg:justify-start justify-between">
                                    <p className="lg:w-1/2">Subtotal</p>
                                    <span className="lg:w-1/2">$450.00</span>
                                </div>
                                <hr />
                                <div className="flex lg:justify-start justify-between">
                                    <p className="lg:w-1/2">Total</p>
                                    <span className="lg:w-1/2">$450.00</span>
                                </div>
                                <hr />
                                <button className="btn btn-info text-white mb-4"><Link to="/checkout">CHECKOUT</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;