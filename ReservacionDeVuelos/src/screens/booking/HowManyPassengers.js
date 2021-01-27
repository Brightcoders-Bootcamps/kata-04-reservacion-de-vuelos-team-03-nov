import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import FormButton from './../../components/FormButton';


const HowManyPassengers = ({navigation}) => {
    return(
        <>
        <TouchableOpacity>
                <IconBack 
                name="chevron-back" 
                style={styles.backIcon} 
                onPress={() => navigation.navigate('TravelDate')}
                />
        </TouchableOpacity>
    
       <View>
         <FormButton
                buttonTitle="Next"
                backgroundColor={colors.gray}
                color={colors.white}
                />
       </View> 
    </>
    )
};

export default HowManyPassengers;
