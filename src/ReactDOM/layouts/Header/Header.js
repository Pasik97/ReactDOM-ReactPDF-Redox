import React from 'react';
import * as P from './parts';
import { header } from '../../../constants';

const Header = () => {
   const details = header.items.map(item => (
      <P.Detail>
         <P.IconWrapper>
            <img alt={item.text} src={item.img} width="14px" />
         </P.IconWrapper>
         <P.DetailText>{item.text}</P.DetailText>
      </P.Detail>
   ));

   return (
      <P.HeaderContainer>

         <P.PersonalDataWrapper>
            <P.ImageWrapper>
               <img alt="Konrad Pasik" src={header.headerImg} /> 
            </P.ImageWrapper>

            <P.InfoWrapper>

               <P.NameWrapper>
                  <P.Name>{header.name}</P.Name>
                  <P.Profession>{header.profession}</P.Profession>
               </P.NameWrapper>

               <P.Introduction>
                  {header.introduction}
               </P.Introduction>

            </P.InfoWrapper>

         </P.PersonalDataWrapper>

         <P.PersonalDetailsWrapper>
            <P.DetailsWrapper>
               {details}
            </P.DetailsWrapper>
         </P.PersonalDetailsWrapper>

      </P.HeaderContainer>
   )
}

export default Header;
