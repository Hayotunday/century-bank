import { View, TouchableWithoutFeedback } from "react-native";
import React, { useState, useEffect } from "react";
import Animated, {
	interpolateColor,
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withTiming,
	useDerivedValue,
} from "react-native-reanimated";
import { Colors } from "../constants";

const CustomSwitch = ({
	thumbColor: { activeColor, inActiveColor },
	toggleSwitch,
	active,
}) => {
	const switchTranslate = useSharedValue(0);

	const progress = useDerivedValue(() => {
		return withTiming(active ? 22 : 4);
	});

	useEffect(() => {
		if (active) {
			switchTranslate.value = 22;
		} else {
			switchTranslate.value = 4;
		}
	}, [active, switchTranslate]);

	const backgroundColorStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			progress.value,
			[4, 22],
			[inActiveColor, activeColor]
		);
		return {
			backgroundColor,
		};
	});

	const customSpringStyles = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: withSpring(switchTranslate.value, {
						mass: 1,
						damping: 15,
						stiffness: 120,
						overshootClampingL: false,
						restSpeedThreshold: 0.001,
						restDisplacementThreshold: 0.001,
					}),
				},
			],
		};
	});

	return (
		<TouchableWithoutFeedback onPress={toggleSwitch}>
			<Animated.View
				style={[
					{
						width: 50,
						height: 28,
						backgroundColor: "#EBEBEB",
						borderRadius: 30,
						justifyContent: "center",
					},
				]}
			>
				<Animated.View
					style={[
						{
							width: 24,
							height: 24,
							backgroundColor: Colors.Blue,
							borderRadius: 30,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.2,
							shadowRadius: 2.5,
							elevation: 4,
						},
						customSpringStyles,
						backgroundColorStyle,
					]}
				/>
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};

export default CustomSwitch;
