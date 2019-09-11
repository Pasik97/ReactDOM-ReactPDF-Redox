import React from 'react';
import { Page, Document, PDFViewer } from '@react-pdf/renderer';
import MainPage from './layouts/MainPage/MainPage';
import * as S from './styles';

const ReactPdfCV = () => (
   <PDFViewer width="100%">
      <Document>
         <Page size="A4" style={S.Page.page}>
            <MainPage />
         </Page>
      </Document>
   </PDFViewer>
);

export default ReactPdfCV;
