import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  CartItem,
  ItemActions,
  ItemDetails,
  ItemsContainer,
  QuantityButton,
  QuantityContainer,
  QuantityDisplay,
  RemoveButton,
  SummaryContainer,
  SummaryLine,
  ConfirmButton,
  SelectedCoffesSection,
} from "./styles";

type CartItemType = {
  id: number;
  title: string;
  image: string;
  quantity: number;
};

interface SelectedCoffeesProps {
  cart: CartItemType[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
  itemPrice: number;
  deliveryFee: number;
  onConfirmOrder: () => void;
}

export function SelectedCoffees({
  cart,
  onIncrement,
  onDecrement,
  onRemove,
  itemPrice,
  deliveryFee,
  onConfirmOrder,
}: SelectedCoffeesProps) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity * itemPrice,
    0
  );
  const totalPrice = totalItems + deliveryFee;

  return (
    <SelectedCoffesSection>
      <h2>Cafés selecionados</h2>
      <ItemsContainer>
        {cart.map(({ id, title, image, quantity }) => (
          <CartItem key={id}>
            <ItemDetails>
              <img src={image} alt={title} />
              <div>
                <p className="title">{title}</p>
                <ItemActions>
                  <QuantityContainer>
                    <QuantityButton
                      onClick={() => onDecrement(id)}
                      disabled={quantity <= 1}
                    >
                      <Minus size={14} />
                    </QuantityButton>
                    <QuantityDisplay>{quantity}</QuantityDisplay>
                    <QuantityButton onClick={() => onIncrement(id)}>
                      <Plus size={14} />
                    </QuantityButton>
                  </QuantityContainer>

                  <RemoveButton onClick={() => onRemove(id)}>
                    <Trash size={16} color="#8047F8" />
                    REMOVER
                  </RemoveButton>
                </ItemActions>
              </div>
              <p className="price">R$ {(quantity * itemPrice).toFixed(2)}</p>
            </ItemDetails>
          </CartItem>
        ))}

        <SummaryContainer>
          <SummaryLine>
            <span className="first-span">Total de itens</span>
            <span>R$ {totalItems.toFixed(2)}</span>
          </SummaryLine>
          <SummaryLine>
            <span className="first-span">Entrega</span>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </SummaryLine>
          <SummaryLine className="total">
            <span>Total</span>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </SummaryLine>
        </SummaryContainer>

        <ConfirmButton onClick={onConfirmOrder}>
          CONFIRMAR PEDIDO
        </ConfirmButton>
      </ItemsContainer>
    </SelectedCoffesSection>
  );
}
