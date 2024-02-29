import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

const FeaturedCards = ({ card }) => {
    return (
        <div>
            <figure className="relative group cursor-pointer">
                <img src={card.image} alt="Product" />
                <button className="absolute hidden group-hover:grid top-2 btn-sm right-2 btn btn-circle text-lg">
                <Link><GiShoppingBag/></Link>
                </button>
            </figure>
            <div className="card-body sm:items-start items-center ">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.category}</p>
                <p className="font-semibold">{card.price}</p>
                {/* radio colour*/}
                <div className="flex gap-1">
                    <input type="radio" name={12} className="radio" checked />
                    <input type="radio" name={11} className="radio" />
                    <input type="radio" name={13} className="radio" />
                </div>
                {/* rating */}
                <div className="rating rating-sm">
                    <input type="radio" name={card.id} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={card.id} className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name={card.id} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={card.id} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={card.id} className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedCards;