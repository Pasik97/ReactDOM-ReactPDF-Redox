import React from 'react';
import Header from './layouts/Header/Header';
import MainPage from './layouts/MainPage/MainPage';
import Footer from './layouts/Footer/Footer';
import * as P from './parts';

const ReactDomSimpleCV = () => {
   return (
      <P.DomSimpleCvWrapper>
         <Header />
         <MainPage />
         <Footer />
      </P.DomSimpleCvWrapper>
   )
}

export default ReactDomSimpleCV;