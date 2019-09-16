import { StyleSheet } from '@react-pdf/renderer';

export const ContactWrapper = StyleSheet.create({
   contactWrapper: {
      fontWeight: 600,
      fontSize: 10,
      color: '#3e3e3e',
      marginTop: '20px',
      marginLeft: '80px',
      marginRight: '80px',
   },
   name: {
      marginBottom: '8px',
      textAlign: 'center',
      width: '100%',
   }
});

export const DetailsWrapper = StyleSheet.create({
   detailsWrapper: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
   },
   detail: {}
});
