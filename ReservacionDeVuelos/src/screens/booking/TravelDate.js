import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FormButton from '../../components/FormButton';
import contentText from './../../utils/Constants';
import {Calendar} from 'react-native-calendars';

import IconBack from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

const TravelDate = (props) => {
  const {navigation, route} = props;
  const {origin, destiny} = route.params.formData;

  const [formData, setFormData] = useState({
    origin: origin,
    destiny: destiny,
    date: '',
  });

  const onRegister = () => {
    navigation.navigate('HowManyPassengers', {
      formData,
    });
  };

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
            <Text style={styles.country}> {formData.origin}</Text>
          </View>
          <Icon name="airplane" style={styles.airplaneIcon} />
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.capital}> AMS </Text>
            <Text style={styles.country}>{formData.destiny}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>{contentText.date}</Text>
      <Calendar
        onDayPress={(day) => setFormData({...formData, date: day.dateString})}
        markedDates={{
          [formData.date]: {
            selected: true,
            marked: true,
            selectedColor: 'blue',
          },
        }}
      />

      <FormButton
        buttonTitle="Next"
        backgroundColor={colors.blue}
        color={colors.white}
        onPress={onRegister}
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
    padding: 5,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginRight: 80,
    marginBottom: 10,
  },
  backIcon: {
    marginTop: 5,
    fontSize: 48,
    color: colors.blue,
    marginRight: 300,
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
