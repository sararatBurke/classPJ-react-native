import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
//   const html = `
//   <h1>!</h1>
//   <h2>Hi</h2>
//   <em style="textAlign: center;">Look this</em>
// `;





  return (
  <View style={styles.container}>
      {/* <RenderHtml source={{ html }} /> */}
      <View style={styles.header}>
        {/* header */}
        <Text>A Subtle Green</Text>
        <Text>A design by Bryant Smith</Text> 
      </View>

      <View style={styles.nav}>
        <ScrollView
                
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Portfolio</Text>
          <Text>Service</Text>
          <Text>Contact</Text>
        </ScrollView>
      </View>

      <View style={styles.body}>
        <ScrollView>
          <Text>The Article Title</Text>
          <Text>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :`)`


Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.


Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
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
    backgroundColor: '#b3daff',
    width: '100%',
  },

  nav:{
    flex: 0.1,
    backgroundColor: '#280',
    width: '100%',
    justifyContent: 'space between',
  },

  body: {
    flex: 0.7,
    backgroundColor: '#79a867', 
    width: '100%',
  }
});
