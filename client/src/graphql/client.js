import { getAccessToken, isLoggedIn } from "../auth"
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client/core';

const endpointURL = `http://localhost:9000/graphql`

// Authenticate and forward to next step
const authLink = new ApolloLink(( operation, forward ) => {
    if (isLoggedIn()) {
        operation.setContext({
            headers: {
                'authorization': `Bearer ${getAccessToken()}`
            }
        })  
    }
    return forward(operation)
})

export const client = new ApolloClient({
    link: ApolloLink.from([
        authLink,
        new HttpLink({uri: endpointURL})
    ]),
    cache: new InMemoryCache(),

})