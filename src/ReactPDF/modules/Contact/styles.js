import { StyleSheet } from '@react-pdf/renderer';

export const ContactContainer = StyleSheet.create({
   contactContainer: {
      fontSize: 10,
      color: '#7a7a7a',
   },
   contactTitle: {
      fontWeight: 600,
      fontSize: 20,
      color: '#0fb7f2',
      width: '120px',
      textAlign: 'right',
      margin: '0',
      marginBottom: '10px',
   }
});

export const ContactItem = StyleSheet.create({
   contactItem: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '15px',
      marginLeft: '140px',
   },
   itemText: {
      margin: '0',
   }
});

export const IconWrapper = StyleSheet.create({
   iconWrapper: {
      marginRight: '15px',
      width: '14px',
      display: 'flex',
      alignItems: 'center',
   },
   image: {
      width: '12px',
   }
});
