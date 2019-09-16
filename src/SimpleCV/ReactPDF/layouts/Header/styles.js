import { StyleSheet } from '@react-pdf/renderer';

export const HeaderWrapper = StyleSheet.create({
   headerWrapper: {
      fontWight: 600,
      fontSize: 12,
      color: '#3e3e3e',
      marginTop: '80px',
      marginLeft: '90px',
      marginRight: '90px',
      marginBottom: '30px',
   },
   name: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '8px',
   }
});

export const DetailsWrapper = StyleSheet.create({
   detailsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
   },
   detail: {}
});
