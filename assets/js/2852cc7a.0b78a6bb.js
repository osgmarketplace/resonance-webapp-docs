"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[43698],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=d(t),f=o,h=l["".concat(p,".").concat(f)]||l[f]||u[f]||c;return t?n.createElement(h,a(a({ref:r},s),{},{components:t})):n.createElement(h,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=l;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<c;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},19669:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=t(87462),o=t(63366),c=(t(67294),t(3905)),a=["components"],i={id:"public-product-connection-with-search",title:"PublicProductConnectionWithSearch"},p=void 0,d={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-connection-with-search",id:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-connection-with-search",title:"PublicProductConnectionWithSearch",description:"Paginate through PublicProducts",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-connection-with-search.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/objects",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-connection-with-search",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-connection-with-search",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-connection-with-search.mdx",tags:[],version:"current",frontMatter:{id:"public-product-connection-with-search",title:"PublicProductConnectionWithSearch"},sidebar:"apisSidebar",previous:{title:"PublicPage",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page"},next:{title:"PublicProductEdge",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-edge"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>PublicProductEdge</code>)",id:"edges-publicproductedge",level:4},{value:"<code>nodes</code> (<code>PublicProduct</code>)",id:"nodes-publicproduct",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4},{value:"<code>querySuggestions</code> (<code>JSON</code>)",id:"querysuggestions-json",level:4}],l={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Paginate through PublicProducts"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicProductConnectionWithSearch {\n  edges: [PublicProductEdge]!\n  nodes: [PublicProduct]!\n  pageInfo: PageInfo!\n  querySuggestions: JSON\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"edges-publicproductedge"},(0,c.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,c.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"PublicProductEdge")),")"),(0,c.kt)("h4",{id:"nodes-publicproduct"},(0,c.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,c.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product"},(0,c.kt)("inlineCode",{parentName:"a"},"PublicProduct")),")"),(0,c.kt)("h4",{id:"pageinfo-pageinfo"},(0,c.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,c.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,c.kt)("h4",{id:"querysuggestions-json"},(0,c.kt)("inlineCode",{parentName:"h4"},"querySuggestions")," (",(0,c.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/json"},(0,c.kt)("inlineCode",{parentName:"a"},"JSON")),")"),(0,c.kt)("p",null,"This is an object with terms in the query as keys, and a suggestion for that\nterm as the value. This is often referred to as 'Did you mean?'"))}f.isMDXComponent=!0}}]);