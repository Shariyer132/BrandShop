import Navbar from "../../Shared/Navbar";
import bannerImg from '../../assets/banner-04.jpg';
import slideImg from '../../assets/slide-image-free-img.jpg';
import Services from "../Home/Services/Services";
import FollowUs from "./FollowUs";
import OurTeam from "./OurTeam";

const AboutUs = () => {
    return (
        <div>
            <div className="hero place-items-start min-h-[calc(100vh-160px)] md:bg-fixed" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="w-full">
                    <Navbar />
                    <div className="flex justify-center py-32">
                        <h2 className="md:text-6xl md:font-bold text-4xl font-semibold text-white">About Us</h2>
                    </div>
                </div>
            </div>
            <div className="bg-[#F5F7F9] py-14">
                <div className="max-w-[1400px] bg-white lg:mx-auto md:mx-10 mx-5 flex gap-5 items-center lg:flex-row flex-col lg:py-0">
                    <div className="lg:w-1/2 lg:max-w-xl p-10 lg:mx-auto">
                        <hr className="border-2 w-20 sm:mx-0 mx-auto border-blue-600" />
                        <h3 className="text-3xl font-semibold lg:text-5xl py-5 lg:py-9 text-center sm:text-left">Who We Are</h3>
                        <p className="text-center sm:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                    </div>
                    <figure className="lg:w-1/2">
                        <img src={slideImg} alt="" />
                    </figure>
                </div>
            </div>
            <OurTeam />
            <FollowUs/>
            <Services/>
        </div>
    );
};

export default AboutUs;