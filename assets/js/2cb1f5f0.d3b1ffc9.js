"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[10252],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var p=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,p)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,p,t=function(e,r){if(null==e)return{};var n,p,t={},i=Object.keys(e);for(p=0;p<i.length;p++)n=i[p],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)n=i[p],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var a=p.createContext({}),c=function(e){var r=p.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return p.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=t,b=d["".concat(a,".").concat(f)]||d[f]||s[f]||i;return n?p.createElement(b,o(o({ref:r},u),{},{components:n})):p.createElement(b,o({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return p.createElement.apply(null,o)}return p.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93342:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var p=n(87462),t=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"public-supplier-connection",title:"PublicSupplierConnection",hide_table_of_contents:!1},a=void 0,c={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier-connection",id:"developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier-connection",title:"PublicSupplierConnection",description:"Paginate through PublicSupplier",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier-connection.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier-connection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier-connection",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier-connection.mdx",tags:[],version:"current",frontMatter:{id:"public-supplier-connection",title:"PublicSupplierConnection",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"PublicIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-identity"},next:{title:"PublicSupplierEdge",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier-edge"}},u={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>[PublicSupplierEdge]!</code>)",id:"edges-publicsupplieredge",level:4},{value:"<code>nodes</code> (<code>[PublicSupplier]!</code>)",id:"nodes-publicsupplier",level:4},{value:"<code>pageInfo</code> (<code>PageInfo!</code>)",id:"pageinfo-pageinfo",level:4}],d={toc:s};function f(e){var r=e.components,n=(0,t.Z)(e,o);return(0,i.kt)("wrapper",(0,p.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Paginate through PublicSupplier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicSupplierConnection {\n  edges: [PublicSupplierEdge]!\n  nodes: [PublicSupplier]!\n  pageInfo: PageInfo!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"edges-publicsupplieredge"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"edges"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[PublicSupplierEdge]!")),")"),(0,i.kt)("h4",{id:"nodes-publicsupplier"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-supplier"},(0,i.kt)("inlineCode",{parentName:"a"},"[PublicSupplier]!")),")"),(0,i.kt)("h4",{id:"pageinfo-pageinfo"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"pageInfo"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"))}f.isMDXComponent=!0}}]);