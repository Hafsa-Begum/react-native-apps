import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function BlogCard() {
    function openLink(websiteLink:string) {
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>Whats new in React Native update?</Text>
        </View>
        <Image
            source={require('../assets/js.png')}
            style={styles.cardImage}
            />
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText} numberOfLines={3}>
            JavaScript is the most popular and widely used client-side scripting language. Client-side scripting refers to scripts that run within your web browser. JavaScript is designed to add interactivity and dynamic effects to the web pages by manipulating the content returned from a web server.
            </Text>
        </View>
        <View style={styles.cardFooterContainer}>
            <TouchableOpacity style={styles.blogLinks} onPress={()=>{openLink('https://www.tutorialrepublic.com/javascript-tutorial/')}}>
                <Text>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.blogLinks} onPress={()=>{openLink('https://www.w3schools.com/js/')}}>
                <Text>Follow More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 16,
      },
      headingContainer:{
        height: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      headerText:{
        fontSize: 16,
        marginBottom: 10,
        color: '#fff'
      },
    card:{
        width: 380,
        height: 400,
        padding: 8,
        borderRadius: 8, 
        marginHorizontal: 8,
        marginBottom: 30,
        paddingBottom: 20
    },
    elevatedCard:{
        backgroundColor: '#736c5e',
        elevation: 3

    },
    bodyContainer:{
        paddingHorizontal: 6
    },
    bodyText:{
        fontSize: 14,
        marginTop: 10,
        color: '#fff'
    },
    cardImage:{
        width: '100%',
        height: 200,
        padding: 8,
        borderRadius: 8,
    },
    cardFooterContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    blogLinks:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 6
    }
})