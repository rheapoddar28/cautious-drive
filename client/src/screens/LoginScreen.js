import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    
} from 'react-native';



export default function LoginScreen({ navigation }) {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [errormsg, setErrormsg] = useState(null);
    const Sendtobackend = () => {
        console.log(form);
        if (form.email == '' || form.password == '') {
            setErrormsg('All fields are required');
            return;
        }
        else {
            fetch('http://192.168.29.9:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
                .then(res => res.json()).then(
                    data=async() => {
                        // console.log(data)
                        if (data.error) {
                            setErrormsg(data.error);
                        }
                        else {
                            //alert('login successfully');
                             navigation.navigate('DrawerNav');
                        }

                    }
                )
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Sign in to <Text style={{ color: '#AA1111' }}>Cautious Drive</Text>
                        </Text>

                        <Text style={styles.subtitle}>For Safer Journey</Text>
                    </View>
                    {
                        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                    }



                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Email address</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onPressIn={() => setErrormsg(null)}
                                keyboardType="email-address"
                                onChangeText={email => setForm({ ...form, email })}
                                placeholder="eg: john@example.com"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={form.email}
                            />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Password</Text>

                            <TextInput
                                autoCorrect={false}
                                onPressIn={() => setErrormsg(null)}
                                onChangeText={password => setForm({ ...form, password })}
                                placeholder="********"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={form.password}
                            />
                        </View>



                        <View style={styles.formAction}>
                            <TouchableOpacity
                                onPress={() => {
                                    Sendtobackend();
                                    
                                }}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("Sign Up", { state: 0 }) }}>
                            <Text style={styles.formFooter}>
                                Don't have an account?{' '}
                                <Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    header: {
        marginVertical: 36,
    },
    form: {
        marginBottom: 24,
    },
    formAction: {
        marginVertical: 24,
    },
    formFooter: {
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        textAlign: 'center',
    },
    title: {
        margin: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1d1d1d',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 44,
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        backgroundColor: '#AA1111',
        borderColor: '#AA1111',
    },
    btnText: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '600',
        color: '#fff',
    },
    errormessage: {
        color: 'red',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#ffff',
        padding: 5,
        borderRadius: 10,
    },
});