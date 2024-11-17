import React, { useState } from 'react';
import {
  Switch,
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';

const SwitchDemo = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.switchText}>
          {switchValue ? 'Switch is ON' : 'Switch is OFF'}
        </Text>

        <Switch
          style={{ marginTop: 30, transform: [{ scale: 1.5 }] }} 
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  switchText: {
    fontSize: 30,
  },
});

export default SwitchDemo;
