import { Link } from "react-router-dom";
import NavbarTwo from "../../Shared/NavbarTwo/NavbarTwo";
import { FaLocationDot } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedCards from "../../Components/FeaturedCards/FeaturedCards";
import img1 from '../../assets/product-accessory2-300x300.jpg';

const SingleDetailedCard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('featuredCards.json')
            .then(data => {
                setCards(data.data)
            })
    }, [cards])

    const reviewsAvailble = true;

    return (
        <div className="bg-[#F5F7F9]">
            <NavbarTwo />
            <div className="max-w-7xl lg:mx-auto mx-5">
                <div className="flex flex-col lg:flex-row gap-16 py-10">
                    <div className="lg:w-1/2">
                        <figure>
                            <img src={img1} className="w-full" alt="" />
                        </figure>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="text-sm breadcrumbs py-4">
                            <ul>
                                <li className="hover:text-sky-400"><a>Home</a></li>
                                <li className="hover:text-sky-400"><a>Women</a></li>
                                <li>Anchor Bracelet</li>
                            </ul>
                        </div>
                        <p><Link className="hover:text-sky-400">Accessories</Link>, <Link className="hover:text-sky-400">Women</Link></p>
                        <h3 className="text-4xl py-3">Anchor Bracelet</h3>
                        <h4 className="text-2xl font-medium">$150.00</h4>
                        <p className="py-5">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed</p>
                        <hr />
                        <div className="flex gap-3 py-4 items-center">
                            <input type="number" value={1} className=" rounded-none max-w-14 text-center focus:outline-dotted h-9" />
                            <button className="btn btn-info btn-sm rounded-none text-white btn-wide">ADD TO CART</button>
                        </div>
                        <hr />
                        <div className="flex gap-3 py-4 items-center">
                            <p>SKU: N/A</p>
                            <p>Categories: Accessories, Women</p>
                        </div>
                    </div>
                </div>
                {/* reviews and form */}
                <div tabIndex={0} className="collapse collapse-open">
                    <div className="collapse-title text-blue-600">
                        Description Reviews <span>(0)</span>
                        <hr className='border-1 my-2' />
                    </div>
                    <div className="collapse-content">
                        <div>
                            {
                                reviewsAvailble ? <>
                                    {/* reviews */}
                                    <div className='pb-10 flex flex-col gap-7'>
                                        {/* review one */}
                                        <div className='flex justify-between relative'>
                                            <div className='flex items-center gap-7 relative'>
                                                <div className='p-4 bg-slate-200 rounded-full'><FaLocationDot /></div>
                                                <div className='flex flex-col gap-2'>
                                                    <p className='font-medium'>Shariyer Hossain</p>
                                                    <p>Very Nice Headphone.</p>
                                                    <div className='flex items-center gap-1'>
                                                        <div className='flex items-center gap-1'>
                                                            {
                                                                reviewsAvailble ?
                                                                    <><button className='btn btn-sm rounded-full text-lg btn-ghost'><BiSolidLike /></button></>
                                                                    :
                                                                    <><button className='btn btn-sm rounded-full text-lg btn-ghost'><BiLike /></button></>
                                                            }
                                                            <span>13</span>
                                                        </div>
                                                        <div>
                                                            {
                                                                reviewsAvailble ? <>
                                                                    <button className='btn btn-sm rounded-full text-lg btn-ghost'><BiSolidDislike /></button>
                                                                </>
                                                                    :
                                                                    <>
                                                                        <button className='btn btn-sm rounded-full text-lg btn-ghost'><BiDislike /></button>
                                                                    </>
                                                            }
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown dropdown-left dropdown-end">
                                                <div tabIndex={0} role="button" className="cursor-pointer m-1"><BsThreeDotsVertical /></div>
                                                <ul tabIndex={0} className="dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li><a>Item 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* review two */}
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-7'>
                                                <div className='p-4 bg-slate-200 rounded-full'><FaLocationDot /></div>
                                                <div className='flex flex-col gap-2'>
                                                    <p className='font-medium'>Shariyer Hossain</p>
                                                    <p>Very Nice Headphone.</p>
                                                    <div className='flex items-center gap-1'>
                                                        <div className='flex items-center gap-1'>
                                                            {
                                                                reviewsAvailble ?
                                                                    <><button className='btn btn-sm rounded-full text-lg btn-ghost'><BiSolidLike /></button></>
                                                                    :
                                                                    <><button className='btn btn-sm rounded-full text-lg btn-ghost'><BiLike /></button></>
                                                            }
                                                            <span>13</span>
                                                        </div>
                                                        <div>
                                                            {
                                                                reviewsAvailble ? <>
                                                                    <button className='btn btn-sm rounded-full text-lg btn-ghost'><BiSolidDislike /></button>
                                                                </>
                                                                    :
                                                                    <>
                                                                        <button className='btn btn-sm rounded-full text-lg btn-ghost'><BiDislike /></button>
                                                                    </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown dropdown-left dropdown-end">
                                                <div tabIndex={0} role="button" className="cursor-pointer m-1"><BsThreeDotsVertical /></div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Report</a></li>
                                                    <li><a>Item 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                    : <>
                                        <p>There are no reviews yet.</p>
                                        <p className='font-medium pb-2 pt-4'>Be the first to review "Digital Headphone"</p>
                                    </>
                            }
                        </div>
                        <p>Your email address will not be published. Required fields are marked*</p>
                        {/* form */}
                        <div className="card shrink-0 py-5 w-full max-w-2xl">
                            <h2 className='text-center font-semibold text-xl'>Place a review</h2>
                            <form>
                                {/* name */}
                                <div className="form-control py-3">
                                    <label className="label">
                                        <span className="font-semibold">Name *</span>
                                    </label>
                                    <input type="name" className="input input-bordered rounded-none" required />
                                </div>
                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold">Email *</span>
                                    </label>
                                    <input type="email" className="input input-bordered rounded-none" required />
                                </div>
                                {/* rating */}
                                <div className='flex flex-col py-3 gap-2'>
                                    <span className=' font-semibold'>Your rating</span>
                                    <div className="rating rating-sm">
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                {/* Review */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-semibold">Your review *</span>
                                    </label>
                                    <textarea type="email" cols={10} className="textarea textarea-bordered rounded-none" required />
                                </div>
                                <div className="mt-6">
                                    <button className="btn btn-info text-white">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* related cards */}

                <div>
                    <h4 className="text-5xl pb-6 pt-10 font-medium">Related Products</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {
                            cards.splice(1, 4).map((card, idx) => <FeaturedCards key={idx} card={card}></FeaturedCards>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetailedCard;