import React from 'react';
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

const HowManyPassengers = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconBack
          name="chevron-back"
          style={styles.backIcon}
          onPress={() => navigation.navigate('TravelDate')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{contentText.passengers}</Text>

      <ScrollView style= {styles.passengersNumber} >
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
          <Text>4</Text>
          <Text>5</Text>
      </ScrollView>

      <FormButton
        buttonTitle="Next"
        backgroundColor={colors.gray}
        color={colors.white}
        onPress= {() => navigation.navigate('RequestReceived')}
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
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 40,
    marginRight: 80,
    marginLeft: 20,
    marginBottom: 10,
  },
  backIcon: {
    marginTop: 5,
    fontSize: 48,
    color: colors.blue,
    marginRight: 300,
  },
  passengersNumber: {
     marginTop: 40,
     fontSize: 48, 
     marginLeft: 20,
  },
});
