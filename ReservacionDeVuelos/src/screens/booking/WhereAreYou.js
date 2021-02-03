import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FormButton from '../../components/FormButton';
import contentText from './../../utils/Constants';
import BookingInput from './../../components/BookingInput';
import IconBack from 'react-native-vector-icons/Ionicons';
import colors from './../../utils/Colors';

const WhereAreYou = ({navigation}) => {
  const [formData, setFormData] = useState({
    origin: '',
  });

  const onRegister = () => {
    navigation.navigate('WhereWillYou', {
      formData,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconBack
          name="chevron-back"
          style={styles.backIcon}
          onPress={() => navigation.navigate('Home')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{contentText.whereAreYou}</Text>
      <BookingInput
        placeHolderText="Select location"
        onChange={(e) => setFormData({...formData, origin: e.nativeEvent.text})}
      />
      <FormButton
        buttonTitle="Next"
        backgroundColor={formData.origin ? colors.blue : colors.gray}
        color={colors.white}
        onPress={onRegister}
      />
    </View>
  );
};

export default WhereAreYou;

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
});
