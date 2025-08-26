import { Product } from '../contexts/CartContext';
import dogCollarImg from '../assets/dog-collar.jpg';
import catToysImg from '../assets/cat-toys.jpg';
import foodBowlsImg from '../assets/food-bowls.jpg';
import dogTreatsImg from '../assets/dog-treats.jpg';
import petBedImg from '../assets/pet-bed.jpg';
import birdAccessoriesImg from '../assets/bird-accessories.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Collar Ajustable para Perros',
    price: 25.99,
    image: dogCollarImg,
    category: 'dogs'
  },
  {
    id: '2',
    name: 'Set de Juguetes para Gatos',
    price: 18.50,
    image: catToysImg,
    category: 'cats'
  },
  {
    id: '3',
    name: 'Comederos Premium de Acero',
    price: 32.75,
    image: foodBowlsImg,
    category: 'dogs'
  },
  {
    id: '4',
    name: 'Snacks Naturales para Perros',
    price: 12.99,
    image: dogTreatsImg,
    category: 'dogs'
  },
  {
    id: '5',
    name: 'Cama Suave para Mascotas',
    price: 45.00,
    image: petBedImg,
    category: 'cats'
  },
  {
    id: '6',
    name: 'Accesorios para Aves',
    price: 22.30,
    image: birdAccessoriesImg,
    category: 'others'
  }
];