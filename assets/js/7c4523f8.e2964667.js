"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9870],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,b=u["".concat(d,".").concat(f)]||u[f]||s[f]||a;return t?i.createElement(b,o(o({ref:n},l),{},{components:t})):i.createElement(b,o({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2182:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return l},toc:function(){return s},default:function(){return f}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],c={id:"public-identity-connection",title:"PublicIdentityConnection"},d=void 0,p={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-connection",id:"developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-connection",title:"PublicIdentityConnection",description:"Paginate through PublicIdentities",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-connection.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/objects",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-connection",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-connection",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-connection.mdx",tags:[],version:"current",frontMatter:{id:"public-identity-connection",title:"PublicIdentityConnection"},sidebar:"apisSidebar",previous:{title:"PublicApp",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app"},next:{title:"PublicIdentityEdge",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-edge"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>PublicIdentityEdge</code>)",id:"edges-publicidentityedge",level:4},{value:"<code>nodes</code> (<code>PublicIdentity</code>)",id:"nodes-publicidentity",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],u={toc:s};function f(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Paginate through PublicIdentities"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicIdentityConnection {\n  edges: [PublicIdentityEdge]\n  nodes: [PublicIdentity]\n  pageInfo: PageInfo!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"edges-publicidentityedge"},(0,a.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicIdentityEdge")),")"),(0,a.kt)("h4",{id:"nodes-publicidentity"},(0,a.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicIdentity")),")"),(0,a.kt)("h4",{id:"pageinfo-pageinfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"))}f.isMDXComponent=!0}}]);