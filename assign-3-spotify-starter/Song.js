import React, { useState } from 'react';
import {StyleSheet,Text,View, Image} from 'react-native';
import millisToMinutesAndSeconds from "./utils/millisToMinuteSeconds"

export default function Song({index, imageurl, songtitle, artist, album, songlength }) {
  return (
    console.log(artist),
    <View style={styles.songs}>
      <View style={styles.index}>
        <Text style={[styles.text, { color: "white" }]}>{index +1}</Text>
      </View>
      <View style={styles.albumcover}>
        <Image style={styles.cover} source={{uri : imageurl}}/>
      </View>
      <View style={styles.songandartist}>
        <Text numberOfLines={1} style={[styles.text, { color: "white" }]}>{songtitle}</Text>
        <Text numberOfLines={1} style={[styles.smalltext, { color: "white" }]}>{artist}</Text>
      </View>
      <View style={styles.albumname}>
        <Text numberOfLines={1} style={[styles.text, { color: "white" }]}>{album}</Text>
      </View>
      <View style={styles.duration}>
        <Text style={[styles.text, { color: "white" }]}>{[millisToMinutesAndSeconds(songlength)]}</Text>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  songs: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  index: {
    flex: 1,
    width: "10%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumcover: {
    flex: 2,
    width: "20%",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  songandartist: {
    flex: 4,
    width: "40%",
    marginTop: 20,
    marginRight: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  albumname: {
    flex: 3,
    width: "30%",
    justifyContent: 'center',
    marginRight: 10,
    alignItems: 'flex-start',
  },
  duration: {
    flex: 1,
    width: "10%",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {

    fontSize: 12,
    //fontWeight: 'bold',
    //marginBottom: 10,
  },
  smalltext: {
    fontSize: 10,
    fontWeight: '200',
    //marginBottom: 10,
  },
  cover: {
    width: 50,
    height: 50,
    margin: 10,
    resizeMode: 'contain'
  }
});