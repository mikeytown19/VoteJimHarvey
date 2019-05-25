import styled from '@emotion/styled';
import theme from './theme';
import media from './media';

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.maxWidth};
  ${media.medium} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  ${media.small} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export default Container;