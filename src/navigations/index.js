import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
const AppNavContainer = () => {
  const state = useContext(GlobalContext)
  const {authState: {isLoggedIn} }=useContext(GlobalContext)
  console.log(isLoggedIn)

  return (
    <NavigationContainer>   
      {isLoggedIn?<DrawerNavigator/>:<AuthNavigator/>}
     </NavigationContainer>
  );
};

export default AppNavContainer;


