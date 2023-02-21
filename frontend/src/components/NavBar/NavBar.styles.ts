import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const RegNav = styled.div`
  width: 46rem;
  display: flex;
  justify-content: space-evenly;
  margin-left: -102px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  margin-inline: 2rem;
  width: 4rem;
`;
