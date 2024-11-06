import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Hakim Uddin',
            status: 'I ❤️ to write bangali poem.',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4'
        },
        {
            uid: 2,
            name: 'Hakim Uddin',
            status: 'I love to write bangali poem.',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4'
        },
        {
            uid: 3,
            name: 'Hakim Uddin',
            status: 'I love to write bangali poem.',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4'
        },
        {
            uid: 4,
            name: 'Hakim Uddin',
            status: 'I love to write bangali poem.',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl})=>(
            <View style={styles.userCard} key={uid}>
                <Image
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
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
      userCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#e7e7e7",
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8
      },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 20
    },
    userName:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    userStatus:{

    }
})