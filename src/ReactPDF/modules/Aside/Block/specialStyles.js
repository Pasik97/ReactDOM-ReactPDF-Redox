import { StyleSheet } from '@react-pdf/renderer';

export const BlockContainer = StyleSheet.create({
   blockContainer: {
      color: '#0fb7f2',
      padding: '10px',
      paddingBottom: '0px',
   },
   blockTitle: {
      fontWeight: 600,
      fontSize: 16,
      width: '80px',
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
      marginRight: '10px',
      width: '80px',
      textAlign: 'right',
      fontSize: 10,
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
      height: '6px',
      width: '6px',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 100,
      marginTop: '0',
      marginBottom: '0',
      marginLeft: '1px',
      marginRight: '1px',
   },
   emptyDot: {
      backgroundColor: '#bababa',
      height: '6px',
      width: '6px',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 100,
      marginTop: '0',
      marginBottom: '0',
      marginLeft: '1px',
      marginRight: '1px',
   }
});
