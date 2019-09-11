import React from 'react';
import * as P from './parts';

const Block = ({title, data}) => {
   const rows = data.map(item => (
      <P.BlockRow>
         <P.RowDate>{item.dateTo ? `${item.dateFrom} - ${item.dateTo}` : item.dateFrom}</P.RowDate>
         <P.RowContent>
            <P.ContentText>{item.text}</P.ContentText>
            <P.ContentSubtext>{item.subtext}</P.ContentSubtext>
         </P.RowContent>
      </P.BlockRow>
   ))

   return (
      <P.BlockContainer>

         <P.BlockRow>
            <P.BlockTitle>{title}</P.BlockTitle>
         </P.BlockRow>
         {rows}

      </P.BlockContainer>
   )
}

export default Block;
