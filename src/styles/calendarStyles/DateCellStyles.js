import styled from "styled-components";

export const DateCellContainer = styled.span`
  background-color: ${props => props.isToday ? 'lightblue' : 'beige'};
  border-radius: 15px;
  width: 100%;
  height: 5rem;
  margin: 1rem;
  opacity: ${props => props.isThisMonth ? '1' : '0.5'};
  
  cursor: ${props => props.isThisMonth ? 'pointer' : ''};
  transition: all 0.4s ease-in-out;  
  :hover {
    transform: ${props => props.isThisMonth ? 'scale(1.5)' : ''};
    box-shadow: ${props => props.isThisMonth ? '2px 2px 5px grey' : ''};
  }
`;