"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[52374],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,u=g["".concat(o,".").concat(m)]||g[m]||c[m]||i;return n?r.createElement(u,d(d({ref:t},l),{},{components:n})):r.createElement(u,d({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,d[1]=p;for(var s=2;s<i;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),d=["components"],p={id:"page-create-input",title:"PageCreateInput"},o=void 0,s={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/page-create-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/page-create-input",title:"PageCreateInput",description:"Exactly like Page, but no publishedAt or Status (Status is set to DRAFT on create).",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-create-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-create-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-create-input.mdx",tags:[],version:"current",frontMatter:{id:"page-create-input",title:"PageCreateInput"},sidebar:"apisSidebar",previous:{title:"PageContentUpsertInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-content-upsert-input"},next:{title:"PageImageFromFileInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-file-input"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>author</code> (<code>String</code>)",id:"author-string",level:4},{value:"<code>contentItemIds</code> (<code>ID</code>)",id:"contentitemids-id",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>pageType</code> (<code>String</code>)",id:"pagetype-string",level:4},{value:"<code>primaryImageUrl</code> (<code>String</code>)",id:"primaryimageurl-string",level:4},{value:"<code>seoDescription</code> (<code>String</code>)",id:"seodescription-string",level:4},{value:"<code>seoTitle</code> (<code>String</code>)",id:"seotitle-string",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4},{value:"<code>storefrontIds</code> (<code>ID</code>)",id:"storefrontids-id",level:4},{value:"<code>subtitle</code> (<code>String</code>)",id:"subtitle-string",level:4},{value:"<code>tags</code> (<code>String</code>)",id:"tags-string",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4}],g={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Exactly like Page, but no publishedAt or Status (Status is set to DRAFT on create)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PageCreateInput {\n  author: String\n  contentItemIds: [ID!]\n  demandHqId: ID!\n  description: String\n  pageType: String!\n  primaryImageUrl: String\n  seoDescription: String\n  seoTitle: String\n  slug: String!\n  storefrontIds: [ID]\n  subtitle: String\n  tags: [String]\n  title: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"author-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"author")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The author of the page, limit 256 characters."),(0,i.kt)("h4",{id:"contentitemids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItemIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"The ContentItemIds of the Content Items that are associated with this page."),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A short description of the page, limit 1000 characters."),(0,i.kt)("h4",{id:"pagetype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Any string to declare a category of this page, can be used to filter pages, limit 128 characters."),(0,i.kt)("h4",{id:"primaryimageurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"primaryImageUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A primary image url for this page, can be generated from a Page ContentItem."),(0,i.kt)("h4",{id:"seodescription-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoDescription")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Description specific for SEO purposes, limit 170 characters."),(0,i.kt)("h4",{id:"seotitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoTitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Title specific for SEO purposes, limit 256 characters."),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Slug for the URL for this page. Limit 128 characters."),(0,i.kt)("h4",{id:"storefrontids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefrontIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"Which storefronts should have access to this page?"),(0,i.kt)("h4",{id:"subtitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"subtitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The subtitle of the page, limit 256 characters."),(0,i.kt)("h4",{id:"tags-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the page, limit 256 characters."))}m.isMDXComponent=!0}}]);