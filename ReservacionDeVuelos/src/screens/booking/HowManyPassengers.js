import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from './../../components/FormButton';
import IconBack from 'react-native-vector-icons/Ionicons';
import contentText from './../../utils/Constants';
import {AuthContext} from './../../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/Ionicons';
import PickerPassenger from './../../components/NumPassengers';
import firestore from '@react-native-firebase/firestore';

const HowManyPassengers = (props) => {
  const {navigation, route} = props;
  const {origin, destiny, date} = route.params.formData;
  const {user} = useContext(AuthContext);
  const [passen, setPasent] = useState(0);

  const [formData, setFormData] = useState({
    origin: origin,
    destiny: destiny,
    date: date,
  });
  const [formError, setFormError] = useState({});

  const onRegister = async () => {
    let errors = {};
    if (passen == 0) {
      if (passen == 0) errors.passenger = true;
    }else{  
    await firestore()
      .collection('userFlightData-' + user.uid)
      .add({
        origin: formData.origin,
        destiny: formData.destiny,
        date: formData.date,
        passengers: passen,
      });
    navigation.navigate('RequestReceived', {
      formData,
      passen,
    });}
    setFormError(errors);
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
          <Text>
            {contentText.dateSelected}
            {formData.date}
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{contentText.passengersTitle}</Text>

      <PickerPassenger setPasent={setPasent} />
    
      {formError.passenger && (
        <Text style={styles.titleError}>{contentText.errorPassenger}</Text>
      )}

      <FormButton
        buttonTitle="Next"
        backgroundColor={passen ? colors.blue : colors.gray}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.white,
    paddingBottom: 50,
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
  titleError: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.red,
  },
});
