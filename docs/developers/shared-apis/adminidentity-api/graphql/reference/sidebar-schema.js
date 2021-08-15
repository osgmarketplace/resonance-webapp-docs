module.exports = {
  schemaSidebar: [
    {
      type: "doc",
      id: "developers/shared-apis/adminidentity-api/graphql/reference/schema",
    },
    {
      type: "category",
      label: "Queries",
      items: [
        "developers/shared-apis/adminidentity-api/graphql/reference/queries/empty",
        "developers/shared-apis/adminidentity-api/graphql/reference/queries/me",
        "developers/shared-apis/adminidentity-api/graphql/reference/queries/partner",
        "developers/shared-apis/adminidentity-api/graphql/reference/queries/partners",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-partner",
        "developers/shared-apis/adminidentity-api/graphql/reference/mutations/make-empty",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "developers/shared-apis/adminidentity-api/graphql/reference/directives/deprecated",
        "developers/shared-apis/adminidentity-api/graphql/reference/directives/include",
        "developers/shared-apis/adminidentity-api/graphql/reference/directives/skip",
        "developers/shared-apis/adminidentity-api/graphql/reference/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "developers/shared-apis/adminidentity-api/graphql/reference/objects/page-info",
        "developers/shared-apis/adminidentity-api/graphql/reference/objects/partner",
        "developers/shared-apis/adminidentity-api/graphql/reference/objects/partner-connection",
        "developers/shared-apis/adminidentity-api/graphql/reference/objects/partner-edge",
        "developers/shared-apis/adminidentity-api/graphql/reference/objects/user",
        "developers/shared-apis/adminidentity-api/graphql/reference/objects/user-connection",
        "developers/shared-apis/adminidentity-api/graphql/reference/objects/user-edge",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "developers/shared-apis/adminidentity-api/graphql/reference/scalars/boolean",
        "developers/shared-apis/adminidentity-api/graphql/reference/scalars/id",
        "developers/shared-apis/adminidentity-api/graphql/reference/scalars/int",
        "developers/shared-apis/adminidentity-api/graphql/reference/scalars/string",
      ],
    },
  ],
};
