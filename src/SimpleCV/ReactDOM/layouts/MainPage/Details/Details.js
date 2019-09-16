import React from 'react';
import * as P from './parts';

const Details = ({title, content}) => {
   const detail = content.map(item => (
      <P.Detail>
         <P.DateWrapper>
            {`${item.dateFrom} ${item.dateTo && `- ${item.dateTo}`}`}
         </P.DateWrapper>
            {`${item.text} (${item.subtext})`}
      </P.Detail>
   ));

   return (
      <P.DetailsWrapper>
         <P.Title>{title}</P.Title>
         
         <P.ContentWrapper>
            {detail}
         </P.ContentWrapper>

      </P.DetailsWrapper>
   )
};

export default Details;
