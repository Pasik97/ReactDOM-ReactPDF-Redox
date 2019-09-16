import React from 'react';
import { View } from '@react-pdf/renderer';
import Details from './Details/Details';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import * as S from './styles';
import { detailsBlocksContent } from '../../../constantsSimpleCV';

const MainPage = () => {
   const details = detailsBlocksContent.map(item => <Details title={item.title} content={item.content} />);

   return (
      <View style={S.MainPageContainer.mainPageContainer}>
         {details}
         <Skills />
         <Contact />
      </View>
   )
}

export default MainPage;