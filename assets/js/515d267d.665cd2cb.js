"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[103],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=n.createContext({}),o=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=o(e.components);return n.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=o(t),d=p,h=f["".concat(a,".").concat(d)]||f[d]||c[d]||i;return t?n.createElement(h,l(l({ref:r},u),{},{components:t})):n.createElement(h,l({ref:r},u))}));function d(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var i=t.length,l=new Array(i);l[0]=f;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:p,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5185:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return o},toc:function(){return u},default:function(){return f}});var n=t(3117),p=t(102),i=(t(7294),t(3905)),l=["components"],s={id:"suppliers",title:"suppliers"},a=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/queries/suppliers",id:"developers/supplier-apis/supply-api/graphql/reference/queries/suppliers",title:"suppliers",description:"Get a list of suppliers",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/queries/suppliers.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/queries",slug:"/developers/supplier-apis/supply-api/graphql/reference/queries/suppliers",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/suppliers",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/queries/suppliers.mdx",tags:[],version:"current",frontMatter:{id:"suppliers",title:"suppliers"},sidebar:"apisSidebar",previous:{title:"supplier",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/supplier"},next:{title:"supplyEventSubscription",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/supply-event-subscription"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>after</code> (String)",id:"after-string",children:[],level:4},{value:"<code>before</code> (String)",id:"before-string",children:[],level:4},{value:"<code>first</code> (Int)",id:"first-int",children:[],level:4},{value:"<code>last</code> (Int)",id:"last-int",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierConnection",id:"supplierconnection",children:[],level:4}],level:3}],c={toc:u};function f(e){var r=e.components,t=(0,p.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get a list of suppliers"),(0,i.kt)("p",null,"Requires supplier/read permission on each supplier for the requesting identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"suppliers(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): SupplierConnection!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("h4",{id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"before")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("h4",{id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("h4",{id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"last")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplierconnection"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierConnection"))),(0,i.kt)("p",null,"Paginate through Suppliers"))}f.isMDXComponent=!0}}]);