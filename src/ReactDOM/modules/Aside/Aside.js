import React from 'react';
import * as P from './parts';
import Block from './Block/Block';
import { blocksContent, specialBlock } from './constants';

const Aside = () => {
   const blocks = blocksContent.map(item => <Block title={item.title} data={item.content} />);

   return (
      <P.AsideContainer>
         <P.NormalBlocks>{blocks}</P.NormalBlocks>
         <P.SpecialBlock><Block title={specialBlock.title} data={specialBlock.content} special={true} /></P.SpecialBlock>
      </P.AsideContainer>
   )
}

export default Aside;
