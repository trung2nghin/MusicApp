import React from 'react'
import { StyleSheet, Image, View, ImageSourcePropType } from 'react-native'
import Text from '../../component/Text'

interface Props {
    title: string,
    source: ImageSourcePropType,
    name: string
};
const ItemList = ({ title, source, name }: Props) => {
    return (
        <View style={styles.container}>
            <Image source={source} />
            <Text size="h3" style={styles.txtTitle} font="Medium">
                {title}
            </Text>
            <Text size="h5" status="text_placeholder">
                {name}
            </Text>
        </View>
    );
};

export default ItemList;

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
        alignItems: "center"
    },
    txtTitle: {
        marginTop: 16,
        marginBottom: 6,
    },
});
