import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: 0,
    };
  }

  handleTambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  handleKurang = () => {
    if (this.state.jumlah > 0) {
      this.setState({
        jumlah: this.state.jumlah - 1,
      });
    } else {
      alert('Jumlah Tidak Boleh Kurang Dari 0');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelJumlah}>jumlah : {this.state.jumlah}</Text>
        <Text style={styles.label}>Silahkan Tekan Tombol Di Bawah</Text>
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={this.handleTambah}>
            <Text style={styles.btnText}> + </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnKurang}
            onPress={this.handleKurang}>
            <Text style={styles.btnText}> - </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.jumlah}>{this.state.jumlah}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
  },
  containerBtn: {
    flexDirection: 'row',
  },
  btnTambah: {
    backgroundColor: '#00854E',
    flex: 1,
    textAlign: 'center',
    width: 10,
    height: 40,
    margin: 20,
  },
  btnKurang: {
    backgroundColor: '#B80000',
    flex: 1,
    width: 10,
    height: 40,
    margin: 20,
  },
  jumlah: {
    fontSize: 50,
    color: 'blue',
    textAlign: 'center',
  },
  labelJumlah: {
    textAlign: 'right',
    marginRight: 15,
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
  btnText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});

export default Barang;
