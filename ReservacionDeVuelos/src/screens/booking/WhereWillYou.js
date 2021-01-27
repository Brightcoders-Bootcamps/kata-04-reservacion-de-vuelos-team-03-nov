import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import FormButton from '../../components/FormButton';
import contentText from './../../utils/Constants';
import BookingInput from './../../components/BookingInput';

const whereWillYou = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{contentText.whereWillYou}</Text>
            <BookingInput
            placeHolderText="Select location"
            />
            <FormButton
             buttonTitle="Next"
             backgroundColor={colors.gray}
             color={colors.white}
             onPress={() => navigation.navigate('TravelDate')}
            />
        </View>
    )
};

export default whereWillYou;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 80,
        marginRight: 35,
        marginLeft: 20,
        marginBottom: 10
    }
});