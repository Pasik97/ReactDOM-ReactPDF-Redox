import React from 'react';
import * as P from './parts';
import { interests } from '../../../constants';

const Interests = () => {
   const content = interests.items.map(item => (
      <P.InterestsItem>
         <P.ItemText>{item.title}</P.ItemText>
         <P.IconWrapper>
            <img alt={item.title} src={item.img} width="14px" />
         </P.IconWrapper>
      </P.InterestsItem>
   ));

   return (
      <P.InterestsContainer>
         <P.InterestsTitle>{interests.title}</P.InterestsTitle>
         <P.ItemsWrapper>
            {content}
         </P.ItemsWrapper>
      </P.InterestsContainer>
   )
}

export default Interests;
