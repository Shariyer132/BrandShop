import Navbar from "../../../Shared/Navbar";
import Banner from "../Banner/Banner";
import bannerImg from '../../../assets/home-new-bg-free-img.jpg';
import Logos from "../LogoSection/Logos";
import StaticCard from "../StaticCardsSection/StaticCard";
import Featured from "../FeaturedProducts/Featured";
import LimitedEdition from "../SpecialEdition/LimitedEdition";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <div className="hero place-items-start min-h-screen bg-fixed" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="w-full">
                    <Navbar />
                    <Banner />
                </div>
            </div>
            <div className="max-w-7xl mx-auto my-24">
                <Logos />
                <StaticCard />
            </div>
            <div className="bg-[#F5F7F9]">
                <Featured />
                <LimitedEdition/>
                <Services/>
            </div>
        </div>
    );
};

export default Home;