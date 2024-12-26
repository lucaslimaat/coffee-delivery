import styled from 'styled-components';
import BackgroundSVG from '../../assets/background.svg';

export const HeroContainer = styled.div`
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${BackgroundSVG});
  background-size: cover;
  background-position: center;
  gap: 3.5rem;
  padding-left: 10rem;
  padding-right: 10rem;
`;

export const HeroContent = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${props => props.theme['base-title']};
    line-height: 130%;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 1.25rem 2.5rem;

  margin-top: 4.125rem;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  p {
    color: ${props => props.theme['base-text']};
  }
`

interface IconProps {
  bgColor: string;
}

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  padding: 0.5rem;
  color: ${props => props.theme.white};
  background-color: ${props => props.bgColor}; 
`;
