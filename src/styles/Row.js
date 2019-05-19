import styled from '@emotion/styled';

const Row = styled.section`
  width: 100%;
  padding: ${props => props.noPadding ? "0" : "0 .975rem"};
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent' };
`;

export default Row;