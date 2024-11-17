import React from 'react';
import { View, Text, LogBox } from 'react-native';

// LogBox.ignoreAllLogs();
// LogBox.ignoreLogs(['Warning: Each child in a list should have a unique "key" prop']);

const LogboxDemo = () => {
  const items = ['Logboxle', 'Banana', 'Cherry'];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff" }}>
      {items.map((item, index) => (
        <Text
          // key={index}
          style={{ fontSize: 18, marginBottom: 10 }}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default LogboxDemo;
