import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import * as S from './styles';
import background from '../../../assets/background.png';
import example from '../../../assets/example.jpg';
import person from '../../../assets/Person.png';
import instagram from '../../../assets/Instagram.png';
import location from '../../../assets/Location.png';
import behance from '../../../assets/Behance.png';

const Header = () => {
   return (
      <View style={S.HeaderContainer.headerContainer}>
         <Image src={background} style={S.HeaderBackground.headerBackground} />

         <View style={S.PersonalDataWrapper.personalDataWrapper}>
            <View style={S.ImageWrapper.imageWrapper}>
               <Image style={S.ImageWrapper.image} src={example} />
            </View> 

            <View style={S.InfoWrapper.infoWrapper}>

               <View style={S.NameWrapper.nameWrapper}>
                  <Text style={S.NameWrapper.name}>Konrad Pasik</Text>
                  <Text style={S.NameWrapper.profession}>FrontEnd Developer</Text>
               </View>

               <Text style={S.Introduction.introduction}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               </Text>

            </View>

         </View>

         <View style={S.PersonalDetailsWrapper.personalDetailsWrapper}>
            <View style={S.DetailsWrapper.detailsWrapper}>

               <View style={S.Detail.detail}>
                  <View style={S.IconWrapper.iconWrapper}>
                     <Image style={S.IconWrapper.image} src={person} />
                  </View>
                  <Text style={S.Detail.detailText}>31.01.1997</Text>
               </View>

               <View style={S.Detail.detail}>
                  <View style={S.IconWrapper.iconWrapper}>
                     <Image style={S.IconWrapper.image} src={location} />
                  </View>
                  <Text style={S.Detail.detailText}>Kraków, os.Albertynskie 19/64</Text>
               </View>

               <View style={S.Detail.detail}>
                  <View style={S.IconWrapper.iconWrapper}>
                     <Image style={S.IconWrapper.image} src={behance} />
                  </View>
                  <Text style={S.Detail.detailText}>/lorem</Text>
               </View>

               <View style={S.Detail.detail}>
                  <View style={S.IconWrapper.iconWrapper}>
                     <Image style={S.IconWrapper.image} src={instagram} />
                  </View>
                  <Text style={S.Detail.detailText}>/ipsum</Text>
               </View>

            </View>
         </View>
      </View>
   )
}

export default Header;
