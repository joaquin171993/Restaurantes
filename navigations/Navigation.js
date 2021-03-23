import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RestaurantsStack from '../navigations/RestaurantsStack'
import AccountStack from './AccountStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return ( 
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{ title : "Restaurants"}}
                />
                <Tab.Screen 
                    name="favorites"
                    component={FavoritesStack}
                    options={{ title : "Favorites"}}
                />
                <Tab.Screen 
                    name="toprestaurants"
                    component={TopRestaurantsStack}
                    options={{ title : "Top Restaurants"}}
                />
                <Tab.Screen 
                    name="search"
                    component={SearchStack}
                    options={{ title : "Search"}}
                />
                   <Tab.Screen 
                    name="account"
                    component={AccountStack}
                    options={{ title : "Account"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    ) 
}
