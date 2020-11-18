import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import ApolloClient from 'apollo-boost';
import apolloClientOptions from './apollo';
import { InMemoryCache } from '@apollo/client/core';
import { persistCache } from 'apollo3-cache-persist';
import { ApolloProvider } from 'react-apollo-hooks';
import { ThemeProvider } from 'styled-components';
import styles from './styles';
import { AuthProvider, useIsLoggedIn } from './AuthContext';
import NavController from './components/NavController';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([
        require('./assets/logo.png')
      ]);
      const cache = new InMemoryCache({});
      await persistCache({
        cache,
        storage: AsyncStorage,
      });
      // Continue setting up Apollo as usual.
      const client = new ApolloClient({
        cache,
        ...apolloClientOptions
      });
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === null || isLoggedIn === "false") {
        setIsLoggedIn(false);
      }
      else {
        setIsLoggedIn(true);
      }
      setLoaded(true);
      setClient(client);
    }
    catch (e) {
      console.log(e);
    }

  };

  useEffect(() => {
    preLoad();
  }, []);



  return (
    loaded && client && isLoggedIn !== null ? (
      <ApolloProvider client={client}>
        <ThemeProvider theme={styles}>
          <AuthProvider isLoggedIn={isLoggedIn}>
            <NavController />
          </AuthProvider>
        </ThemeProvider>

      </ApolloProvider>

    ) : (
        <AppLoading />
      )
  );
}
