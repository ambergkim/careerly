import React, { Component, Fragment } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import ProfileBox from './ProfileBox.js';
import ProfileDetails from './ProfileDetails.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };

    this.clickProfile = this.clickProfile.bind(this);
  }

  clickProfile() {
    this.setState({ hide: !this.state.hide })
    console.log('***** state', this.state);
  }

  render() {
    const {
      avatar,
      form,
      input,
      button,
    } = styles;

    return (
      <View style={form} >
        <TouchableOpacity
          style={button}
          onPress={this.clickProfile}
        >
          <ProfileBox />
          <View>
            { this.state.hide ? <Fragment></Fragment> : <ProfileDetails />}
          </View>
        </TouchableOpacity>

      </View>
    )
  }
};

const styles = {
  form: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
}

export default Login;
