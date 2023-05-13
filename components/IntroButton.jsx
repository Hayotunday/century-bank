import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../constants";

const IntroButton = ({ onPress }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: Colors.LightGreen,
				borderRadius: 15,
				paddingHorizontal: 20,
				paddingVertical: 10,
			}}
		>
			<AntDesign name="arrowright" color={"#FFF"} size={22} />
		</TouchableOpacity>
	);
};

export default IntroButton;
