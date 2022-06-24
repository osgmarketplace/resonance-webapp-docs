"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[23742],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)t=d[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,d=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||d;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var d=t.length,i=new Array(d);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<d;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68288:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=t(87462),a=t(63366),d=(t(67294),t(3905)),i=["components"],o={id:"demand-hq-identity",title:"demandHqIdentity",hide_table_of_contents:!1},p=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identity",id:"developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identity",title:"demandHqIdentity",description:"Get a single DemandHqIdentity",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identity.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/queries",slug:"/developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identity",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identity.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-identity",title:"demandHqIdentity",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"demandHqIdentities",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identities"},next:{title:"demandHq",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>demandHqId</code> (<code>ID!</code>)",id:"demandhqid-id",level:4},{value:"<code>identityId</code> (<code>ID!</code>)",id:"identityid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>DemandHqIdentity</code>",id:"demandhqidentity",level:4}],m={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,d.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Get a single DemandHqIdentity"),(0,d.kt)("p",null,"Requires demandHqidentity/read permission on the requesting identity for the demandHq requested"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"demandHqIdentity(\n  demandHqId: ID!\n  identityId: ID!\n): DemandHqIdentity\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"demandhqid-id"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"demandHqId"))," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,d.kt)("h4",{id:"identityid-id"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"identityId"))," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"demandhqidentity"},(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHqIdentity"))),(0,d.kt)("p",null,"Indicates a User or App has permissions on a DemandHq"))}u.isMDXComponent=!0}}]);