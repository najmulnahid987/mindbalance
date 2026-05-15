import { tabs } from "@/constant/data";
import { clsx } from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = {
  height: 80,
  iconFrame: 40,
  radius: 24,
  horizontalInset: 16
};

const colors = {
  white: "#ffffff",
  green: "#5DB075",
  iconInactive: "#999999",
  iconActive: "#ffffff"
};

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  const TabIcons = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="items-center justify-center flex-1">
        <View
          className={clsx(
            "items-center justify-center rounded-full transition-all",
            focused
              ? "bg-[#5DB075]"
              : "bg-transparent"
          )}
          style={{
            width: tabBar.iconFrame,
            height: tabBar.iconFrame,
          }}
        >
          <Image
            source={icon}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? colors.iconActive : colors.iconInactive
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarItemStyle: {
          paddingTop: 15,
          paddingBottom: (tabBar.height - tabBar.iconFrame) / 2,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: 'center',
        }
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcons focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
      <Tabs.Screen
        name="tools/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}