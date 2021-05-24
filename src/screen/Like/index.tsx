import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Layout from '../../component/Layout';
import Header from '../../component/Header';
import ColumnList from './ColumnList'

const Like = () => {
    return (
        <Layout style={{ flex: 1 }}>
          <Header title="" />
          <ScrollView>
            <ColumnList title={"Liked Songs"}/>
          </ScrollView>
        </Layout>
      );
};

export default Like;

const styles = StyleSheet.create({})
