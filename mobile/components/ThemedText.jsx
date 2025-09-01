import { Text, useColorScheme } from "react-native";
import { Colours } from "../constants/colours";

const ThemedText = ({ style, title = false, ...props }) => {
  const colourScheme = useColorScheme();
  const theme = Colours[colourScheme] ?? Colours.light;

  const textColour = title ? theme.title : theme.text;

  return <Text style={[{ color: textColour }, style]} {...props} />;
};

export default ThemedText;
