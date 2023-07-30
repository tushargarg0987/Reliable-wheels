import { Alert, Linking, Platform, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

function CallComponent() {

    const callNumber = phone => {
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        }
        else {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
                <Text>Supplier</Text>
                <View style={styles.callView}>
                    <Icon name='call-outline' size={40} color="#FFDC25" />
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text>Reciever</Text>
                <View style={styles.callView}>
                    <Icon name='call-outline' size={40} color="#FFDC25" />
                </View>
            </View>
        </View>
    )
}

export default CallComponent

const styles = StyleSheet.create({
    callView: {
        padding: 5,
        backgroundColor: '#565524',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 30
    }
})