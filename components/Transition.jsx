import { View, Text } from "react-native";
import React from "react";

import { Colors } from "../constants";

const Transition = ({ numOfPosition = 1 }) => {
	return (
		<View
			style={{
				gap: 4,
				flexDirection: "row",
			}}
		>
			<View
				style={{
					height: 3,
					width: numOfPosition === 1 ? 25 : 4,
					borderRadius: 10,
					backgroundColor: numOfPosition == 1 ? Colors.Black : Colors.Grey,
				}}
			/>
			<View
				style={{
					height: 3,
					width: numOfPosition === 2 ? 25 : 4,
					borderRadius: 10,
					backgroundColor: numOfPosition == 2 ? Colors.Black : Colors.Grey,
				}}
			/>
		</View>
	);
};

export default Transition;
