import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Switch,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import { Colors, Fonts, ProfileImg } from "../constants";
import { CustomSwitch } from "../components";

const Profile = () => {
	const [isEnabled, setEnabled] = useState(false);
	const [isDark, setIsDark] = useState(false);

	const toggleSwitch = () => setEnabled(!isEnabled);
	const toggleDarkTheme = () => setIsDark(!isDark);

	return (
		<View
			style={{ backgroundColor: Colors.DarkBlue, flex: 1 }}
		>
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start",
						margin: 15,
						marginTop: 25
					}}
				>
					<TouchableOpacity>
						<Entypo name="chevron-small-left" size={30} color={"#FFF"} />
					</TouchableOpacity>
					<Text
						style={{ color: "#FFF", fontFamily: Fonts.Regular, fontSize: 20 }}
					>
						Profile
					</Text>
				</View>
			</View>

			<ScrollView
				contentContainerStyle={{
					alignItems: "center",
				}}
				style={{
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					backgroundColor: Colors.Background,
					flexGrow: 1,
				}}
			>
				<View style={{ width: '95%', paddingVertical: 10, gap: 10 }}>
					<TouchableOpacity style={{ width: '100%', borderRadius: 20, backgroundColor: Colors.InputGrey, flexDirection: 'row', padding: 13, gap: 10 }}>
						<Image source={ProfileImg} style={{ height: 50, width: 50, borderRadius: 100 }} />
						<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '80%' }}>
							<View style={{ gap: 5 }}>
								<Text style={{ fontFamily: Fonts.Medium, fontSize: 16 }}>Enoch Timothy</Text>
								<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 5 }}>
									<MaterialCommunityIcons
										name="diamond"
										size={14}
										color={Colors.Yellow}
									/>
									<Text style={{ fontFamily: Fonts.Regular }}>Level 3</Text>
								</View>
							</View>
							<TouchableOpacity>
								<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>

					{/* Account */}
					<View style={{ width: '100%', gap: 10 }}>
						<Text style={{ fontFamily: Fonts.SemiBold, marginLeft: 20, }}>Account</Text>
						<View style={{ width: '100%', borderRadius: 20, backgroundColor: Colors.White, padding: 10, gap: 10 }}>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Payment Methods</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Verification</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
						</View>
					</View>

					{/* Security */}
					<View style={{ width: '100%', gap: 10 }}>
						<Text style={{ fontFamily: Fonts.SemiBold, marginLeft: 20, }}>Security</Text>
						<View style={{ width: '100%', borderRadius: 20, backgroundColor: Colors.White, padding: 10, gap: 10 }}>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Change Password</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
							<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Enable 2FA</Text>
								<CustomSwitch thumbColor={{ activeColor: Colors.DarkBlue, inActiveColor: Colors.White }} toggleSwitch={toggleSwitch} active={isEnabled} />
							</View>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Reset 2FA</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Reset Pin</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Device History</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
						</View>
					</View>

					{/* Others */}
					<View style={{ width: '100%', gap: 10 }}>
						<Text style={{ fontFamily: Fonts.SemiBold, marginLeft: 20, }}>Others</Text>
						<View style={{ width: '100%', borderRadius: 20, backgroundColor: Colors.White, padding: 10, gap: 10 }}>
							<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Change Theme</Text>
								<CustomSwitch thumbColor={{ activeColor: Colors.DarkBlue, inActiveColor: Colors.White }} toggleSwitch={toggleDarkTheme} active={isDark} />
							</View>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Price Alert</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Preference</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Refer a Friend</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
								<Text style={{ fontFamily: Fonts.Medium }}>Contact Support</Text>
								<TouchableOpacity>
									<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
								</TouchableOpacity>
							</TouchableOpacity>
						</View>
					</View>

					{/* Log out */}
					<View style={{ width: '100%', borderRadius: 20, backgroundColor: Colors.White, padding: 10, gap: 10 }}>
						<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
							<Text style={{ fontFamily: Fonts.Medium, color: 'red' }}>Log out</Text>
							<TouchableOpacity>
								<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
							</TouchableOpacity>
						</TouchableOpacity>
					</View>

					{/* Delete my Account */}
					<View style={{ width: '100%', borderRadius: 20, backgroundColor: Colors.White, padding: 10, gap: 10 }}>
						<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>
							<Text style={{ fontFamily: Fonts.Medium, color: 'red' }}>Delete my Account</Text>
							<TouchableOpacity>
								<Entypo name="chevron-small-right" size={30} color={Colors.Grey} />
							</TouchableOpacity>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<StatusBar style="light" />
		</View>
	);
};

export default Profile;
