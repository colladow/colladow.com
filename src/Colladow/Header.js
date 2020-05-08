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
`;

const Brand = styled(Link)`
  font-size: 32px;
  color: #fff;
  margin: 0;
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
  </Container>
);

export default Header;
