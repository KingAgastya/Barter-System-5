import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class SettingsScreen extends React.Component{
    
    render(){
        return(
            <View style = {styles.container}>
                <Text>Settings</Text>
            </View>
        )}
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})