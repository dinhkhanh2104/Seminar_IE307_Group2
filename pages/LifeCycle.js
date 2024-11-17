import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import ErrorBoundary from './ErrorBoundary';

class CustomComponent extends Component {
  constructor() {
    super();
    console.log('Constructor Called.');
    this.state = {
      throwError: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount called.');
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true; // Always allow updates for this demo
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
    console.log('Previous Prop:', prevProp.name);
    console.log('Current Prop:', this.props.name);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }

  render() {
    if (this.state.throwError) {
      throw new Error('Simulated Error!');
    }

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Text style = {{fontSize: 30}}>Language is: {this.props.name}</Text>
        <Button
          title="Throw Error"
          onPress={() => this.setState({ throwError: true })}
        />
      </View>
    );
  }
}

export default class LifeCycleDemo extends Component {
  constructor() {
    super();
    this.state = {
      language: 'C',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20, backgroundColor: "#fff" }}>
        <ErrorBoundary>
          <CustomComponent name={this.state.language} />
        </ErrorBoundary>
        <Button
          title="Update Language"
          onPress={() =>
            this.setState({ language: this.state.language === 'C' ? 'Java' : 'C' })
          }
        />
      </View>
    );
  }
}
