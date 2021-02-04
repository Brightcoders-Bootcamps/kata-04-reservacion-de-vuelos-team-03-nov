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

  const [formError, setFormError] = useState({});

  const onRegister = () => {
    let errors = {};
    if (!formData.origin) {
      if (!formData.origin) errors.origin = true;
    } else {
      navigation.navigate('WhereWillYou', {
        formData,
      });
    }
    setFormError(errors);
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
        style={{marginBottom: 150}}
        placeHolderText="Select location"
        onChange={(e) => setFormData({...formData, origin: e.nativeEvent.text})}
      />
      {formError.origin && (
        <Text style={styles.titleError}>{contentText.errorLocation}</Text>
      )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginRight: 35,
    marginLeft: 20,
  },
  backIcon: {
    marginTop: 5,
    fontSize: 48,
    color: colors.blue,
    backgroundColor: colors.white,
    marginRight: 320,
  },
  titleError: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.red,
    marginBottom: 150,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 35,
  },
});
