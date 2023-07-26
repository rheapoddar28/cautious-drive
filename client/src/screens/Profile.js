import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';

export default function RegisterScreen() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        emergencyNum: '',
    });

    const showAlert = () =>
    Alert.alert(
        '',
        'Your details have been saved.',
    [{
        text: 'OK', 
        onPress: () => console.log('OK Pressed')
      }],
    {
      cancelable: true,
    },
  );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <View style={styles.container}>
                <View style={styles.header}>

                    {/*<Text style={styles.title}>Profile</Text>*/}

                    <Image style={styles.Img} source={require('../../assets/profile.jpg')} />

                </View>
                <View style={styles.input}>
                    <Text style={styles.inputLabel}>User Name</Text>
                    <TextInput
                        autoCorrect={false}
                        onChangeText={name => setForm({ ...form, name })}
                        placeholder="Eg: John"
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
                            keyboardType="email-address"
                            onChangeText={email => setForm({ ...form, email })}
                            placeholder="Eg: john@example.com"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.email}
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>

                        <TextInput
                            autoCorrect={false}
                            onChangeText={password => setForm({ ...form, password })}
                            placeholder="********"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                            value={form.password}
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Emergency Contact Number</Text>
                        <TextInput
                            autoCorrect={false}
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
                                // handle onPress
                            }}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText} onPress={showAlert} >Save Changes</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
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
    Img: {
        width: 105,
        height: 105,
        alignSelf: 'center',
        marginBottom: 5,
    },
    form: {
        marginBottom: 20,
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
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1d1d1d',
        marginBottom: 8,
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
});