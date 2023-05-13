import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Colors, Fonts } from "../constants";

const AddToken = () => {
	return (
		<TouchableOpacity
			style={{
				width: "100%",
				height: 65,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				gap: 5,
				marginBottom: 6,
			}}
		>
			<View style={{ alignItems: "center" }}>
				<MaterialIcons
					name="add-circle-outline"
					size={30}
					color={Colors.Blue}
				/>
			</View>
			<View>
				<Text
					style={{
						color: Colors.Blue,
						fontFamily: Fonts.Medium,
						fontSize: 18,
					}}
				>
					Add Token
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default AddToken;
