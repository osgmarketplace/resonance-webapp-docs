"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6569],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,h=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return n?i.createElement(h,l(l({ref:t},o),{},{components:n})):i.createElement(h,l({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3137:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return o},default:function(){return u}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),l=["components"],p={id:"public-identities",title:"publicIdentities"},s=void 0,d={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identities",id:"developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identities",title:"publicIdentities",description:"Get several public identities by their IDs.",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identities.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/queries",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identities",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identities",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identities.mdx",tags:[],version:"current",frontMatter:{id:"public-identities",title:"publicIdentities"},sidebar:"apisSidebar",previous:{title:"publicApps",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-apps"},next:{title:"publicIdentity",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identity"}},o=[{value:"Arguments",id:"arguments",children:[{value:"<code>after</code> (String)",id:"after-string",children:[],level:4},{value:"<code>before</code> (String)",id:"before-string",children:[],level:4},{value:"<code>first</code> (Int)",id:"first-int",children:[],level:4},{value:"<code>identityIds</code> (ID)",id:"identityids-id",children:[],level:4},{value:"<code>last</code> (Int)",id:"last-int",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"PublicIdentityConnection",id:"publicidentityconnection",children:[],level:4}],level:3}],c={toc:o};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get several public identities by their IDs.\nWill return in exact order of the IDs passed in, with null for missing identities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"publicIdentities(\n  after: String\n  before: String\n  first: Int\n  identityIds: [ID!]!\n  last: Int\n): PublicIdentityConnection!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Returns the elements in the list that come after the specified cursor. Currently not supported."),(0,a.kt)("h4",{id:"before-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"before")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Returns the elements in the list that come before the specified cursor. Currently not supported."),(0,a.kt)("h4",{id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"Returns the first n elements from the list. Currently not supported."),(0,a.kt)("h4",{id:"identityids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"None of the relay arguments are required when this is populated."),(0,a.kt)("h4",{id:"last-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"last")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"Returns the last n elements from the list. Currently not supported."),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"publicidentityconnection"},(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicIdentityConnection"))),(0,a.kt)("p",null,"Paginate through PublicIdentities"))}u.isMDXComponent=!0}}]);