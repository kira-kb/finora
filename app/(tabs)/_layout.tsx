import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Wallet, History, Building2 } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DashboardScreen from "../../src/screens/DashboardScreen";
import HistoryScreen from "../../src/screens/HistoryScreen";
import BanksScreen from "../../src/screens/BanksScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#195135" },
            headerTintColor: "#fff",
            tabBarActiveTintColor: "#195135",
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Wallet color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={HistoryScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <History color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Banks"
            component={BanksScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Building2 color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
