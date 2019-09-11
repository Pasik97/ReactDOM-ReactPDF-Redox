import React from 'react';
import Section from '../../modules/Section/Section';
import Contact from '../../modules/Contact/Contact';
import Interests from '../../modules/Interests/Interests';
import Aside from '../../modules/Aside/Aside';
import * as P from './parts';

const MainPage = () =>(
   <P.MainPageContainer>
      <P.LeftColumn>
         <Section />
         <Contact />
      </P.LeftColumn>
      <P.RightColumn>
         <Aside />
         <Interests />
      </P.RightColumn>
   </P.MainPageContainer>
)

export default MainPage;