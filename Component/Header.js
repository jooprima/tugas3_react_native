import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tugas 3 React Native</Text>
        <Text style={styles.header}>{this.props.data}</Text>
        <Text style={{color: 'black', textAlign: 'center'}}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
  },
  header: {
    color: '#991EAC',
    textAlign: 'center',
    fontSize: 25,
  },
  container: {
    backgroundColor: '#9BAB4E',
    flex: 1,
  },
});

export default Header;
