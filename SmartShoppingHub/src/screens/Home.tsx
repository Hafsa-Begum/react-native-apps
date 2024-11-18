import { SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import AppBanner from '../components/AppBanner'
import TrendingProducts from '../components/TrendingProducts'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <ScrollView>
        <AppBanner/>
        <TrendingProducts/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f8ff'
    }
})

export default Home;
