import React from 'react';
import PropTypes from 'prop-types';
/*import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';*/
import '@styles/reset.css'
import 'tufte-css/tufte.css';
import '@styles/tufte-overrides.css';

const Layout = ({ children }) => (
  //<ThemeProvider theme={theme}>
  <>{children}</>
  //</ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
