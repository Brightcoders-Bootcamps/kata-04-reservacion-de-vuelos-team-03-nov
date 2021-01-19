import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/Colors';
import contentText from '../utils/Constants';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.ContainerInput}>
        <Text style={styles.title}> {contentText.logInTitle} </Text>
        <Text style={styles.formInputtext}> {contentText.email} </Text>
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          secureTextEntry={false}
        />
        <Text style={styles.formInputtext}> {contentText.password} </Text>
        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPasword(userPassword)}
          secureTextEntry={true}
        />
      </View>
      <FormButton
        buttonTitle="Log In"
        backgroundColor={colors.gray}
        color={colors.white}
        onPress={() => alert('Log In CLicked!')}
      />
      <View style={styles.login}>
        <Text style={styles.textLogIn}>{contentText.noAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.goToSignIn}> {contentText.createHere} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    color: colors.blue,
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ContainerInput: {
    marginTop: 25,
    marginBottom: 20,
  },
  formInputtext: {
    color: colors.black,
    fontSize: 15,
  },

  goToSignIn: {
    color: colors.blue,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  login: {
    flexDirection: 'row',
    marginTop: 40,
  },
  textLogIn: {
    fontSize: 16,
    color: colors.darkGray,
  },
});

export default LogInScreen;
