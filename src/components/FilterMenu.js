import React from 'react';

import CheckBox from '@react-native-community/checkbox';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

const FilterMenu: () => React$Node = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Filter Candidate Results</Text>
        <View style={styles.filterItem}>
          <CheckBox />
          <Text style={styles.filterText}>Software Developer / Engineer</Text>
        </View>
        <View style={styles.filterItem}>
          <CheckBox />
          <Text style={styles.filterText}>Looking For Part-Time Work</Text>
        </View>
        <View style={styles.filterItem}>
          <CheckBox />
          <Text style={styles.filterText}>Technical Profile</Text>
        </View>
        <View style={styles.filterItem}>
          <CheckBox />
          <Text style={styles.filterText}>Non-Technical Profile</Text>
        </View>
        <View style={styles.filterItem}>
          <CheckBox />
          <Text style={styles.filterText}>Washington State</Text>
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 18
  },
  avatar: {
    width: 50, height: 50, borderRadius: 50
  },
  sectionContainer: {
    marginTop: 32,
    flexDirection: "column",
  },
  sectionTitle: {
    marginLeft: 5,
    fontSize: 20,
    marginBottom: 15,
  },
});

export default FilterMenu;
