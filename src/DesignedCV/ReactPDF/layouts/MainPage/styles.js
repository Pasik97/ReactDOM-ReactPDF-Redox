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
      width: '350px',
      marginTop: '30px',
      marginBottom: '20px',
      marginLeft: '10px',
   },
   rightColumn: {
      width: '250px',
      marginTop: '30px',
      marginBottom: '20px',
      marginLeft: '20px',
   },
});
