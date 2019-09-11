import React from 'react';
import { Text, LineBreak } from 'redocx';
import { contact } from '../../../constantsSimpleCV';

const Contact = () => {
   const result = [
      `${contact.title}:`,
      <LineBreak />,
   ];
   for(let i=0; i<contact.items.length; i++){
      result.push(contact.items[i]);
      if(i<contact.items.length-1){
         result.push('       |       ');
      }
   }

   return (
      <Text align='center' style={{ fontSize: 10, bold: true, fontFace: 'Montserrat Light', color: '3e3e3e' }}>{result}</Text>
   )
};

export default Contact;
