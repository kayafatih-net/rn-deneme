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
  StatusBar,
  ScrollView,
  Image
} from 'react-native';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const backgroundColor = '#e97600';
export default class App extends Component{
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;  
    const tabBarIcon = () => (
        <Image
            source={require('../images/home.png')}
            style={{ width: 26, height: 26, tintColor: backgroundColor }}
        />
    );
    return { tabBarIcon };
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
      <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
           <View style={styles.datePickerBox}>
               <Text style={styles.datePickerText}>{this.state.DateText}</Text>
           </View>
        </TouchableOpacity>
 <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)}/>
      
        
         <TextInput  style={{marginBottom:50,marginLeft:60,width:190,}}
         keyboardType='default'
         
         />
         <View style={styles.body}>
         
          <View style={styles.isciler}>
          
          <Text style={styles.text}>isci1</Text>
          <Picker
          style={{width: 100,marginLeft:10}}
          selectedValue={this.state.deger1}
          onValueChange={(calisma) => this.setState({deger1: calisma})}>
         <Picker.Item label="X" value="120" />
              <Picker.Item label="/" value="60" />
              <Picker.Item label="0" value="0" />
        </Picker>
          <TextInput
            style={styles.textin}
            onChangeText={(text1) => this.setState({text1})}
            value={this.state.text1}
            keyboardType= 'numeric'
            maxLength={6}
            
      />
          </View>


          <View style={styles.isciler}>
         
          <Text style={styles.text}>isci2</Text>
          <Picker
              style={{width: 100,marginLeft:10}}
              selectedValue={this.state.deger2}
              onValueChange={(calisma) => this.setState({deger2: calisma})}>
              <Picker.Item label="X" value="120" />
              <Picker.Item label="/" value="60" />
              <Picker.Item label="0" value="0" />
        </Picker>
        <TextInput
            style={styles.textin}
            onChangeText={(text2) => this.setState({text2})}
            value={this.state.text2}
            keyboardType= 'numeric'
            maxLength={6}
            
      /> 
          </View>


          <View style={styles.isciler}>
          
          <Text style={styles.text}>isci3</Text>
          <Picker
              style={{width: 100,marginLeft:10}}
              selectedValue={this.state.deger3}
              onValueChange={(calisma) => this.setState({deger3: calisma})}>
              <Picker.Item label="X" value="120" />
              <Picker.Item label="/" value="60" />
              <Picker.Item label="0" value="0" />
        </Picker>
        <TextInput
            style={styles.textin}
            onChangeText={(text3) => this.setState({text3})}
            value={this.state.text3}
            keyboardType= 'numeric'
            maxLength={6}
            
      /> 
          </View>


          <View style={styles.isciler}>
         
          <Text style={styles.text}>isci4</Text>
          <Picker
              style={{width: 100,marginLeft:10}}
              selectedValue={this.state.deger4}
              onValueChange={(calisma) => this.setState({deger4: calisma})}>
             <Picker.Item label="X" value="120" />
              <Picker.Item label="/" value="60" />
              <Picker.Item label="0" value="0" />
        </Picker>
        <TextInput
            style={styles.textin}
            onChangeText={(text4) => this.setState({text4})}
            value={this.state.text4}
            keyboardType= 'numeric'
            maxLength={6}
            
      /> 
          </View>


          <View style={styles.isciler}>
          
          <Text style={styles.text}>isci5</Text>
          <Picker
              style={{width: 100,marginLeft:10}}
              selectedValue={this.state.deger5}
              onValueChange={(calisma) => this.setState({deger5: calisma})}>
              <Picker.Item label="X" value="120" />
              <Picker.Item label="/" value="60" />
              <Picker.Item label="0" value="0" />
        </Picker>
        <TextInput
            style={styles.textin}
            onChangeText={(text5) => this.setState({text5})}
            value={this.state.text5}
            keyboardType= 'numeric'
            maxLength={6}
            
      />
      
          </View>
          

          <View style={styles.isciler}>
          
          <Text style={styles.text}>Harcamalar</Text>
          <TextInput
            style={styles.textin}
            onChangeText={(text6) => this.setState({text6})}
            value={this.state.text6}
            keyboardType= 'numeric'
            maxLength={6}
            placeholder= 'toplam'
            
      />
           
          </View> 
          
       </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    
    marginVertical:3,
  
  },
  container: {
    backgroundColor:'#e97600',
   
    paddingHorizontal:50,
  },
  datePickerBox:{
    backgroundColor:'transparent',
    borderColor: '#0000ff',
    borderWidth: 2,
    borderRadius: 4,
    height: 38,
    marginTop:20
  
  },
 
  datePickerText: {
    fontSize: 18,
    marginLeft: 5,
    borderWidth: 0,
    color: '#000',
    textAlign: 'center',
  },
  isciler:{
    flex:1,
    flexDirection:'row',
    marginTop:15,      
  },
  scroll:{
   
  },
  text: {
  textAlignVertical: 'center',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  width: 85,
  borderWidth: 2,
  borderRadius: 6,
  borderColor: '#ffffff',
  color:'#000000'
  
  },
  textin:{
    height: 35,
     width:60,
      borderColor: '#0000ff',
       borderWidth: 1,
        borderRadius: 10,
        marginLeft:60
  }
 
});
