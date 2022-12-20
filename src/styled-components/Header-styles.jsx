import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.div`
  height: 70px;
  display: flex;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 50px;
`;

export const Paragrap = styled.p`
margin-top: 0;
margin-left: 50px;
font-weight: bold;
}
`;
export const H = styled.h2`
  margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
