import React from 'react';
import Header from './modules/Header/Header';
import Section from './modules/Section/Section';
import * as P from './parts';

const ReactDomCV = () => {
   return (
      <P.DomCvWrapper>
         <Header />
         <Section />
      </P.DomCvWrapper>
   )
}

export default ReactDomCV;