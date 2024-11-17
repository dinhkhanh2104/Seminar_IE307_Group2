import React from 'react';

import {SafeAreaView} from 'react-native';

import {WebView} from 'react-native-webview';

const WebViewDemo = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://aboutreact.com'}}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
};

export default WebViewDemo;