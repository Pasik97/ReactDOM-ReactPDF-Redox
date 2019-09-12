import React from 'react';
import * as P from './parts';
import { header } from '../../../constantsSimpleCV';

const Header = () => {
   const details = header.info.map(item => (
      <P.Detail>
         {item}
      </P.Detail>
   ));

   const detailsWithBorders = [];

   for(let i=0; i < details.length; i++){
      detailsWithBorders.push(details[i]);

      if(i < details.length - 1)
      detailsWithBorders.push(<P.Detail>|</P.Detail>);
   }

   return (
      <P.HeaderWrapper>
         <P.Name>{header.name}</P.Name>
         
         <P.DetailsWrapper>
            {detailsWithBorders}
         </P.DetailsWrapper>

      </P.HeaderWrapper>
   )
}

export default Header;
