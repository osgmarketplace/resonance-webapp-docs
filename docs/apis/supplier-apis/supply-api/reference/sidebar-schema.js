module.exports = {
  schemaSidebar: [
    { type: "doc", id: "apis/supplier-apis/supply-api/reference/schema" },
    {
      type: "category",
      label: "Queries",
      items: [
        "apis/supplier-apis/supply-api/reference/queries/empty",
        "apis/supplier-apis/supply-api/reference/queries/hello",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "apis/supplier-apis/supply-api/reference/mutations/make-empty",
        "apis/supplier-apis/supply-api/reference/mutations/make-hello",
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
      label: "Scalars",
      items: [
        "apis/supplier-apis/supply-api/reference/scalars/boolean",
        "apis/supplier-apis/supply-api/reference/scalars/string",
      ],
    },
  ],
};
