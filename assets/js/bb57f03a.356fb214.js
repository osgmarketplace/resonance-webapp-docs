"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[72467],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88447:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"cart-remove-items-input",title:"CartRemoveItemsInput",hide_table_of_contents:!1},s=void 0,c={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/inputs/cart-remove-items-input",id:"developers/demandhq-apis/storefront-api/graphql/reference/inputs/cart-remove-items-input",title:"CartRemoveItemsInput",description:"Input for removing items from a cart or savedForLater",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/inputs/cart-remove-items-input.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/cart-remove-items-input",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/cart-remove-items-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/inputs/cart-remove-items-input.mdx",tags:[],version:"current",frontMatter:{id:"cart-remove-items-input",title:"CartRemoveItemsInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"CartItemInput",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/cart-item-input"},next:{title:"CollectionSortInput",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/collection-sort-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>cartItems</code> (<code>[ID!]</code>)",id:"cartitems-id",level:4},{value:"<code>savedForLaterItems</code> (<code>[ID!]</code>)",id:"savedforlateritems-id",level:4}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input for removing items from a cart or savedForLater"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CartRemoveItemsInput {\n  cartItems: [ID!]\n  savedForLaterItems: [ID!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"cartitems-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"cartItems"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"),(0,o.kt)("h4",{id:"savedforlateritems-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"savedForLaterItems"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"))}m.isMDXComponent=!0}}]);