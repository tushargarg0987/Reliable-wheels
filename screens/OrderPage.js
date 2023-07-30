import { StyleSheet, Text, View, Dimensions } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import CurrentOrder from "../components/CurrentOrder"
import CallComponent from "../components/CallComponent"
import NextCheckpoint from "../components/NextCheckpoint"

const width = Dimensions.get('window').width
function OrderPage() {

    return (
        <View>
            <View style={styles.currComp} >
                <CurrentOrder />
                <CallComponent />
            </View>
            <View style={styles.currComp}>
                <NextCheckpoint />
            </View>
        </View>
    )
}

export default OrderPage

const styles = StyleSheet.create({
    currComp: {
        margin: 0.03 * width,
        backgroundColor: '#181F28',
        borderRadius: 20
    }
})