import styled from "styled-components";

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3.375rem;
  background-color: ${props => props.theme.background};
  width: 100%;
  height: auto;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 2rem;
  padding-bottom: 5rem;
`

export const ListCards = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
 gap: 2rem;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: auto;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-left-radius: 8px; 
  border-top-right-radius: 32px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 32px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
  
  p{
    font-size: 14;
    color: ${props => props.theme["base-label"]};
    text-align: center;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem; // Espaçamento horizontal entre as tags
  margin-bottom: 0.5rem; // Espaçamento inferior entre as tags e o restante do card
`;

export const Tags = styled.span`
  background-color: ${(props) => props.theme["yellow-light"]}; // Cor de fundo para destacar a tag
  color: ${(props) => props.theme["yellow-dark"]}; // Cor do texto da tag
  font-size: 0.625rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem; // Espaçamento interno para ajustar o tamanho da tag
  border-radius: 12px; // Arredondamento das bordas para o estilo de "pill"
  display: inline-block;
  white-space: nowrap; // Evita quebra de linha nas tags
`;

export const CoffeeTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
  font-family: 'Baloo 2';
  color: ${props => props.theme["base-subtitle"]};
  line-height: 130%;
  margin-bottom: 0.5rem;
`

export const PriceContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  margin-top: 2.063rem;
  margin-bottom: 1.25rem;
`

export const Price = styled.div`
  font-size: 1.5rem; // Tamanho padrão para o preço
  font-weight: bold; // Peso do preço
  font-family: 'Baloo 2';
  color: ${props => props.theme["base-text"]};

  span {
    font-size: 0.875rem; // Tamanho menor para o símbolo "R$"
    font-weight: normal; // Peso diferente se desejar
    margin-right: 0.25rem; // Espaço entre o símbolo e o número
    font-family: 'Roboto';
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const QuantityContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
`;

export const QuantityButton = styled.button`
  height: auto;
  background-color: ${(props) => props.theme["base-button"]};
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  transition: color 0.3s ease, background-color 0.3s ease;

  svg {
    color: ${(props) => props.theme["purple"]};
    transition: color 0.3s ease; // Transição suave para a cor do ícone
  }

  &:hover svg {
    color: ${(props) => props.theme["purple-dark"]}; 
  }
`;


export const QuantityDisplay = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme["base-title"]};
`;

export const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  transition: background-color 0.3s ease, color 0.3s ease; // Transição suave para as cores

  svg {
    color: ${(props) => props.theme["base-card"]};
    transition: color 0.3s ease; // Transição suave para a cor do ícone
  }

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
  }
`;