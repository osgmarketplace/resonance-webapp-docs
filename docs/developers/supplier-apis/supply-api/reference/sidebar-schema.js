module.exports = {
  schemaSidebar: [
    { type: "doc", id: "developers/supplier-apis/supply-api/reference/schema" },
    {
      type: "category",
      label: "Queries",
      items: [
        "developers/supplier-apis/supply-api/reference/queries/empty",
        "developers/supplier-apis/supply-api/reference/queries/supplier",
        "developers/supplier-apis/supply-api/reference/queries/suppliers",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "developers/supplier-apis/supply-api/reference/mutations/create-supplier",
        "developers/supplier-apis/supply-api/reference/mutations/make-empty",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "developers/supplier-apis/supply-api/reference/directives/deprecated",
        "developers/supplier-apis/supply-api/reference/directives/include",
        "developers/supplier-apis/supply-api/reference/directives/skip",
        "developers/supplier-apis/supply-api/reference/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "developers/supplier-apis/supply-api/reference/objects/page-info",
        "developers/supplier-apis/supply-api/reference/objects/purchase-order-notification",
        "developers/supplier-apis/supply-api/reference/objects/supplier",
        "developers/supplier-apis/supply-api/reference/objects/supplier-connection",
        "developers/supplier-apis/supply-api/reference/objects/supplier-edge",
      ],
    },
    {
      type: "category",
      label: "Enums",
      items: [
        "developers/supplier-apis/supply-api/reference/enums/purchase-order-notification-type",
        "developers/supplier-apis/supply-api/reference/enums/resonance-currency",
        "developers/supplier-apis/supply-api/reference/enums/resonance-locale",
        "developers/supplier-apis/supply-api/reference/enums/supplier-status",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "developers/supplier-apis/supply-api/reference/inputs/purchase-order-notification-input",
        "developers/supplier-apis/supply-api/reference/inputs/supplier-create-input",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "developers/supplier-apis/supply-api/reference/scalars/boolean",
        "developers/supplier-apis/supply-api/reference/scalars/id",
        "developers/supplier-apis/supply-api/reference/scalars/int",
        "developers/supplier-apis/supply-api/reference/scalars/string",
      ],
    },
  ],
};
