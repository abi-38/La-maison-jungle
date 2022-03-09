import './PlantItem.css';
import CareScale from './CareScale';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {

    return (
        <li className='lmj-plant-item' onClick={() => handleClick}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img src={cover} className="lmj-plant-item-cover" alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem