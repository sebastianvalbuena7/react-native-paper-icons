import { useState } from "react";
import { FAB } from "react-native-paper";
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles";
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
    const [counter, setCounter] = useState(10);

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{counter}</Text>

            <Icon
                name="add-outline"
                size={25}
                color={'#4474AB'}
            />

            <FAB
                // label="+1"
                style={globalStyles.fab}
                onPress={() => setCounter(counter + 1)}
                onLongPress={() => setCounter(0)}
                icon='add-outline'
            />
        </View>
    )
}