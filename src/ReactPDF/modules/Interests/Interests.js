import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import * as S from './styles';
import { interests } from '../../../constants';

const Interests = () => {
   const content = interests.items.map(item => (
      <View style={S.InterestsItem.interestsItem}>
         <Text style={S.InterestsItem.itemText}>{item.title}</Text>
         <View style={S.IconWrapper.iconWrapper}>
            <Image style={S.IconWrapper.image} src={item.img} />
         </View>
      </View>
   ));

   return (
      <View style={S.InterestsContainer.interestsContainer}>
         <Text style={S.InterestsContainer.interestsTitle}>{interests.title}</Text>
         <View style={S.ItemsWrapper.itemsWrapper}>
            {content}
         </View>
      </View>
   )
}

export default Interests;
