import React from 'react';
import {Text, TouchableOpacity,Button,View,StyleSheet} from 'react-native';
import {windowHeight , windowWith} from '../utils/Dimensions'
import colors from '../utils/Colors';

const FormButton = ({buttonTitle,backgroundColor,color, ...rest}) => {
  let bgcolor= backgroundColor;
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: bgcolor}]} {...rest}>
      <Text style={[styles.buttonText, {color:color}]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};


const styles =StyleSheet.create({
 buttonContainer : {
   marginTop:10,
   width:300,
   height:windowHeight /15,
   padding:10,
   alignItems:'center',
   justifyContent:'center',
   borderRadius :10,
 },
   buttonText: {
     fontSize:16,
     fontWeight:'bold',
     color:colors.white,
   }

})
export default FormButton;
