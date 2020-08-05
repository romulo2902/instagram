import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';


import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';



function Feed() {

  const posts = [
    {
      id: '1',
      author: 'Romulo2902',
      place: 'Cinema ParkShopping',
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


          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>

        </View>



        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
          <View style={styles.leftAction}> 
            <TouchableOpacity>
              <Image source={like} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={comment} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={send} />
            </TouchableOpacity>
          </View>

          <View> 
            
          </View>


        </View>

          <View style={styles.likes}></View>

          <View style={styles.comment}></View>

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
  postHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: 'center',


  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  place: {
    fontSize: 12,
    color: '#666',


  },
  picture_url: {
    width: '100%',
    height: 400
  },

  actions:{},
  leftAction:{
    flexDirection: 'row',


  },


})


export default Feed;