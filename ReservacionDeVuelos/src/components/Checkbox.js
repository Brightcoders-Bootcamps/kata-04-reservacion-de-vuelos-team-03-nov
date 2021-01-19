import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../utils/Colors';
import CheckBox from '@react-native-community/checkbox';
import contentText from '../utils/Constants';

function CheckBoxComponent() {
  const [AgreeTermsSelected, setAgreeTermsSelected] = useState(false);
  const [SuscribeSelected, setSuscribeSelected] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={AgreeTermsSelected}
          onValueChange={setAgreeTermsSelected}
          style={styles.checkbox}
          tintColors={{true: colors.blue, false: colors.black}}
        />
        <Text style={styles.labelCheckBox}>
          I agree to the
          <Text style={{textDecorationLine: 'underline'}}> Terms</Text> and
          <Text style={{textDecorationLine: 'underline'}}> Privacy Policy.
          </Text>
          *
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={SuscribeSelected}
          onValueChange={setSuscribeSelected}
          style={styles.checkbox}
          tintColors={{true: colors.blue, false: colors.black}}
        />
        <Text style={styles.labelCheckBox}> {contentText.subscribe} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginTop: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    width: '90%',
  },
  labelCheckBox: {
    fontSize: 13,
    margin: 8,
    color: colors.darkGray,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default CheckBoxComponent;
