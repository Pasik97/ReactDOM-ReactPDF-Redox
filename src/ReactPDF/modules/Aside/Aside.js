import React from 'react';
import { View } from '@react-pdf/renderer';
import * as S from './styles';
import Block from './Block/Block';
import SpecialBlock from './Block/SpecialBlock'
import { skillsBlockContent, specialSkillBlock } from '../../../constants';

const Aside = () => {
   const blocks = skillsBlockContent.map(item => <Block title={item.title} data={item.content} />);

   return (
      <View style={S.AsideContainer.asideContainer}>
         <View style={S.AsideContainer.normalBlocks}>{blocks}</View>
         <View style={S.AsideContainer.specialBlocks}><SpecialBlock title={specialSkillBlock.title} data={specialSkillBlock.content} /></View>
      </View>
   )
}

export default Aside;
