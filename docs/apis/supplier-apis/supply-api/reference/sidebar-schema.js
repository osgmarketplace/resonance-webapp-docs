module.exports = {
  schemaSidebar: [
    { type: "doc", id: "apis/supplier-apis/supply-api/reference/schema" },
    {
      type: "category",
      label: "Queries",
      items: [
        "apis/supplier-apis/supply-api/reference/queries/empty",
        "apis/supplier-apis/supply-api/reference/queries/supplier",
        "apis/supplier-apis/supply-api/reference/queries/suppliers",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "apis/supplier-apis/supply-api/reference/mutations/create-supplier",
        "apis/supplier-apis/supply-api/reference/mutations/make-empty",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "apis/supplier-apis/supply-api/reference/directives/deprecated",
        "apis/supplier-apis/supply-api/reference/directives/include",
        "apis/supplier-apis/supply-api/reference/directives/skip",
        "apis/supplier-apis/supply-api/reference/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "apis/supplier-apis/supply-api/reference/objects/page-info",
        "apis/supplier-apis/supply-api/reference/objects/purchase-order-notification",
        "apis/supplier-apis/supply-api/reference/objects/supplier",
        "apis/supplier-apis/supply-api/reference/objects/supplier-connection",
        "apis/supplier-apis/supply-api/reference/objects/supplier-edge",
      ],
    },
    {
      type: "category",
      label: "Enums",
      items: [
        "apis/supplier-apis/supply-api/reference/enums/purchase-order-notification-type",
        "apis/supplier-apis/supply-api/reference/enums/resonance-locale",
        "apis/supplier-apis/supply-api/reference/enums/supplier-status",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "apis/supplier-apis/supply-api/reference/inputs/purchase-order-notification-input",
        "apis/supplier-apis/supply-api/reference/inputs/supplier-create-input",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "apis/supplier-apis/supply-api/reference/scalars/boolean",
        "apis/supplier-apis/supply-api/reference/scalars/id",
        "apis/supplier-apis/supply-api/reference/scalars/int",
        "apis/supplier-apis/supply-api/reference/scalars/string",
      ],
    },
  ],
};
