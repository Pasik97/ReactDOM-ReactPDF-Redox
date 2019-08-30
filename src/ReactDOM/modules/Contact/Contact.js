import React from 'react';
import * as P from './parts';
import phone from '../../../assets/Phone.png';
import mail from '../../../assets/Mail.png';
import facebook from '../../../assets/Facebook.png';
import earth from '../../../assets/Earth.png';

const Contact = () => {
   return (
      <P.ContactContainer>

         <P.ContactTitle>Kontakt</P.ContactTitle>
         
         <P.ContactItem>
            <P.IconWrapper>
               <img alt="phone" src={phone} width="14px" />
            </P.IconWrapper>
            <P.ItemText>
               +(48) 517 532 850
            </P.ItemText>
         </P.ContactItem>

         <P.ContactItem>
            <P.IconWrapper>
               <img alt="mail" src={mail} width="14px" />
            </P.IconWrapper>
            <P.ItemText>
               k.pasik97@gmail.com
            </P.ItemText>
         </P.ContactItem>

         <P.ContactItem>
            <P.IconWrapper facebook={true}>
               <img style={{width: "auto !important"}} alt="facebook" src={facebook} height="14px" />
            </P.IconWrapper>
            <P.ItemText>
               /Pasik97
            </P.ItemText>
         </P.ContactItem>

         <P.ContactItem>
            <P.IconWrapper>
               <img alt="earth" src={earth} width="14px" />
            </P.IconWrapper>
            <P.ItemText>
               github.com/Pasik97
            </P.ItemText>
         </P.ContactItem>

      </P.ContactContainer>
   )
}

export default Contact;
