import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  padding: ${props => props.theme.margin * 4}px;
  background-color: #000;
  display: flex;
  align-items: center;

  @media print {
    display: none;
  }

  @media screen and (max-width: 600px) {
    padding: ${props => props.theme.margin * 2}px ${props => props.theme.margin}px;
    flex-direction: column;
    align-items: start;
  }
`;

const Link = styled.a`
  margin-left: ${props => props.theme.margin * 8}px;
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  color: #fff;
  text-decoration: none;

  &:hover, &:active {
    color: #e6e6e6;
  }

  @media screen and (max-width: 600px) {
    margin: ${props => props.theme.margin * 2}px 0 0 ${props => props.theme.margin}px;
  }
`;

const Brand = styled(Link)`
  font-size: 32px;
  color: #fff;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const Header = () => (
  <Container>
    <Brand href="/">Wilson Collado</Brand>

    <Link
      href="mailto:colladow@gmail.com"
      title="colladow@gmail.com"
    >
      E-mail
    </Link>

    <Link
      href="https://github.com/colladow"
      title="colladow"
    >
      Github
    </Link>

    <Link
      href="./wilson-collado-resume.pdf"
      title="Resume"
    >
      Download PDF
    </Link>

    <Link
      href="https://colladow.github.io/flipped-off"
      title="Flipped Off"
    >
      Flipped Off
    </Link>
  </Container>
);

export default Header;
