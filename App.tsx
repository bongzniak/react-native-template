import 'react-native-gesture-handler';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemeProvider } from '@/theme';
import ApplicationNavigator from '@/navigation/Application';

const App = () => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <ApplicationNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
