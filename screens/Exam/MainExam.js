import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const MainExam =()=>{
    Promise.all([
        Icon.getImageSource("person-outline",30),
        Icon.getImageSource("reorder-four-outline",30),
    ]).then((icons) => {
            Navigation.setRoot({
              root: {
                bottomTabs: {
                  children: [
                    {
                      stack: {
                        children: [
                          {
                            component: {
                              name: 'ERegis',
                              options: {
                                  topBar: {title: 'ERegis',},
                                  bottomTab: {
                                      text:'ERegis',
                                      icon:icons[0],
                                      iconColor: 'black',
                                      selectedTextColor: 'black',
                                  },
                                },
                            }
                          },
                        ]
                      }
                    },
                    {
                      stack: {
                        children: [
                          {
                            component: {
                              name: 'ExDoc',
                              options: {
                                topBar: {title: 'ExDoc',},
                                bottomTab: {
                                    text:'ExDoc',
                                    icon:icons[1],
                                    iconColor: 'black',
                                    selectedTextColor: 'black',
                                },
                              },
                            }
                          }
                        ]
                      }
                    },
                  ]
                }
              }
            });
          
    });
};

export default MainExam();