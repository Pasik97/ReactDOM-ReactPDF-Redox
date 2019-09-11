import React from 'react';
import { Footer } from 'redocx';
import { klauzulaCV } from '../../../constantsSimpleCV';

const CVFooter = () => (
   <Footer style={{ fontSize: 7, fontFace: 'Montserrat', color: '3e3e3e' }}>
      {klauzulaCV}
   </Footer>
);

export default CVFooter;
