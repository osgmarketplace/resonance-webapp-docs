"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[40053],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)r=i[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)r=i[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=p.createContext({}),o=function(e){var t=p.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=o(e.components);return p.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},d=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=o(r),y=n,f=d["".concat(l,".").concat(y)]||d[y]||c[y]||i;return r?p.createElement(f,a(a({ref:t},s),{},{components:r})):p.createElement(f,a({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var o=2;o<i;o++)a[o]=r[o];return p.createElement.apply(null,a)}return p.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10996:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return c}});var p=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],u={id:"create-supplier-identity",title:"createSupplierIdentity"},l=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-identity",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-identity",title:"createSupplierIdentity",description:"Add a new SupplierIdentity to a Supplier (give a user permissions)",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-identity.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-identity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-identity",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-identity.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier-identity",title:"createSupplierIdentity"},sidebar:"apisSidebar",previous:{title:"associateSupplierProductContentItem",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/associate-supplier-product-content-item"},next:{title:"createSupplierProductComposite",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-composite"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierIdentityCreateInput</code>)",id:"input-supplieridentitycreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierIdentity</code>",id:"supplieridentity",level:4}],d={toc:c};function y(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,p.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add a new SupplierIdentity to a Supplier (give a user permissions)"),(0,i.kt)("p",null,"Requires the supplieridentity/write permission on the given Supplier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplierIdentity(\n  input: SupplierIdentityCreateInput!\n): SupplierIdentity!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplieridentitycreateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierIdentityCreateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplieridentity"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierIdentity"))),(0,i.kt)("p",null,"Indicates a User or App has permissions on a Supplier"))}y.isMDXComponent=!0}}]);