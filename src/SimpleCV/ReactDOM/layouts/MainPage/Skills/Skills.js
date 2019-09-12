import React from 'react';
import * as P from './parts';
import { skillsBlockContent } from '../../../../constantsSimpleCV';

const Skills = () => {
   const skills = skillsBlockContent.content.map(item => {
      let master = '';

      for(let i=0; i<10; i++){
         if(i<item.master){
            master = master + "+";
         } else {
            master = master + "-";
         }
      }
      return (
         <P.Skill>
            {`- ${item.title}`}
            <P.SkillLevel>
               {master}
            </P.SkillLevel>
         </P.Skill>
   )});

   return (
      <P.SkillsWrapper>
         <P.Title>{`${skillsBlockContent.title}:`}</P.Title>
         
         <P.ContentWrapper>
            {skills}
         </P.ContentWrapper>

      </P.SkillsWrapper>
   )
};

export default Skills;
