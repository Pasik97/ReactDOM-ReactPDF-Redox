import styled from 'styled-components';

export const BlockContainer = styled.div`
   color: white;
   border-bottom: 1px solid white;
   padding: 20px;
`;

export const BlockRow = styled.div`
   display: flex;
   margin-bottom: 10px;
`;

export const BlockTitle = styled.h2`
   font-weight: 600;
   font-size: 20px;
   width: 140px;
   text-align: right;
   margin: 0;

   ${({ special }) => special && `color: #0fb7f2;`}
`;

export const RowTitle = styled.p`
   margin: 0;
   margin-right: 20px;
   width: 150px;
   text-align: right;
   font-size: 12px;

   ${({ special }) => special && `color: #0fb7f2;`}
`;

export const RowDots = styled.div`
   display: flex;
   align-items: center;
`;

export const Dot = styled.div`
   background: white;
   height: 8px;
   width: 8px;
   border-radius: 50%;
   margin: 0 2px;

   ${({ filled }) => filled && `background: #bababa;`}

   ${({ special }) => special && `background: #0fb7f2;`}
`;

