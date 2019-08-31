import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import * as S from './styles';
import soccer from '../../../assets/Soccer.png';
import technology from '../../../assets/Technology.png';
import camera from '../../../assets/Camera.png';
import music from '../../../assets/Music.png';
import shirt from '../../../assets/T-Shirt.png';
import cube from '../../../assets/Rubiks_Cube.png';

const Interests = () => {
   return (
      <View style={S.InterestsContainer.interestsContainer}>
         <Text style={S.InterestsContainer.interestsTitle}>Zainteresowania</Text>
         <View style={S.ItemsWrapper.itemsWrapper}>

            <View style={S.InterestsItem.interestsItem}>
               <Text style={S.InterestsItem.itemText}>Pilka nozna</Text>
               <View style={S.IconWrapper.iconWrapper}>
                  <Image style={S.IconWrapper.image} src={soccer} />
               </View>
            </View>

            <View style={S.InterestsItem.interestsItem}>
               <Text style={S.InterestsItem.itemText}>Nowe Technologie</Text>
               <View style={S.IconWrapper.iconWrapper}>
                  <Image style={S.IconWrapper.image} src={technology} />
               </View>
            </View>

            <View style={S.InterestsItem.interestsItem}>
               <Text style={S.InterestsItem.itemText}>Fotografia</Text>
               <View style={S.IconWrapper.iconWrapper}>
                  <Image style={S.IconWrapper.image} src={camera} />
               </View>
            </View>

            <View style={S.InterestsItem.interestsItem}>
               <Text style={S.InterestsItem.itemText}>Muzyka</Text>
               <View style={S.IconWrapper.iconWrapper}>
                  <Image style={S.IconWrapper.image} src={music} />
               </View>
            </View>

            <View style={S.InterestsItem.interestsItem}>
               <Text style={S.InterestsItem.itemText}>Moda</Text>
               <View style={S.IconWrapper.iconWrapper}>
                  <Image style={S.IconWrapper.image} src={shirt} />
               </View>
            </View>

            <View style={S.InterestsItem.interestsItem}>
               <Text style={S.InterestsItem.itemText}>Kostka Rubika</Text>
               <View style={S.IconWrapper.iconWrapper}>
                  <Image style={S.IconWrapper.image} src={cube} />
               </View>
            </View>

         </View>
      </View>
   )
}

export default Interests;
