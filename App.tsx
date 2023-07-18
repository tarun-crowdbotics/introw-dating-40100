import React from "react"
import { Text, View } from "react-native"
import "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import Navigator from "./src/navigation"
import { store } from "./src/store/store"
// const Stack = createStackNavigator()

// const getNavigation = (modules, screens, initialRoute) => {
//   const Navigation = () => {
//     const routes = modules.concat(screens).map(mod => {
//       const pakage = mod.package
//       const name = mod.value.title
//       const Navigator = mod.value.navigator

//       const Component = props => {
//         return (
//           <OptionsContext.Provider value={getOptions(pakage)}>
//             <Navigator {...props} />
//           </OptionsContext.Provider>
//         )
//       }

//       return <Stack.Screen key={name} name={name} component={Component} />
//     })
//     const screenOptions = {
//       headerShown: true
//     }
//     return (
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName={initialRoute}
//           screenOptions={screenOptions}
//         >
//           {routes}
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }

//   return Navigation
// }

// const getStore = globalState => {
//   const appReducer = createReducer(globalState, _ => {
//     return globalState
//   })
//   const reducer = combineReducers({
//     app: appReducer,
//     ...reducers,
//     ...connectors
//   })
//   return configureStore({
//     reducer: reducer,
//     middleware: getDefaultMiddleware => getDefaultMiddleware()
//   })
// }

const App = () => {
  // const global = useContext(GlobalOptionsContext);
  // const Navigation = getNavigation(modules, screens, initialRoute);
  // const store = getStore(global);
  // let effects = {};
  // hooks.map(hook => {
  //   effects[hook.name] = hook.value();
  // });
  // return <Provider store={store}>
  //     <Navigation />
  //   </Provider>;
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
