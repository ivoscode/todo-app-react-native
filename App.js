import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './app/components/Header';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'walk the dog', key: '1' },
    { text: 'mow the lawn', key: '2' },
    { text: 'create an app', key: '3' },
  ]);

  const removeTodo = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text, key: Math.random().toString() }];
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style='light' />
        <Header />
        <HomeScreen addTodo={addTodo} removeTodo={removeTodo} todos={todos} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
