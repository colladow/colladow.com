import styled from 'styled-components';

const SectionTitle = styled.h3`
  font-family: ${props => props.theme.fontFamily};
  font-size: 32px;
  margin-bottom: 0;

  @media print {
    font-size: 24px;
  }
`;

export default SectionTitle;
