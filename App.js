import React, { Component } from 'react';

import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {

  render() {

    return (
      <View style={styles.container}>
        <View style={[styles.SquareShapeView,{backgroundColor:"skyblue"}]}>
          <Text style={[styles.Value]}>Square1</Text>
        </View>
        <View style={[styles.SquareShapeView,{backgroundColor:"#66b3ff"}]} >
          <Text style={styles.Value}>Square2</Text>
        </View>
        <View style={[styles.SquareShapeView,{backgroundColor:"#ff4da6"}]}>
          <Text style={styles.Value}>Square3</Text>
        </View>  

      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:10,
    marginLeft:10,
    paddingRight:10,
    flexDirection:'row',
    border:1,
    borderColor:'black'
    
  },

  SquareShapeView: {

    width: 100,
    height: 100,
    paddingBottom:5,
    margin:12,
    value:'Square1',
    marginBottom:5,

    justifyContent: 'center',
    alignItems: 'center',

  },
  Value:{
    color:'black',
  }

});