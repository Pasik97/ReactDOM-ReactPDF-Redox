import { StyleSheet } from '@react-pdf/renderer';

export const MainPageContainer = StyleSheet.create({
   mainPageContainer: {},
});

export const ColumnsWrapper = StyleSheet.create({
   columnsWrapper: {
      display: 'flex',
      flexDirection: 'row',
   },
   leftColumn: {
      width: '306px',
      marginTop: '32px',
      marginBottom: '19px',
      marginLeft: '47px',
   },
   rightColumn: {
      width: '188px',
      marginTop: '32px',
      marginBottom: '19px',
      marginRight: '47px',
   },
});
