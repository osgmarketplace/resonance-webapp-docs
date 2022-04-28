"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[64367],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=c(t),m=a,f=l["".concat(i,".").concat(m)]||l[m]||s[m]||o;return t?n.createElement(f,p(p({ref:r},u),{},{components:t})):n.createElement(f,p({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=l;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,p[1]=d;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},74847:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return s}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),p=["components"],d={id:"product",title:"product"},i=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/queries/product",id:"developers/demandhq-apis/demand-api/graphql/reference/queries/product",title:"product",description:"Get a single product by ID.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/product.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/queries",slug:"/developers/demandhq-apis/demand-api/graphql/reference/queries/product",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/product",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/product.mdx",tags:[],version:"current",frontMatter:{id:"product",title:"product"},sidebar:"apisSidebar",previous:{title:"page",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/page"},next:{title:"storefront",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront"}},u={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>productId</code> (<code>ID</code>)",id:"productid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>Product</code>",id:"product",level:4}],l={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Get a single product by ID."),(0,o.kt)("p",null,"Requires the product/read scope on the associated DemandHq."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"product(\n  productId: ID!\n): Product\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"productid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"productId")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"product"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product"},(0,o.kt)("inlineCode",{parentName:"a"},"Product"))),(0,o.kt)("p",null,"A Product is a part of the Demand Domain and represents a the basic information of a product.\nProducts have many support entities, including variants, which represent SKUs of the product."))}m.isMDXComponent=!0}}]);