import { StyleSheet } from '@react-pdf/renderer';

export const BlockContainer = StyleSheet.create({
   blockContainer: {
      fontSize: 9,
      color: '#7a7a7a',
      marginBottom: '20px',
   },
   blockTitle: {
      fontWeight: 600,
      fontSize: 13,
      color: '#0fb7f2',
      width: '94px',
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
   rowDate: {
      margin: '0',
      marginRight: '12px',
      width: '94px',
      textAlign: 'right',
      fontSize: 10,
   }
});

export const RowContent = StyleSheet.create({
   rowContent: {},
   contentText: {
      color: '#0fb7f2',
      fontWeight: 600,
      margin: '0',
      marginBottom: '2px',
   },
   contentSubtext: {
      fontSize: 8,
      margin: '0',
   },
});

