import monstera from '../assets/monstera.jpg';
import aloe from '../assets/aloe.jpg';
import basilique from '../assets/basilique.jpg';
import ficus_lyrata from '../assets/ficus_lyrata.jpeg';
import géranium from '../assets/géranium.jpg';
import olivier from '../assets/olivier.jpg';
import pothos_argenté from '../assets/pothos_argenté.jpg';
import succulente from '../assets/succulente.png';
import yucca from '../assets/yucca.jpg';

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		isBestSale: true,
		isSpecialOffer: true
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: ficus_lyrata
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos_argenté
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: yucca
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: géranium
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: basilique
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: aloe
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulente
	}
]