import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderDemo = () => {
  const [sliderValue, setSliderValue] = useState(15);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ width: "100%", paddingLeft: 40 }}>
          <Text style={styles.sliderText}>
            Value of slider is : {sliderValue}
          </Text>
        </View>

        <Slider
          style={{ width: '80%', height: 40, marginTop: 30, transform: [{ scale: 1.4 }] }} // Increase the size of the slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 10,
    flexDirection: "column"
  },
  sliderText: {
    fontSize: 30,
    color: 'black',
  },
});

export default SliderDemo;
