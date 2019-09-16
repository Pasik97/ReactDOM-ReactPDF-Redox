import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as S from './styles';
import { klauzulaCV } from '../../../constantsSimpleCV';

const Footer = () =>(
   <View style={S.FooterContainer.footerContainer}>
      <Text style={S.FooterContainer.text}>
         {klauzulaCV}
      </Text>
   </View>
)

export default Footer;
