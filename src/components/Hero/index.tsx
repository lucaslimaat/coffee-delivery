import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { HeroContainer, HeroContent, Icon, Item, Items } from './styles';

import heroImage from '../../assets/imagem-hero.svg'

export function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        <Items>
          <Item>
            <Icon bgColor="#F0A500"> {/* Passe a cor desejada para cada ícone */}
              <ShoppingCart size={16} weight="fill" />
            </Icon>
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <Icon bgColor="#574f4d">
              <Package size={16} weight="fill" />
            </Icon>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item>
            <Icon bgColor="#DBAC2C">
              <Timer size={16} weight="fill" />
            </Icon>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item>
            <Icon bgColor="#8047F8">
              <Coffee size={16} weight="fill" />
            </Icon>
            <p>O café chega fresquinho até você</p>
          </Item>
        </Items>
      </HeroContent>
      
      <img src={heroImage} alt="" />
    </HeroContainer>
  );
}
