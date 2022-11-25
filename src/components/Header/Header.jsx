import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  height: 70px;
  display: flex;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 50px;
`;

const Paragrap = styled.p`
margin-top: 0;
margin-left: 50px;
font-weight: bold;
}
`;
const H = styled.h2`
  margin-left: 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

function Header() {
  return (
    <HeaderStyle>
      <H> MY COINCAP </H>
      <StyledNavLink to={"/portfolio"}>
        {" "}
        <Img
          src="https://cdn-icons-png.flaticon.com/512/2483/2483322.png"
          alt="portfolio"
        />{" "}
        <Paragrap>My coins</Paragrap>
      </StyledNavLink>

      <StyledNavLink to={"/"}>
        <Img
          src="https://s3.amazonaws.com/stickers.wiki/luluicon/6414541.512.webp"
          alt="home"
        />{" "}
        <Paragrap> Home </Paragrap>
      </StyledNavLink>
    </HeaderStyle>
  );
}

export default Header;
