import React from 'react';
import * as P from './parts';

const Block = ({title, data, special}) => {
   const rows = data.map(item => {
      let filledDots = [];

      for(let i=0; i < 10; i++){
         if(i > item.master-1)
            filledDots[i] = <P.Dot filled={true} > </P.Dot>;
         else
            filledDots[i] = <P.Dot special={special} > </P.Dot>;
      }

      return (
         <P.BlockRow>
            <P.RowTitle special={special} >{item.title}</P.RowTitle>
            <P.RowDots>
               {filledDots}
            </P.RowDots>
         </P.BlockRow>
      )
   })

   return (
      <P.BlockContainer>

         <P.BlockRow>
            <P.BlockTitle special={special} >{title}</P.BlockTitle>
         </P.BlockRow>
         {rows}

      </P.BlockContainer>
   )
}

export default Block;
