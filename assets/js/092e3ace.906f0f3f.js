"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[66896],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=d(t),u=o,m=f["".concat(p,".").concat(u)]||f[u]||l[u]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93550:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"storefront",title:"storefront"},p=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/queries/storefront",id:"developers/demandhq-apis/demand-api/graphql/reference/queries/storefront",title:"storefront",description:"Get a storefront by its storefrontId.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/queries",slug:"/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront.mdx",tags:[],version:"current",frontMatter:{id:"storefront",title:"storefront"},sidebar:"apisSidebar",previous:{title:"storefrontNavSettings",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront-nav-settings"},next:{title:"variant",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/variant"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>storefrontId</code> (<code>ID</code>)",id:"storefrontid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>Storefront</code>",id:"storefront",level:4}],f={toc:l};function u(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get a storefront by its storefrontId."),(0,a.kt)("p",null,"Requires the storefront/read permission on the associated DemandHq."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"storefront(\n  storefrontId: ID!\n): Storefront\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"storefrontid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"storefrontId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"storefront"},(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront"},(0,a.kt)("inlineCode",{parentName:"a"},"Storefront"))),(0,a.kt)("p",null,"A Storefront represents a customer facing ecommerce website that consumes Resonance Demand Entities"))}u.isMDXComponent=!0}}]);