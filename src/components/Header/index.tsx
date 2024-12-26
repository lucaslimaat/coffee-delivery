// src/components/Header.tsx

import { HeaderContainer, LocationContainer, Badge, NavLink } from "./styles";
import logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useCart } from "../../contexts/cartContext";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <NavLink href="/">
        <img src={logo} alt="" />
      </NavLink>
      
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <p>Belo Horizonte, MG</p>
        </LocationContainer>
        <a href="/cart">
          <ShoppingCart size={22} weight="fill" />
          {cartQuantity > 0 && <Badge>{cartQuantity}</Badge>}
        </a>
      </nav>
    </HeaderContainer>
  );
}
