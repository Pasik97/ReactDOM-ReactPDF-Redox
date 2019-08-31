import React from 'react';
import * as P from './parts';
import soccer from '../../../assets/Soccer.png';
import technology from '../../../assets/Technology.png';
import camera from '../../../assets/Camera.png';
import music from '../../../assets/Music.png';
import shirt from '../../../assets/T-Shirt.png';
import cube from '../../../assets/Rubiks_Cube.png';

const Interests = () => {
   return (
      <P.InterestsContainer>
         <P.InterestsTitle>Zainteresowania</P.InterestsTitle>
         <P.ItemsWrapper>

            <P.InterestsItem>
               <P.ItemText>Piłka nożna</P.ItemText>
               <P.IconWrapper>
                  <img alt="soccer" src={soccer} width="14px" />
               </P.IconWrapper>
            </P.InterestsItem>

            <P.InterestsItem>
               <P.ItemText>Nowe Technologie</P.ItemText>
               <P.IconWrapper>
                  <img alt="technology" src={technology} width="14px" />
               </P.IconWrapper>
            </P.InterestsItem>

            <P.InterestsItem>
               <P.ItemText>Fotografia</P.ItemText>
               <P.IconWrapper>
                  <img alt="camera" src={camera} width="14px" />
               </P.IconWrapper>
            </P.InterestsItem>

            <P.InterestsItem>
               <P.ItemText>Muzyka</P.ItemText>
               <P.IconWrapper>
                  <img alt="music" src={music} width="14px" />
               </P.IconWrapper>
            </P.InterestsItem>

            <P.InterestsItem>
               <P.ItemText>Moda</P.ItemText>
               <P.IconWrapper>
                  <img alt="shirt" src={shirt} width="14px" />
               </P.IconWrapper>
            </P.InterestsItem>

            <P.InterestsItem>
               <P.ItemText>Kostka Rubika</P.ItemText>
               <P.IconWrapper>
                  <img alt="cube" src={cube} width="14px" />
               </P.IconWrapper>
            </P.InterestsItem>

         </P.ItemsWrapper>
      </P.InterestsContainer>
   )
}

export default Interests;
