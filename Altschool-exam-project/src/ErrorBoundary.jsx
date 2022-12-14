import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
    this.setState({ errorInfo });
  }
  render() {
    // next code block goes here

	const { hasError, errorInfo } = this.state;

if (hasError) {
  return (
    <div className="">
      <div className="">
        <p>
          There was an error in loading this page😥.{' '}
          <span
            style={{ cursor: 'pointer', color: '#0077FF' }}
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload this page to update
          </span>{' '}
        </p>
      </div>
    </div>
  );
}


  return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
};