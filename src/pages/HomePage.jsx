import React from 'react';
import { InMemoryCache, ApolloClient, gql } from '@apollo/client';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
  });

  async componentDidMount() {
    await this.client
      .query({
        query: gql`
          query {
            categories {
              products {
                name
              }
            }
          }
        `
      })
      .then((result) => (this.state = result));
    console.log(this.state.data.categories[0]);
  }

  render() {
    return <main>{this.state.products}</main>;
  }
}

export default HomePage;
