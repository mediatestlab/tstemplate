import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.content}>
          <Text style={styles.title}>TypeScript template</Text>
        </View>

        <Text style={styles.footer}>&copy; 2020, ATA, MediaTestLab</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  content: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#444',
  },
  footer: {
    color: '#666',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    padding: 5,
    borderTopWidth: 2,
    borderTopColor: '#B22222',
  },
});

export default App;
