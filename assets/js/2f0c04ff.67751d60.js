"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8875],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var p=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=p.createContext({}),s=function(e){var r=p.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return p.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?p.createElement(m,i(i({ref:r},c),{},{components:t})):p.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},858:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var p=t(3117),n=t(102),a=(t(7294),t(3905)),i=["components"],o={id:"supplier-product-custom-data",title:"SupplierProductCustomData"},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data",title:"SupplierProductCustomData",description:"Data that doesn't fit in the provided SupplierProduct fields needs to live here.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-custom-data",title:"SupplierProductCustomData"},sidebar:"apisSidebar",previous:{title:"SupplierProductContentItem",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item"},next:{title:"SupplierProductEdge",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-edge"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>createdAt</code> (String)",id:"createdat-string",children:[],level:4},{value:"<code>data</code> (JSONObject)",id:"data-jsonobject",children:[],level:4},{value:"<code>supplierProductId</code> (ID)",id:"supplierproductid-id",children:[],level:4},{value:"<code>updatedAt</code> (String)",id:"updatedat-string",children:[],level:4},{value:"<code>updatedBy</code> (String)",id:"updatedby-string",children:[],level:4}],level:3}],u={toc:c};function d(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Data that doesn't fit in the provided SupplierProduct fields needs to live here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductCustomData {\n  createdAt: String!\n  data: JSONObject!\n  supplierProductId: ID!\n  updatedAt: String!\n  updatedBy: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"createdat-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"data-jsonobject"},(0,a.kt)("inlineCode",{parentName:"h4"},"data")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/jsonobject"},(0,a.kt)("inlineCode",{parentName:"a"},"JSONObject")),")"),(0,a.kt)("h4",{id:"supplierproductid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierProductId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"updatedat-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"updatedby-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);