import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as S from './styles';

const Details = ({title, content}) => {
   const detail = content.map(item => (
      <View style={S.Detail.detail}>
         <Text style={S.Detail.dateWrapper}>
            {`${item.dateFrom} ${item.dateTo && `- ${item.dateTo}`}`}
         </Text>
         <Text style={S.Detail.text}>
            {`${item.text} (${item.subtext})`}
         </Text>
      </View>
   ));

   return (
      <View style={S.DetailsWrapper.detailsWrapper}>
         <Text style={S.DetailsWrapper.title}>{title}</Text>
         
         <View style={S.ContentWrapper.contentWrapper}>
            {detail}
         </View>

      </View>
   )
};

export default Details;
