
import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

const PickerDemo = () => {
  const [choosenLabel, setChoosenLabel] = useState('Native');
  const [choosenIndex, setChoosenIndex] = useState('2');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Picker
          selectedValue={choosenLabel}
          onValueChange={(itemValue, itemIndex) => {
            setChoosenLabel(itemValue);
            setChoosenIndex(itemIndex);
          }}>
          <Picker.Item label="Hello" value="Hello" />
          <Picker.Item label="React" value="React" />
          <Picker.Item label="Native" value="Native" />
          <Picker.Item label="How" value="How" />
          <Picker.Item label="are" value="are" />
          <Picker.Item label="you" value="you" />
        </Picker>
        <Text style={styles.text}>
          Selected Value: {choosenLabel}
        </Text>
        <Text style={styles.text}>
          Selected Index: {choosenIndex}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default PickerDemo;