import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Layout from './Layout';
import Text from "./Text";
import Constants from 'expo-constants';
import { useTheme } from '../config/Theme';
import Icon from './Icon';
interface Props {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <Layout style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Icon name="menu" />
            </TouchableOpacity>
            <View style={styles.body}>
                <Text>{title}</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Icon name="search" />
            </TouchableOpacity>
        </Layout>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: "row",
        marginTop: Constants.statusBarHeight
    },
    btn: {
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        flex: 1
    }
});
