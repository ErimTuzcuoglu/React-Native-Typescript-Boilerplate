import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
/* #region  Local Imports */
import {ScreenKeys} from '@value/constants';
import Screens from '@screens';
import {navigationRef} from './RootNavigator';
import {IApplicationState} from '@store/IApplicationState';
import Helper from '@infrastructure/Helper/ApplicationHelper';
/* #endregion */

type IAppNavigatorProps = ConnectedProps<typeof connector>;

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenKeys.Home}
      screenOptions={{
        unmountOnBlur: true
      }}>
      <Drawer.Screen name={ScreenKeys.Home} component={Screens.Home} />
    </Drawer.Navigator>
  );
};

const StackNavigator = (props: {isLoggedIn: boolean}) => {
  let initialRouteName = ScreenKeys.Login;
  if (props.isLoggedIn) initialRouteName = ScreenKeys.DrawerMenu;

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenKeys.Login} component={Screens.Login} />
      <Stack.Screen name={ScreenKeys.DrawerMenu} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const AppNavigator = (props: IAppNavigatorProps): JSX.Element => {
  const isUserLoggedIn = !Helper.isUndefined(props.userInfo);
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator isLoggedIn={isUserLoggedIn} />
    </NavigationContainer>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  userInfo: state.user.userInfo
});

/*eslint-disable @typescript-eslint/no-unused-vars*/
const mapDispatchToProps = (dispatch: Dispatch) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AppNavigator);
