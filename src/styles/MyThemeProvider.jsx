import P from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './theme';

export const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
