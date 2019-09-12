import React from 'react';
import * as P from './parts';
import Details from './Details/Details';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import { detailsBlocksContent } from '../../../constantsSimpleCV';

const MainPage = () => {
   const details = detailsBlocksContent.map(item => <Details title={item.title} content={item.content} />);

   return (
      <P.MainPageWrapper>
         <P.DetailsWrapper>
            {details}
         </P.DetailsWrapper>
         <Skills />
         <Contact />
      </P.MainPageWrapper>
   )
}

export default MainPage;