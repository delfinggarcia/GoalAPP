import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image, } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalIputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goals.jpg')} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Course Goal!"
                    onChangeText={goalIputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.ButtonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
                    </View>

                </View>

            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 370,
        height: 120,
        margin: 20,

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    ButtonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    button: {
        width: 100,
        marginHorizontal: 8
    }
});