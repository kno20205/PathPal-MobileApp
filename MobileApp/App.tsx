/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import WebView from 'react-native-webview';

function App(): JSX.Element {
  return (
    <WebView
      source={{uri: 'https://white-tree-0558ed503.3.azurestaticapps.net/login'}}
      style={{flex: 1}}
    />
  );
}
export default App;
