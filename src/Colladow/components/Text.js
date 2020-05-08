import styled from 'styled-components';

const Text = styled.p`
  margin: ${props => props.theme.margin}px 0 0 0;
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;

  ${props => props.bold && 'font-weight: 700;'}
`;

export default Text;
