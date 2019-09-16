import { StyleSheet } from '@react-pdf/renderer';

export const DetailsWrapper = StyleSheet.create({
   detailsWrapper: {
      fontSize: 10,
      color: '#3e3e3e',
      marginTop: '8px',
      marginLeft: '90px',
      marginRight: '90px',
      width: '420px',
   },
   title: {
      borderBottomColor: '#3e3e3e',
      borderBottomStyle: 'dashed',
      borderBottomWidth: 1,
      paddingBottom: '6px',
   }
});

export const ContentWrapper = StyleSheet.create({
   contentWrapper: {
      marginTop: '12px',
   },
});

export const Detail = StyleSheet.create({
   detail: {
      marginBottom: '4px',
      display: 'flex',
      flexDirection: 'row',
   },
   dateWrapper: {
      marginRight: '24px',
   },
   text: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '330px',
   }
});
