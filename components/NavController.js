import React from 'react';
import { View } from 'react-native';
import AuthNavigation from '../navigation/AuthNavigation';
import MainNavigation from '../navigation/MainNavigation';
import { useIsLoggedIn } from '../AuthContext';
function NavController() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <View style={{ flex: 1 }}>
      {
        isLoggedIn === true ?
          <MainNavigation /> :
          <AuthNavigation />
      }
    </View>
  );
}

export default NavController;
