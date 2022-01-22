import React from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage";
import {ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from } from '@apollo/client'
import {onError} from '@apollo/client/link/error'
import { Router } from "react-router-dom";

const errorLink = onError(({ graphqlErrors, networkError}) => {
if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
        alert(`Graphql error ${message}`);
    });
}
})

const link = from([
errorLink,
new HttpLink({url: "https://github.com/scandiweb/junior-react-endpoint"})
])

const client = new ApolloClient({
 cache: new InMemoryCache(),
 link: link,
})



class AppRouter extends React.Component {
    render(){
        return(
            <ApolloProvider client={client}>
                    <main>
                        <BrowserRouter>
                        <Header/>
                            <Routes>
                                <Route path="/" element={<HomePage/>} />

                            </Routes>
                        </BrowserRouter>
                    </main>
                </ApolloProvider>
         )
    }
}


export default AppRouter