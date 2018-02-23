import { InMemoryCache } from "apollo-cache-inmemory"
import { withClientState } from "apollo-link-state"
import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { HttpLink } from 'apollo-link-http'
import resolvers from './resolvers'

const uri = "https://powerful-atoll-68063.herokuapp.com/graphql"
const httpLink = new HttpLink({ uri })

const cache = new InMemoryCache()

const defaultState = {
  answeredQuestions: [],
  questionNumber: {
    __typename: "QuestionNumber",
    value: 1
  }
}

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers
})

const link = ApolloLink.from([stateLink, httpLink])

export default client = new ApolloClient({
  link,
  cache
})