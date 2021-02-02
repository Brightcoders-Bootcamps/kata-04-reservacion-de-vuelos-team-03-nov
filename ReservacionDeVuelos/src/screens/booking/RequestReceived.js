import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FormButton from './../../components/FormButton';
import IconBack from 'react-native-vector-icons/Ionicons';
import contentText from './../../utils/Constants';
import Icon from 'react-native-vector-icons/Ionicons';

const RequestReceived = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', width: '90%'}}>
        <View style={styles.mainText}>
          <View>
            <Text style={styles.capital}> BEG </Text>
            <Text style={styles.country}> Serbia</Text>
          </View>
          <Icon name="airplane" style={styles.airplaneIcon} />
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.capital}> AMS </Text>
            <Text style={styles.country}>Netherlands</Text>
          </View>
        </View>
        <View style={styles.moreDetails}>
          <Text>January 29,2021 </Text>
          <Text> 2 passengers </Text>
        </View>
        <Text style={styles.title}>{contentText.yourrequest}</Text>
      </View>

      <FormButton
        buttonTitle="Finish"
        backgroundColor={colors.blue}
        color={colors.white}
      />
    </View>
  );
};

export default RequestReceived;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: 120
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginRight: 80,
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 150,
  },
  mainText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    paddingTop: 4,
    paddingBottom: 8,
  },
  airplaneIcon: {
    fontSize: 25,
    color: colors.blue,
    marginRight: 30,
  },
  moreDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
  },
  capital: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  country: {
    fontSize: 14,
    color: colors.darkGray,
  },
});
