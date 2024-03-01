import teamImg from '../../assets/team2-free-img.png';

const OurTeam = () => {
    return (
        <div className='max-w-4xl mx-auto my-20'>
            <div className='flex flex-col text-center gap-5 px-5 py-5'>
                <hr className="border-2 w-20 mx-auto border-blue-600" />
                <h5 className='text-2xl font-medium'>A Few Worlds About</h5>
                <h2 className='md:text-5xl text-3xl font-semibold'>Our Team</h2>
                <p className='leading-loose'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 px-10 gap-5 my-10'>
                {/* card one */}
                <div className="card bg-[#F5F7F9] rounded-md pt-5">
                    <figure className="w-2/5 mx-auto">
                        <img src={teamImg} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Harvey Spector</h2>
                        <p className='text-lg'>Founder - CEO</p>
                    </div>
                </div>
                {/* card one */}
                <div className="card bg-[#F5F7F9] rounded-md pt-5">
                    <figure className="w-2/5 mx-auto">
                        <img src={teamImg} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Harvey Spector</h2>
                        <p className='text-lg'>Founder - CEO</p>
                    </div>
                </div>
                {/* card one */}
                <div className="card bg-[#F5F7F9] rounded-md pt-5">
                    <figure className="w-2/5 mx-auto">
                        <img src={teamImg} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Harvey Spector</h2>
                        <p className='text-lg'>Founder - CEO</p>
                    </div>
                </div>
                {/* card one */}
                <div className="card bg-[#F5F7F9] rounded-md pt-5">
                    <figure className="w-2/5 mx-auto">
                        <img src={teamImg} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Harvey Spector</h2>
                        <p className='text-lg'>Founder - CEO</p>
                    </div>
                </div>
                {/* card one */}
                <div className="card bg-[#F5F7F9] rounded-md pt-5">
                    <figure className="w-2/5 mx-auto">
                        <img src={teamImg} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Harvey Spector</h2>
                        <p className='text-lg'>Founder - CEO</p>
                    </div>
                </div>
                {/* card one */}
                <div className="card bg-[#F5F7F9] rounded-md pt-5">
                    <figure className="w-2/5 mx-auto">
                        <img src={teamImg} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Harvey Spector</h2>
                        <p className='text-lg'>Founder - CEO</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurTeam;