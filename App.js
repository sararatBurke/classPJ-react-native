import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function App() {

  return (
  <View style={styles.container}>
      <View style={styles.header}>
        {/***** header *****/}
        <View style={styles.headTextContainer}>
          <Text style={styles.headText}>A Subtle Green</Text>
          <Text style={styles.subHead}>A design by Bryant Smith</Text>
        </View> 
      </View>

      <View style={styles.nav}>
        {/*****  nav ******/}
        <LinearGradient 
          colors={['#daeff1', '#93c2cc']} 
          style={styles.navBG}>

          <ScrollView    
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Portfolio</Text>
            <Text>Service</Text>
            <Text>Contact</Text>
          </ScrollView>

        </LinearGradient>
      </View>

      <View style={styles.body}>
        {/*****  body ******/}
        <ScrollView>
          <Text style={styles.bodyHead}>The Article Title</Text>

          <Text style={styles.content}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy `:)`</Text> 
          <Text style={styles.content}> 
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>

          <Text style={styles.content}>
          Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
          </Text>
        </ScrollView>
        </View>

  </View>

    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  header:{
    flex: 0.2,
    backgroundColor: '#98c5d6',
    width: '100%',
    
  },
  headTextContainer:{
    width: '30%',
    padding: 20,
  },
  headText:{
    color: '#2b373b',
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: 40,
    textAlign: 'center',
    
  },

  subHead:{
    color: '#daeff1',
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: 16,
    textAlign: 'center',

  },

  navBG: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },

  nav:{
    flex: 0.1,
    backgroundColor: '#cef' ,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#161a1c',
    shadowOpacity: 0.8,

  },

  body: {
    flex: 0.7,
    width: '100%',
    backgroundColor: '#869c81', 
    padding: 20, 
  },

  bodyHead:{
    fontFamily:'Arial',
    color: '#2C4969',
    fontWeight: 'bold',
    fontSize: 30,
  },

  content:{
    fontFamily: 'Arial',
    lineHeight: 27,
    marginBottom: 20,
  }

  
});
