import styled from "styled-components";

export const CartContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.5rem;
  padding-bottom: 5rem;
`

export const TitleConfirmed = styled.div`

  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${props => props.theme["yellow-dark"]};
    line-height: 130%;
  }

  h2 {
    font-size: 1.25rem;
    font-family: 'Roboto';
    color: ${props => props.theme["base-subtitle"]};
    line-height: 130%;
  }
`

export const ImgContainer = styled.div`
margin-top: 5rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid transparent;
  border-top-left-radius: 8px; 
  border-top-right-radius: 32px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 32px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(90deg, orange, purple) border-box;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    flex-shrink: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
  }
`;

export const IconWrapper = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  svg {
    color: white;
    width: 1rem;
    height: 1rem;
  }
`;

export const CompletedOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.938rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${props => props.theme["base-subtitle"]};
    line-height: 130%;
  }
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  

  h3 {
    font-size: 1rem;
    font-family: 'Roboto';
    color: ${props => props.theme["base-subtitle"]};
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    font-family: 'Roboto';
    color: ${props => props.theme["base-text"]};
    line-height: 130%;
  }
`

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
`

export const Payment = styled.div`
display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  

  h3 {
    font-size: 1rem;
    font-family: 'Roboto';
    color: ${props => props.theme["base-subtitle"]};
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    font-family: 'Roboto';
    color: ${props => props.theme["base-text"]};
    line-height: 130%;
    width: 33.125rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

interface PaymentButtonProps {
  isSelected: boolean;
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) =>
    props.isSelected ? props.theme["purple-light"] : props.theme["base-button"]};
  cursor: pointer;
  font-size: 0.75rem;
  color: ${(props) => props.theme["base-text"]};
  transition: all 0.2s;
  border: none;
  outline: none; 

  ${(props) =>
    props.isSelected &&
    `
    box-shadow: inset 0 0 0 1px ${props.theme["purple"]};
  `}

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  &:focus {
    box-shadow: inset 0 0 0 1px ${(props) => props.theme["purple"]};
  }

  svg {
    transition: color 0.2s;
  }
`;

export const ConfirmationScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  h1 {
    color: #34a853;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    background-color: #34a853;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #2c8f4a;
    }
  }
`;