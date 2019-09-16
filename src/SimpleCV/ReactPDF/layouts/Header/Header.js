import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as S from './styles';
import { header } from '../../../constantsSimpleCV';

const Header = () => {
   const details = header.info.map(item => (
      <Text style={S.DetailsWrapper.detail}>
         {item}
      </Text>
   ));

   const detailsWithBorders = [];

   for(let i=0; i < details.length; i++){
      detailsWithBorders.push(details[i]);

      if(i < details.length - 1)
      detailsWithBorders.push(<Text style={S.DetailsWrapper.detail}>|</Text>);
   }

   return (
      <View style={S.HeaderWrapper.headerWrapper}>
         <Text style={S.HeaderWrapper.name}>{header.name}</Text>
         
         <View style={S.DetailsWrapper.detailsWrapper}>
            {detailsWithBorders}
         </View>

      </View>
   )
}

export default Header;
