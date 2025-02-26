import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "../../../tailwind";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const settingsOptions = [
  {
    id: 1,
    title: "Profile",
    subtitle: "Update personal information",
    route: "Profile",
  },
  {
    id: 2,
    title: "Blocked list",
    subtitle: "Manage your blocked list",
    route: "BlockedList",
  },
  {
    id: 3,
    title: "Addresses",
    subtitle: "Manage saved addresses",
    route: "Addresses",
  },
  {
    id: 4,
    title: "Policies",
    subtitle: "Terms of Use, Privacy Policy and others",
    route: "Policies",
  },
  {
    id: 5,
    title: "FAQs",
    subtitle: "Commonly asked questions",
    route: "FAQs",
  },
  {
    id: 6,
    title: "Help & support",
    subtitle: "Reach out in case you have a question",
    route: "HelpSupport",
  },
];

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[tw`flex-1 bg-white p-4`, { width }]}>
      <Text style={tw`text-xl font-bold mb-4`}>Settings</Text>

      {settingsOptions.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={tw`flex-row items-center justify-between py-4 border-b border-gray-300`}
          onPress={() => navigation.navigate(item.route)}
        >
          <View>
            <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
            <Text style={tw`text-sm text-gray-500`}>{item.subtitle}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={tw`mt-6 p-4 bg-red-500 rounded-lg`}
        onPress={() => console.log("Logout")}
      >
        <Text style={tw`text-center text-white font-bold`}>Log out</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`mt-4 p-4 border border-red-500 rounded-lg`}
        onPress={() => console.log("Delete Data")}
      >
        <Text style={tw`text-center text-red-500 font-bold`}>
          Delete my data
        </Text>
      </TouchableOpacity>

      <Text style={tw`text-center text-gray-400 mt-6`}>App version 1.0.9</Text>
    </View>
  );
};

export default SettingsScreen;
