import React from 'react';
import { Page, Document, PDFViewer, Text, View} from '@react-pdf/renderer';
import Header from './layouts/Header/Header';
// import MainPage from './layouts/MainPage/MainPage';
// import Footer from './layouts/Footer/Footer';
import Contact from './modules/Contact/Contact';
import * as S from './styles';

const ReactPdfCV = () => (
   <PDFViewer width="100%" >
      <Document>
         <Page size="A4" style={S.Page.page}>
            <Contact />
         </Page>
      </Document>
   </PDFViewer>
);

export default ReactPdfCV;
