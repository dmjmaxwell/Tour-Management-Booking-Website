import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../header/Header';
import Routers from '../../router/Routers';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Routers></Routers>
      <Footer></Footer>
    </>
  );
};

export default Layout;