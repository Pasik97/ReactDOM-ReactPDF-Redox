import React from 'react';
import { View } from '@react-pdf/renderer';
import * as S from './styles';
import Block from './Block/Block';
import { blocksContent } from './constants';

const Section = () => {
   const blocks = blocksContent.map(item => <Block title={item.title} data={item.content} />);

   return (
      <View style={S.SectionContainer.sectionContainer}>
         {blocks}
      </View>
   )
}

export default Section;
