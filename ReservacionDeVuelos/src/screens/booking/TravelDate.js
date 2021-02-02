import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FormButton from '../../components/FormButton';
import contentText from './../../utils/Constants';
import Calendar from './../../components/Calendar';
import IconBack from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

const TravelDate = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconBack
          name="chevron-back"
          style={styles.backIcon}
          onPress={() => navigation.navigate('WhereWillYou')}
        />
      </TouchableOpacity>

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
      </View>

      <Text style={styles.title}>{contentText.date}</Text>
      <Calendar />

      <FormButton
        buttonTitle="Next"
        backgroundColor={colors.blue}
        color={colors.white}
        onPress={() => navigation.navigate('HowManyPassengers')}
      />
    </View>
  );
};

export default TravelDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingBottom: 30
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginTop: 5,
    marginRight: 80,
    marginBottom: 5
  },
  backIcon: {
    fontSize: 48,
    color: colors.blue,
    marginRight: 330,
  },

  mainText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  airplaneIcon: {
    fontSize: 25,
    color: colors.blue,
    marginRight: 20,
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
