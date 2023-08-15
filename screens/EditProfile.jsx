import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import PhoneInput from "react-native-phone-number-input";

import { Colors, Fonts, ProfileImg } from "../constants";

const EditProfile = () => {
	const [value, setValue] = useState("");
	const [profile, setProfile] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
	});
	const phoneInput = useRef();

	return (
		<View style={{ backgroundColor: Colors.Blue, flex: 1 }}>
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start",
						margin: 15,
					}}
				>
					<TouchableOpacity>
						<Entypo name="chevron-small-left" size={30} color={"#FFF"} />
					</TouchableOpacity>
					<Text
						style={{ color: "#FFF", fontFamily: Fonts.Regular, fontSize: 20 }}
					>
						Edit Profile
					</Text>
				</View>

				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					keyboardVerticalOffset={0}
					style={{
						backgroundColor: Colors.Background,
						borderTopRightRadius: 20,
						borderTopLeftRadius: 20,
						height: "100%",
						padding: 25,
					}}
				>
					{/* User Information */}
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "flex-start",
							gap: 10,
						}}
					>

						{/* Profile Picture */}
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								alignSelf: "flex-start",
								gap: 5,
							}}
						>
							<TouchableOpacity style={{}}>
								<Image source={ProfileImg} style={{ height: 70, width: 70, borderRadius: 100 }} />
							</TouchableOpacity>
						</View>

						{/* User ID, Email, Verification Status, and User level */}
						<View
							style={{
								alignItems: "flex-start",
								justifyContent: "space-between",
								gap: 5,
							}}
						>

							{/* User ID */}
							<View>
								<Text style={{ fontFamily: Fonts.SemiBold }}>ID: 12345678</Text>
							</View>

							{/* Email */}
							<Text style={{ fontFamily: Fonts.SemiBold }}>
								idowudanielayotunde@gmail.com
							</Text>

							{/* Verification status */}
							<View style={{ flexDirection: "row", gap: 5 }}>
								<View
									style={{
										backgroundColor: Colors.LightGreen,
										padding: 5,
										borderRadius: 5,
									}}
								>
									<Text style={{ fontFamily: Fonts.Medium, fontSize: 12, color: '#FFF' }}>
										VERIFIED
									</Text>
								</View>

								{/* User Level */}
								<View
									style={{
										alignItems: "center",
										justifyContent: "flex-start",
										flexDirection: "row",
										gap: 5,
									}}
								>
									<MaterialCommunityIcons
										name="diamond"
										size={15}
										color={Colors.Yellow}
									/>
									<Text style={{ fontFamily: Fonts.Regular, fontSize: 14 }}>
										Level 3
									</Text>
								</View>
							</View>
						</View>
					</View>

					{/* Update profile form */}
					<ScrollView contentContainerStyle={{}}>
						<View style={{ marginTop: 15, gap: 10 }}>

							{/* First Name */}
							<View>
								<Text
									style={{
										color: "#A9A9A9",
										fontFamily: Fonts.Medium,
										fontSize: 15,
										marginLeft: 15,
									}}
								>
									First Name
								</Text>
								<View
									style={{
										backgroundColor: Colors.InputGrey,
										padding: 12,
										borderRadius: 15,
									}}
								>
									<TextInput
										defaultValue="Enoch"
										value={profile.firstname}
										inputMode="text"
										style={{
											fontFamily: Fonts.Medium,
											fontSize: 15,
											marginLeft: 5,
										}}
										onChangeText={(input) => {
											setProfile({ ...profile, firstname: input });
										}}
									/>
								</View>
							</View>

							{/* Last Name */}
							<View>
								<Text
									style={{
										color: "#A9A9A9",
										fontFamily: Fonts.Medium,
										fontSize: 15,
										marginLeft: 15,
									}}
								>
									Last Name
								</Text>
								<View
									style={{
										backgroundColor: Colors.InputGrey,
										padding: 12,
										borderRadius: 15,
									}}
								>
									<TextInput
										defaultValue="Timothy"
										value={profile.lastname}
										inputMode="text"
										style={{
											fontFamily: Fonts.Medium,
											fontSize: 15,
											marginLeft: 5,
										}}
										onChangeText={(input) => {
											setProfile({ ...profile, lastname: input });
										}}
									/>
								</View>
							</View>

							{/* Phone Number */}
							<View>
								<Text
									style={{
										color: "#A9A9A9",
										fontFamily: Fonts.Medium,
										fontSize: 15,
										marginLeft: 15,
									}}
								>
									Phone
								</Text>
								<View>
									<PhoneInput
										ref={phoneInput}
										defaultValue={value}
										defaultCode="NG"
										layout="first"
										containerStyle={{
											width: "100%",
											borderRadius: 15,
											backgroundColor: "#DDD",
										}}
										textContainerStyle={{
											borderRadius: 15,
											backgroundColor: Colors.InputGrey,
										}}
										textInputStyle={{
											fontFamily: Fonts.Medium,
											fontSize: 15,
										}}
										codeTextStyle={{
											fontFamily: Fonts.Medium,
											fontSize: 15,
										}}
										onChangeText={(text) => {
											setValue(text);
										}}
										onChangeFormattedText={(input) => {
											setProfile({ ...profile, phone: input });
										}}
									/>
								</View>
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</View>
			<StatusBar style="light" />
		</View>
	);
};

export default EditProfile;
