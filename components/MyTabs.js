import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NewOrder } from "../views/NewOrder"
import { ScheduleTime } from "../views/ScheduleTime";
import { DailyTicket } from "../views/DailyTicket";
import { Orders } from "../views/Orders";
const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator 
    backBehavior={'initialRoute'}
    screenOptions={{
      tabBarInactiveTintColor:'white',
      tabBarActiveTintColor: '#e91e63',
      tabBarLabelStyle:{fontSize:20, fontWeight:"bold"},
      tabBarStyle: { backgroundColor: 'black' },
      lazy: true,
      lazyPlaceholder:null,
      lazyPreloadDistance:2
    }}
  >
      <Tab.Screen name="NOUVELLE COMMANDE" component={NewOrder} />
      <Tab.Screen name="CRENEAUX HORAIRES" component={ScheduleTime} />
      <Tab.Screen name="COMMANDES EN COURS" component={Orders} />
      <Tab.Screen name="TICKET JOURNALIER" component={DailyTicket} />
    </Tab.Navigator>
  );
}