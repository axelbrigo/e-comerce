import React from 'react';
import ApolloClient from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

export default class GetProducts extends React.Component {
  render() {
    return <div></div>;
  }
}
