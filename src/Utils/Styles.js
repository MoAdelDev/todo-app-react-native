import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: 'blue',
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    task: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    taskTitle: {
      fontWeight: 'bold',
    },
    taskEvents: {
      flexDirection: 'row',
    },
    taskEvent: {
      color: 'blue',
      marginLeft: 10,
      marginRight: 10,
    }
  });