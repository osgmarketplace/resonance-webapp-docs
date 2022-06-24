"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[23786],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72852:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={id:"customer-cart",title:"customerCart",hide_table_of_contents:!1},s=void 0,p={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/queries/customer-cart",id:"developers/demandhq-apis/storefront-api/graphql/reference/queries/customer-cart",title:"customerCart",description:"The cart for the currently logged in customer. Will create a blank cart if one does not exist, never returns null.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer-cart.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/queries",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer-cart",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer-cart",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer-cart.mdx",tags:[],version:"current",frontMatter:{id:"customer-cart",title:"customerCart",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"collections",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/collections"},next:{title:"customer",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>customerToken</code> (<code>String!</code>)",id:"customertoken-string",level:4},{value:"Type",id:"type",level:3},{value:"<code>Cart</code>",id:"cart",level:4}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The cart for the currently logged in customer. Will create a blank cart if one does not exist, never returns null."),(0,a.kt)("p",null,"Requires the publiccart/read scope and a valid customer authentication token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"customerCart(\n  customerToken: String!\n): Cart!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"customertoken-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"customerToken"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"cart"},(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/cart"},(0,a.kt)("inlineCode",{parentName:"a"},"Cart"))),(0,a.kt)("p",null,"A cart is a temporary container for products that a customer or anonymous user wants to buy"))}f.isMDXComponent=!0}}]);