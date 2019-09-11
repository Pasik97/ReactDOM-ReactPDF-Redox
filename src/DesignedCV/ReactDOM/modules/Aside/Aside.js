import React from 'react';
import * as P from './parts';
import Block from './Block/Block';
import { skillsBlockContent, specialSkillBlock } from '../../../constants';

const Aside = () => {
   const blocks = skillsBlockContent.map(item => <Block title={item.title} data={item.content} />);

   return (
      <P.AsideContainer>
         <P.NormalBlocks>{blocks}</P.NormalBlocks>
         <P.SpecialBlock><Block title={specialSkillBlock.title} data={specialSkillBlock.content} special={true} /></P.SpecialBlock>
      </P.AsideContainer>
   )
}

export default Aside;
