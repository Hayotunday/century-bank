import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BitcoinImg, Fonts } from "../constants";

const Token = ({ name, icon, short }) => {
	return (
		<TouchableOpacity
			style={{
				width: "100%",
				height: 65,
				paddingVertical: 5,
				paddingHorizontal: 10,
				backgroundColor: "#EAEAEA",
				borderRadius: 10,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 5,
				marginBottom: 6,
			}}
		>
			<View style={{ alignItems: "center" }}>
				<Image source={icon} />
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "stretch",
					justifyContent: "space-between",
					height: "65%",
					width: "80%",
				}}
			>
				<View style={{ justifyContent: "space-between", width: "55%" }}>
					<View style={{ alignItems: "center", flexDirection: "row" }}>
						<Text
							style={{
								color: "#606060",
								fontFamily: Fonts.SemiBold,
								fontSize: 15,
							}}
							ellipsizeMode="tail"
							numberOfLines={1}
						>
							{name}
						</Text>
						<Text
							style={{
								fontFamily: Fonts.Medium,
								fontSize: 10,
							}}
						>
							{" " + short}
						</Text>
					</View>
					<Text
						style={{
							color: "#666",
							fontFamily: Fonts.Medium,
							fontSize: 14,
						}}
					>
						$27,882.21{" "}
						<Text
							style={{
								color: "red",
								fontFamily: Fonts.Regular,
								fontSize: 10,
							}}
						>
							-2.42%
						</Text>
					</Text>
				</View>
				<View
					style={{
						justifyContent: "space-between",
						alignItems: "flex-end",
						width: "45%",
					}}
				>
					<Text
						style={{
							color: "#606060",
							fontFamily: Fonts.Medium,
							fontSize: 13,
						}}
					>
						0.0230 {short}
					</Text>
					<Text
						style={{
							color: "#666",
							fontFamily: Fonts.Medium,
							fontSize: 12,
						}}
					>
						$1,581.12
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Token;
