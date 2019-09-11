import React from 'react';
import { View } from '@react-pdf/renderer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Section from '../../modules/Section/Section';
import Contact from '../../modules/Contact/Contact';
import Interests from '../../modules/Interests/Interests';
import Aside from '../../modules/Aside/Aside';
import * as S from './styles';

const MainPage = () =>(
   <View style={S.MainPageContainer.mainPageContainer}>
      <Header />

      <View style={S.ColumnsWrapper.columnsWrapper}>
         <View style={S.ColumnsWrapper.leftColumn}>
            <Section />
            <Contact />
         </View>
         <View style={S.ColumnsWrapper.rightColumn}>
            <Aside />
            <Interests />
         </View>
      </View>

      <Footer />
   </View>
)

export default MainPage;