import React from 'react';

import global from './js/global.js';

import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home } from './js/components/home/Home.js';
import { Login } from './js/components/login-register/index';
import { EarnCoins } from './js/components/earn-coins/EarnCoins.js';
import { Profile } from './js/components/profile/Profile.js';

const AppNavigator = createStackNavigator(
    {
        home: Home,
        login: Login,
        earnCoins: EarnCoins,
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

{/*
const App = () => (
    <Router>
        <Lightbox>
            <Scene key="root">
                <Scene key="login" component={Login} initial={true} hideNavBar />
                <Scene key="home" component={TabView} hideNavBar />
                <Stack key="photo" hideNavBar>
                    <Scene key="photo_tab" component={TabView} hideNavBar />
                </Stack>

                <Stack key="customize" hideNavBar>
                    <Scene key="customize_tab" component={TabView} hideNavBar />
                </Stack>
                <Stack key="earnCoins" hideNavBar>
                    <Scene key="earnCoins_tab" component={TabView} hideNavBar />
                    <Scene key="quiz" component={Quiz} hideNavBar />
                    <Scene key="quizQuestion" component={QuizQuestion} hideNavBar />
                    <Scene key="quizResult" component={QuizResult} hideNavBar />
                </Stack>
                <Stack key="miniGames" hideNavBar>
                    <Scene key="miniGames_tab" component={TabView} hideNavBar />
                </Stack>
                <Stack key="profile" hideNavBar>
                    <Scene key="profile_tab" component={TabView} hideNavBar />
                </Stack>

                <Scene hideNavBar>
                    <Tabs hideTabBar lazy>

                        <Stack key="photo">
                            <Scene key="photo_tab" component={TabView} hideNavBar />
                        </Stack>

                        <Stack key="customize">
                            <Scene key="customize_tab" component={TabView} hideNavBar />
                        </Stack>
                        <Stack key="earnCoins">
                            <Scene key="earnCoins_tab" component={TabView} hideNavBar />
                            <Scene key="quiz" component={Quiz} hideNavBar />
                            <Scene key="quizQuestion" component={QuizQuestion} hideNavBar />
                            <Scene key="quizResult" component={QuizResult} hideNavBar />
                        </Stack>
                        <Stack key="miniGames">
                            <Scene key="miniGames_tab" component={TabView} hideNavBar />
                        </Stack>
                        <Stack key="profile">
                            <Scene key="profile_tab" component={TabView} hideNavBar />
                        </Stack>
                    </Tabs>
                </Scene>

            </Scene>

            <Scene key="medalPopup" component={MedalPopup} />
        </Lightbox>
    </Router >
)
export default App
    */ }
