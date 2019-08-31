import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import * as S from './styles';
import phone from '../../../assets/Phone.png';
import mail from '../../../assets/Mail.png';
import facebook from '../../../assets/Facebook.png';
import earth from '../../../assets/Earth.png';

const Contact = () => {
   return (
      <View style={S.ContactContainer.contactContainer}>

         <Text style={S.ContactContainer.contactTitle}>Kontakt</Text>
         
         <View style={S.ContactItem.contactItem}>
            <View style={S.IconWrapper.iconWrapper}>
               <Image style={S.IconWrapper.image} src={phone} />
            </View>
            <Text style={S.ContactItem.itemText}>
               +(48) 517 532 850
            </Text>
         </View>

         <View style={S.ContactItem.contactItem}>
            <View style={S.IconWrapper.iconWrapper}>
               <Image style={S.IconWrapper.image} src={mail} />
            </View>
            <Text style={S.ContactItem.itemText}>
               k.pasik97@gmail.com
            </Text>
         </View>

         <View style={S.ContactItem.contactItem}>
            <View style={S.IconWrapper.iconWrapper}>
               <Image style={{ width: '6px' }} src={facebook} />
            </View>
            <Text style={S.ContactItem.itemText}>
               /Pasik97
            </Text>
         </View>

         <View style={S.ContactItem.contactItem}>
            <View style={S.IconWrapper.iconWrapper}>
               <Image style={S.IconWrapper.image} src={earth} />
            </View>
            <Text style={S.ContactItem.itemText}>
               github.com/Pasik97
            </Text>
         </View>

      </View>
   )
}

export default Contact;
