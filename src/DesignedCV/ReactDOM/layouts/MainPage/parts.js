import styled from 'styled-components';
import { BlockContainer } from '../../modules/Section/Block/parts';

export const MainPageContainer = styled.div`
   display: flex;

   ${BlockContainer} {
      margin-bottom: 70px;
   };
`;

export const LeftColumn = styled.div`
   width: 520px;
   margin: 50px 0 30px 80px;
`;

export const RightColumn = styled.div`
   width: 320px;
   margin: 50px 80px 30px 0;
`;
