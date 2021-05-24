import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Text from "../../component/Text";
import ItemList from "./ItemList";

const data = [
    {
        id: '0',
        title: "Monsters Go Bump",
        name: "ERIKA RECINOS",
        source: require("../../asset/img/img1.png")
    },
    {
        id: '1',
        title: "Moment Apart",
        name: "ODESZA",
        source: require("../../asset/img/img2.png")
    },
    {
        id: '2',
        title: "Shortwave",
        name: "RYAN GRIGDRY",
        source: require("../../asset/img/img3.png")
    },
    {
        id: '3',
        title: "Believer",
        name: "IMAGINE DRAGON",
        source: require("../../asset/img/img4.png")
    },
];

interface Props {
    title: string;
}

const RowList = ({ title }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle} font="Bold">
                {title}
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => {
                    return (
                        <ItemList
                            key={index}
                            title={item.title}
                            source={item.source}
                            name={item.name}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default RowList;

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
    txtTitle: {
        paddingLeft: 16,
        marginBottom: 20
    }
});