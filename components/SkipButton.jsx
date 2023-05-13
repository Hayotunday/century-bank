import { Text, TouchableOpacity } from "react-native";
import React from "react";

import { Fonts } from "../constants";

const SkipButton = ({ onPress }) => {
	return (
		<TouchableOpacity>
			<Text style={{ fontFamily: Fonts.Medium, fontSize: 18 }}>Skip</Text>
		</TouchableOpacity>
	);
};

export default SkipButton;
