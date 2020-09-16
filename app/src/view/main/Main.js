import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WINDOW_SIZE } from '../../constant/WindowSize';

// Main
import HomeMain from './home/HomeMain';
import NewGroupNameView from './home/components/creation/NewGroupNameView';
import NewGroupInterestsView from './home/components/creation/NewGroupInterestsView';
import NewGroupMoreInfoView from './home/components/creation/NewGroupMoreInfoView';
import NewGroupLocationView from './home/components/creation/NewGroupLocationView';
import NewGroupDescriptionView from './home/components/creation/NewGroupDescriptionView';
import NewGroupPreview from './home/components/creation/NewGroupPreview';
import SearchView from './home/components/search/SearchView';

// Group
import GroupMain from './group/GroupMain';
import JoinedGroupDetail from './group/components/joinedGroup/JoinedGroupDetail';
import JoinedGroupMoreDetail from './group/components/joinedGroup/JoinedGroupMoreDetail';

// Feed
import FeedMain from './feed/FeedMain';

// MyPage
import MyPageMain from './myPage/MyPageMain';
import AddressSearchTextView from './AddressSearchTextView';

const HomeStack = createStackNavigator();
const GroupStack = createStackNavigator();
const FeedStack = createStackNavigator();
const MyPageStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMain" component={HomeMain} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="NewGroupNameView"
        component={NewGroupNameView}
        options={{
          title: '',
          headerLeft: () => (
            <Icon name="chevron-left" size={22} onPress={() => navigation.navigate('HomeMain')} />
          ),
          headerLeftContainerStyle: {
            marginLeft: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
          },
        }}
      />
      <HomeStack.Screen
        name="NewGroupInterestsView"
        component={NewGroupInterestsView}
        options={{
          title: '',
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={22}
              onPress={() => navigation.navigate('NewGroupNameView')}
            />
          ),
          headerLeftContainerStyle: { marginLeft: 14 * WINDOW_SIZE.WIDTH_WEIGHT },
        }}
      />
      <HomeStack.Screen
        name="NewGroupMoreInfoView"
        component={NewGroupMoreInfoView}
        options={{
          title: '',
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={22}
              onPress={() => navigation.navigate('NewGroupInterestsView')}
            />
          ),
          headerLeftContainerStyle: { marginLeft: 14 * WINDOW_SIZE.WIDTH_WEIGHT },
        }}
      />
      <HomeStack.Screen
        name="NewGroupLocationView"
        component={NewGroupLocationView}
        navigation={navigation}
        options={{
          headerShown: false,
          // title: '',
          // headerLeft: () => (
          //   <Icon
          //     name="chevron-left"
          //     size={22}
          //     onPress={() => navigation.navigate('NewGroupMoreInfoView')}
          //   />
          // ),
          // headerLeftContainerStyle: { marginLeft: 14 * WINDOW_SIZE.WIDTH_WEIGHT },
        }}
      />
      <HomeStack.Screen
        name="NewGroupDescriptionView"
        component={NewGroupDescriptionView}
        options={{
          title: '',
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={22}
              onPress={() => navigation.navigate('NewGroupLocationView')}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
          },
        }}
      />
      <HomeStack.Screen
        name="NewGroupPreview"
        component={NewGroupPreview}
        options={{
          title: '',
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={22}
              onPress={() => navigation.navigate('NewGroupDescription')}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
          },
        }}
      />
      <HomeStack.Screen
        name="SearchView"
        component={SearchView}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const GroupStackScreen = () => {
  return (
    <GroupStack.Navigator>
      <GroupStack.Screen name="Home" component={GroupMain} options={{ headerShown: false }} />
      <GroupStack.Screen
        name="JoinedGroupDetail"
        component={JoinedGroupDetail}
        options={{ headerShown: false }}
      />
      <GroupStack.Screen
        name="JoinedGroupMoreDetail"
        component={JoinedGroupMoreDetail}
        options={{ headerShown: false }}
      />
    </GroupStack.Navigator>
  );
};

const FeedStackScreen = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Home" component={FeedMain} />
    </FeedStack.Navigator>
  );
};

const MyPageScreen = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="Home" component={MyPageMain} />
    </MyPageStack.Navigator>
  );
};

@inject('mainStore')
@observer
class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarLabel: '홈' }} />
          <Tab.Screen
            name="Group"
            component={GroupStackScreen}
            options={{ tabBarLabel: '내 그룹' }}
          />
          <Tab.Screen name="Feed" component={FeedStackScreen} options={{ tabBarLabel: '피드' }} />
          <Tab.Screen name="MyPage" component={MyPageScreen} options={{ tabBarLabel: 'My' }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;
