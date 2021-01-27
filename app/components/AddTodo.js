import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default function AddTodo({ addTodo, setModalOpen }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const submitHandlerVerify = () => {
    if (text.length > 3) {
      addTodo(text);
      setText('');
      setModalOpen(false);
    } else {
      Alert.alert('Sorry', 'Todo must be over 3 characters long', [
        { text: 'OK', onPress: () => console.log('alert closed') },
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}
        autoFocus={true}
      />
      <Button color='#EC4899' onPress={submitHandlerVerify} title='add todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
