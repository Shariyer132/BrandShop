import img1 from '../../../assets/globe-free-img.png';
import img2 from '../../../assets/quality-free-img.png';
import img3 from '../../../assets/lock-free-img.png';
import img4 from '../../../assets/tag-free-img.png';


const Services = () => {
    return (
        <div className="py-32 max-w-7xl gap-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* card one */}
            <div className="card">
                <figure className="">
                    <img src={img1} alt="world" className="rounded-xl max-w-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Worldwide Shipping</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            {/* card two */}
            <div className="card">
                <figure className="">
                    <img src={img2} alt="world" className="rounded-xl max-w-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Worldwide Shipping</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            {/* card three */}
            <div className="card">
                <figure className="">
                    <img src={img3} alt="world" className="rounded-xl max-w-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Worldwide Shipping</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            {/* card four */}
            <div className="card">
                <figure className="">
                    <img src={img4} alt="world" className="rounded-xl max-w-16" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Worldwide Shipping</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;