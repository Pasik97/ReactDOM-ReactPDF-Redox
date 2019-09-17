import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as S from './styles';

const Block = ({title, data}) => {
   const rows = data.map(item => {
      let filledDots = [];

      for(let i=0; i < 10; i++){
         if(i > item.master-1)
            filledDots[i] = <Text style={S.Dot.emptyDot}> </Text>;
         else
            filledDots[i] = <Text style={S.Dot.filledDot}> </Text>;
      }

      return (
         <View style={S.BlockRow.blockRow}>
            <Text style={S.BlockRow.rowTitle}>{item.title}</Text>
            <View style={S.RowDots.rowDots}>
               {filledDots}
            </View>
         </View>
      )
   })

   return (
      <View style={S.BlockContainer.blockContainer}>
         <View style={S.BlockRow.blockRow}>
            <Text style={S.BlockContainer.blockTitle}>{title}</Text>
         </View>
         {rows}

      </View>
   )
}

export default Block;
