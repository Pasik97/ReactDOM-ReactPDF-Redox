import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import * as S from './styles';
import { header } from '../../../constants';

const Header = () => {
   const details = header.items.map(item => (
      <View style={S.Detail.detail}>
         <View style={S.IconWrapper.iconWrapper}>
            <Image style={S.IconWrapper.image} src={item.img} />
         </View>
         <Text style={S.Detail.detailText}>{item.text}</Text>
      </View>
   ));

   return (
      <View style={S.HeaderContainer.headerContainer}>
         <Image src={header.backgroundImg} style={S.HeaderBackground.headerBackground} />

         <View style={S.PersonalDataWrapper.personalDataWrapper}>
            <View style={S.ImageWrapper.imageWrapper}>
               <Image style={S.ImageWrapper.image} src={header.headerImg} />
            </View> 

            <View style={S.InfoWrapper.infoWrapper}>

               <View style={S.NameWrapper.nameWrapper}>
                  <Text style={S.NameWrapper.name}>{header.name}</Text>
                  <Text style={S.NameWrapper.profession}>{header.profession}</Text>
               </View>

               <Text style={S.Introduction.introduction}>
                  {header.introduction}
               </Text>

            </View>

         </View>

         <View style={S.PersonalDetailsWrapper.personalDetailsWrapper}>
            <View style={S.DetailsWrapper.detailsWrapper}>
               {details}
            </View>
         </View>
      </View>
   )
}

export default Header;
