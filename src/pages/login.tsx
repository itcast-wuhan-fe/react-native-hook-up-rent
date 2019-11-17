import { View, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Linking } from 'react-native';
import { Component } from 'react';
// import { Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import navigation from './../utils/reactNavigationHelper';

class LoginPage extends Component {
  static navigationOptions = {
    title: '登陆'
  };
  openPrivatProtocol = () => {
    let url = 'https://itcast.cn';
    Linking.openURL(url);
  };
  openUserProtocol = () => {
    let url = 'https://itcast.cn';
    Linking.openURL(url);
  };
  goRegister = () => {
    navigation('Register');
  };
  render() {
    return (
      <SafeAreaView style={style.wrapper}>
        <ScrollView>
          <Text style={style.title}>账号密码登陆</Text>
          <TextInput style={style.input} placeholder="请输入用户名" />
          <TextInput style={style.input} placeholder="请输入用密码" secureTextEntry={true} />
          <View>
            <Text style={style.text}>
              <Text>登录即代表同意</Text>
              <Text style={style.colorText} onPress={this.openPrivatProtocol}>
                《好客隐私政策》
              </Text>
              <Text>及</Text>
              <Text style={style.colorText} onPress={this.openUserProtocol}>
                《好客用户服务协议》
              </Text>
            </Text>
          </View>

          <Button
            buttonStyle={style.button}
            title={'同意协议并登陆'}
            onPress={() => {
              navigation('Home');
            }}
          ></Button>
          <View style={style.footerTextView}>
            <Text>
              <Text>没有账号 </Text>
              <Text style={style.colorText} onPress={this.goRegister}>
                去注册～
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 20
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30
  },
  input: {
    height: 22,
    marginBottom: 20,
    fontSize: 16
  },
  scrollView: {
    flex: 1
  },
  button: {
    flex: 1,
    height: 50,
    marginVertical: 20,
    backgroundColor: '#00B8D4'
  },
  text: {
    lineHeight: 20
  },
  footerTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  colorText: { color: '#00B8D4' }
});
export default LoginPage;
