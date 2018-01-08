import React from 'react'
import {AppRegistry, Text} from "react-native";

// Create a comopnent
const App = () => (
    <Text>Some Text</Text>
);

// Render it
AppRegistry.registerComponent('albums', () => App);
