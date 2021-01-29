import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SmoothPicker from 'react-native-smooth-picker';
import colors from '../utils/Colors';
import IconRight from 'react-native-vector-icons/AntDesign';
import IconLeft from 'react-native-vector-icons/AntDesign';

const dataCity = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 20,
  1: 15,
  2: 10,
};

const Item = React.memo(({opacity, selected, vertical, fontSize, name}) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          borderColor: selected ? colors.gray : 'transparent',
          width: vertical ? 250 : 'auto',
        },
      ]}>
      {selected && <IconRight name="caretright" style={styles.backIcon} />}
      <Text style={{fontSize}}>{name}</Text>
      {selected && <IconLeft name="caretleft" style={styles.backIcon} />}
    </View>
  );
});

const ItemToRender = ({item, index}, indexSelected, vertical) => {
  const passenger = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return (
    <Item
      opacity={opacity}
      selected={passenger}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

const NumPassengers = () => {
  const handleChange = (index) => {
    setPassenger(index);
  };

  const [passenger, setPassenger] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={passenger}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={dataCity}
          scrollAnimation
          onSelected={({item, index}) => handleChange(index)}
          renderItem={(option) => ItemToRender(option, passenger, true)}
          magnet
        />
      </View>
      <View>
        <Text>{`Your selection is ${dataCity[passenger]} Passengers`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  wrapperVertical: {
    width: 250,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderRadius: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  backIcon: {
    fontSize: 20,
    color: colors.blue,
    marginLeft: 50,
    marginRight: 50,
  },
});

export default NumPassengers;
