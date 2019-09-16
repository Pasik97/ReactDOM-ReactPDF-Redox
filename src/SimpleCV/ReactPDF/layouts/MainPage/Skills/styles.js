import { StyleSheet } from '@react-pdf/renderer';

export const SkillsWrapper = StyleSheet.create({
   skillsWrapper: {
      fontSize: 10,
      color: '#3e3e3e',
      marginLeft: '90px',
      marginTop: '12px',
   },
   title: {
      marginBottom: '6px',
   }
});

export const ContentWrapper = StyleSheet.create({
   contentWrapper: {},
});

export const Skill = StyleSheet.create({
   skillWrapper: {
      display: 'flex',
      flexDirection: 'row',
   },
   text: {
      marginBottom: '6px',
      marginLeft: '24px',
   },
   level: {
      marginLeft: '16px',
   },
});
