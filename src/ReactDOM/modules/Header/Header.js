import React from 'react';
import * as P from './parts';
import example from '../../../assets/example.jpg';
import person from '../../../assets/Person.png';
import instagram from '../../../assets/Instagram.png';
import location from '../../../assets/Location.png';
import behance from '../../../assets/Behance.png';

const Header = () => {
   return (
      <P.HeaderContainer>

         <P.PersonalDataWrapper>
            <P.ImageWrapper>
               <img alt="Konrad Pasik" src={example} /> 
            </P.ImageWrapper>

            <P.InfoWrapper>

               <P.NameWrapper>
                  <P.Name>Konrad Pasik</P.Name>
                  <P.Profession>FrontEnd Developer</P.Profession>
               </P.NameWrapper>

               <P.Introduction>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               </P.Introduction>

            </P.InfoWrapper>

         </P.PersonalDataWrapper>

         <P.PersonalDetailsWrapper>
            <P.DetailsWrapper>

               <P.Detail>
                  <P.IconWrapper>
                     <img alt="person" src={person} width="14px" />
                  </P.IconWrapper>
                  <P.DetailText>31.01.1997</P.DetailText>
               </P.Detail>

               <P.Detail>
                  <P.IconWrapper>
                     <img alt="location" src={location} width="14px" />
                  </P.IconWrapper>
                  <P.DetailText>Kraków, os. Albertyńskie 19/64</P.DetailText>
               </P.Detail>

               <P.Detail>
                  <P.IconWrapper>
                     <img alt="behance" src={behance} width="14px" />
                  </P.IconWrapper>
                  <P.DetailText>/lorem</P.DetailText>
               </P.Detail>

               <P.Detail>
                  <P.IconWrapper>
                     <img alt="instagram" src={instagram} width="14px" />
                  </P.IconWrapper>
                  <P.DetailText>/ipsum</P.DetailText>
               </P.Detail>

            </P.DetailsWrapper>
         </P.PersonalDetailsWrapper>

      </P.HeaderContainer>
   )
}

export default Header;
