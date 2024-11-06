import React from 'react'
import { SafeAreaView, ScrollView  } from 'react-native'
import BlogCard from './components/BlogCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import FlatCard from './components/FlatCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ElevatedCard/>
        <FancyCard/>
        <ContactList/>
        <BlogCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App