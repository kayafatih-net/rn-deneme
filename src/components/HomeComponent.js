import React, { Component } from 'react';
import { Info } from './screenNames';
import Button from 'react-native-button';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';

const backgroundColor = '#0067a7';
export default class App extends Component{
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const tabBarLabel = 'Home';   
    const tabBarIcon = () => (
        <Image
            source={require('../images/home-icon.png')}
            style={{ width: 26, height: 26, tintColor: backgroundColor }}
        />
    );
    return { tabBarLabel, tabBarIcon };
  }

  constructor (props) {
    super(props);
    this.state = { 
    DateText: '',
      DateHolder: null,}
  }
  
    
  DatePickerMainFunctionCall = () => {
 
    let DateHolder = this.state.DateHolder;
 
    if(!DateHolder || DateHolder == null){
 
      DateHolder = new Date();
      this.setState({
        DateHolder: DateHolder
      });
    }
 
    //To open the dialog
    this.refs.DatePickerDialog.open({
 
      date: DateHolder,
 
    });
 
  }
 

  onDatePickedFunction = (date) => {
    this.setState({
      dobDate: date,
      DateText: moment(date).format('DD-MMM-YYYY')
    });
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
     backgroundColor="orange"
     barStyle="light-content"
   />
      <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
 
 <View style={styles.datePickerBox}>
   <Text style={styles.datePickerText}>{this.state.DateText}</Text>
 </View>
 </TouchableOpacity>
 <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} />
      <ImageBackground source={ {uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/sample_full_image.jpg'} } style={styles.MainContainer} >
         <View style={styles.child}>
          <View style={{flex:1, flexDirection: 'row'}}>
          <Text style={styles.text}>isci1</Text>
          <Picker
          style={{width: 100,marginLeft:10}}
          selectedValue={this.state.deger1}
          onValueChange={(calisma) => this.setState({deger1: calisma})}>
          <Picker.Item label="X" value="X" />
          <Picker.Item label="/" value="/" />
          <Picker.Item label="0" value="0" />
        </Picker>
          <TextInput
            style={{height: 35, width:60, borderColor: '#0000ff', borderWidth: 1, borderRadius: 10,marginLeft:60}}
            onChangeText={(text1) => this.setState({text1})}
            value={this.state.text1}
            keyboardType= 'numeric'
            maxLength={6}
            
      />
          </View>


          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.text}>isci2</Text>
          <Picker
              style={{width: 100,marginLeft:10}}
              selectedValue={this.state.deger2}
              onValueChange={(calisma) => this.setState({deger2: calisma})}>
              <Picker.Item label="X" value="X" />
              <Picker.Item label="/" value="/" />
              <Picker.Item label="0" value="0" />
        </Picker>
        <TextInput
            style={{height: 35, width:60, borderColor: '#0000ff', borderWidth: 1, borderRadius: 10,marginLeft:60}}
            onChangeText={(text2) => this.setState({text2})}
            value={this.state.text2}
            keyboardType= 'numeric'
            maxLength={6}
            
      />
          </View>


          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.text}>isci3</Text>
          <Picker
              style={{width: 100,marginLeft:10}}
              selectedValue={this.state.deger3}
              onValueChange={(calisma) => this.setState({deger3: calisma})}>
              <Picker.Item label="X" value="X" />
              <Picker.Item label="/" value="/" />
              <Picker.Item label="0" value="0" />
        </Picker>
        <TextInput
            style={{height: 35, width:60, borderColor: '#0000ff', borderWidth: 1, borderRadius: 10,marginLeft:60}}
            onChangeText={(text3) => this.setState({text3})}
            value={this.state.text3}
            keyboardType= 'numeric'
            maxLength={6}
            
      />
          </View>


          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.text}>isci4</Text>
          <Picker
              style={{width: 100,marginLeft:10}}
              selectedValue={this.state.deger4}
              onValueChange={(calisma) => this.setState({deger4: calisma})}>
              <Picker.Item label="X" value="X" />
              <Picker.Item label="/" value="/" />
              <Picker.Item label="0" value="0" />
        </Picker>
        <TextInput
            style={{height: 35, width:60, borderColor: '#0000ff', borderWidth: 1, borderRadius: 10,marginLeft:60}}
            onChangeText={(text4) => this.setState({text4})}
            value={this.state.text4}
            keyboardType= 'numeric'
            maxLength={6}
            
      />
          </View>


          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.text}>isci5</Text>
          <Picker
              style={{width: 100,marginLeft:10}}
              selectedValue={this.state.deger5}
              onValueChange={(calisma) => this.setState({deger5: calisma})}>
              <Picker.Item label="X" value="X" />
              <Picker.Item label="/" value="/" />
              <Picker.Item label="0" value="0" />
        </Picker>
        <TextInput
            style={{height: 35, width:60, borderColor: '#0000ff', borderWidth: 1, borderRadius: 10,marginLeft:60}}
            onChangeText={(text5) => this.setState({text5})}
            value={this.state.text5}
            keyboardType= 'numeric'
            maxLength={6}
            
      />
          </View>


          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.text}>Harcamalar</Text>
          <TextInput
            style={{height: 35, width:60, borderColor: '#0000ff', borderWidth: 1, borderRadius: 10,marginLeft:60}}
            onChangeText={(text6) => this.setState({text6})}
            value={this.state.text6}
            keyboardType= 'numeric'
            maxLength={6}
            
      />
          </View> 
       </View>
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datePickerBox:{
    backgroundColor:'#ff00ff',
    borderColor: '#00ff00',
    borderWidth: 0.5,
    padding: 0,
    borderRadius: 4,
    height: 38,
    justifyContent:'center'
  },
 
  datePickerText: {
    fontSize: 18,
    marginLeft: 5,
    borderWidth: 0,
    color: '#000',
 
  },
  child: {
     marginTop:100,
     marginBottom: 70
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
},
  container: {
    flex: 6,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#FEE140',
  },
  text: {
  textAlignVertical: 'center',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  height: 35,
  width: 75,
  borderWidth: 2,
  borderRadius: 10,
  borderColor: '#56f2a6'  
  }
});
