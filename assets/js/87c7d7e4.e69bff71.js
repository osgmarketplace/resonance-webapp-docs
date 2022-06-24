"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[50174],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(n),f=i,m=l["".concat(p,".").concat(f)]||l[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},49330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"storefront-identity-input",title:"StorefrontIdentityInput",hide_table_of_contents:!1},p=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input",title:"StorefrontIdentityInput",description:"Necessary fields to create a Storefront Identity.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input.mdx",tags:[],version:"current",frontMatter:{id:"storefront-identity-input",title:"StorefrontIdentityInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"StorefrontCreateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-create-input"},next:{title:"StorefrontNavSettingsUpsertInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-nav-settings-upsert-input"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>permissions</code> (<code>StorefrontPermissionsInput!</code>)",id:"permissions-storefrontpermissionsinput",level:4},{value:"<code>slug</code> (<code>String!</code>)",id:"slug-string",level:4}],l={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Necessary fields to create a Storefront Identity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input StorefrontIdentityInput {\n  permissions: StorefrontPermissionsInput!\n  slug: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"permissions-storefrontpermissionsinput"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-permissions-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StorefrontPermissionsInput!")),")"),(0,o.kt)("h4",{id:"slug-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"slug"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("p",null,"Human-readable way to categorize the use of this identity, must be unique to\nthis storefront, all lowercase, and contain no spaces, limit 32 characters."))}f.isMDXComponent=!0}}]);