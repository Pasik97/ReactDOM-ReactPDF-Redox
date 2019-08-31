import { StyleSheet } from '@react-pdf/renderer';
import background from '../../../assets/background.png';

export const HeaderContainer = StyleSheet.create({
   headerContainer: {
      height: '250px',
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
      width: '350px',
      height: '100%',
      marginLeft: '30px',
      paddingRight: '20px',
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
      width: '120px',
      height: '120px',
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
      marginLeft: '25px',
      justifyContent: 'center',
      zIndex: '1',
   },
});

export const NameWrapper = StyleSheet.create({
   nameWrapper: {
      marginBottom: '20px',
   },
   name: {
      fontWeight: 600,
      fontSize: 20,
      margin: '0',
   },
   profession: {
      color: '#0fb7f2',
      fontSize: 10,
      margin: '0',
   }
});

export const Introduction = StyleSheet.create({
   introduction: {
      fontSize: 10,
      width: '180px',
   },
});

export const PersonalDetailsWrapper = StyleSheet.create({
   personalDetailsWrapper: {
      width: '250px',
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
      marginBottom: '15px',
   },
   detailText: {
      margin: '0',
      width: '100px',
      fontSize: 12,
      fontWeight: 600,
   },
});

export const IconWrapper = StyleSheet.create({
   iconWrapper: {
      marginRight: '20px',
      display: 'flex',
      justifyContent: 'center',
   },
   image: {
      width: '12px',
   }
});
