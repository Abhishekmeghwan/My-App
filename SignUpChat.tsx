import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'

const { width } = Dimensions.get("window");

const SignUpChat = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confermpassword, setConfermPassword] = useState('');

    const handlesubmit = () => {
        if (!name.trim()) {
            Alert.alert('Error', 'plese enter your name ')
            return
        } if (!email.trim() || !email.includes('@')) {
            Alert.alert('Error', 'plese enter a invalid email ')
            return
        } if (!phone.trim() || phone.length < 10) {
            Alert.alert('Error', 'plese enter a valid number ')
            return
        } if (!password || password.length < 6) {
            Alert.alert('Error', 'plese enter a valid password ')
            return
        } if (password !== confermpassword) {
            Alert.alert('Error', 'do not match password ')
            return
        }
        Alert.alert("Success", "Signup successful!");
        //navigation.navigate("LoginChat");

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Enter name'
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter email'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter phone number'
                    keyboardType='phone-pad'
                    value={phone}
                    onChangeText={setPhone}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter password'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter confirm password'
                    secureTextEntry
                    value={confermpassword}
                    onChangeText={setConfermPassword}
                />

            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={handlesubmit}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('LoginChat')}>
                    <Text style={styles.textSignup}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 40,
        backgroundColor: '#fff'
    },
    input: {
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 12,
        marginBottom: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        //fontSize: 16,
        width: width * 0.9, // screen ke width ke hisaab se
        alignSelf: 'center'
    },
    button: {
        padding: 15,
        borderRadius: 12,
        backgroundColor: 'purple',
        width: width * 0.9,
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'purple',
    },
    textSignup: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
        color: 'purple'
    }
})

export default SignUpChat;


