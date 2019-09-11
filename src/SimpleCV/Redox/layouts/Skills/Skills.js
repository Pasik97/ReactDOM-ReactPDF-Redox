import React from 'react';
import { Text, LineBreak } from 'redocx';
import { skillsBlockContent } from '../../../constantsSimpleCV';

const Skills = () => {
   const skills = skillsBlockContent.content.map(item => {
      let master = '';
      for(let i=0; i<10; i++){
         if(i<item.master)
            master = master + '+';
         else
            master = master + '-';
      }
      return `      - ${item.title}   ${master}`;
   });

   const result = [
      `${skillsBlockContent.title}:`,
      <LineBreak />,
   ];
   for(let i=0; i<skills.length; i++){
      result.push(skills[i]);
      if(i<skills.length-1){
         result.push(<LineBreak />);
      }
   }

   return (
      <Text style={{ fontSize: 10, fontFace: 'Montserrat Light', color: '3e3e3e' }}>{result}<LineBreak /></Text>
   )
};

export default Skills;
