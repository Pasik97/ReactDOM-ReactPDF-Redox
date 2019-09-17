import React from 'react';
import * as P from './parts';
import { contact } from '../../../constants';

const Contact = () => {
   const content = contact.items.map(item => {
      if(item.content === '/Pasik97')
         return (
            <P.ContactItem>
               <P.IconWrapper>
                  <img style={{width: "auto !important"}} alt={item.content} src={item.img} height="8px"/>
               </P.IconWrapper>
               <P.ItemText>
                  {item.content}
               </P.ItemText>
            </P.ContactItem>
         );
      else
         return (
            <P.ContactItem>
               <P.IconWrapper>
                  <img alt={item.content} src={item.img} width="8px" />
               </P.IconWrapper>
               <P.ItemText>
                  {item.content}
               </P.ItemText>
            </P.ContactItem>
         );
   });

   return (
      <P.ContactContainer>
         <P.ContactTitle>{contact.title}</P.ContactTitle>
         {content}
      </P.ContactContainer>
   )
}

export default Contact;
