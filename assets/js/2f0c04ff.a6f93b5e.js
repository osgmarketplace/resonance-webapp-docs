"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[28875],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var p=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,p,a=function(e,r){if(null==e)return{};var t,p,a={},n=Object.keys(e);for(p=0;p<n.length;p++)t=n[p],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)t=n[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=p.createContext({}),s=function(e){var r=p.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return p.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},c=p.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),f=a,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||n;return t?p.createElement(m,i(i({ref:r},d),{},{components:t})):p.createElement(m,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=c;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<n;s++)i[s]=t[s];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}c.displayName="MDXCreateElement"},10858:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var p=t(87462),a=t(63366),n=(t(67294),t(3905)),i=["components"],o={id:"supplier-product-custom-data",title:"SupplierProductCustomData",hide_table_of_contents:!1},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data",title:"SupplierProductCustomData",description:"Data that doesn't fit in the provided SupplierProduct fields needs to live here.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-custom-data",title:"SupplierProductCustomData",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"SupplierProductContentItem",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item"},next:{title:"SupplierProductDeleteResponse",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-delete-response"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>createdAt</code> (<code>String!</code>)",id:"createdat-string",level:4},{value:"<code>data</code> (<code>JSON!</code>)",id:"data-json",level:4},{value:"<code>supplierId</code> (<code>ID!</code>)",id:"supplierid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID!</code>)",id:"supplierproductid-id",level:4},{value:"<code>updatedAt</code> (<code>String!</code>)",id:"updatedat-string",level:4},{value:"<code>updatedBy</code> (<code>String!</code>)",id:"updatedby-string",level:4}],c={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,p.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Data that doesn't fit in the provided SupplierProduct fields needs to live here."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductCustomData {\n  createdAt: String!\n  data: JSON!\n  supplierId: ID!\n  supplierProductId: ID!\n  updatedAt: String!\n  updatedBy: String!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"createdat-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"createdAt"))," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,n.kt)("h4",{id:"data-json"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/json"},(0,n.kt)("inlineCode",{parentName:"a"},"JSON!")),")"),(0,n.kt)("h4",{id:"supplierid-id"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierId"))," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,n.kt)("h4",{id:"supplierproductid-id"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierProductId"))," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,n.kt)("h4",{id:"updatedat-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"updatedAt"))," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,n.kt)("h4",{id:"updatedby-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"updatedBy"))," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!")),")"))}f.isMDXComponent=!0}}]);