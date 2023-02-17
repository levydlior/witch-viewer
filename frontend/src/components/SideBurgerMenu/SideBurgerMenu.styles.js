import styled from "@emotion/styled";

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
  align-items: center;

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 15rem;
    margin-top: 1rem;
  }
`;

export const Links = styled.li`
margin-inline: 2rem;
width: 4rem;
`

