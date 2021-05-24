import React from "react";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import Text from "../../component/Text";
import ItemList from "./ItemList"


const data = [
    {
        id: '0',
        title: "Believer",
        name: "IMAGINE DRAGON",
        source: require("../../asset/img/img21.png")
    },
    {
        id: '1',
        title: "Shortwave",
        name: "RYAN GRIGDRY",
        source: require("../../asset/img/img22.png")
    },
    {
        id: '2',
        title: "Dream On",
        name: "ROGER TERRY",
        source: require("../../asset/img/img23.png")
    },
    {
        id: '3',
        title: "Origins",
        name: "IMAGINE DRAGON",
        source: require("../../asset/img/img24.png")
    },
    {
        id: '4',
        title: "Tie Me Down",
        name: "GRYFFIN",
        source: require("../../asset/img/img25.png")
    },
    {
        id: '5',
        title: "Chaff & Dust",
        name: "HYONNA",
        source: require("../../asset/img/img26.png")
    },
];

interface Props {
    title: string;
}

const ColumnList = ({ title }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle} font="Bold">
                {title}
            </Text>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) =><ItemList key={index} title={item.title} source={item.source} name={item.name} />}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                />
        </View>
    );
};

export default ColumnList;

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        marginLeft: 14
    },
    txtTitle: {
        paddingLeft: 16,
        marginBottom: 20
    }
});