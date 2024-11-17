import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('componentDidCatch called.');
    console.log('Error:', error);
    console.log('Info:', info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ color: 'red', fontSize: 18 }}>Something went wrong.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
