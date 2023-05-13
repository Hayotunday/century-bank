import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Fonts } from "../constants";

const TokenNftSwitch = () => {
	return (
		<View
			style={{
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "row",
				gap: 5,
				marginVertical: 5,
			}}
		>
			<TouchableOpacity>
				<Text
					style={{ fontFamily: Fonts.Medium, color: "#606060", fontSize: 15 }}
				>
					Tokens
				</Text>
			</TouchableOpacity>
			<Text
				style={{
					fontFamily: Fonts.Black,
					fontSize: 20,
					color: "#D9D9D9",
					justifyContent: "flex-start",
				}}
			>
				.
			</Text>
			<TouchableOpacity>
				<Text
					style={{ fontFamily: Fonts.Medium, color: "#909090", fontSize: 15 }}
				>
					NFTs
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default TokenNftSwitch;
