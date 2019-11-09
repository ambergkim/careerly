import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

const ProfileBox: () => React$Node = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Image
          style={styles.avatar}
          source={require('../images/amber.jpg')}
        />
        <Text style={styles.sectionTitle}>Amber Kim</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 50, height: 50, borderRadius: 50
  },
  sectionContainer: {
    marginTop: 32,
    flexDirection: "row",
  },
  sectionTitle: {
    marginLeft: 10,
    fontSize: 30
  }
});

export default ProfileBox;
