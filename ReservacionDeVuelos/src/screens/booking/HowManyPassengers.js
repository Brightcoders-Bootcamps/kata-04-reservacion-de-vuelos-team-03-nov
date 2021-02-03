import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FormButton from './../../components/FormButton';
import IconBack from 'react-native-vector-icons/Ionicons';
import contentText from './../../utils/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import PickerPassenger from './../../components/NumPassengers';
import firestore from '@react-native-firebase/firestore';

const HowManyPassengers = (props) => {
  const {navigation, route} = props;
  const {origin, destiny, date} = route.params.formData;

  const [formData, setFormData] = useState({
    origin: origin,
    destiny: destiny,
    date: date,
    passengers: '2',
  });

  const onRegister = async () => {
    await firestore().collection('userData').add({
      origin: formData.origin,
      destiny: formData.destiny,
      date: formData.date,
      passengers: formData.passengers,
    });
    navigation.navigate('RequestReceived', {
      formData,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconBack
          name="chevron-back"
          style={styles.backIcon}
          onPress={() => navigation.navigate('TravelDate')}
        />
      </TouchableOpacity>

      <View style={{display: 'flex', width: '90%'}}>
        <View style={styles.mainText}>
          <View>
            <Text style={styles.capital}> BEG</Text>
            <Text style={styles.country}> {formData.origin} </Text>
          </View>
          <Icon name="airplane" style={styles.airplaneIcon} />
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.capital}> AMS</Text>
            <Text style={styles.country}>{formData.destiny}</Text>
          </View>
        </View>
        <View style={styles.moreDetails}>
          <Text>{formData.date}</Text>
        </View>
      </View>

      <Text style={styles.title}>{contentText.passengersTitle}</Text>

      <PickerPassenger
        value={(e) => setFormData({...formData, passengers: e})}
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

export default HowManyPassengers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.white,
    paddingBottom: 42,
    paddingTop: 8,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginRight: 80,
    marginLeft: 20,
  },
  backIcon: {
    marginTop: 5,
    fontSize: 48,
    color: colors.blue,
    marginRight: 320,
  },
  mainText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  airplaneIcon: {
    fontSize: 25,
    color: colors.blue,
    marginRight: 35,
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
