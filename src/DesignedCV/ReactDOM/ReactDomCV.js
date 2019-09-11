import React from 'react';
import Header from './layouts/Header/Header';
import MainPage from './layouts/MainPage/MainPage';
import Footer from './layouts/Footer/Footer';
import * as P from './parts';

const ReactDomCV = () => {
   return (
      <P.DomCvWrapper>
         <Header />
         <MainPage />
         <Footer />
      </P.DomCvWrapper>
   )
}

export default ReactDomCV;