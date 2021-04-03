import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';


export default function App() {

  return (
  <View style={styles.container}>

      <View style={styles.header}>
        {/***** header *****/}
      
          <Text style={styles.headText}>A Subtle Green</Text>
          <Text style={styles.subHead}>A design by Bryant Smith</Text>
       
      </View>

      <View style={styles.nav}>
        {/*****  nav ******/}
        <LinearGradient 
          colors={['#daeff1', '#93c2cc']} 
          style={styles.navBG}>

          <ScrollView    
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity><Text style={styles.navButton}>Home</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navButton}>About</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navButton}>Portfolio</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navButton}>Service</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navButton}>Contact</Text></TouchableOpacity>
           
          </ScrollView>

        </LinearGradient>
      </View>

      <View style={styles.body}>
        {/*****  body ******/}
        <ScrollView>
          <Text style={styles.bodyHead}>The Article Title</Text>

          <View style={styles.topContent}>
            <View style={styles.left}>
              <Text style={styles.content}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy `:)`</Text> 
              <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
            </View>

            <View style={styles.right}>
              <Text style={styles.headBodyLink}>Links:</Text>
              <TouchableOpacity><Text style={styles.bodyLink}>Web Design</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.bodyLink}>Templates</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.bodyLink}>Marketing</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.bodyLink}>SEO</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.bodyLink}>Programming</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.bodyLink}>Consulting</Text></TouchableOpacity>
            </View>
          </View>

            <Text style={styles.content}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
        </ScrollView>
      </View>

  </View>

    
  );
}


const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  header:{
    backgroundColor: '#93c2cc',
    width: '100%', 
    padding :'10@s', 
  },
  
  headText:{
    color: '#252F33',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    fontSize: '27@s',

    marginLeft: '15@s',
    marginTop: '25@s' 
  },

  subHead:{
    color: '#daeff1',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    fontSize: '12@s',
    marginLeft: '30@s', 
  },

  navBG: {
    height: 48,
    paddingHorizontal: '10@s',
  },

  nav:{
    backgroundColor: '#cef',
    width: '100%',

    shadowColor: '#161a1c',
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {width:2, height:1},
    justifyContent: 'center'
  },

  navButton:{
  
    paddingHorizontal: '10@s',
    paddingVertical: '8@mvs0.1',
    fontFamily:'Helvetica',
    fontSize: 25,
    color: '#252F33',
    justifyContent: 'center',
  },

  body: {
    flex: 1,
    width: '100%',
    backgroundColor: '#869c81', 
    padding: '12@s'   
  },

  bodyHead:{
    fontFamily:'Verdana',
    color: '#2C4969',
    fontWeight: 'bold',
    fontSize: 35
  },
  topContent:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headBodyLink: {
    fontWeight: 'bold',
    fontSize: '20@mvs0.1',
    marginVertical: '15@s'
    
  },
  bodyLink: {
    fontSize: '13@mvs0.6',
    fontWeight: 'bold',
    marginBottom: '7@s',
    color: '#252F33',
  },

  left:{
    width: '75%'
  },
  right:{
    width: '100@mvs1'
  },
  content:{
    fontFamily: 'Arial',
    fontSize: 23,
    lineHeight: '40@mvs0.1',
    marginBottom: '25@mvs0.2'
  }

  
});
