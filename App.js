import { createAppContainer, createStackNavigator } from "react-navigation";
import { Home } from './js/components/home/Home.js';
import { Photo } from './js/components/home/Photo.js';
import { Login } from './js/components/login-register/index';
import { Profile } from './js/components/profile/Profile.js';






const AppNavigator = createStackNavigator(
    {
        home: Home,
        login: Login,
        photo: Photo,
        profile: Profile,
    },
    {
        initialRouteName: "login",
        headerMode: 'none'
    });

const App = createAppContainer(AppNavigator);

export default App

//export default class App extends React.Component {
//    render() {
//        return <AppContainer />;
//    }
//}
