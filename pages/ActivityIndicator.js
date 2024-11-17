import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';

const ActivityIndicatorDemo = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            visible={loading}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
            size={'large'}
          />
        ) : (
          <>
            <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 10 }}>
              React Native ActivityIndicator
            </Text>
            <Button
              title="Start Loading"
              onPress={startLoading}>
            </Button>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 50,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default ActivityIndicatorDemo;