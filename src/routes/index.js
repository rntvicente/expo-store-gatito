import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cart from "../pages/cart";
import Task from "../pages/task";
import { pallete } from "../styles/global";

const Tab = createBottomTabNavigator();

function Route () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarIconStyle: {
            display: "none"
          },
          tabBarStyle: {
            height: 70
          },
          tabBarActiveTintColor: pallete.purple,
          tabBarInactiveTintColor: pallete.light,
          tabBarActiveBackgroundColor: pallete.purple,
          tabBarInactiveBackgroundColor: pallete.orange,
          tabBarLabelStyle: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: "bold",
            width: "100%",
            flex: 1,
            marginTop: 1,
            paddingTop: 21,
            backgroundColor: pallete.orange
          },
          tabBarHideOnKeyboard: true
        }} >
        <Tab.Screen name="Serviços" component={Task} />
        <Tab.Screen name="Carrinho" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Route;