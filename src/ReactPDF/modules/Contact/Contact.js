import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import * as S from './styles';
import { contact } from '../../../constants';

const Contact = () => {
   const content = contact.items.map(item => {
      if(item.content === '/Pasik97')
         return (
            <View style={S.ContactItem.contactItem}>
               <View style={S.IconWrapper.iconWrapper}>
                  <Image style={{ width: '6px' }} src={item.img} />
               </View>
               <Text style={S.ContactItem.itemText}>
                  {item.content}
               </Text>
            </View>
         );
      else
         return (
            <View style={S.ContactItem.contactItem}>
               <View style={S.IconWrapper.iconWrapper}>
                  <Image style={S.IconWrapper.image} src={item.img} />
               </View>
               <Text style={S.ContactItem.itemText}>
                  {item.content}
               </Text>
            </View>
         );
   });

   return (
      <View style={S.ContactContainer.contactContainer}>
         <Text style={S.ContactContainer.contactTitle}>{contact.title}</Text>
         {content}
      </View>
   )
}

export default Contact;
