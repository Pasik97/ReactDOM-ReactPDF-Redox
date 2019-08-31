import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as S from './styles';

const Block = ({title, data}) => {
   const rows = data.map(item => (
      <View style={S.BlockRow.blockRow}>
         <Text style={S.BlockRow.rowDate}>{item.dateTo ? `${item.dateFrom} - ${item.dateTo}` : item.dateFrom}</Text>
         <View style={S.RowContent.rowContent}>
            <Text style={S.RowContent.contentText}>{item.text}</Text>
            <Text style={S.RowContent.contentSubtext}>{item.subtext}</Text>
         </View>
      </View>
   ))

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
