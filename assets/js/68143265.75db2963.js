"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[91383],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66291:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"public-page-connection-with-search",title:"PublicPageConnectionWithSearch",hide_table_of_contents:!1},p=void 0,s={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-connection-with-search",id:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-connection-with-search",title:"PublicPageConnectionWithSearch",description:"Paginate through PublicPages",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-connection-with-search.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/objects",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-connection-with-search",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-connection-with-search",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-connection-with-search.mdx",tags:[],version:"current",frontMatter:{id:"public-page-connection-with-search",title:"PublicPageConnectionWithSearch",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"PublicNav",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav"},next:{title:"PublicPageEdge",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-edge"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>[PublicPageEdge]!</code>)",id:"edges-publicpageedge",level:4},{value:"<code>nodes</code> (<code>[PublicPage]!</code>)",id:"nodes-publicpage",level:4},{value:"<code>pageInfo</code> (<code>PageInfo!</code>)",id:"pageinfo-pageinfo",level:4},{value:"<code>querySuggestions</code> (<code>JSON</code>)",id:"querysuggestions-json",level:4}],u={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paginate through PublicPages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicPageConnectionWithSearch {\n  edges: [PublicPageEdge]!\n  nodes: [PublicPage]!\n  pageInfo: PageInfo!\n  querySuggestions: JSON\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-publicpageedge"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"edges"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[PublicPageEdge]!")),")"),(0,o.kt)("h4",{id:"nodes-publicpage"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page"},(0,o.kt)("inlineCode",{parentName:"a"},"[PublicPage]!")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"pageInfo"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"),(0,o.kt)("h4",{id:"querysuggestions-json"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"querySuggestions"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"JSON")),")"),(0,o.kt)("p",null,"This is an object with terms in the query as keys, and a suggestion for that\nterm as the value. This is often referred to as 'Did you mean?'"))}f.isMDXComponent=!0}}]);