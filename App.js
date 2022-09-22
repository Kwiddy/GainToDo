import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import Header from './components/header';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'item1', key: '1'},
    {text: 'item2', key: '2'},
    {text: 'item3', key: '3'}
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
