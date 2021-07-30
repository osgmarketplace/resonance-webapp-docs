/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Resonance Documentation",
    tagline: "Articles and References for the Resonance Platform",
    url: "https://docs.buildresonance.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Resonance", // Usually your GitHub org/user name.
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
                    docId: "apis/overall-concepts",
                    position: "left",
                    label: "API Reference",
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
                            label: "APIs",
                            to: "/apis/overall-concepts",
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
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/obfns/resonance-webapp-docs/tree/main",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
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
            "@edno/docusaurus2-graphql-doc-generator",
            {
                id: "adminidentity-api",
                schema: "./adminidentityschema.graphql",
                rootPath: "./docs",
                baseURL: "apis/shared-apis/adminidentity-api/reference",
            },
        ],
        [
            "@edno/docusaurus2-graphql-doc-generator",
            {
                id: "supply-api",
                schema: "./supplyschema.graphql",
                rootPath: "./docs",
                baseURL: "apis/supplier-apis/supply-api/reference",
            },
        ],
    ],
};
