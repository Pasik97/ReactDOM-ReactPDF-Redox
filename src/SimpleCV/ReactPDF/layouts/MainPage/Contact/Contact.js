import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as S from './styles';
import { contact } from '../../../../constantsSimpleCV';

const Contact = () => {
   const details = contact.items.map(item => (
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
      <View style={S.ContactWrapper.contactWrapper}>
         <Text style={S.ContactWrapper.name}>{contact.title}</Text>
         
         <View style={S.DetailsWrapper.detailsWrapper}>
            {detailsWithBorders}
         </View>

      </View>
   )
}

export default Contact;
