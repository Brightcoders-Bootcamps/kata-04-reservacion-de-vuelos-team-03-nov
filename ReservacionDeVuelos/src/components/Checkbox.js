import React,{useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../utils/Colors';
import CheckBox from '@react-native-community/checkbox';


function CheckBoxComponent() {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  return (
    <>
     <View style={styles.container}>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{true: colors.blue, false:colors.black}}
        />
        <Text style={styles.labelCheckBox}>
          I agree to the
          <Text style={{textDecorationLine: 'underline'}}> Terms</Text> and 
          <Text style={{textDecorationLine: 'underline'}}> Privacy Policy.</Text>
          *
        </Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
          tintColors={{true: colors.blue, false:colors.black}}
        />
        <Text style={styles.labelCheckBox}>Subscribe for select product updates.</Text>
      </View>
     </View>
    
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginTop:15,
    marginLeft:-18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    width: '90%',
  },
  labelCheckBox: {
    fontSize: 13,
    margin: 8,
    color: colors.gray,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },

});

export default CheckBoxComponent;
