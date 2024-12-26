// src/data/coffeeData.ts

import expresso from '../assets/Expresso.svg';
import expressoAmericano from '../assets/ExpressoAmericano.svg';
import expressoCremoso from '../assets/ExpressoCremoso.svg';
import expressoGelado from '../assets/ExpressoGelado.svg';
import cafeComLeite from '../assets/CafeComLeite.svg';
import latte from '../assets/Latte.svg';
import capuccino from '../assets/Capuccino.svg';
import macchiato from '../assets/Macchiato.svg';
import mocaccino from '../assets/Mocaccino.svg';
import chocolateQuente from '../assets/ChocolateQuente.svg';
import cubano from '../assets/Cubano.svg';
import havaiano from '../assets/Havaiano.svg';
import arabe from '../assets/Arabe.svg';
import irlandes from '../assets/Irlandes.svg';

type Coffee = {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  quantity?: number;
};


export const coffeeData: Coffee[] = [
  { id: 1, image: expresso, title: 'Expresso Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', tags: ['TRADICIONAL'] },
  { id: 2, image: expressoAmericano, title: 'Expresso Americano', description: 'Expresso diluído, menos intenso que o tradicional', tags: ['TRADICIONAL'] },
  { id: 3, image: expressoCremoso, title: 'Expresso Cremoso', description: 'Café expresso tradicional com espuma cremosa', tags: ['TRADICIONAL'] },
  { id: 4, image: expressoGelado, title: 'Expresso Gelado', description: 'Bebida preparada com café expresso e cubos de gelo', tags: ['TRADICIONAL', 'GELADO'] },
  { id: 5, image: cafeComLeite, title: 'Café com Leite', description: 'Meia a meia de expresso tradicional com leite vaporizado', tags: ['TRADICIONAL', 'COM LEITE'] },
  { id: 6, image: latte, title: 'Latte', description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', tags: ['TRADICIONAL', 'COM LEITE'] },
  { id: 7, image: capuccino, title: 'Capuccino', description: 'Bebida com canela feita de doses iguais de café, leite e espuma', tags: ['TRADICIONAL', 'COM LEITE'] },
  { id: 8, image: macchiato, title: 'Macchiato', description: 'Café expresso misturado com um pouco de leite quente e espuma', tags: ['TRADICIONAL', 'COM LEITE'] },
  { id: 9, image: mocaccino, title: 'Mocaccino', description: 'Café expresso com calda de chocolate, pouco leite e espuma', tags: ['TRADICIONAL', 'COM LEITE'] },
  { id: 10, image: chocolateQuente, title: 'Chocolate Quente', description: 'Bebida feita com chocolate dissolvido no leite quente e café', tags: ['ESPECIAL', 'COM LEITE'] },
  { id: 11, image: cubano, title: 'Cubano', description: 'Drink gelado de café expresso com rum, creme de leite e hortelã', tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'] },
  { id: 12, image: havaiano, title: 'Havaiano', description: 'Bebida adocicada preparada com café e leite de coco', tags: ['ESPECIAL'] },
  { id: 13, image: arabe, title: 'Árabe', description: 'Bebida preparada com grãos de café árabe e especiarias', tags: ['ESPECIAL'] },
  { id: 14, image: irlandes, title: 'Irlandês', description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', tags: ['ESPECIAL', 'ALCOÓLICO'] },
];
