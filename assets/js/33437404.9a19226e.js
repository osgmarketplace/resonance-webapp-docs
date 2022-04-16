"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5615],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(o.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=p,m=d["".concat(o,".").concat(f)]||d[f]||s[f]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function f(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:p,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69126:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=t(87462),p=t(63366),i=(t(67294),t(3905)),a=["components"],c={id:"public-app",title:"publicApp"},o=void 0,l={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/queries/public-app",id:"developers/shared-apis/adminidentity-api/graphql/reference/queries/public-app",title:"publicApp",description:"Get a public app by id",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-app.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/queries",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-app",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-app",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-app.mdx",tags:[],version:"current",frontMatter:{id:"public-app",title:"publicApp"},sidebar:"apisSidebar",previous:{title:"partners",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/partners"},next:{title:"publicApps",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-apps"}},u={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>appId</code> (<code>ID</code>)",id:"appid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>PublicApp</code>",id:"publicapp",level:4}],d={toc:s};function f(e){var r=e.components,t=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get a public app by id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"publicApp(\n  appId: ID!\n): PublicApp\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"appid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"publicapp"},(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicApp"))),(0,i.kt)("p",null,"Represents an App, but the fields that can be publicly consumed without scopes"))}f.isMDXComponent=!0}}]);