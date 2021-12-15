/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Resonance Documentation",
    tagline: "Articles and References for the Resonance Platform",
    url: "https://docs.buildresonance.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "obfns", // Usually your GitHub org/user name.
    projectName: "resonance-webapp-docs", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "Resonance Docs",
            logo: {
                alt: "Resonance",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "doc",
                    docId: "concepts/intro",
                    position: "left",
                    label: "Concepts",
                },
                {
                    type: "doc",
                    docId: "developers/overall-concepts",
                    position: "left",
                    label: "Developers",
                },
                {
                    href: "https://github.com/obfns/resonance-webapp-docs",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Concepts",
                            to: "/concepts/intro",
                        },
                        {
                            label: "Developers",
                            to: "/developers/overall-concepts",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/obfns/resonance-webapp-docs",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Resonance`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/obfns/resonance-webapp-docs/tree/main",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    plugins: [
        [
            "@cmfcmf/docusaurus-search-local",
            {
                indexDocSidebarParentCategories: 3,
                indexBlog: false,
            },
        ],
        [
            "@edno/docusaurus2-graphql-doc-generator",
            {
                id: "adminidentity-api",
                schema: "./adminidentityschema.graphql",
                rootPath: "./docs",
                baseURL:
                    "developers/shared-apis/adminidentity-api/graphql/reference",
            },
        ],
        [
            "@edno/docusaurus2-graphql-doc-generator",
            {
                id: "supply-api",
                schema: "./supplyschema.graphql",
                rootPath: "./docs",
                baseURL:
                    "developers/supplier-apis/supply-api/graphql/reference",
            },
        ],
    ],
};
