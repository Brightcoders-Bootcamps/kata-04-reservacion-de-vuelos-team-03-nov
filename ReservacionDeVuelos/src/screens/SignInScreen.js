import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/Colors';
import contentText from '../utils/Constants';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import GoogleButton from '../components/GoogleButton';
import Checkbox from '../components/Checkbox';
import eye from '../img/ojo.png';

const SignInScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.ContainerInput}>
        <Text style={styles.title}> {contentText.signUpTitle} </Text>
        <Text style={styles.formInputtext}> {contentText.firstName} </Text>
        <FormInput
          labelValue={name}
          onChangeText={(userName) => setName(userName)}
          secureTextEntry={false}
        />
        <Text style={styles.formInputtext}>{contentText.email} </Text>
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
          source={eye}
        />
      </View>

      <Text style={styles.restricted_password}>
        {contentText.restricted_password}
      </Text>

      <Checkbox />

      <FormButton
        buttonTitle={contentText.signUpTitle}
        onPress={() => alert('Sign In clicked!')}
        backgroundColor={colors.gray}
        color={colors.white}
      />

      <Text style={styles.textOr}>or</Text>

      <GoogleButton
        buttonTitle={contentText.signUpGoogle}
        onPress={() => alert('Sign Up with Google')}
        backgroundColor={colors.gray}
        color={colors.white}
      />

      <View style={styles.login}>
        <Text style={styles.textLogIn}>{contentText.haveAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.goToSignIn}> {contentText.logInTitle} </Text>
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
    fontWeight: 'bold',
    marginLeft: -5,
    marginBottom: 10,
  },
  ContainerInput: {
    marginTop: 20,
    marginBottom: 10,
  },
  formInputtext: {
    color: colors.black,
    fontSize: 13,
  },

  goToSignIn: {
    color: colors.blue,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  logo: {
    height: 240,
    width: 300,
    resizeMode: 'cover',
  },
  login: {
    flexDirection: 'row',
    marginTop: 20,
    color: colors.black,
  },
  textLogIn: {
    fontSize: 16,
    color: colors.darkGray,
  },
  goToLogIn: {
    color: colors.blue,
  },
  restricted_password: {
    fontSize: 11,
    marginLeft: 16,
    marginTop: -10,
  },
  textOr: {
    color: colors.darkGray,
    marginTop: 5,
    marginBottom: 5,
  },
});
export default SignInScreen;
