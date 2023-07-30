import { StyleSheet, Text, View, Dimensions } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

const width = Dimensions.get('window').width
function CurrentOrder() {


    return (
        <View>
            <View style={styles.currView}>
                <Text style={styles.currText}>Current Order</Text>
                <Text style={styles.idText}>ID : 1234</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center',marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="circle" size={0.05 * width} color="#FFDC25" />
                        <View style={styles.hrView} />
                        <Icon name="circle" size={0.05 * width} color="#FFDC25" />
                        <View style={styles.hrView} />
                        <Icon name="circle-o" size={0.05 * width} color="#FFDC25" />
                        <View style={styles.hrView} />
                        <Icon name="circle-o" size={0.05 * width} color="#FFDC25" />
                    </View>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <View>
                        <Text style={styles.fromText}>from</Text>
                        <Text style={styles.cityName}>Delhi</Text>
                        <Text style={styles.fromText}>5 July, 2023</Text>
                    </View>
                    <View>
                        <Text style={styles.fromText}>to</Text>
                        <Text style={styles.cityName}>Dharamshalla</Text>
                        <Text style={styles.fromText}>9 July, 2023</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CurrentOrder

const styles = StyleSheet.create({
    currText: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },
    currView: {
        // backgroundColor: '#181F28',
        paddingHorizontal: 0.07 * width,
        paddingTop: 30,
        paddingBottom: 20
    },
    hrView: {
        width: 0.2 * width,
        height: 1,
        backgroundColor: '#FFDC25'
    },
    idText: {
        color: '#A0A0A0',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10
    },
    fromText: {
        color: '#A0A0A0',
        fontSize: 16
    },
    cityName: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})