import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Add a new item...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add item' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        marginHorizontal: 8,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#fff',
        borderBottomColor: '#ddd'
    }
})