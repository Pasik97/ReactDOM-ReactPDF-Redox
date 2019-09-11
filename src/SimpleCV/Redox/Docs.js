import React from 'react';
import { render, Document, LineBreak } from 'redocx';
import CVHeader from './layouts/Header/Header';
import Details from './layouts/Details/Details';
import Skills from './layouts/Skills/Skills';
import Contact from './layouts/Contact/Contact';
import CVFooter from './layouts/Footer/Footer';

class App extends React.Component {
   render() {
      return (
         <Document>
            <CVHeader />
            <Details />
            <Skills />
            <Contact />
            <CVFooter />
         </Document>
      )
   }
}

render(<App />, `${__dirname}/redoxCV.docx`);
