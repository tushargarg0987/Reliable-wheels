import {BlurView} from '@react-native-community/blur';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function StartPage() {
    return (
        <ImageBackground source={require('../truck-background.jpg')} style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#00000070', flexDirection: 'column' }} >
                <View style={{ flex: 4, justifyContent: 'center', padding: '5%' }}>
                    <Text style={styles.headText}>Where</Text>
                    <Text style={styles.headText}>Speed</Text>
                    <Text style={styles.headText}>Meets</Text>
                    <Text style={styles.headText}>Efficiency</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btn}>
                        <BlurView blurAmount={20} blurType='prominent' overlayColor="#FFFFFF02" style={styles.blurView}><Text style={styles.btnText}>Signup</Text></BlurView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <BlurView blurAmount={20} blurType='prominent' overlayColor="#FFFFFF02" style={styles.blurView}><Text style={styles.btnText}>Login</Text></BlurView>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default StartPage;

const styles = StyleSheet.create({
    headText: {
        fontSize: 45,
        fontWeight: 'bold',
        // color: 'white'
    },
    btn: {
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#ffffff12',
        overflow: 'hidden',
        borderRadius: 20,
    },
    btnText: {
        fontSize: 28,
        fontWeight: 'bold',
        padding: '20px',
        textAlign: 'center',

    },
    blurView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        height: '50px',

    }
});
