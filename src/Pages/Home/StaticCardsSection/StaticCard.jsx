import axios from "axios";
import { useEffect, useState } from "react";

const StaticCard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('staticCard.json')
            .then(data => {
                setCards(data.data)
            })
    }, [cards])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mx-5">
            {
                cards.map((card, idx) => <div key={idx} className="card min-h-[480px] bg-center bg-cover bg-base-100 shadow-xl image-full" style={{ backgroundImage: `url(${card.image})` }}>
                    <div className="card-body sm:top-56 top-48">
                        <div className="flex flex-col items-baseline gap-4">
                            <h2 className="text-2xl font-semibold">{card.header}</h2>
                            <p>{card.description}</p>
                            <div className="card-actions justify-end pt-3">
                            <button className="btn rounded-none hover:bg-black hover:text-white hover:border-black">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default StaticCard;