import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	Feather,
	Fontisto,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import Constants from "expo-constants";

import {
	BuyIcon,
	Colors,
	Fonts,
	ProfileImg,
	SwapIcon,
	WithdrawalIcon,
} from "../constants";
import { TokenNftSwitch, Search, Token, AddToken } from "../components";
import { dummyData } from "../data";

const Home = () => {
	return (
		<View
			style={{ backgroundColor: Colors.Blue, flex: 1 }}
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
					<TouchableOpacity style={{ width: '33.3%' }}>
						<Image source={ProfileImg} style={{}} />
					</TouchableOpacity>

					{/* User name and Level */}
					<View style={{ alignItems: "center", justifyContent: "center", width: '33.3%' }}>
						<Text
							style={{ fontFamily: Fonts.Regular, fontSize: 18, color: "#FFF" }}
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
					<TouchableOpacity style={{ width: '33.3%', alignItems: 'flex-end' }}>
						<Fontisto name="bell" size={22} color="#FFF" />
					</TouchableOpacity>
				</View>

				{/* Balance and Wallet button */}
				<View
					style={{
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "row",
						backgroundColor: "#FFF",
						width: "85%",
						alignSelf: "center",
						borderRadius: 10,
						padding: 20,
					}}
				>

					{/* Balance */}
					<View>
						<View
							style={{
								alignItems: "center",
								flexDirection: "row",
								gap: 5,
							}}
						>
							<Text
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 14,
									color: "#999",
								}}
							>
								Your Balance
							</Text>
							<TouchableOpacity>
								<Ionicons name="eye-outline" size={22} color={Colors.Black} />
								{/* <Ionicons name="eye-off-outline" size={20} color="#000" /> */}
							</TouchableOpacity>
						</View>
						<View>
							<Text
								style={{
									fontFamily: Fonts.SemiBold,
									fontSize: 27,
									color: Colors.Black,
								}}
							>
								$27,742.30
							</Text>
						</View>
					</View>

					{/* Wallet button */}
					<TouchableOpacity
						style={{
							backgroundColor: "#FFF",
							padding: 5,
							borderRadius: 10,
							elevation: 5,
							shadowColor: "#000",
							shadowOffset: { width: 2, height: 2 },
							shadowRadius: 5,
							shadowOpacity: 0.1,
						}}
					>
						<MaterialCommunityIcons
							name="wallet-outline"
							size={30}
							color="#6A6A6A"
						/>
					</TouchableOpacity>
				</View>

				{/* Options */}
				<View
					style={{
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "row",
						width: "85%",
						alignSelf: "center",
						marginVertical: 15,
					}}
				>

					{/* Deposit */}
					<View style={{ alignItems: "center", gap: 2 }}>
						<TouchableOpacity
							style={{
								backgroundColor: Colors.Blue,
								padding: 10,
								borderRadius: 10,
								elevation: 20,
								shadowColor: "#fff",
								shadowOffset: { width: 1, height: 1 },
								shadowOpacity: 1,
								shadowRadius: 1
							}}
						>
							<Feather name="download" size={25} color="#FFF" />
						</TouchableOpacity>
						<Text
							style={{ color: "#fff", fontFamily: Fonts.Medium, fontSize: 11 }}
						>
							Deposit
						</Text>
					</View>

					{/* Buy/Sell */}
					<View style={{ alignItems: "center", gap: 2 }}>
						<TouchableOpacity
							style={{
								backgroundColor: Colors.Blue,
								padding: 10,
								borderRadius: 10,
								elevation: 20,
								shadowColor: "#fff",
								shadowOffset: { width: 1, height: 1 },
								shadowOpacity: 1,
								shadowRadius: 1
							}}
						>
							<Image source={BuyIcon} style={{ height: 25, width: 25 }} />
						</TouchableOpacity>
						<Text
							style={{ color: "#fff", fontFamily: Fonts.Medium, fontSize: 11 }}
						>
							Buy/sell
						</Text>
					</View>

					{/* Withdraw */}
					<View style={{ alignItems: "center", gap: 2 }}>
						<TouchableOpacity
							style={{
								backgroundColor: Colors.Blue,
								padding: 10,
								borderRadius: 10,
								elevation: 20,
								shadowColor: "#fff",
								shadowOffset: { width: 1, height: 1 },
								shadowOpacity: 1,
								shadowRadius: 1
							}}
						>
							<Image
								source={WithdrawalIcon}
								style={{ height: 25, width: 25 }}
							/>
						</TouchableOpacity>
						<Text
							style={{ color: "#fff", fontFamily: Fonts.Medium, fontSize: 11 }}
						>
							Withdraw
						</Text>
					</View>

					{/* Swap */}
					<View style={{ alignItems: "center", gap: 2 }}>
						<TouchableOpacity
							style={{
								backgroundColor: Colors.Blue,
								padding: 10,
								borderRadius: 10,
								elevation: 20,
								shadowColor: "#fff",
								shadowOffset: { width: 1, height: 1 },
								shadowOpacity: 1,
								shadowRadius: 1
							}}
						>
							<Image source={SwapIcon} style={{ height: 25, width: 25 }} />
						</TouchableOpacity>
						<Text
							style={{ color: "#fff", fontFamily: Fonts.Medium, fontSize: 11 }}
						>
							Swap
						</Text>
					</View>

					{/* History */}
					<View style={{ alignItems: "center", gap: 2 }}>
						<TouchableOpacity
							style={{
								backgroundColor: Colors.Blue,
								padding: 10,
								borderRadius: 10,
								elevation: 20,
								shadowColor: "#fff",
								shadowOffset: { width: 1, height: 1 },
								shadowOpacity: 1,
								shadowRadius: 1
							}}
						>
							<MaterialCommunityIcons name="history" size={25} color={"#fff"} />
						</TouchableOpacity>
						<Text
							style={{ color: "#fff", fontFamily: Fonts.Medium, fontSize: 11 }}
						>
							History
						</Text>
					</View>
				</View>
			</View>

			{/* Tokens */}
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					backgroundColor: Colors.Background,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					flexGrow: 1,
					paddingTop: 1
				}}
				contentContainerStyle={{ alignItems: "center" }}
				stickyHeaderIndices={[0]}
			>

				{/* Select Assets and Search Bar */}
				<View style={{ width: "90%", alignItems: "center", backgroundColor: '#FFF', borderRadius: 10, marginTop: 15 }}>
					<TokenNftSwitch />
					<Search />
				</View>

				{/* User Token and Add token */}
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

export default Home;
