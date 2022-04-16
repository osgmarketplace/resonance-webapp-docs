"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6243],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),u=o,m=f["".concat(d,".").concat(u)]||f[u]||l[u]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44449:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"storefront-identity",title:"StorefrontIdentity"},d=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-identity",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-identity",title:"StorefrontIdentity",description:"An identity that is associated with a storefront and is assigned scopes",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-identity.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-identity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-identity.mdx",tags:[],version:"current",frontMatter:{id:"storefront-identity",title:"StorefrontIdentity"},sidebar:"apisSidebar",previous:{title:"StorefrontEdge",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-edge"},next:{title:"StorefrontPermissions",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-permissions"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>permissions</code> (<code>StorefrontPermissions</code>)",id:"permissions-storefrontpermissions",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4}],f={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An identity that is associated with a storefront and is assigned scopes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type StorefrontIdentity {\n  permissions: StorefrontPermissions!\n  slug: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"permissions-storefrontpermissions"},(0,i.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-permissions"},(0,i.kt)("inlineCode",{parentName:"a"},"StorefrontPermissions")),")"),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Human-readable way to categorize the use of this identity, must be unique to\nthis storefront, all lowercase, and contain no spaces, limit 32 characters."))}u.isMDXComponent=!0}}]);