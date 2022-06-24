"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[96199],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=d(r),u=a,m=f["".concat(p,".").concat(u)]||f[u]||l[u]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37175:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"storefront-nav-settings",title:"storefrontNavSettings",hide_table_of_contents:!1},p=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/queries/storefront-nav-settings",id:"developers/demandhq-apis/demand-api/graphql/reference/queries/storefront-nav-settings",title:"storefrontNavSettings",description:"Retrieve the settings for a storefront's Navs",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront-nav-settings.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/queries",slug:"/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront-nav-settings",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront-nav-settings",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront-nav-settings.mdx",tags:[],version:"current",frontMatter:{id:"storefront-nav-settings",title:"storefrontNavSettings",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"product",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/product"},next:{title:"storefront",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/storefront"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>storefrontId</code> (<code>ID!</code>)",id:"storefrontid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>StorefrontNavSettings</code>",id:"storefrontnavsettings",level:4}],f={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Retrieve the settings for a storefront's Navs"),(0,o.kt)("p",null,"Requires the storefrontnavsettings/read permission on the associated DemandHq."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"storefrontNavSettings(\n  storefrontId: ID!\n): StorefrontNavSettings\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"storefrontid-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"storefrontId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"storefrontnavsettings"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-nav-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"StorefrontNavSettings"))),(0,o.kt)("p",null,"The settings for a storefront's Navs"))}u.isMDXComponent=!0}}]);