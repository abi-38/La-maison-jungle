import { plantList } from "./plantList";
import PlantItem from "./PlantItem";
import './shoppingList.css';

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) => 
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


    return (
        <div className="shoppingList">
            
            <ul className='lmj-plant-categories' >
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(( {name, cover, id, light, water, isSpecialOffer, isBestSale} ) => (
                    <li key={id} className='lmj-plant-item'>
                        <PlantItem name={name} cover={cover} id={id} light={light} water={water} />
                        <div className='lmj-plant-offres' >
                            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                            {isBestSale && <span>🔥</span>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;
