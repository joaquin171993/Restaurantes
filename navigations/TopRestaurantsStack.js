import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TopRestaurants from '../pantallas/TopRestaurants'

const Stack = createStackNavigator()

export default function TopRestaurantsStack(){
    return ( 
        <Stack.Navigator>
            <Stack.Screen
                name = "toprestaurants"
                component={TopRestaurants}
                options={{title : "Top Restaurants"}}
            />
        </Stack.Navigator>
    ) 
}
