import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import * as S from './styles';
import { klauzulaCV } from '../../../constants';

const Footer = () =>(
      <View style={S.FooterContainer.footerContainer}>
         <Text>
            {klauzulaCV}
         </Text>
      </View>
)

export default Footer;
