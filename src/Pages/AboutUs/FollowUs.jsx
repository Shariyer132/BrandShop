import bannerImg from '../../assets/banner-05.jpg';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";

const FollowUs = () => {
    return (
        <div className="hero min-h-[calc(100vh-250px)] lg:bg-fixed mt-20" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="h-56 sm:h-full flex justify-center">
                <div className="sm:min-h-[calc(100vh-250px)] bg-base-200 flex flex-col justify-center items-center gap-8 p-6 sm:p-20">
                    <hr className="border-2 w-20 sm:mx-0 mx-auto border-blue-600" />
                    <h2 className='md:text-5xl text-2xl font-semibold'>Follow Us</h2>
                    <div className="grid grid-cols-4 gap-12 md:text-2xl">
                        <FaFacebookF  className='hover:text-blue-500 cursor-pointer'/>
                        <FaTwitter className='hover:text-blue-500 cursor-pointer' />
                        <FaInstagram className='hover:text-blue-500 cursor-pointer' />
                        <GrGooglePlus className='hover:text-blue-500 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowUs;