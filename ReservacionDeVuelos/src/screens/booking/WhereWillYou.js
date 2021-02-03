import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FormButton from '../../components/FormButton';
import contentText from './../../utils/Constants';
import BookingInput from './../../components/BookingInput';
import IconBack from 'react-native-vector-icons/Ionicons';
import colors from './../../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const whereWillYou = (props) => {
  const {navigation, route} = props;
  const {origin} = route.params.formData;
  const [formData, setFormData] = useState({
    origin: origin,
    destiny: '',
  });

  const onRegister = () => {
    navigation.navigate('TravelDate', {
      formData,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconBack
          name="chevron-back"
          style={styles.backIcon}
          onPress={() => navigation.navigate('WhereAreYou')}
        />
      </TouchableOpacity>

      <View style={{display: 'flex', width: '90%'}}>
        <View style={styles.mainText}>
          <View>
            <Text style={styles.capital}> BEG </Text>
            <Text style={styles.country}> {formData.origin}</Text>
          </View>
          <Icon name="airplane" style={styles.airplaneIcon} />
          <View style={{alignItems: 'flex-end'}}></View>
        </View>
      </View>

      <Text style={styles.title}>{contentText.whereWillYou}</Text>
      <BookingInput
        placeHolderText="Select location"
        onChange={(e) =>
          setFormData({...formData, destiny: e.nativeEvent.text})
        }
      />

      <FormButton
        buttonTitle="Next"
        backgroundColor={formData.destiny ? colors.blue : colors.gray}
        color={colors.white}
        onPress={onRegister}
      />
    </View>
  );
};

export default whereWillYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginTop: 40,
    marginRight: 35,
    marginLeft: 20,
    marginBottom: 120,
  },
  backIcon: {
    marginTop: 5,
    fontSize: 48,
    color: colors.blue,
    backgroundColor: colors.white,
    marginRight: 320,
  },
  mainText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  airplaneIcon: {
    fontSize: 25,
    color: colors.blue,
    marginRight: 55,
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
