import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import PhoneInput from "react-native-phone-number-input";

import { Colors, Fonts } from "../constants";
import { Transition, CenturyLogo } from "../components";

const CreatePhone = () => {
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
			<View
				style={{
					marginTop: Constants.statusBarHeight,
					paddingTop: 60,
					paddingBottom: 30,
					paddingHorizontal: 30,
				}}
			>
				{/* Century Logo */}
				<CenturyLogo alternate={true} />
			</View>

			{/* White background */}
			<View
				style={{
					backgroundColor: Colors.Background,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					alignItems: "flex-start",
					gap: 40,
					paddingTop: 20,
					paddingHorizontal: 30,
					flexGrow: 1,
				}}
			>
				{/* Login Progress */}
				<View
					style={{
						alignItems: "flex-start",
						justifyContent: "space-between",
						gap: 5,
					}}
				>
					{/* <View
						style={{
							alignItems: "flex-start",
							justifyContent: "center",
						}}
					>
						<Text
							style={{
								fontFamily: Fonts.Bold,
								fontSize: 20,
								color: Colors.Black,
							}}
						>
							Create an account
						</Text>
					</View> */}
					<View
						style={{
							alignItems: "flex-start",
							justifyContent: "space-between",
							gap: 5,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "flex-start",
								gap: 5,
							}}
						>
							<Text
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 20,
									color: Colors.Grey,
								}}
							>
								Log in
							</Text>
							<Text
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 20,
									color: Colors.Black,
								}}
							>
								Create an account
							</Text>
						</View>
						<Transition numOfPosition={2} />
					</View>
				</View>

				<View
					style={{
						width: "100%",
						justifyContent: "space-between",
						gap: 25,
					}}
				>
					<View>
						<Text style={{ fontFamily: Fonts.Regular, fontSize: 15 }}>
							Create an account using your phone number. A One Time Password
							will be sent for verification
						</Text>
					</View>

					<View style={{ width: "100%" }}>
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

					<TouchableOpacity
						style={{
							backgroundColor: Colors.Blue,
							borderRadius: 15,
							alignItems: "center",
							justifyContent: "center",
							padding: 15,
						}}
					>
						<Text
							style={{
								fontFamily: Fonts.SemiBold,
								fontSize: 15,
								color: "#FFF",
							}}
						>
							Next
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<StatusBar style="light" />
		</View>
	);
};

export default CreatePhone;
