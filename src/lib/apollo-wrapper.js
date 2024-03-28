import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
  });

  return {
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([httpLink]),
    cache: new NextSSRInMemoryCache(),
  };
}

export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
