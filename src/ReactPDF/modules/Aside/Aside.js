import React from 'react';
import { View } from '@react-pdf/renderer';
import * as S from './styles';
import Block from './Block/Block';
import SpecialBlock from './Block/SpecialBlock'
import { blocksContent, specialBlock } from './constants';

const Aside = () => {
   const blocks = blocksContent.map(item => <Block title={item.title} data={item.content} />);

   return (
      <View style={S.AsideContainer.asideContainer}>
         <View style={S.AsideContainer.normalBlocks}>{blocks}</View>
         <View style={S.AsideContainer.specialBlocks}><SpecialBlock title={specialBlock.title} data={specialBlock.content} /></View>
      </View>
   )
}

export default Aside;
