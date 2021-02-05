import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/Colors';
import contentText from '../utils/Constants';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const {login} = useContext(AuthContext);
  const [formError, setFormError] = useState({});
  
  const onLoginValidate = () => {
    let errors ={};
     if(!email || !password) {
      if(!email) errors.email = true;
      if(!password) errors.password = true;
  }else{
    login(email, password);
  }    
      setFormError(errors);
  };
  
 
  return (
    <View style={styles.container}>
      <View style={styles.ContainerInput}>
        <Text style={styles.title}> {contentText.logInTitle} </Text>
       
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.formInputtext}> {contentText.email} </Text>
          {formError.email && (
            <Text style={styles.textError}>{contentText.errorEmail} </Text>
          )}
        </View>


        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          secureTextEntry={false}
        />
       

       <View style={{flexDirection: 'row'}}>
          <Text style={styles.formInputtext}> {contentText.password} </Text>
          {formError.password && (
            <Text style={styles.textError}>{contentText.errorPassword} </Text>
          )}
        </View>

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPasword(userPassword)}
          secureTextEntry={true}
          source={true}
        />
      </View>
      <FormButton
        buttonTitle="Log In"
        backgroundColor={colors.gray}
        color={colors.white}
        onPress= {onLoginValidate}
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
    color: colors.darkGray
  },
  textError: {
    fontSize: 12,
    color: colors.red,
    marginLeft: 10, 
    fontWeight: 'bold',
  },
});

export default LogInScreen;
