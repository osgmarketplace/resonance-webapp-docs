"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[578],{3905:function(e,t,p){p.d(t,{Zo:function(){return u},kt:function(){return f}});var r=p(67294);function n(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function a(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,r)}return p}function i(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?a(Object(p),!0).forEach((function(t){n(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):a(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function l(e,t){if(null==e)return{};var p,r,n=function(e,t){if(null==e)return{};var p,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)p=a[r],t.indexOf(p)>=0||(n[p]=e[p]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)p=a[r],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(n[p]=e[p])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),p=t;return e&&(p="function"==typeof e?e(t):i(i({},t),e)),p},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var p=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(p),f=n,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return p?r.createElement(m,i(i({ref:t},u),{},{components:p})):r.createElement(m,i({ref:t},u))}));function f(e,t){var p=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=p.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<a;o++)i[o]=p[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,p)}d.displayName="MDXCreateElement"},38918:function(e,t,p){p.r(t),p.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=p(87462),n=p(63366),a=(p(67294),p(3905)),i=["components"],l={id:"install-app",title:"installApp",hide_table_of_contents:!1},s=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/install-app",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/install-app",title:"installApp",description:"Install an app to a Supplier (give an app permissions)",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/install-app.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/install-app",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/install-app",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/install-app.mdx",tags:[],version:"current",frontMatter:{id:"install-app",title:"installApp",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"deleteSupplyEventSubscription",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supply-event-subscription"},next:{title:"_makeEmpty",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/make-empty"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>appId</code> (<code>ID!</code>)",id:"appid-id",level:4},{value:"<code>supplierId</code> (<code>ID!</code>)",id:"supplierid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>AppInstallationResponse</code>",id:"appinstallationresponse",level:4}],d={toc:c};function f(e){var t=e.components,p=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Install an app to a Supplier (give an app permissions)"),(0,a.kt)("p",null,"Requires the supplieridentity/write permission on the given Supplier"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"installApp(\n  appId: ID!\n  supplierId: ID!\n): AppInstallationResponse!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"appid-id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"appId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"supplierid-id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"supplierId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"appinstallationresponse"},(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/app-installation-response"},(0,a.kt)("inlineCode",{parentName:"a"},"AppInstallationResponse"))),(0,a.kt)("p",null,"The response recieved when an app is installed or the permissions are updated"))}f.isMDXComponent=!0}}]);