# Login via Email and Password

This module is responsible for the login process, which includes two input fields for email and password. Upon successful login, the user will be directed to the Home screen, where they can find a logout button. Subsequently, when the user relaunches the application, they will be automatically redirected to the Home screen due to the user session being stored in Async storage. This plugin facilitates two API calls: one for login and another for logout.

## Integration

Prior to proceeding with the Prerequisites of this module, please ensure that you have followed the documentation provided at the [module](../README.md) level.

- Drag the ionicons.ttf from node_modules/react-native-vector-icons/Fonts

  - Make sure your app is checked under "Add to targets" and that "Create groups" is checked if you add the whole folder
  - Edit Info.plist and add the following lines
    ```bash <key>UIAppFonts</key>
    <array>
    <string>Ionicons.ttf</string>
    </array>
    ```
  - Add the following line in android/app/build.gradle
    ```bash
    project.ext.vectoricons = [
    iconFontNames: [ 'Ionicons.ttf'] // Name of the font files you want to copy
    ]
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
    ```

###### Note:- If you are facing any issue in adding the vector icons, please follow this [link](https://www.npmjs.com/package/react-native-vector-icons#installation)

- Copy the loginModule folder inside your project src/modules.
- Import [LoginNavigator](./navigator/loginNavigator.tsx) inside your navigator like this

```bash
    <Stack.Screen name="LoginModule" component={LoginNavigator} />
```

or you can also directly import [Login component](./LoginScreen.tsx) and manage the naviagtor by yourself.

- Update the BASE_URL values in [loginAPI](./services/apiService.ts)

```bash
// update BASE URL value according to your project apis
const BASE_URL = 'https://b0af-14-102-19-93.ngrok-free.app/';
```

- import the [loginAPI](./services/apiService.ts) in your store like this

```bash
import {loginAPI} from '../modules/loginModule';

export const store = configureStore({
  reducer: {
    [loginAPI.reducerPath]: loginAPI.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      loginAPI.middleware,
    ),
});
```
