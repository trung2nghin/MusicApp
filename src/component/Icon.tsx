import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from '../config/Theme';

interface Props {
    name: any;
    size?: number;
}
const Icon = ({ name, size = 24 }: Props) => {
    const { theme } = useTheme();
    return <Ionicons name={name} size={24} color={theme.icon_color} />
};

export default Icon;