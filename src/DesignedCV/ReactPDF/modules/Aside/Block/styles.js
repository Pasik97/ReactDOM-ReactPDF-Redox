import { StyleSheet } from '@react-pdf/renderer';

export const BlockContainer = StyleSheet.create({
   blockContainer: {
      color: 'white',
      borderBottomColor: 'white',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      padding: '12px',
      paddingBottom: '0px',
   },
   blockTitle: {
      fontWeight: 600,
      fontSize: 13,
      width: '82px',
      textAlign: 'right',
      margin: '0',
   }
});

export const BlockRow = StyleSheet.create({
   blockRow: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '7px',
   },
   rowTitle: {
      margin: '0',
      marginRight: '12px',
      width: '88px',
      textAlign: 'right',
      fontSize: 8,
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
      backgroundColor: 'white',
      height: '5px',
      width: '5px',
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
      height: '5px',
      width: '5px',
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
