import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from  "expo-font"

let customFonts = {
  "Bubblegum-Sans" : require("../assets/fonts/BubblegumSans-Regular")
}

export default class Feed extends Component {

    constructor(props){
      super(props)
      this.state = {
        fontsLoaded : false,
      }
    }

    async _loadFontsAsync(){
      await Font.loadAsync(customFonts)
      this.setState({fontsLoaded : true})
    }
    render() {
       if(!this.state.fontsLoaded){
         return <AppLoading />
       }
       else {
         return (
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"}}>
            <Text>Profile</Text>
          </View>
         )
        
       }
    }
}