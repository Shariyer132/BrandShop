import Navbar from "../../Shared/Navbar";
import bannerImg from '../../assets/banner-06.jpg';
import Form from "./Form";
import Help from "./Help";

const ContactUs = () => {
    return (
        <div>
            <div className="hero place-items-start min-h-[calc(100vh-160px)] md:bg-fixed" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="w-full">
                    <Navbar />
                    <div className="flex justify-center py-32">
                        <h2 className="md:text-6xl md:font-bold text-4xl font-semibold text-white">Contact Us</h2>
                    </div>
                </div>
            </div>
            <div className="bg-[#F6F7F9]">
                <Help />
                <Form />
            </div>
        </div>
    );
};

export default ContactUs;