import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// pages
import DevsMap from './pages/DevsMap'


const AppStack = createStackNavigator()


function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerTintColor: '#fff',
                    headerShown: true ,
                    headerStyle: {
                        backgroundColor: '#8E4DFF',
                    },
                    title: 'DevRadar',
                    headerTitleAlign: 'center',
                }}
            >
                <AppStack.Screen name="DevRadar" component={ DevsMap } />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes