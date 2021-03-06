import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  justify-content: center;

  background-color: white;
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 2px 2px 5px grey;

  @media only screen and (max-width: 800px) {
    width: 94%;
  }
`;

export const SideBarWrapper = styled.div`
  width: 90%;
  margin: 1rem 0;
`;

export const SideBarText = styled.div`
  font-size: 3rem;
  font-weight: 500;
`;

export const SideBarDay = styled.div`
  color: grey;
`;

export const AddCardButton = styled.div`

`;