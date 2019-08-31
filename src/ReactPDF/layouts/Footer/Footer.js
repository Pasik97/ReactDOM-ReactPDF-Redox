import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import * as S from './styles';

const Footer = () =>(
      <View style={S.FooterContainer.footerContainer}>
         <Text>
               Wyrazam zgode na przetwarzanie moich danych osobowych dla potrzeb niezbednych do realizacji procesu rekrutacji (zgodnie z
               Ustawa z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).
         </Text>
      </View>
)

export default Footer;
