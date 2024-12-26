import styled from "styled-components";

export const SelectedCoffesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.938rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${props => props.theme["base-subtitle"]};
    line-height: 130%;
  }
`

export const ItemsContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  border-top-left-radius: 8px; 
  border-top-right-radius: 32px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 32px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-bottom: 1px solid #e0e0e0;

  &:first-of-type {
    padding-bottom: 1.5rem;
  }

  &:not(:first-of-type) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;


export const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }

  .title {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
  }

  .price {
    margin-left: 1.875rem;
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const QuantityContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 2rem;

  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
`;

export const QuantityButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: ${(props) => props.theme["base-button"]};
  border: none;
  cursor: pointer;

  /* Remove o outline no botão */
  outline: none; 
  transition: color 0.3s ease, background-color 0.3s ease;

  svg {
    color: ${(props) => props.theme["purple"]};
    transition: color 0.3s ease;

    /* Remove o outline no ícone SVG */
    outline: none; 
  }

  &:hover svg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  &:focus,
  &:focus-visible {
    /* Remove qualquer estilo de foco do botão */
    outline: none;
    box-shadow: none; /* Garante que nenhuma sombra seja aplicada */
  }
`;




export const QuantityDisplay = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme["base-title"]};
`;

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: none;
  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
  font-size: 0.75rem;
  color:  ${(props) => props.theme["base-text"]};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};

  .first-span {
    font-size: 0.875rem;
  }

  &.total {
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ConfirmButton = styled.button`
  background: #dbac2c;
  color: #fff;
  border: none;
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background: #c47f17;
  }
`;