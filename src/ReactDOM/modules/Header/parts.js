import styled from 'styled-components';
import background from '../../../assets/background.png';

export const HeaderContainer = styled.div`
   height: 320px;
   background-image: url(${background});
   display: flex;
   color: white;
`;

export const PersonalDataWrapper = styled.div`
   display: flex;
   width: 600px;
   margin-left: 50px;
   padding-right: 20px;
   border-right: 1px solid #37373c;;
`;

export const ImageWrapper = styled.div`
   display: flex;
   align-items: center;
   img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px solid white;
   }
`;

export const InfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 400px;
   margin-left: 25px;
   justify-content: center;
`;

export const NameWrapper = styled.div``;

export const Name = styled.h2`
   font-weight: 600;
   font-size: 22px;
   margin: 0;
`;

export const Profession = styled.p`
   color: #0fb7f2;
   font-size: 14px;
   margin: 0;
`;

export const Introduction = styled.p`
   font-size: 14px;
`;

export const PersonalDetailsWrapper = styled.div`
   flex-basis: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const DetailsWrapper = styled.div``;

export const Detail = styled.div`
   display: flex;
`;

export const IconWrapper = styled.div`
   margin-right: 30px;
   margin-bottom: 15px;

   img {
      color: white;
      fill: white;
   }
`;

export const DetailText = styled.p`
   margin: 0;
   font-size: 14px;
   font-weight: 600;
`;
