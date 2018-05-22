import React from 'react';
import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function Friendship(props) {
  return (
    <View style={styles.FriendsList}>
      <View style={styles.FriendsTag}>
        <View style={styles.round}>
          <Text>{props.x}</Text>
        </View>
        <View style={styles.innerText}>
          <Text style={styles.leftText}>Nama teman</Text>
          <Text style={styles.leftText}>panggilan</Text>
        </View>
      </View>
      <View style={styles.message}>
        <Text>message</Text>
      </View>
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text>x</Text>
          <Text>Friends</Text>
          <Text>S</Text>
        </View>
        {/* <View style={styles.hr} /> */}
        <View style={styles.body}>
          <View style={styles.profile}>
            <Image
              style={{width: 100, height: 100, marginBottom: 10, marginTop: 10}}
              source={{
                uri:
                  'https://facebook.github.io/react-native/docs/assets/favicon.png',
              }}
            />
            <Text>Name: ...</Text>
          </View>
          <View style={styles.FriendsTab}>
            <ScrollView>
              {array.map((x, i) => <Friendship key={i} x={x} />)}
            </ScrollView>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerChild}>
            <Text>---</Text>
          </View>
          <View style={styles.footerChild}>
            <Text>---</Text>
          </View>
          <View style={styles.footerChild}>
            <Text>---</Text>
          </View>
          <View style={styles.footerChild}>
            <Text>---</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  navBar: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 10,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingBottom: 10,
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  FriendsTab: {
    flex: 2,
    margin: 5,
  },

  FriendsList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  round: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    backgroundColor: 'yellow',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 0.5,
    width: 50,
    height: 50,
  },
  FriendsTag: {
    flexDirection: 'row',
    margin: 4,
  },
  innerText: {
    margin: 5,
  },
  message: {
    marginRight: 5,
    backgroundColor: 'green',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    width: 70,
    height: 30,
  },
  footer: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
});
