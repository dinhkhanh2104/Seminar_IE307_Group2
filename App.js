import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";



// React Native Component
import Home from "./pages/Home";
import Picker from "./pages/Picker"
import Switch from "./pages/Switch"
import Slider from "./pages/Slider"
import Webview from "./pages/Webview"
import FlatList from "./pages/Flatlist"
import KeyboardAvoidingView_Focus from "./pages/KeyboardAvoidingView&Focus"
import StatusBar from "./pages/StatusBar"
import ActivityIndicator from "./pages/ActivityIndicator"
import OverlayActivityIndicator from "./pages/OverlayActivityIndicator"
import LifeCycle from "./pages/LifeCycle"

// Debug app in Real Device
import Logbox from "./pages/Logbox"


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="React Native Picker" component={Picker} />
        <Drawer.Screen name="React Native Switcher" component={Switch} />
        <Drawer.Screen name="React Native Slider" component={Slider} />
        <Drawer.Screen name="React Native Webview" component={Webview} />
        <Drawer.Screen name="React Native FlatList" component={FlatList} />
        <Drawer.Screen name="Request Focus and Keyboard Avoiding View" component={KeyboardAvoidingView_Focus} />
        <Drawer.Screen name="React Native StatusBar" component={StatusBar} />
        <Drawer.Screen name="React Native ActivityIndicator" component={ActivityIndicator} />
        <Drawer.Screen name="Overlay ActivityIndicator" component={OverlayActivityIndicator} />
        <Drawer.Screen name="Lifecycle of React Native" component={LifeCycle} />

        <Drawer.Screen name="Disable Yellow Warning Box" component={Logbox} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}