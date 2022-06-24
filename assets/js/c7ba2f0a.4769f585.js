"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6304],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52037:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={id:"collections",title:"collections",hide_table_of_contents:!1},c=void 0,s={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/queries/collections",id:"developers/demandhq-apis/storefront-api/graphql/reference/queries/collections",title:"collections",description:"List collections for a Storefront with optional filters.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/collections.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/queries",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/collections",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/collections",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/collections.mdx",tags:[],version:"current",frontMatter:{id:"collections",title:"collections",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"collection",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/collection"},next:{title:"customerCart",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer-cart"}},p={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4},{value:"<code>before</code> (<code>String</code>)",id:"before-string",level:4},{value:"<code>collectionType</code> (<code>StringFilterInput</code>)",id:"collectiontype-stringfilterinput",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>last</code> (<code>Int</code>)",id:"last-int",level:4},{value:"<code>query</code> (<code>String</code>)",id:"query-string",level:4},{value:"<code>slugs</code> (<code>[String]</code>)",id:"slugs-string",level:4},{value:"<code>sortOrder</code> (<code>[CollectionSortInput]</code>)",id:"sortorder-collectionsortinput",level:4},{value:"<code>tags</code> (<code>[StringFilterInput]</code>)",id:"tags-stringfilterinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>PublicCollectionConnectionWithSearch</code>",id:"publiccollectionconnectionwithsearch",level:4}],u={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List collections for a Storefront with optional filters."),(0,i.kt)("p",null,"Requires the publiccollection/read scope."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"collections(\n  after: String\n  before: String\n  collectionType: StringFilterInput\n  first: Int\n  last: Int\n  query: String\n  slugs: [String]\n  sortOrder: [CollectionSortInput]\n  tags: [StringFilterInput]\n): PublicCollectionConnectionWithSearch!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"after-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"after"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("h4",{id:"before-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"before"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("h4",{id:"collectiontype-stringfilterinput"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"collectionType"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"),(0,i.kt)("p",null,"Filter Collections using collectionType"),(0,i.kt)("h4",{id:"first-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"first"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("h4",{id:"last-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"last"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"query-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"query"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Query collections for certain terms. Searches several fields, including\ncollection.description, collection.subtitle, collection.title, and\ncollectionTags."),(0,i.kt)("h4",{id:"slugs-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"slugs"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,i.kt)("p",null,"Filter Collections using slugs"),(0,i.kt)("h4",{id:"sortorder-collectionsortinput"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sortOrder"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/collection-sort-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[CollectionSortInput]")),")"),(0,i.kt)("p",null,"Sort Collections by a series of fields and directions."),(0,i.kt)("h4",{id:"tags-stringfilterinput"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"tags"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[StringFilterInput]")),")"),(0,i.kt)("p",null,"Filter Collections using Tags."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"publiccollectionconnectionwithsearch"},(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-connection-with-search"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicCollectionConnectionWithSearch"))),(0,i.kt)("p",null,"Paginate through PublicCollections"))}f.isMDXComponent=!0}}]);