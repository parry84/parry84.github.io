import React from 'react';
import PropTypes from 'prop-types';

import '@styles/reset.css';
import '@styles/tufte.css';

const Layout = ({ children }) => <>{children}</>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
