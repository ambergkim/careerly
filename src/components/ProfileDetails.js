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

const ProfileDetails: () => React$Node = () => {
  return (
    <>
      <View style={styles.detailsContainer}>
        <Text style={styles.p}>Status: Interviewing</Text>
        <Text style={styles.p}>Title: Software Engineer</Text>
        <Text style={styles.p}>Work Experience:</Text>
        <Text style={styles.p}>Lorem Ipsum</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "column",
  },
  p: {
    marginTop: 10,
    fontSize: 20,
  },
});

export default ProfileDetails;
