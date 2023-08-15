import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import { Colors, Fonts } from "../constants";
import { Transition, CenturyLogo } from "../components";

const EmailOtp = () => {
	const firstInput = useRef();
	const secondInput = useRef();
	const thirdInput = useRef();
	const fourthInput = useRef();
	const fifthInput = useRef();
	const sixthInput = useRef();

	const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" });

	return (
		<View style={{ backgroundColor: Colors.Blue, flex: 1 }}>
			<View style={{ marginTop: Constants.statusBarHeight, paddingTop: 60, paddingBottom: 30, paddingHorizontal: 30 }}>
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
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "flex-start",
							gap: 5,
						}}
					>
						<Text style={{ fontFamily: Fonts.Medium, color: Colors.Grey }}>
							Authenticator OTP
						</Text>
						<Text style={{ fontFamily: Fonts.Medium, color: Colors.Black }}>
							Email OTP
						</Text>
					</View>
					<Transition numOfPosition={2} />
				</View>

				{/* OTP area */}
				<View
					style={{ width: "100%", justifyContent: "space-between", gap: 20 }}
				>
					<View>
						<Text
							style={{
								fontFamily: Fonts.Regular,
								color: Colors.Black,
								fontSize: 16,
							}}
						>
							Send code to your email
						</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderRadius: 15,
							width: "100%",
						}}
					>
						<View
							style={{
								backgroundColor: Colors.InputGrey,
								borderRadius: 10,
								width: "14%",
								height: 45,
								alignItems: "center",
								justifyContent: "center",
								fontFamily: Fonts.Medium,
							}}
						>
							<TextInput
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 25,
									width: "100%",
								}}
								placeholder="-"
								keyboardType="numeric"
								textAlign="center"
								selectionColor={"#000000"}
								maxLength={1}
								ref={firstInput}
								onChangeText={(text) => {
									setOtp({ ...otp, 1: text });
									text && secondInput.current.focus();
								}}
							/>
						</View>
						<View
							style={{
								backgroundColor: Colors.InputGrey,
								borderRadius: 10,
								width: "14%",
								height: 45,
								alignItems: "center",
								justifyContent: "center",
								fontFamily: Fonts.Medium,
							}}
						>
							<TextInput
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 25,
									width: "100%",
								}}
								placeholder="-"
								keyboardType="numeric"
								textAlign="center"
								selectionColor={"#000000"}
								maxLength={1}
								ref={secondInput}
								onChangeText={(text) => {
									setOtp({
										...otp,
										2: text,
									});
									text
										? thirdInput.current.focus()
										: firstInput.current.focus();
								}}
							/>
						</View>
						<View
							style={{
								backgroundColor: Colors.InputGrey,
								borderRadius: 10,
								width: "14%",
								height: 45,
								alignItems: "center",
								justifyContent: "center",
								fontFamily: Fonts.Medium,
							}}
						>
							<TextInput
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 25,
									width: "100%",
								}}
								placeholder="-"
								keyboardType="numeric"
								textAlign="center"
								selectionColor={"#000000"}
								maxLength={1}
								ref={thirdInput}
								onChangeText={(text) => {
									setOtp({ ...otp, 3: text });
									text
										? fourthInput.current.focus()
										: secondInput.current.focus();
								}}
							/>
						</View>
						<View
							style={{
								backgroundColor: Colors.InputGrey,
								borderRadius: 10,
								width: "14%",
								height: 45,
								alignItems: "center",
								justifyContent: "center",
								fontFamily: Fonts.Medium,
							}}
						>
							<TextInput
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 25,
									width: "100%",
								}}
								placeholder="-"
								keyboardType="numeric"
								textAlign="center"
								selectionColor={"#000000"}
								maxLength={1}
								ref={fourthInput}
								onChangeText={(text) => {
									setOtp({ ...otp, 4: text });
									text
										? fifthInput.current.focus()
										: thirdInput.current.focus();
								}}
							/>
						</View>
						<View
							style={{
								backgroundColor: Colors.InputGrey,
								borderRadius: 10,
								width: "14%",
								height: 45,
								alignItems: "center",
								justifyContent: "center",
								fontFamily: Fonts.Medium,
							}}
						>
							<TextInput
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 25,
									width: "100%",
								}}
								placeholder="-"
								keyboardType="numeric"
								textAlign="center"
								selectionColor={"#000000"}
								maxLength={1}
								ref={fifthInput}
								onChangeText={(text) => {
									setOtp({ ...otp, 5: text });
									text
										? sixthInput.current.focus()
										: fourthInput.current.focus();
								}}
							/>
						</View>
						<View
							style={{
								backgroundColor: Colors.InputGrey,
								borderRadius: 10,
								width: "14%",
								height: 45,
								alignItems: "center",
								justifyContent: "center",
								fontFamily: Fonts.Medium,
							}}
						>
							<TextInput
								style={{
									fontFamily: Fonts.Medium,
									fontSize: 25,
									width: "100%",
								}}
								placeholder="-"
								keyboardType="numeric"
								textAlign="center"
								selectionColor={"#000000"}
								maxLength={1}
								ref={sixthInput}
								onChangeText={(text) => {
									setOtp({ ...otp, 6: text });
									!text && fifthInput.current.focus();
								}}
							/>
						</View>
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
							Send Code
						</Text>
					</TouchableOpacity>
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
							Verify
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<StatusBar style="light" />
		</View>
	);
};

export default EmailOtp;
