"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9137],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return h}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=p(r),h=a,u=f["".concat(s,".").concat(h)]||f[h]||c[h]||i;return r?t.createElement(u,o(o({ref:n},d),{},{components:r})):t.createElement(u,o({ref:n},d))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82405:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"navs",title:"navs",hide_table_of_contents:!1},s=void 0,p={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/queries/navs",id:"developers/demandhq-apis/storefront-api/graphql/reference/queries/navs",title:"navs",description:"List Navs.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/navs.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/queries",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/navs",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/navs",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/navs.mdx",tags:[],version:"current",frontMatter:{id:"navs",title:"navs",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"health",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/health"},next:{title:"pageTermAggregations",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/page-term-aggregations"}},d={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4},{value:"<code>before</code> (<code>String</code>)",id:"before-string",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>href</code> (<code>String</code>)",id:"href-string",level:4},{value:"<code>hrefPrefix</code> (<code>String</code>)",id:"hrefprefix-string",level:4},{value:"<code>last</code> (<code>Int</code>)",id:"last-int",level:4},{value:"<code>linkSlug</code> (<code>String</code>)",id:"linkslug-string",level:4},{value:"<code>linkType</code> (<code>String</code>)",id:"linktype-string",level:4},{value:"<code>navIds</code> (<code>[ID]</code>)",id:"navids-id",level:4},{value:"<code>navLevel</code> (<code>Int</code>)",id:"navlevel-int",level:4},{value:"<code>navType</code> (<code>String</code>)",id:"navtype-string",level:4},{value:"Type",id:"type",level:3},{value:"<code>PublicNavConnection</code>",id:"publicnavconnection",level:4}],f={toc:c};function h(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List Navs."),(0,i.kt)("p",null,"Requires the publicnav/read permission."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"navs(\n  after: String\n  before: String\n  first: Int\n  href: String\n  hrefPrefix: String\n  last: Int\n  linkSlug: String\n  linkType: String\n  navIds: [ID]\n  navLevel: Int\n  navType: String\n): PublicNavConnection!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"after-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"after"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("h4",{id:"before-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"before"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("h4",{id:"first-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"first"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("h4",{id:"href-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"href"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"hrefprefix-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"hrefPrefix"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"last-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"last"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"linkslug-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"linkSlug"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"linktype-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"linkType"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"navids-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"navIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("h4",{id:"navlevel-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"navLevel"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"navtype-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"navType"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"publicnavconnection"},(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicNavConnection"))),(0,i.kt)("p",null,"Paginate through PublicNavs"))}h.isMDXComponent=!0}}]);