import React from 'react'
import { SafeAreaView, ScrollView  } from 'react-native'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import FlatCard from './components/FlatCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ElevatedCard/>
        <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App