import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import Constants from "expo-constants";

import { Colors, Fonts, ProfileImg } from "../constants";
import { AddToken, Search, Token } from "../components";
import { dummyData } from "../data";

const Wallet = () => {
	return (
		<View
			style={{ backgroundColor: Colors.Blue, flex: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<View style={{ marginTop: Constants.statusBarHeight }}>
				{/* Profile Picture, name, level and notification button */}
				<View
					style={{
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "row",
						marginHorizontal: 25,
						marginVertical: 15,
					}}
				>
					{/* Profile picture */}
					<TouchableOpacity>
						<Image source={ProfileImg} style={{}} />
					</TouchableOpacity>

					{/* User name and Level */}
					<View style={{ alignItems: "center", justifyContent: "center" }}>
						<Text
							style={{
								fontFamily: Fonts.Regular,
								fontSize: 18,
								color: "#FFF",
							}}
						>
							Hi, <Text style={{ fontFamily: Fonts.Bold }}>Enoch</Text>
						</Text>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "row",
								gap: 5,
							}}
						>
							<MaterialCommunityIcons
								name="diamond"
								size={10}
								color={Colors.Yellow}
							/>
							<Text
								style={{
									fontFamily: Fonts.Regular,
									fontSize: 12,
									color: "#FFF",
								}}
							>
								Level 3
							</Text>
						</View>
					</View>

					{/* Notification button */}
					<TouchableOpacity>
						<Fontisto name="bell" size={22} color="#FFF" />
					</TouchableOpacity>
				</View>
			</View>

			{/* Tokens */}
			<ScrollView
				style={{
					backgroundColor: Colors.Background,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					flexGrow: 1,
				}}
				contentContainerStyle={{
					alignItems: "center",
				}}
				stickyHeaderIndices={[0]}
			>
				<View style={{ width: "90%", alignItems: "center", }}>
					<View style={{ width: "100%", alignItems: "center", backgroundColor: '#FFF', }}>
						<Text
							style={{
								fontFamily: Fonts.Medium,
								color: "#606060",
								fontSize: 15,
								marginVertical: 15,
							}}
						>
							Wallet
						</Text>
						<Search />
					</View>
				</View>
				<View style={{ width: "90%", alignItems: "center" }}>
					{dummyData.map((data, key) => (
						<Token
							name={data.coin}
							icon={data.icon}
							short={data.shortName}
							key={key}
						/>
					))}
					<AddToken />
				</View>
			</ScrollView>
			<StatusBar style="light" />
		</View>
	);
};

export default Wallet;
