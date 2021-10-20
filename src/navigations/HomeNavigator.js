import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREATE_CONTACTS,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactsDetails from '../screens/ContactDetails';
import CreateContacts from '../screens/CreateContacts';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAILS}
        component={ContactsDetails}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACTS}
        component={CreateContacts}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
