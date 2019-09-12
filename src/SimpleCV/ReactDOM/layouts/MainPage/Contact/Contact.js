import React from 'react';
import * as P from './parts';
import { contact } from '../../../../constantsSimpleCV';

const Contact = () => {
   const details = contact.items.map(item => (
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
      <P.ContactWrapper>
         <P.Name>{contact.title}</P.Name>
         
         <P.DetailsWrapper>
            {detailsWithBorders}
         </P.DetailsWrapper>

      </P.ContactWrapper>
   )
}

export default Contact;
