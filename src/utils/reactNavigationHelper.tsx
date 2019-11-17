//https://github.com/react-navigation/react-navigation/issues/840
import React, { useRef, Component } from 'react';
import { NavigationActions } from 'react-navigation';

let _navigatorRef;

function withReactNavigationHelper(TopLevelNavigator: any) {
  return props => {
    // render() {
    _navigatorRef = useRef(null);
    return <TopLevelNavigator ref={_navigatorRef} {...props}></TopLevelNavigator>;
    // }
  };
}

// function setTopLevelNavigator(navigatorRef) {
//   _navigator = navigatorRef;
// }

function navigate(routeName: string, params: any = undefined) {
  _navigatorRef.current.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

export default navigate;
export { navigate, withReactNavigationHelper };
