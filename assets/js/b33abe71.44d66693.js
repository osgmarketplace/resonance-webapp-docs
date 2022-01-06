"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[2549],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=a(r),m=p,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var a=2;a<i;a++)o[a]=r[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9088:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return c},default:function(){return d}});var n=r(3117),p=r(102),i=(r(7294),r(3905)),o=["components"],l={id:"delete-supplier-product-content-item",title:"deleteSupplierProductContentItem"},u=void 0,a={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item",title:"deleteSupplierProductContentItem",description:"Delete an existing SupplierProductContentItem",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-product-content-item",title:"deleteSupplierProductContentItem"},sidebar:"apisSidebar",previous:{title:"deleteSupplierIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity"},next:{title:"deleteSupplierProductCustomData",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-custom-data"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (SupplierProductContentItemDeleteInput)",id:"input-supplierproductcontentitemdeleteinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierProductContentItemDeleteResponse",id:"supplierproductcontentitemdeleteresponse",children:[],level:4}],level:3}],s={toc:c};function d(e){var t=e.components,r=(0,p.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Delete an existing SupplierProductContentItem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierProductContentItem(\n  input: SupplierProductContentItemDeleteInput\n): SupplierProductContentItemDeleteResponse!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplierproductcontentitemdeleteinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-content-item-delete-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemDeleteInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplierproductcontentitemdeleteresponse"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item-delete-response"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemDeleteResponse"))),(0,i.kt)("p",null,"The response type for deleteSupplierProductContentItem"))}d.isMDXComponent=!0}}]);