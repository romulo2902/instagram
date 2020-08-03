import React from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';

function Feed() {

  const posts = [
    {
      id: '1',
      author: 'Romulo2902',
      place:'Cinema ParkShopping',
      picture_url: 'https://i.pinimg.com/originals/95/4e/d2/954ed254568aa95900c70d96db52f09d.jpg',
      likes: '',
      description: '',
      hashtags: ''
    },
  ];

  function renderItem({ item: post }) {
    return (
      <View> 
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>
            
            <View>
              <Image style={styles.picture_url} source={  {uri: post.picture_url}  } />
            </View>

          <View style={styles.postOptions}>

          </View>

        </View>




      </View>

    );
  }
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  postHeader:{},
  postOptions:{},
  userInfo:{},
  author:{
    fontSize:14,
    color:'#000',
    fontWeight:'bold',
  },
  place:{},
  picture_url:{
    width:'100%',
    height:400



  }
  

})


export default Feed;