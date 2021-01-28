import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import FormButton from './../../components/FormButton';
import IconBack from 'react-native-vector-icons/Ionicons';
import contentText from './../../utils/Constants';

const RequestReceived = ({navigation}) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity>
           <IconBack
             name="chevron-back"
             style={styles.backIcon}
             onPress={() => navigation.navigate('HowManyPassengers')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{contentText.yourrequest}</Text>

             <FormButton
             buttonTitle="Finish"
             backgroundColor={colors.gray}
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
});