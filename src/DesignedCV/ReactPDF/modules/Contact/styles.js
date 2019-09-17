import { StyleSheet } from '@react-pdf/renderer';

export const ContactContainer = StyleSheet.create({
   contactContainer: {
      fontSize: 8,
      color: '#7a7a7a',
   },
   contactTitle: {
      fontWeight: 600,
      fontSize: 13,
      color: '#0fb7f2',
      width: '94px',
      textAlign: 'right',
      margin: '0',
      marginBottom: '6px',
   }
});

export const ContactItem = StyleSheet.create({
   contactItem: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '13px',
      marginLeft: '106px',
      alignItems: 'center',
   },
   itemText: {
      margin: '0',
   }
});

export const IconWrapper = StyleSheet.create({
   iconWrapper: {
      marginRight: '9px',
      width: '8px',
      display: 'flex',
      alignItems: 'center',
   },
   image: {
      width: '8px',
   }
});
