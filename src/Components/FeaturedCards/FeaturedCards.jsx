import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

const FeaturedCards = ({ card }) => {
    return (
        <div className="py-5">
            <figure className="relative group cursor-pointer">
                <Link to="/product">
                    <img src={card.image} alt="Product" />
                    <button className="absolute hidden group-hover:grid top-2 btn-sm right-2 btn btn-circle text-lg">
                        <Link className="tooltip tooltip-left" data-tip="Add to cart"><GiShoppingBag /></Link>
                    </button>
                </Link>
            </figure>
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium pt-2">{card.title}</h2>
                <p>{card.category}</p>
                <p className="font-semibold pb-2">{card.price}</p>
                {/* radio colour*/}
                <div className="flex gap-1">
                    <input type="radio" name={12} className="radio" checked />
                    <input type="radio" name={11} className="radio" />
                    <input type="radio" name={13} className="radio" />
                </div>
                {/* rating */}
                <div className="rating rating-sm py-2">
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