import { ApolloClient, ApolloLink, InMemoryCache, split } from "@apollo/client";

import { RestLink } from "apollo-link-rest";

const httpLink = split(
  (operation) => operation.getContext().banner === true,
  new RestLink({
    uri: "https://a6yn39t014.execute-api.ap-south-1.amazonaws.com/default",
  }),
  split(
    (operation) => operation.getContext().cards === true,
    new RestLink({
      uri: "https://gsdehu3epj.execute-api.ap-south-1.amazonaws.com/default",
    })
  )
);

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(), //...customization
});

export default client;
