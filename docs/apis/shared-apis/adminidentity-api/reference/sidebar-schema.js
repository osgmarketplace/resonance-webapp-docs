module.exports = {
  schemaSidebar: [
    { type: "doc", id: "apis/shared-apis/adminidentity-api/reference/schema" },
    {
      type: "category",
      label: "Queries",
      items: [
        "apis/shared-apis/adminidentity-api/reference/queries/empty",
        "apis/shared-apis/adminidentity-api/reference/queries/me",
        "apis/shared-apis/adminidentity-api/reference/queries/partner",
        "apis/shared-apis/adminidentity-api/reference/queries/partners",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "apis/shared-apis/adminidentity-api/reference/mutations/create-partner",
        "apis/shared-apis/adminidentity-api/reference/mutations/make-empty",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "apis/shared-apis/adminidentity-api/reference/directives/deprecated",
        "apis/shared-apis/adminidentity-api/reference/directives/include",
        "apis/shared-apis/adminidentity-api/reference/directives/skip",
        "apis/shared-apis/adminidentity-api/reference/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "apis/shared-apis/adminidentity-api/reference/objects/page-info",
        "apis/shared-apis/adminidentity-api/reference/objects/partner",
        "apis/shared-apis/adminidentity-api/reference/objects/partner-connection",
        "apis/shared-apis/adminidentity-api/reference/objects/partner-edge",
        "apis/shared-apis/adminidentity-api/reference/objects/user",
        "apis/shared-apis/adminidentity-api/reference/objects/user-connection",
        "apis/shared-apis/adminidentity-api/reference/objects/user-edge",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "apis/shared-apis/adminidentity-api/reference/inputs/partner-create-input",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "apis/shared-apis/adminidentity-api/reference/scalars/boolean",
        "apis/shared-apis/adminidentity-api/reference/scalars/id",
        "apis/shared-apis/adminidentity-api/reference/scalars/int",
        "apis/shared-apis/adminidentity-api/reference/scalars/string",
      ],
    },
  ],
};
