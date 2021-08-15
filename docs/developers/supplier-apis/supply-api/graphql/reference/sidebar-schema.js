module.exports = {
  schemaSidebar: [
    {
      type: "doc",
      id: "developers/supplier-apis/supply-api/graphql/reference/schema",
    },
    {
      type: "category",
      label: "Queries",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/queries/empty",
        "developers/supplier-apis/supply-api/graphql/reference/queries/supplier",
        "developers/supplier-apis/supply-api/graphql/reference/queries/suppliers",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier",
        "developers/supplier-apis/supply-api/graphql/reference/mutations/make-empty",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/directives/deprecated",
        "developers/supplier-apis/supply-api/graphql/reference/directives/include",
        "developers/supplier-apis/supply-api/graphql/reference/directives/skip",
        "developers/supplier-apis/supply-api/graphql/reference/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/objects/page-info",
        "developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-connection",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-edge",
      ],
    },
    {
      type: "category",
      label: "Enums",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/enums/purchase-order-notification-type",
        "developers/supplier-apis/supply-api/graphql/reference/enums/resonance-currency",
        "developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale",
        "developers/supplier-apis/supply-api/graphql/reference/enums/supplier-status",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/inputs/purchase-order-notification-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/scalars/boolean",
        "developers/supplier-apis/supply-api/graphql/reference/scalars/id",
        "developers/supplier-apis/supply-api/graphql/reference/scalars/int",
        "developers/supplier-apis/supply-api/graphql/reference/scalars/string",
      ],
    },
  ],
};
