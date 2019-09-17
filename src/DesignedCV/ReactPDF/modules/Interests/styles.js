import { StyleSheet } from '@react-pdf/renderer';

export const InterestsContainer = StyleSheet.create({
   interestsContainer: {
      fontSize: 8,
      color: '#0fb7f2',
   },
   interestsTitle: {
      fontWeight: 600,
      fontSize: 13,
      margin: '0',
      marginBottom: '16px',
   },
});

export const ItemsWrapper = StyleSheet.create({
   itemsWrapper: {
      maxWidth: '176px',
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap',
   },
});

export const InterestsItem = StyleSheet.create({
   interestsItem: {
      width: '35px',
      height: '42px',
      marginTop: '6px',
      marginRight: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
   },
   itemText: {
      width: '35px',
      margin: '0',
      textAlign: 'center',
      fontWeight: 600,
   },
});

export const IconWrapper = StyleSheet.create({
   iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      width: '26px',
      height: '26px',
      borderTopColor: '#0fb7f2',
      borderTopStyle: 'solid',
      borderTopWidth: 2,
      borderBottomColor: '#0fb7f2',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderLeftColor: '#0fb7f2',
      borderLeftStyle: 'solid',
      borderLeftWidth: 2,
      borderRightColor: '#0fb7f2',
      borderRightStyle: 'solid', 
      borderRightWidth: 2,
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 100,
      marginTop: '5px',
   },
   image: {
      width: '12px',
   },
});

