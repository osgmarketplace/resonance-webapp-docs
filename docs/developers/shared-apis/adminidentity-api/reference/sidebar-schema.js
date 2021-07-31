module.exports = {
  schemaSidebar: [
    {
      type: "doc",
      id: "developers/shared-apis/adminidentity-api/reference/schema",
    },
    {
      type: "category",
      label: "Queries",
      items: [
        "developers/shared-apis/adminidentity-api/reference/queries/empty",
        "developers/shared-apis/adminidentity-api/reference/queries/me",
        "developers/shared-apis/adminidentity-api/reference/queries/partner",
        "developers/shared-apis/adminidentity-api/reference/queries/partners",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "developers/shared-apis/adminidentity-api/reference/mutations/create-partner",
        "developers/shared-apis/adminidentity-api/reference/mutations/make-empty",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "developers/shared-apis/adminidentity-api/reference/directives/deprecated",
        "developers/shared-apis/adminidentity-api/reference/directives/include",
        "developers/shared-apis/adminidentity-api/reference/directives/skip",
        "developers/shared-apis/adminidentity-api/reference/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "developers/shared-apis/adminidentity-api/reference/objects/page-info",
        "developers/shared-apis/adminidentity-api/reference/objects/partner",
        "developers/shared-apis/adminidentity-api/reference/objects/partner-connection",
        "developers/shared-apis/adminidentity-api/reference/objects/partner-edge",
        "developers/shared-apis/adminidentity-api/reference/objects/user",
        "developers/shared-apis/adminidentity-api/reference/objects/user-connection",
        "developers/shared-apis/adminidentity-api/reference/objects/user-edge",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "developers/shared-apis/adminidentity-api/reference/inputs/partner-create-input",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "developers/shared-apis/adminidentity-api/reference/scalars/boolean",
        "developers/shared-apis/adminidentity-api/reference/scalars/id",
        "developers/shared-apis/adminidentity-api/reference/scalars/int",
        "developers/shared-apis/adminidentity-api/reference/scalars/string",
      ],
    },
  ],
};
