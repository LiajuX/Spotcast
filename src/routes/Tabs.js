import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import PlayerScreen from '../screens/PlayerScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PodcastTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Player" component={PlayerScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hey, you're Home</Text>
      {[1,2,3,4,5].map((item) => {
        return (
          <TouchableOpacity 
            key={item}
            onPress={() => {
              navigation.navigate('Player')
            }}
          >
            <Text>
              Podcast: 0{item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hey, you're at discover screen</Text>
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={PodcastTabStack} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
    </Tab.Navigator>
  );
}

export default Tabs