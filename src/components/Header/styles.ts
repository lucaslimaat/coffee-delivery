import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.background};
  width: 100%;
  height: 6.5rem;
  padding-left: 10rem;
  padding-right: 10rem;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    a {
      padding: 0.5rem;
      border-radius: 6px;

      display: flex;
      justify-content: center;
      align-items: center;
      
      background-color: ${props => props.theme["yellow-light"]};
      color: ${props => props.theme["yellow-dark"]};
    }
  }
`


export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;

  &:focus {
    outline: none; 
  }
`;

export const LocationContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme["purple-light"]};
  border-radius: 6px;
  font-size: 14px;
  color: ${props => props.theme.purple};
`

export const Badge = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: white;
  border-radius: 50%;
  height: 1.25rem;
  width: 1.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  margin-top: -2rem;
  margin-left: 2rem;
`;