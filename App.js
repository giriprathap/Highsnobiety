/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View
} from 'react-native';

import Feed from './src/screens/Feed';
import Saved from './src/screens/Saved';
import FeedWebview from './src/screens/FeedWebview';
import MyTabs from './src/screens/TabBar';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const client = new ApolloClient({ uri: 'https://content-api.highsnobiety.com' })

const QUERY = gql`
query {
  latestNewsConnection(first:10) {
    nodes {
      slug
      title
      featuredImage {
        assets(assetContexts: ["nfe-content-element_xl", "nfe-content-element_xs"]) {
          context
          path
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`

export const AppContext = React.createContext({ data: { coffee: { beans: [] } } });


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  // const Tab = createBottomTabNavigator();

  return (
    <ApolloProvider client={client}>
        <Query query={QUERY} >
          {({ loading, error, data }) => {
            if (loading || error) return <View />
            return <AppContext.Provider value={data} style={{ flex: 1 }}>
              <NavigationContainer>
              <Stack.Navigator>
        {/* <Stack.Screen
          name="Feed"
          component={Feed}
          options={{ title: 'Welcome' }}
          data={data}
        /> */}
        <Stack.Screen name="Feed">
  {props => <Feed {...props} extraData={data} />}
</Stack.Screen>
        <Stack.Screen name="Saved" component={Saved} />
        <Stack.Screen name="FeedWebview" component={FeedWebview} />
      </Stack.Navigator>
             

              </NavigationContainer>

              {/* <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Saved" component={Saved} />
      </Tab.Navigator> */}
            </AppContext.Provider>
          }}
        </Query>
      </ApolloProvider>
    // <SafeAreaView style={{flex:1}}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <Feed/>
    // </SafeAreaView>
  );
};


export default App;
