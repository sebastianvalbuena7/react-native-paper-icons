import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components";
import { Button } from "react-native-paper";

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{counter}</Text>

            {/* <PrimaryButton
                label='Increment'
                onLongPress={() => setCounter(0)}
                onPress={() => setCounter(counter + 1)}
            /> */}

            <Button
                onLongPress={() => setCounter(0)}
                onPress={() => setCounter(counter + 1)}
                mode="contained"
            >
                Increment
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    }
});