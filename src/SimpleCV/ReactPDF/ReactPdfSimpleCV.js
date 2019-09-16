import React from 'react';
import { Page, Document, PDFViewer } from '@react-pdf/renderer';
import Header from './layouts/Header/Header';
import MainPage from './layouts/MainPage/MainPage';
import Footer from './layouts/Footer/Footer';
import * as S from './styles';

const ReactPdfSimpleCV = () => (
   <PDFViewer width="100%">
      <Document>
         <Page size="A4" style={S.Page.page}>
            <Header />
            <MainPage />
            <Footer />
         </Page>
      </Document>
   </PDFViewer>
);

export default ReactPdfSimpleCV;
