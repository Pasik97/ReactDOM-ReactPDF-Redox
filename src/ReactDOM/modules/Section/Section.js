import React from 'react';
import * as P from './parts';
import Block from './Block/Block';
import { detailsBlocksContent } from '../../../constants';

const Section = () => {
   const blocks = detailsBlocksContent.map(item => <Block title={item.title} data={item.content} />);

   return (
      <P.SectionContainer>
         {blocks}
      </P.SectionContainer>
   )
}

export default Section;
