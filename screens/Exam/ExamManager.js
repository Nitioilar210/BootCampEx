import {Navigation} from 'react-native-navigation';
import React from 'react';
import ERegis from './ERegis';
import MainExam from './MainExam';
import ExDoc from './ExDoc';
import exStore from './store/exStore';
import {Provider} from 'react-redux';  
// import runScreen from './runScreen';

const store = exStore();
// Navigation.registerComponent('eRegis',()=>eRegis);
Navigation.registerComponent(
    'ERegis',
    ()=>(props)=>(
    <Provider store={store}>
        <ERegis {...props}/>
    </Provider>),
    ()=>ERegis,);
Navigation.registerComponent('MainExam',()=>MainExam);
// Navigation.registerComponent('ExDoc',()=>ExDoc);
// Navigation.registerComponent('runScreen',()=>runScreen);
Navigation.registerComponent(
    'ExDoc',
    ()=>(props)=>(
    <Provider store={store}>
        <ExDoc {...props}/>
    </Provider>),
    ()=>ExDoc,);
    
Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            component: {
                name:MainExam(),
            },
            options: {
                topBar: {
                    title: {text:'MainExam'},
                },
            },
        }, 
    });
    });