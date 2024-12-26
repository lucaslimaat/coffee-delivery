import { Actions, CartButton, CoffeeCard, CoffeeListContainer, CoffeeTitle, ListCards, Price, PriceContent, QuantityButton, QuantityContainer, QuantityDisplay, Tags, TagsContainer } from "./styles";
import { useState } from "react";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { coffeeData } from "../../data/coffeeData";
import { useCart } from "../../contexts/cartContext";

type Coffee = {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  quantity?: number;
};

const COFFEE_PRICE = 9.90;

export function CoffeeList() {
  const { addToCart } = useCart(); // Pega a função do contexto diretamente

  const addProductToCart = (coffee: Coffee) => {
    addToCart(coffee, quantities[coffee.id]); // Passa a quantidade junto com o café
  };
  

  const [quantities, setQuantities] = useState<{ [id: number]: number }>(
    coffeeData.reduce((acc, coffee) => {
      acc[coffee.id] = 1;
      return acc;
    }, {} as { [id: number]: number })
  );

  const increment = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrement = (id: number) => {
    setQuantities((prevQuantities) => {
      if (prevQuantities[id] > 1) {
        return {
          ...prevQuantities,
          [id]: prevQuantities[id] - 1,
        };
      }
      return prevQuantities;
    });
  };

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <ListCards>
        {coffeeData.map((coffee) => (
          <CoffeeCard key={coffee.id}>
            <img src={coffee.image} alt={coffee.title} />
            <TagsContainer>
              {coffee.tags.map((tag, index) => (
                <Tags key={index}>{tag}</Tags>
              ))}
            </TagsContainer>
            <CoffeeTitle>{coffee.title}</CoffeeTitle>
            <p>{coffee.description}</p>

            <PriceContent>
              <Price>
                <span>R$</span>{COFFEE_PRICE.toFixed(2)}
              </Price>
              <Actions>
                <QuantityContainer>
                  <QuantityButton onClick={() => decrement(coffee.id)} disabled={quantities[coffee.id] <= 1}>
                    <Minus size={14} />
                  </QuantityButton>
                  <QuantityDisplay>{quantities[coffee.id]}</QuantityDisplay>
                  <QuantityButton onClick={() => increment(coffee.id)}>
                    <Plus size={14} />
                  </QuantityButton>
                </QuantityContainer>
                <CartButton onClick={() => addProductToCart(coffee)}>
                  <ShoppingCartSimple size={22} weight="fill" />
                </CartButton>
              </Actions>
            </PriceContent>
          </CoffeeCard>
        ))}
      </ListCards>
    </CoffeeListContainer>
  );
}
