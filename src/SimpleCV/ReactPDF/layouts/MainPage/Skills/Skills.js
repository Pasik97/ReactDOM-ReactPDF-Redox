import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as S from './styles';
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
         <View style={S.Skill.skillWrapper}>
            <Text style={S.Skill.text}>
               {`- ${item.title}`}
            </Text>
            <Text style={S.Skill.level}>
               {master}
            </Text>
         </View>
   )});

   return (
      <View style={S.SkillsWrapper.skillsWrapper}>
         <Text style={S.SkillsWrapper.title}>{`${skillsBlockContent.title}:`}</Text>
         
         <View style={S.ContentWrapper.contentWrapper}>
            {skills}
         </View>

      </View>
   )
};

export default Skills;
