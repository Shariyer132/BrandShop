import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCards from "../../../Components/FeaturedCards/FeaturedCards";

const Featured = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('featuredCards.json')
            .then(data => {
                setCards(data.data)
            })
    }, [cards])

    return (
        <div className="py-28 max-w-[1400px] mx-auto">
            <h2 className="lg:text-5xl text-3xl py-10 font-semibold text-center">Featured Products</h2>
            <hr className=" w-28 mx-auto border-2 border-blue-700 " />
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 place-items-center pt-12 mx-5">
                {
                    cards.map((card, idx) => <FeaturedCards key={idx} card={card}></FeaturedCards>)
                }
            </div>
        </div>
    );
};

export default Featured;