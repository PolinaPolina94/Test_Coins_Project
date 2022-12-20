import React from "react";
import {
  HeaderStyle,
  Img,
  Paragrap,
  H,
  StyledNavLink,
} from "../../styled-components/Header-styles";

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
