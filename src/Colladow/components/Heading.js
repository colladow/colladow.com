import styled from 'styled-components';

const Heading = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  font-size: 48px;
  text-align: center;

  @media print {
    display: none;
  }
`;

export const Name = styled(Heading)`
  display: none;

  @media print {
    display: block;
    font-size: 32px;
  }
`;

export default Heading;
