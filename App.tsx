/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Providers } from './src/Providers';
import { RootNavigation } from './src/Navigation/RootNavigation';

const App = () => {
  return (
    <Providers>
      <RootNavigation />
    </Providers>
  );
};

export default App;
