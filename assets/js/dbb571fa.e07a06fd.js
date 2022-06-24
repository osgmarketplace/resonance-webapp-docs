"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[30788],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,f=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13887:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={id:"pages",title:"pages",hide_table_of_contents:!1},s=void 0,l={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/queries/pages",id:"developers/demandhq-apis/storefront-api/graphql/reference/queries/pages",title:"pages",description:"List pages for a Storefront with optional filters.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/pages.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/queries",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/pages",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/pages",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/pages.mdx",tags:[],version:"current",frontMatter:{id:"pages",title:"pages",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"page",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/page"},next:{title:"productTermAggregations",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/product-term-aggregations"}},d={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4},{value:"<code>author</code> (<code>StringFilterInput</code>)",id:"author-stringfilterinput",level:4},{value:"<code>before</code> (<code>String</code>)",id:"before-string",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>last</code> (<code>Int</code>)",id:"last-int",level:4},{value:"<code>pageType</code> (<code>StringFilterInput</code>)",id:"pagetype-stringfilterinput",level:4},{value:"<code>query</code> (<code>String</code>)",id:"query-string",level:4},{value:"<code>slugs</code> (<code>[String]</code>)",id:"slugs-string",level:4},{value:"<code>sortOrder</code> (<code>[PageSortInput]</code>)",id:"sortorder-pagesortinput",level:4},{value:"<code>tags</code> (<code>[StringFilterInput]</code>)",id:"tags-stringfilterinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>PublicPageConnectionWithSearch</code>",id:"publicpageconnectionwithsearch",level:4}],u={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List pages for a Storefront with optional filters."),(0,i.kt)("p",null,"Requires the publicpage/read scope."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"pages(\n  after: String\n  author: StringFilterInput\n  before: String\n  first: Int\n  last: Int\n  pageType: StringFilterInput\n  query: String\n  slugs: [String]\n  sortOrder: [PageSortInput]\n  tags: [StringFilterInput]\n): PublicPageConnectionWithSearch!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"after-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"after"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("h4",{id:"author-stringfilterinput"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"author"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"),(0,i.kt)("p",null,"Filter Pages using author"),(0,i.kt)("h4",{id:"before-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"before"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("h4",{id:"first-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"first"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("h4",{id:"last-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"last"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"pagetype-stringfilterinput"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"pageType"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"),(0,i.kt)("p",null,"Filter Pages using pageType"),(0,i.kt)("h4",{id:"query-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"query"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Query pages for certain terms. Searches several fields, including\npage.author, page.description, page.subtitle, page.title, pageTags, and the\nactual content of the page."),(0,i.kt)("h4",{id:"slugs-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"slugs"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,i.kt)("p",null,"Filter Pages using slugs"),(0,i.kt)("h4",{id:"sortorder-pagesortinput"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sortOrder"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/page-sort-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[PageSortInput]")),")"),(0,i.kt)("p",null,"Sort Pages by a series of fields and directions."),(0,i.kt)("h4",{id:"tags-stringfilterinput"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"tags"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[StringFilterInput]")),")"),(0,i.kt)("p",null,"Filter Pages using Tags."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"publicpageconnectionwithsearch"},(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-connection-with-search"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicPageConnectionWithSearch"))),(0,i.kt)("p",null,"Paginate through PublicPages"))}g.isMDXComponent=!0}}]);