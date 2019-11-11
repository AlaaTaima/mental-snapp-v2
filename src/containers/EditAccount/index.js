import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditAccount from './editAccount';

import { withFirebase } from '../Firebase';

class Index extends Component {
  state = {
    info: {
      name: 'Fares',
      email: 'fares@gmail.com',
    },
    checked: false,
    error: '',
  };

  componentDidMount() {
    const { firebase } = this.props;
    const user = firebase.auth.currentUser;

    if (user != null) {
      const userInfo = {
        name: user.displayName,
        email: user.email,
      };
      this.setState({
        info: userInfo,
      });
    }
  }

  handleErrorMessage = message => {
    this.setState({ error: message });
  };

  onChange = ({ target: { checked } }) => this.setState({ checked });

  render() {
    const {
      history: { goBack, push },
    } = this.props;
    const { info, checked, error } = this.state;
    return (
      <EditAccount
        userInfo={info}
        checked={checked}
        handleChange={this.onChange}
        handlePush={push}
        handleErrorMessage={this.handleErrorMessage}
        error={error}
        handleGoBack={goBack}
      />
    );
  }
}

Index.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  firebase: PropTypes.shape({
    auth: PropTypes.object.isRequired,
  }).isRequired,
};

export default withFirebase(Index);
