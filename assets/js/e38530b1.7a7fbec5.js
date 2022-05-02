"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[13464],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(a),h=r,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(g,d(d({ref:t},s),{},{components:a})):n.createElement(g,d({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,d=new Array(i);d[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,d[1]=p;for(var o=2;o<i;o++)d[o]=a[o];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63584:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),d=["components"],p={id:"page-update-input",title:"PageUpdateInput"},l=void 0,o={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/page-update-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/page-update-input",title:"PageUpdateInput",description:"ID Fields are required, but all other fields are optional, only included fields will be updated.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-update-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-update-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-update-input.mdx",tags:[],version:"current",frontMatter:{id:"page-update-input",title:"PageUpdateInput"},sidebar:"apisSidebar",previous:{title:"PageStatusFilterInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-status-filter-input"},next:{title:"ProductCreateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-create-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>author</code> (<code>String</code>)",id:"author-string",level:4},{value:"<code>contentItemIds</code> (<code>ID</code>)",id:"contentitemids-id",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>pageId</code> (<code>ID</code>)",id:"pageid-id",level:4},{value:"<code>pageType</code> (<code>String</code>)",id:"pagetype-string",level:4},{value:"<code>primaryImageUrl</code> (<code>String</code>)",id:"primaryimageurl-string",level:4},{value:"<code>publishedAt</code> (<code>Date</code>)",id:"publishedat-date",level:4},{value:"<code>seoDescription</code> (<code>String</code>)",id:"seodescription-string",level:4},{value:"<code>seoTitle</code> (<code>String</code>)",id:"seotitle-string",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4},{value:"<code>status</code> (<code>PageStatus</code>)",id:"status-pagestatus",level:4},{value:"<code>storefrontIds</code> (<code>ID</code>)",id:"storefrontids-id",level:4},{value:"<code>subtitle</code> (<code>String</code>)",id:"subtitle-string",level:4},{value:"<code>tags</code> (<code>String</code>)",id:"tags-string",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4}],u={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ID Fields are required, but all other fields are optional, only included fields will be updated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PageUpdateInput {\n  author: String\n  contentItemIds: [ID!]\n  description: String\n  pageId: ID!\n  pageType: String\n  primaryImageUrl: String\n  publishedAt: Date\n  seoDescription: String\n  seoTitle: String\n  slug: String\n  status: PageStatus\n  storefrontIds: [ID]\n  subtitle: String\n  tags: [String]\n  title: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"author-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"author")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The author of the page, limit 256 characters."),(0,i.kt)("h4",{id:"contentitemids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItemIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"The ContentItemIds of the Content Items that are associated with this page."),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A short description of the page, limit 1000 characters."),(0,i.kt)("h4",{id:"pageid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"pagetype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Any string to declare a category of this page, can be used to filter pages, limit 128 characters."),(0,i.kt)("h4",{id:"primaryimageurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"primaryImageUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A primary image url for this page, can be generated from a Page ContentItem."),(0,i.kt)("h4",{id:"publishedat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"publishedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("p",null,"ISO format date when the page was published. Note that ensuing updates with\nstatus set to PUBLISHED will republish and re-set this date."),(0,i.kt)("h4",{id:"seodescription-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoDescription")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Description specific for SEO purposes, limit 170 characters."),(0,i.kt)("h4",{id:"seotitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoTitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Title specific for SEO purposes, limit 256 characters."),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Slug for the URL for this page. Limit 128 characters."),(0,i.kt)("h4",{id:"status-pagestatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/page-status"},(0,i.kt)("inlineCode",{parentName:"a"},"PageStatus")),")"),(0,i.kt)("p",null,"The status of the page, can be DRAFT or PUBLISHED."),(0,i.kt)("h4",{id:"storefrontids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefrontIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"Which storefronts should have access to this page?"),(0,i.kt)("h4",{id:"subtitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"subtitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The subtitle of the page, limit 256 characters."),(0,i.kt)("h4",{id:"tags-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the page, limit 256 characters."))}h.isMDXComponent=!0}}]);