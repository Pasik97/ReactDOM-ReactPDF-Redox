import { StyleSheet } from '@react-pdf/renderer';
import background from '../../../assets/background.png';

export const HeaderContainer = StyleSheet.create({
   headerContainer: {
      height: '205px',
      width: '100%',
      backgroundColor: 'black',
      backgroundImage: `url(${background})`,
      display: 'flex',
      flexDirection: 'row',
      color: 'white',
      position: 'relative',
   }
});

export const HeaderBackground = StyleSheet.create({
   headerBackground: {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      display: 'block',
      height: '100%',
      width: '100%',
      zIndex: '0',
   }
});

export const PersonalDataWrapper = StyleSheet.create({
   personalDataWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '310px',
      height: '100%',
      marginLeft: '30px',
      paddingRight: '12px',
      borderRightColor: '#37373c',
      borderRightStyle: 'solid', 
      borderRightWidth: 1,
   }
});

export const ImageWrapper = StyleSheet.create({
   imageWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   image: {
      width: '95px',
      height: '95px',
      borderTopColor: 'white',
      borderTopStyle: 'solid',
      borderTopWidth: 2,
      borderBottomColor: 'white',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderLeftColor: 'white',
      borderLeftStyle: 'solid',
      borderLeftWidth: 2,
      borderRightColor: 'white',
      borderRightStyle: 'solid', 
      borderRightWidth: 2,
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 100,
   }
});

export const InfoWrapper = StyleSheet.create({
   infoWrapper: {
      display: 'flex',
      flexDirection: 'column',
      // width: '400px',
      height: '100%',
      marginLeft: '14px',
      justifyContent: 'center',
      zIndex: '1',
   },
});

export const NameWrapper = StyleSheet.create({
   nameWrapper: {
      marginBottom: '10px',
   },
   name: {
      fontWeight: 600,
      fontSize: 14,
      margin: '0',
   },
   profession: {
      color: '#0fb7f2',
      fontSize: 9,
      margin: '0',
   }
});

export const Introduction = StyleSheet.create({
   introduction: {
      fontSize: 9,
      width: '170px',
   },
});

export const PersonalDetailsWrapper = StyleSheet.create({
   personalDetailsWrapper: {
      width: '235px',
      display: 'flex',
      justifyContent: 'center',
   },
});

export const DetailsWrapper = StyleSheet.create({
   detailsWrapper: {
      marginLeft: '50px',
   },
});

export const Detail = StyleSheet.create({
   detail: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '10px',
   },
   detailText: {
      margin: '0',
      width: '100px',
      fontSize: 9,
      fontWeight: 600,
   },
});

export const IconWrapper = StyleSheet.create({
   iconWrapper: {
      marginRight: '17px',
      display: 'flex',
      justifyContent: 'center',
   },
   image: {
      width: '12px',
   }
});
