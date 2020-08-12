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
      likes: '1224',
      description: 'Saiu o Filme do batman!!',
      hashtags: '#Batman, #Cinema'
    },
    {
      id: '2',
      author: 'Romulo2902',
      place: 'Cinema ParkShopping',
      picture_url: 'https://img.ibxk.com.br/2019/08/28/joker-28142325046399.jpg?w=704',
      likes: '765',
      description: 'Coringa Em Breve',
      hashtags: '#Joker, #Cinema'
    },

    {
      id: '3',
      author: 'Romulo2902',
      place: 'Cinema ParkShopping',
      picture_url: 'https://cinepop.com.br/wp-content/uploads/2019/08/maleficent_mistress_of_evil_ver6_xlg.jpg',
      likes: '812',
      description: 'Malévola Em Breve',
      hashtags: '#Malévola, #Cinema'
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
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>


          </View>

          <View >
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags} </Text>
            <Text style={styles.comment}>{post.description} </Text>
            
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
  postHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom:15,


  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginTop:14,
  },
  place: {
    fontSize: 12,
    color: '#666',
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15,
    
  },
  actions: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  action: {
    marginRight: 8,
  },

  leftAction: {
    flexDirection: 'row',
  },
  likes:{
      fontWeight:'bold',
      fontSize:12,
  },
  hashtags:{
    color:'#002D5E',
  },
description:{
  color:'#000',
  lineHeight: 18,


},


})


export default Feed;