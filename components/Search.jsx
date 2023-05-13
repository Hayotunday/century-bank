import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const Search = ({ onSearch }) => {
	return (
		<View
			style={{
				width: "100%",
				backgroundColor: "#EAEAEA",
				borderRadius: 10,
				alignItems: "center",
				justifyContent: "flex-start",
				flexDirection: "row",
				gap: 8,
				padding: 5,
				marginBottom: 15,
			}}
		>
			<Feather
				name="search"
				size={14}
				color="#777"
				style={{ marginLeft: 20 }}
			/>
			<TextInput
				placeholder="Search for a token"
				placeholderTextColor={"#777"}
				cursorColor={"#000"}
				style={{ width: "100%", flex: 1 }}
				onChangeText={onSearch}
			/>
			<TouchableOpacity
				style={{
					marginRight: 10,
					backgroundColor: "#BEBEBE",
					padding: 2,
					borderRadius: 20,
				}}
			>
				<Ionicons name="close" size={14} color="#777" style={{}} />
			</TouchableOpacity>
		</View>
	);
};

export default Search;
