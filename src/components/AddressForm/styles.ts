import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${(props) => props.theme["base-button"]};
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${(props) => props.theme["gray-800"]};
  box-shadow: none; /* Remove qualquer sombra padrão */
  
  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
    outline: none; /* Remove o contorno padrão */
  }
`;

export const InputCep = styled(Input)`
 min-width: 12.5rem;
`

export const InputRua = styled(Input)`
  width: 100%;
`
export const InputCity = styled(Input)`
  min-width: 17.25rem;
`

export const InputUF = styled(Input)`
  width: 3.75rem;
`



