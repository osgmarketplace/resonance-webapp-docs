"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[2718],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return y}});var p=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)r=i[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)r=i[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=p.createContext({}),s=function(e){var t=p.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},o=function(e){var t=s(e.components);return p.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},c=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=s(r),y=n,f=c["".concat(l,".").concat(y)]||c[y]||d[y]||i;return r?p.createElement(f,a(a({ref:t},o),{},{components:r})):p.createElement(f,a({ref:t},o))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return p.createElement.apply(null,a)}return p.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8485:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var p=r(3117),n=r(102),i=(r(7294),r(3905)),a=["components"],u={id:"update-supplier-identity",title:"updateSupplierIdentity"},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity",title:"updateSupplierIdentity",description:"Update a SupplierIdentity for a Supplier (give a user permissions)",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity.mdx",tags:[],version:"current",frontMatter:{id:"update-supplier-identity",title:"updateSupplierIdentity"},sidebar:"apisSidebar",previous:{title:"updateAppPermissions",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-app-permissions"},next:{title:"updateSupplierProductContentItem",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-product-content-item"}},o=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (SupplierIdentityUpdateInput)",id:"input-supplieridentityupdateinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierIdentity",id:"supplieridentity",children:[],level:4}],level:3}],d={toc:o};function c(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,p.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update a SupplierIdentity for a Supplier (give a user permissions)"),(0,i.kt)("p",null,"Requires the supplieridentity/write permission on the given Supplier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupplierIdentity(\n  input: SupplierIdentityUpdateInput!\n): SupplierIdentity\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplieridentityupdateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierIdentityUpdateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplieridentity"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierIdentity"))),(0,i.kt)("p",null,"Indicates a User or App has permissions on a Supplier"))}c.isMDXComponent=!0}}]);