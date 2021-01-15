import React, {useState} from 'react';
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/Colors';
import contentText from '../utils/Constants';
import FormButton from '../components/FormButton';
import  FormInput from '../components/FormInput'

const LogInScreen = ({navigation}) => {
  const [email , setEmail]= useState();
  const [password , setPasword]= useState();
  return (
    <View style={styles.container}>
      
       <View style={styles.ContainerInput}>
          <Text style={styles.formInputtext}>Email *</Text>
          <FormInput 
          labelValue={email}
          onChangeText={(userEmail)=>setEmail(userEmail)}
          secureTextEntry ={false}
          />   
          <Text style={styles.formInputtext}>Password *</Text> 
          <FormInput 
          labelValue={password}
          onChangeText={(userPassword)=>setPasword(userPassword)}
          secureTextEntry ={true}
          />   
        </View>
        <FormButton 
        buttonTitle="Log In" 
        backgroundColor={colors.gray}
        color={colors.white}
        onPress={() => alert('Log In CLicked!' )}/>
        <View style={styles.login}>
        <Text style={styles.textLogIn} >{contentText.noAccount}</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("SignIn")}>
            <Text style={styles.goToSignIn} >Create here</Text>
           </TouchableOpacity>
       </View>
      
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding:20,
  },
  text: {
    fontSize: 20,
    color: colors.black,
    alignItems: 'center',
    marginTop:-45,
  },
  ContainerInput:{
    marginTop:25,
    marginBottom:20,
  },
  formInputtext:{
   color:colors.black,
   fontSize:15,
  },
 
  goToSignIn: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize:18,
    textDecorationLine: 'underline',
  },
  logo: {
    height: 240,
    width: 300,
    resizeMode: 'cover',
  },
  login:{
  flexDirection:"row",
  marginTop:40,
},
textLogIn: {
 fontSize:18,
},
});
