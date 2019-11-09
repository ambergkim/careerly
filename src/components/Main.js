import React, { Component, Fragment } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import ProfileBox from './ProfileBox.js';
import FilterMenu from './FilterMenu.js';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterMenu: false,
    };
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter() {
    this.setState({ filterMenu: !this.state.filterMenu })
    console.log('***** state', this.state);
  }

  render() {
    const {
      avatar,
      form,
      input,
      button,
      appTitle
    } = styles;

    return (
      <View>
        <View style={styles.header}>
          <Text style={appTitle}>Careerly</Text>
          <Text onPress={this.toggleFilter} style={styles.filterButton}>Filter</Text>
        </View>

        <Text style={styles.subheading}>Improve the diversity of your organization</Text>

        <View style={styles.appBody}>
          {this.state.filterMenu ?
            <FilterMenu></FilterMenu>
            :
            <>
              <Text style={styles.sectionTitle}>All Matching Candidates</Text>
              <ProfileBox title='Jane Doe, Software Engineer, Seattle, WA' />
              <ProfileBox title='Sarah Kim, Sales Engineer, Miami, FL' />
              <ProfileBox title='Kate Grant, Kate Grant, Software Engineer, Tacoma, WA' />
              <ProfileBox title='John Smith, Customer Care, Salt Lake City, UT' />
              <ProfileBox title='Alex Danvers, Program manager, Middlevale, CA' />
              <ProfileBox title='Ethan Evans, Sales, Ft. Lauderdale, FL' />
            </>
          }
        </View>
      </View>
    )
  }
};

const styles = {
  subheading: {
    fontSize: 14,
    marginLeft: 10
  },
  sectionTitle: {
    marginLeft: 5,
    fontSize: 20,
    marginTop: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center'
  },
  appBody: {
    padding: 14
  },
  filterButton: {
    fontSize: 15,
    textTransform: 'uppercase',
    borderColor: 'black',
    borderWidth: 1,
    padding: 3,
    textAlign: 'center',
  },
  appTitle: {
    fontSize: 25,
    marginTop: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
};

export default Login;
