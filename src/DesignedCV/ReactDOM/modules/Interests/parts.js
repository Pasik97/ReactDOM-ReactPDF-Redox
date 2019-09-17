import styled from 'styled-components';

export const InterestsContainer = styled.div`
   font-size: 10px;
   color: #0fb7f2;
`;

export const InterestsTitle = styled.h2`
   font-weight: 600;
   font-size: 20px;
   margin: 0;
`;

export const ItemsWrapper = styled.div`
   max-width: 300px;
   display: flex;
   flex-wrap: wrap;
`;

export const InterestsItem = styled.div`
   width: 60px;
   height: 65px;
   margin: 10px 20px 0 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
`;

export const IconWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background: #f5f5f5;
   width: 30px;
   height: 30px;
   border: 2px solid #0fb7f2;
   border-radius: 50%;
   margin-top: 5px;
`;

export const ItemText = styled.p`
   margin: 0;
   text-align: center;
   font-weight: 600;
`;
