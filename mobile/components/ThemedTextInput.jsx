import { TextInput, useColorScheme } from "react-native";
import { Colours } from "../constants/colours";

const ThemedTextInput = ({ style, ...props }) => {
  const colourScheme = useColorScheme();

  const theme = Colours[colourScheme] ?? Colours.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;
