import styled from "@emotion/styled";

export const WebHeader = styled.div`
  border-bottom: 1px solid;
  height: 5rem;
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const LogoTitleDiv = styled.div`
  display: flex;
  width: 380px;
  &:hover {
    cursor: pointer;
  }
`;

export const WebHeaderImage = styled.img`
  height: 80px;
  padding: 0.5rem;
`;

export const BurgerNav = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: flex;
    align-items: center;
  }
`;
