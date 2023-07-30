import { Dimensions, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

const width = Dimensions.get('window').width

function NextCheckpoint() {
    return (
        <View style={styles.currView}>
            <Text style={styles.headText}>Checkpoint</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="circle" size={0.05 * width} color="#FFDC25" />
                    {/* <View style={styles.hrView} />
                        <Icon name="circle" size={0.05 * width} color="#FFDC25" />
                        <View style={styles.hrView} />
                        <Icon name="circle-o" size={0.05 * width} color="#FFDC25" /> */}
                    <View style={styles.hrView} />
                    <Icon name="circle-o" size={0.05 * width} color="#FFDC25" />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.cityName}>Delhi</Text>
                </View>
                <View>
                    <Text style={styles.cityName}>Dharamshalla</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: 30,marginBottom: 10}}>
                <View style={styles.btnView}>
                    <Text style={styles.btnText}>Map</Text>
                </View>
                <View style={styles.btnView}>
                    <Text style={styles.btnText}>Reached</Text>
                </View>
            </View>
        </View>
    )
}

export default NextCheckpoint

const styles = StyleSheet.create({
    headText: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    },
    currView: {

        paddingHorizontal: 0.07 * width,
        paddingTop: 30,
        paddingBottom: 20

    },
    hrView: {
        width: 0.7 * width,
        height: 1,
        backgroundColor: '#FFDC25'
    },
    cityName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    btnView: {
        // width: 0.35 * width,
        backgroundColor: '#ffffff1d',
        justifyContent: 'center',
        paddingVertical: 0.04 * width,
        paddingHorizontal: 0.08*width,
        borderRadius: 0.1 * width,
        minWidth: 0.35*width
    },
    btnText: {fontSize: 20,color: 'white',fontWeight: 'bold',textAlign: 'center'}
})