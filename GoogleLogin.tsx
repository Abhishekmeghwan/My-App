import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'

const GoogleLogin = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '537456323938-gtaft7at4p92kkq6qanjf46ln8lb3nf1.apps.googleusercontent.com',
            //offlineAccess: true,
        });
    }, []);

    const SignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const usrinfo = await GoogleSignin.signIn();
            setUserInfo(usrinfo);
            console.log("User Info:", usrinfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Sign in is in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play services not available or outdated');
            } else {
                console.log('Some other error:', error);
            }
        }
    };

    const SignOut = async () => {
        try {
            await GoogleSignin.signOut();
            setUserInfo(null);
            console.log("User signed out");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.Container}>

            {userInfo == null ? (<TouchableOpacity style={styles.button} onPress={SignIn}>
                <Text style={styles.buttonText}>Google Login</Text>
            </TouchableOpacity>

            ) : (<TouchableOpacity style={styles.button} onPress={SignOut}>
                <Text style={styles.buttonText}>Google Signout</Text>
            </TouchableOpacity>)}




            {userInfo && (
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Welcome {userInfo.user.name}
                    </Text>
                    <Text>{userInfo.user.email}</Text>

                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 20,
        borderRightWidth: 1,
        paddingVertical: 15,
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
});

export default GoogleLogin;
