import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskPage from './screens/TaskPage';
import registerScreen from './screens/registerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="TaskPage" component={TaskPage}/>
      <Stack.Screen name="Register" component={registerScreen}/>
    </Stack.Navigator>
</NavigationContainer>
  );
}


