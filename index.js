import React from 'react'
import {AppRegistry, Text, View} from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

// Create a comopnent
const App = () => (
    <View>
        <Header title={'Albuuums'}/>
        <AlbumList/>
    </View>
);

// Render it
AppRegistry.registerComponent('albums', () => App);
