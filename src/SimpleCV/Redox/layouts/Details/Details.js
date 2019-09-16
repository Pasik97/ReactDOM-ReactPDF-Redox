import React from 'react';
import { Text, LineBreak } from 'redocx';
import { detailsBlocksContent } from '../../../constantsSimpleCV';

const Details = () => {
   const details = detailsBlocksContent.map((item, index) => {
      const mappedContent = item.content.map(section => {
         if (index == detailsBlocksContent.length - 1)
            return `${section.dateFrom}  ${section.text} (${section.subtext})`;
         return `${section.dateFrom} - ${section.dateTo}     ${section.text} (${section.subtext})`;
      });
      const result = [
         item.title,
         <LineBreak />,
         '‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾',
         <LineBreak />,
      ]
      for(let i=0; i<mappedContent.length; i++){
         result.push(mappedContent[i]);
         if(i<mappedContent.length-1){
            result.push(<LineBreak />);
         }
      }
      return <Text style={{ fontSize: 10, fontFace: 'Montserrat Light', color: '3e3e3e' }}>{result}</Text>;
   })
   
   return details;
};

export default Details;
