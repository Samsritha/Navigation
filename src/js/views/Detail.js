import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import LoginStyle from '../styles/LoginStyle';
export default class Detail extends Component {
  render() {
    return (
      <View>
        <Text style={LoginStyle.text}> dinspo </Text>
        
     
          <View style={LoginStyle.single_container}>
      
          <View style={[{flexDirection:'row', justifyContent:'space-around'},LoginStyle.elementsContainer]}>

          <View style={{width: 100, height: 100, borderRadius:100/2 , backgroundColor: '#C02E4C',justifyContent:'center'}} >
          <Text style={{textAlign:'center', color:'white',fontSize:20}}>All</Text>
          </View>
          
          <View style={{width: 100, height: 100,  borderRadius:100/2, backgroundColor: '#C02E4C',justifyContent:'center'}}>
            <Text style={{textAlign:'center',color:'white',fontSize:20}}>Poultry Red Meat</Text>
          </View>
      
          </View>
          
          </View>


            <View style={LoginStyle.single_container1}>
      
            <View style={[{flexDirection:'row', justifyContent:'space-around'}, LoginStyle.elementsContainer]}>
            
             <View style={{width: 100, height: 100, borderRadius:100/2 , backgroundColor: '#C02E4C',justifyContent:'center'}}>
               <Text style={{textAlign:'center', color:'white',fontSize:20}}>Pasta & dough </Text>
             </View>

            <View style={{width: 100, height: 100,  borderRadius:100/2, backgroundColor: '#C02E4C',justifyContent:'center'}}>
              <Text style={{textAlign:'center', color:'white', fontSize:20}}>Fish & seafood </Text>
            </View>
  
            </View>
      
            </View>



            <View style={LoginStyle.single_container2}>
      
            <View style={[{flexDirection:'row', justifyContent:'space-around',}, LoginStyle.elementsContainer]}>

            <View style={{width: 100, height: 100, borderRadius:100/2 , backgroundColor: '#C02E4C',justifyContent:'center'}}>
              <Text style={{textAlign:'center', color:'white',fontSize:20}}>Grains Legumes pulses</Text>
            </View>
           

            <View style={{width: 100, height: 100,  borderRadius:100/2, backgroundColor: '#C02E4C',justifyContent:'center'}}>
              <Text style={{textAlign:'center', color:'white',fontSize:20}}>TBC </Text>
            </View>
  
            </View>
      
      </View>

      </View>
    );
  }
}
