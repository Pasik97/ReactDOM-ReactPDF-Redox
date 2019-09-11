import React from 'react';
import { LineBreak, Text } from 'redocx';
import { header } from '../../../constantsSimpleCV';

const CVHeader = () => {
   const details = header.info.map((item,index) => index < header.info.length-1 ? item + ' | ' : item).join('&').replace(/&/g, ' ');

   return (
      <Text align='center' style={{ fontSize: 12, bold: true, fontFace: 'Montserrat Medium', color: '3e3e3e' }}>
         {header.name}
         <LineBreak />
         {details}
         <LineBreak />
      </Text>
   );
}

export default CVHeader;
