//新闻组件
import Util from '../../util';
import Service from '../../config';
import Detail from './news_detail';
import React, { Component } from 'react';
import {
  AlertIOS,
  ScrollView,
  TouchableOpacity,
  Navigator,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';


//新闻模块
class NewLists extends Component {

  state = { news:[] };


  componentDidMount(){
    var  path = Service.host + Service.getNews, //获取新闻列表
         self = this;
    Util.get(path,function(data){
      if(data.success){
        self.setState({news:data.datas})
      } else {
        AlertIOS.alert('失败','获取新闻列表失败');
      }
    })
  }

  _loadDetail(){
    const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
  }

//创建单条新闻
  createItem(element,i){
    return (
      <TouchableOpacity onPress={this._loadDetail} key={i}>
        <View style={styles.item}>
            <View style={{flex:1,marginRight:10}}>
              <Image source={{uri:element.imageUrl}} style={styles.img}/>
            </View>
            <View style={{flexDirection:'column',flex:4}}>
              <View>
                <Text numberOfLines={5} style={styles.title}>{element.title}</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={styles.newsLabel}>
                      {element.createTime}
                  </Text>
                  <Text style={styles.newsLabel}>
                      {element.comeFrom}
                  </Text>
              </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View>
        <ScrollView style={{height:Util.size.height}}>
          {this.state.news.map(this.createItem)}
        </ScrollView>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  item:{
    flexDirection:'row',
    width:Util.size.width,
    padding:10,
    borderBottomWidth:1,
    borderColor:"#eee",
  },
  img:{
    width:70,
    height:70,
  },
  title:{
    fontSize:18,
    fontFamily: 'Cochin',
    color:'#555',
    marginBottom:5,
  },
  newsLabel:{
    fontSize:16,
    marginRight:5,
    color:'#999',
  }
});

module.exports = NewLists