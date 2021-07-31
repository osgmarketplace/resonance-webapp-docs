# resonance-webapp-docs

Documentation Web App for Resonance

# GraphQL Documentation

The GraphQL Documentation is automatically generated, and controlled through a series of npm scripts.

The key is to get a token for the APIs (any will do that is valid). Once you have one, you can run a script like so:

`AUTHHEADER="Bearer ..." npm run getgql:supply`

This will get the schema for the Supply API.

Once you have done so, you can run:

`npm run build:gql`

Which rebuilds all of the GQL documentation from the downloaded schemas.

NOTE: At current point, the plugin only works on one at a time, so comment the config in and out while you run the command as needed.
https://github.com/edno/graphql-markdown/issues/255
