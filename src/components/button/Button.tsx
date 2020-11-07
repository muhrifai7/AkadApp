import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler"
import { FONTS, COLORS } from '../../contants';

type PropsButton = {
    label: string,
    variant: "default" | "primary",
    onPress: () => void
}

const Button = ({ label, variant, onPress }: PropsButton) => {
    const [state, setState] = useState();

    const backgroundColor = variant === "primary" ? COLORS.primary : COLORS.sekunder
    const color = variant === "primary" ? "white" : COLORS.textColor
    return (
        <RectButton style={[styles.container, { backgroundColor }]}{...onPress}>
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        width: 240,
        height: 50,
        borderRadius: 25
    },
    label: {
        fontFamily: FONTS.family,
        fontSize: 15
    }
})