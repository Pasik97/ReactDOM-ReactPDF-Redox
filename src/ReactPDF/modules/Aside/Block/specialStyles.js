import { StyleSheet } from '@react-pdf/renderer';

export const BlockContainer = StyleSheet.create({
   blockContainer: {
      color: '#0fb7f2',
      padding: '20px',
   },
   blockTitle: {
      fontWeight: 600,
      fontSize: 20,
      width: '140px',
      textAlign: 'right',
      margin: '0',
   }
});

export const BlockRow = StyleSheet.create({
   blockRow: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '10px',
   },
   rowTitle: {
      margin: '0',
      marginRight: '20px',
      width: '140px',
      textAlign: 'right',
      fontSize: 12,
   }
});

export const RowDots = StyleSheet.create({
   rowDots: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
   },
});

export const Dot = StyleSheet.create({
   filledDot: {
      backgroundColor: '#0fb7f2',
      height: '8px',
      width: '8px',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 100,
      marginTop: '0',
      marginBottom: '0',
      marginLeft: '2px',
      marginRight: '2px',
   },
   emptyDot: {
      backgroundColor: '#bababa',
      height: '8px',
      width: '8px',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 100,
      marginTop: '0',
      marginBottom: '0',
      marginLeft: '2px',
      marginRight: '2px',
   }
});
