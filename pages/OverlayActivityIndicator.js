import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

const OverlayActivityIndicatorDemo = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.container}>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 10 }}>
          Spinner Overlay Example
        </Text>
        <Button
          title="Start Loading"
          onPress={startLoading}>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    textAlign: 'center',
    backgroundColor: "#fff",
    paddingHorizontal: 50,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default OverlayActivityIndicatorDemo;