
const FeaturedCards = ({card}) => {
    return (
        <div>
                        <figure><img src={card.image} alt="Product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.category}</p>
                            <p className="font-semibold">{card.price}</p>
                            {/* radio colour*/}
                            <div className="flex gap-1">
                                <input type="radio" name={card.id} className="radio" checked />
                                <input type="radio" name={card.id} className="radio" />
                                <input type="radio" name={card.id} className="radio" />
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