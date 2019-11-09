import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';

const ProfileDetails: () => React$Node = () => {
  return (
    <>
      <View style={styles.detailsContainer}>
        <Text style={styles.p}>Status: Interviewing</Text>
        <Text style={styles.p}>Years Experience: 6+</Text>
        <Text style={styles.p}>Education Level: Bachelors Degree</Text>
        <Text style={styles.p}>Open to Relocation: Yes</Text>
        <View style={styles.moreButton}>
          <Button title="View More Details" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  moreButton: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 3,
  },
  detailsContainer: {
    flexDirection: "column",
  },
  p: {
    marginTop: 10,
    fontSize: 20,
  },
});

export default ProfileDetails;
