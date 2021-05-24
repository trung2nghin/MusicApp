import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Layout from '../../component/Layout';
import Header from '../../component/Header'
import RowList from './RowList';

const Home = () => {
  return (
    <Layout style={{ flex: 1 }}>
      <Header title="" />
      <ScrollView>
        <RowList title={"Recommended for you"} />
        <RowList title={"My Playlist"} />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({})
