import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FormButton from '../../components/FormButton';
import contentText from './../../utils/Constants';
import Calendar from './../../components/Calendar';
import IconBack from 'react-native-vector-icons/Ionicons';

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
      <Text style={styles.title}>{contentText.date}</Text>
      <Calendar />

      <FormButton
        buttonTitle="Next"
        backgroundColor={colors.gray}
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
    padding: 5,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 35,
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
});
