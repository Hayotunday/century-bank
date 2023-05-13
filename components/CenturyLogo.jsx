import { View, Text, Image } from "react-native";
import React from "react";

import { AlternateImg, Fonts, IconImg } from "../constants";

const CenturyLogo = ({ alternate }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				gap: 8,
				alignItems: "center",
			}}
		>
			<Image
				source={alternate ? AlternateImg : IconImg}
				style={
					alternate ? { height: 23, width: 16 } : { height: 35, width: 28 }
				}
				resizeMode="contain"
			/>
			<Text
				style={{
					fontFamily: Fonts.Medium,
					fontSize: alternate ? 15 : 20,
					color: alternate && "#FFF",
				}}
			>
				Century
			</Text>
		</View>
	);
};

export default CenturyLogo;
