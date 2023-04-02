import { Product } from '../interfaces';

export const products: Product[] = [
  {
    id: crypto.randomUUID(),
    title: 'Coffe Mug - Card',
    img: '/coffee-mug.png'
  },
  {
    id: crypto.randomUUID(),
    title: 'Coffe Mug - Meme',
    img: '/coffee-mug2.png'
  }
];
