import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Triangle from 'react-native-triangle';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const borderRadius = 7;

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: true }
    }

    _toggleLogin() {
        this.setState({ isLogin: !this.state.isLogin });
    }

    render() {
        const { navigate } = this.props.navigation;
        let titleText, forgotPassword, confirmPassword, toggleText;
        if (this.state.isLogin) {
            titleText = "LOGIN";
            forgotPassword = <View style={styles.forgotContainer}><Text style={styles.forgot}>Forgot password?</Text></View>
            confirmPassword = null;
            toggleText = "No Account? Register now"
        } else {
            titleText = "REGISTER";
            forgotPassword = null;
            confirmPassword = <View style={styles.inputContainer}><Text style={styles.input}>Confirm Password</Text></View>
            toggleText = "Have an account? Login now"
        }
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Image source={require('../../res/ui/login-register/login-register-banner.png')} style={styles.banner} />
                    <View style={styles.loginContainer}>
                        <Text style={styles.login}>{titleText}</Text>
                        <View style={styles.border} />
                        <View style={styles.inputContainer}>

                            <View style={styles.usernameContainer}>
                                <Text style={styles.input}>abc</Text>
                            </View>
                            <View style={styles.domainContainer}>
                                <Text style={styles.domain}>@abc.com</Text>
                            </View>

                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input}>Password</Text>
                        </View>

                        {confirmPassword}
                        {forgotPassword}

                        <TouchableOpacity underlayColor="transparent" style={styles.nextContainer} onPress={() => navigate('home')}>
                            <ImageBackground source={require('../../res/ui/login-register/button_next.png')} style={styles.nextImage}>
                                <Text style={styles.nextText}>NEXT</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.registerButton} underlayColor="transparent" onPress={() => this._toggleLogin()}>
                            <Text style={styles.register}>{toggleText}</Text>
                            <Triangle width={11} height={16} color={'white'} direction={'right'} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    banner: {
        width: width,
        height: width / 1125 * 418,
        resizeMode: "contain",
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: "center"
    },
    login: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 10,
    },
    border: {
        width: 30,
        borderTopWidth: 2,
        marginBottom: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        width: width * 0.7,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: borderRadius,
        marginTop: 25,
    },
    usernameContainer: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: 'grey',
    },
    domainContainer: {
        backgroundColor: '#d5d5d5',
        flex: 1,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        padding: 10,
    },
    input: {
        color: 'grey',
        fontStyle: 'italic',
        padding: 10,
    },
    forgotContainer: {
        marginTop: 5,
        justifyContent: "flex-start",
        width: width * 0.7,
        opacity: 0, // TODO: 
    },
    forgot: {
        color: '#d63017',
        textDecorationLine: 'underline',
    },
    nextContainer: {
        marginTop: 40,
        width: width * 0.7,
        justifyContent: 'center',
        alignItems: "center",
    },
    nextImage: {
        width: width * 0.7,
        height: width * 0.7 * 145 / 762,
        justifyContent: 'center',
        alignItems: "center",
    },
    nextText: {
        color: 'white',
        fontSize: 17,
        fontWeight: "900",
        textAlign: 'center',
        marginBottom: 6,
    },
    bottomContainer: {
        width: width,
        height: 100,
        backgroundColor: '#2c2c83',
        justifyContent: 'center',
        alignItems: "center",
    },
    registerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    register: {
        color: 'white',
        fontSize: 16,
        fontWeight: "700",
        marginRight: 10,
    }

});
