
const Banner = () => {
    return (
        <div className="hero md:place-items-start lg:px-28 lg:py-28 md:px-16 py-16">
            <div className="hero-content md:text-left text-center">
                <div className="flex flex-col justify-center max-w-xl">
                    <h1 className="lg:text-6xl md:text-5xl text-4xl text-white font-semibold md:font-bold">Raining Offers For Hot Summer!</h1>
                    <p className="py-9 sm:text-2xl text-lg font-semibold text-white">25% Off On All Products</p>
                    <div className="flex gap-4 flex-col md:flex-row">
                        <button className="btn rounded-none hover:bg-black hover:text-white hover:border-black">SHOP NOW</button>
                        <button className="btn rounded-none btn-outline text-white hover:bg-white hover:text-black hover:border-white">FIND MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;