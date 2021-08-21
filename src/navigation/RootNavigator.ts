import 'react';
import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  NavigationContainerRefWithCurrent,
  Route,
  StackActions
} from '@react-navigation/native';

/**
 * @description This js file is for navigate without props.
 */

export const navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList> =
  createNavigationContainerRef();

function navigate(name: string, params: Record<string, unknown>): void {
  navigationRef.current?.navigate(name as never, params as never);
}

function navigationReset(
  name: string,
  params?: Readonly<Record<string, unknown> | undefined>
): void {
  navigationRef.current?.reset({
    index: 0,
    routes: [
      {
        name: name,
        params: params
      }
    ]
  });
}

function replace(name: string, params?: Record<string, unknown>): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

function reset(name: string, params: Record<string, unknown>): void {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      // history: React.createRef(),
      routes: [
        {
          name: name,
          params: params
        }
      ]
    })
  );
}

function getCurrentRoute(): Route<string> | undefined {
  return navigationRef.current?.getCurrentRoute();
}

function goBack(): void {
  return navigationRef.current?.goBack();
}

function toggleDrawer(): void {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export default {
  getCurrentRoute,
  goBack,
  navigate,
  navigationReset,
  replace,
  reset,
  toggleDrawer
};
