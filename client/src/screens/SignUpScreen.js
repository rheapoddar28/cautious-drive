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


export default function SignUpScreen({ navigation }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        emergencyNum: '',
    });

    const [errormsg, setErrormsg] = useState(null);

    const Sendtobackend = () => {
        console.log(form);
        if (form.name == '' ||
            form.email == '' ||
            form.password == '' ||
            form.cpassword == '' ||
            form.emergencyNum == '') {
            setErrormsg('All fields are required');
            return;
        }
        else {
            if (form.password != form.cpassword) {
                setErrormsg('Password does not match');
                return;
            }
            else {
                fetch('http://192.168.29.9:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                })
                    .then(res => res.json()).then(
                        data => {
                            if (data.error) {
                                setErrormsg(data.error);
                            }
                            else {
                                alert('account created successfully');
                                navigation.navigate('Login');
                            }
                            console.log(data)
                        }
                    )

            }

        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Sign Up to <Text style={{ color: '#AA1111' }}>Cautious Drive</Text>
                        </Text>

                        <Text style={styles.subtitle}>For Safer Journey</Text>
                    </View>
                    {
                        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                    }

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>User Name</Text>
                        <TextInput
                            autoCorrect={false}
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={name => setForm({ ...form, name })}
                            placeholder="eg: John"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.name}
                        />
                    </View>

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

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}> Confirm Password</Text>

                            <TextInput
                                autoCorrect={false}
                                onPressIn={() => setErrormsg(null)}
                                onChangeText={cpassword => setForm({ ...form, cpassword })}
                                placeholder="********"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={form.cpassword}
                            />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Emergency Contact Number</Text>
                            <TextInput
                                autoCorrect={false}
                                onPressIn={() => setErrormsg(null)}
                                onChangeText={emergencyNum => setForm({ ...form, emergencyNum })}
                                placeholder="+91 **********"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={form.emergencyNum}
                            />
                        </View>



                        <View style={styles.formAction}>
                            <TouchableOpacity
                                onPress={() => {
                                    Sendtobackend();
                                    // handle onPress
                                }}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("Login", { state: 0 }) }}>
                            <Text style={styles.formFooter}>
                                Already have an account?{' '}
                                <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
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