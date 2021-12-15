"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[7996],{3905:function(e,r,t){t.d(r,{Zo:function(){return o},kt:function(){return y}});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),u=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},o=function(e){var r=u(e.components);return i.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},c=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),c=u(t),y=n,f=c["".concat(s,".").concat(y)]||c[y]||d[y]||p;return t?i.createElement(f,l(l({ref:r},o),{},{components:t})):i.createElement(f,l({ref:r},o))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,l=new Array(p);l[0]=c;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var u=2;u<p;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8449:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return o},default:function(){return c}});var i=t(3117),n=t(102),p=(t(7294),t(3905)),l=["components"],a={id:"supplier-identity",title:"supplierIdentity"},s=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identity",id:"developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identity",title:"supplierIdentity",description:"Get a single SupplierIdentity.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identity.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/queries",slug:"/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identity.mdx",tags:[],version:"current",frontMatter:{id:"supplier-identity",title:"supplierIdentity"},sidebar:"apisSidebar",previous:{title:"supplierIdentities",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identities"},next:{title:"supplierVariant",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-variant"}},o=[{value:"Arguments",id:"arguments",children:[{value:"<code>identityId</code> (ID)",id:"identityid-id",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierIdentity",id:"supplieridentity",children:[],level:4}],level:3}],d={toc:o};function c(e){var r=e.components,t=(0,n.Z)(e,l);return(0,p.kt)("wrapper",(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Get a single SupplierIdentity."),(0,p.kt)("p",null,"Requires supplieridentity/read permission on the requesting identity, or you can request your own identity."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"supplierIdentity(\n  identityId: ID!\n  supplierId: ID!\n): SupplierIdentity\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"identityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"supplieridentity"},(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentity"))),(0,p.kt)("p",null,"Indicates a User or App has permissions on a Supplier"))}c.isMDXComponent=!0}}]);