import { useState } from "react";
import { useCart } from "../../contexts/cartContext";
import { SelectedCoffees } from "../../components/SelectCoffes";
import { AddressForm } from "../../components/AddressForm";
import { Bank, CreditCard, CurrencyDollar, MapPin, MapPinLine, Money, Timer } from "@phosphor-icons/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Address,
  ButtonContainer,
  CartContainer,
  CompletedOrder,
  Container,
  IconWrapper,
  ImgContainer,
  InfoItem,
  Payment,
  PaymentButton,
  SectionTitle,
  TitleConfirmed,
} from "./styles";
import Illustration from '../../assets/Illustration.svg';

interface AddressData {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = useCart();
  const [selected, setSelected] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [addressData, setAddressData] = useState<AddressData | null>(null);

  const handleSelect = (method: string) => {
    setSelected(method);
  };

  const handleValidateAddress = (isValid: boolean, data?: AddressData) => {
    setIsFormValid(isValid);
    if (data) {
      setAddressData(data);
    }
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case "credit":
        return "Cartão de Crédito";
      case "debit":
        return "Cartão de Débito";
      case "money":
        return "Dinheiro";
      default:
        return "";
    }
  };

  const handleConfirmOrder = () => {
    if (!isFormValid) {
      toast.error("Por favor, preencha corretamente o endereço de entrega.");
      return;
    }
    
    if (!selected) {
      toast.error("Por favor, selecione um método de pagamento.");
      return;
    }

    setIsOrderConfirmed(true);
    clearCart();
    toast.success("Pedido confirmado com sucesso!");
  };

  if (isOrderConfirmed && addressData) {
    return (
      <CartContainer>
        <TitleConfirmed>
          <h1>Uhu! Pedido Confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>

          <Container>
            <InfoItem>
              <IconWrapper color="#8047F8">
                <MapPin weight="fill"/>
              </IconWrapper>
              <div>
                <span>
                  Entrega em <strong>{addressData.rua}, {addressData.numero}</strong>
                  {addressData.complemento && ` - ${addressData.complemento}`}
                </span>
                <span>{addressData.bairro} - {addressData.cidade}, {addressData.uf}</span>
              </div>
            </InfoItem>
            <InfoItem>
              <IconWrapper color="#DBAC2C">
                <Timer weight="fill"/>
              </IconWrapper>
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </InfoItem>
            <InfoItem>
              <IconWrapper color="#C47F17">
                <CurrencyDollar />
              </IconWrapper>
              <div>
                <span>Pagamento na entrega</span>
                <strong>{getPaymentMethodText(selected)}</strong>
              </div>
            </InfoItem>
          </Container>
        </TitleConfirmed>
        
        <ImgContainer>
          <img src={Illustration} alt="Pedido confirmado" />
        </ImgContainer> 
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <CompletedOrder>
        <h2>Complete seu pedido</h2>

        <Address>
          <SectionTitle>
            <MapPinLine size={22} color="#c47f17" />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </SectionTitle>
          <AddressForm onValidate={handleValidateAddress} />
        </Address>

        <Payment>
          <SectionTitle>
            <CurrencyDollar size={22} color="#8047f8" />
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </SectionTitle>
          
          <ButtonContainer>
            <PaymentButton
              type="button"
              isSelected={selected === "credit"}
              onClick={() => handleSelect("credit")}
            >
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </PaymentButton>
            
            <PaymentButton
              type="button"
              isSelected={selected === "debit"}
              onClick={() => handleSelect("debit")}
            >
              <Bank size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </PaymentButton>
            
            <PaymentButton
              type="button"
              isSelected={selected === "money"}
              onClick={() => handleSelect("money")}
            >
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </PaymentButton>
          </ButtonContainer>
        </Payment>
      </CompletedOrder>

      <SelectedCoffees
        cart={cart}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
        onRemove={removeFromCart}
        itemPrice={9.9}
        deliveryFee={3.5}
        onConfirmOrder={handleConfirmOrder}
      />
    </CartContainer>
  );
}