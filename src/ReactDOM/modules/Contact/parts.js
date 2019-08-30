import styled from 'styled-components';

export const ContactContainer = styled.div`
   font-size: 12px;
   color: #7a7a7a;
`;

export const ContactTitle = styled.h2`
   font-weight: 600;
   font-size: 20px;
   color: #0fb7f2;
   width: 160px;
   text-align: right;
   margin: 0;
   margin-bottom: 10px;
`;

export const ContactItem = styled.div`
   display: flex;
   margin-bottom: 20px;
   margin-left: 180px;
`;

export const IconWrapper = styled.div`
   margin-right: 15px;
   width: 14px;
   ${({ facebook }) => facebook && `
      display: flex;
      justify-content: center;
   `}
`;

export const ItemText = styled.p`
   margin: 0;
`;
