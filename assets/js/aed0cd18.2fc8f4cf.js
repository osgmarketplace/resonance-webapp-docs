"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9171],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=p,m=d["".concat(o,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function y(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(3117),p=n(102),i=(n(7294),n(3905)),a=["components"],l={id:"supply-event-metadata",title:"SupplyEventMetadata"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata",title:"SupplyEventMetadata",description:"Items consistent to every event",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata.mdx",tags:[],version:"current",frontMatter:{id:"supply-event-metadata",title:"SupplyEventMetadata"},sidebar:"apisSidebar",previous:{title:"SupplyEventMessage",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-message"},next:{title:"SupplyEventSubscriptionConnection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-subscription-connection"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>domain</code> (String)",id:"domain-string",children:[],level:4},{value:"<code>domainEntityId</code> (String)",id:"domainentityid-string",children:[],level:4},{value:"<code>entityId</code> (String)",id:"entityid-string",children:[],level:4},{value:"<code>itemType</code> (String)",id:"itemtype-string",children:[],level:4},{value:"<code>mutationType</code> (String)",id:"mutationtype-string",children:[],level:4}],level:3}],u={toc:c};function d(e){var t=e.components,n=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Items consistent to every event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplyEventMetadata {\n  domain: String!\n  domainEntityId: String!\n  entityId: String\n  itemType: String\n  mutationType: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"domain-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"domain")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"domainentityid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"domainEntityId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"This is most typically domainHqId or supplierId"),(0,i.kt)("h4",{id:"entityid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"entityId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"itemtype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"itemType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"mutationtype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"mutationType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);