import { View, Text } from "react-native";
import React from "react";

import { Colors } from "../constants";

const IntroTransition = ({ numOfPosition = 1 }) => {
	return (
		<View
			style={{
				gap: 4,
				flexDirection: "row",
			}}
		>
			<View
				style={{
					height: 5,
					width: numOfPosition === 1 ? 25 : 5,
					borderRadius: 10,
					backgroundColor: numOfPosition >= 1 ? Colors.LightGreen : "#B3B3B3",
				}}
			/>
			<View
				style={{
					height: 5,
					width: numOfPosition === 2 ? 25 : 5,
					borderRadius: 10,
					backgroundColor: numOfPosition >= 2 ? Colors.LightGreen : "#B3B3B3",
				}}
			/>
			<View
				style={{
					height: 5,
					width: numOfPosition === 3 ? 25 : 5,
					borderRadius: 10,
					backgroundColor: numOfPosition >= 3 ? Colors.LightGreen : "#B3B3B3",
				}}
			/>
			<View
				style={{
					height: 5,
					width: numOfPosition === 4 ? 25 : 5,
					borderRadius: 10,
					backgroundColor: numOfPosition >= 4 ? Colors.Green : "#B3B3B3",
				}}
			/>
		</View>
	);
};

export default IntroTransition;
