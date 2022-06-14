# resonance-webapp-docs

Documentation Web App for Resonance

# GraphQL Documentation

The GraphQL Documentation is automatically generated, and controlled through a series of npm scripts.

The key is to get a token for the APIs (any will do that is valid). Once you have one, you can run a script like so:

`AUTHHEADER="Bearer ..." TOKEN="A_STOREFRONT_API_TOKEN" npm run getgql:all`

This will get the schema for the all APIs.

Once you have done so, you can run:

`npm run build:gql`

Which rebuilds all of the GQL documentation from the downloaded schemas.
