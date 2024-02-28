import bannerImg from '../../../assets/banner-03.jpg';

const LimitedEdition = () => {
    return (
        <div className='px-2'>
            <div className="flex flex-col justify-center lg:pl-28 md:pl-10 bg-cover bg-center  max-w-[1400px] min-h-[calc(100vh-190px)] mx-auto md:bg-fixed" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content max-w-2xl md:text-left text-center text-white">
                <div className="flex flex-col py-3">
                    <h5 className='md:text-2xl text-xl font-semibold'>Limited Time Offer</h5>
                    <h1 className="my-5 md:text-5xl text-4xl font-semibold">Special Edition</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h5 className='md:text-2xl mb-5 text-xl font-semibold'>Buy This T-shirt At 20% Discount, Use Code OFF20</h5>
                   <div> <button className="btn rounded-none hover:bg-black hover:text-white hover:border-black">SHOP NOW</button></div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LimitedEdition;