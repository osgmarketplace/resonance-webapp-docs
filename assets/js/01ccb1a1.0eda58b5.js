"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[84948],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||p;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<p;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21989:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=t(87462),a=t(63366),p=(t(67294),t(3905)),i=["components"],o={id:"update-app-permissions",title:"updateAppPermissions"},s=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-app-permissions",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-app-permissions",title:"updateAppPermissions",description:"Update an app's permissions on a DemandHq. This is a no-op if the app's",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-app-permissions.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-app-permissions",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-app-permissions",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-app-permissions.mdx",tags:[],version:"current",frontMatter:{id:"update-app-permissions",title:"updateAppPermissions"},sidebar:"apisSidebar",previous:{title:"installApp",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/install-app"},next:{title:"updateCollection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-collection"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>appId</code> (<code>ID</code>)",id:"appid-id",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>AppInstallationResponse</code>",id:"appinstallationresponse",level:4}],m={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Update an app's permissions on a DemandHq. This is a no-op if the app's\nrequested permissions are the same as the current permissions."),(0,p.kt)("p",null,"Requires the demandHqidentity/write permission on the given DemandHq"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"updateAppPermissions(\n  appId: ID!\n  demandHqId: ID!\n): AppInstallationResponse!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"appid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"demandhqid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"appinstallationresponse"},(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/app-installation-response"},(0,p.kt)("inlineCode",{parentName:"a"},"AppInstallationResponse"))),(0,p.kt)("p",null,"The response recieved when an app is installed or the permissions are updated"))}u.isMDXComponent=!0}}]);