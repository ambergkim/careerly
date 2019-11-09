import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import ProfileDetails from './ProfileDetails.js';

class ProfileBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };

    this.clickProfile = this.clickProfile.bind(this);
  }

  clickProfile() {
    console.log('***** clicking profile');
    this.setState({hide: !this.state.hide});
    console.log('***** state', this.state);
  }

  render() {

    return (
      <>
        <View style={styles.sectionContainer}>
          <TouchableOpacity onPress={this.clickProfile} style={styles.profileBox}>
            <Image
              style={styles.avatar}
              source={require('../images/avatar.png')}
            />
            <Text style={styles.sectionTitle}>{this.props.title}</Text>
          </TouchableOpacity>


          <View>
            {this.state.hide ? <></> : <ProfileDetails />}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  sectionContainer: {
    marginTop: 32,
    flexDirection: 'column',
  },
  sectionTitle: {
    marginLeft: 10,
    fontSize: 18,
  }
});

export default ProfileBox;
