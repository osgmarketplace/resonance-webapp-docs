"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4693],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return y}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)i=p[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)i=p[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(i),y=n,f=c["".concat(s,".").concat(y)]||c[y]||o[y]||p;return i?r.createElement(f,a(a({ref:t},d),{},{components:i})):r.createElement(f,a({ref:t},d))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=i.length,a=new Array(p);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<p;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},9257:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=i(3117),n=i(102),p=(i(7294),i(3905)),a=["components"],l={id:"supplier-identity-create-input",title:"SupplierIdentityCreateInput"},s=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input",title:"SupplierIdentityCreateInput",description:"Exactly like SupplierIdentity, but no updatedBy or identityType (always User)",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-identity-create-input",title:"SupplierIdentityCreateInput"},sidebar:"apisSidebar",previous:{title:"SupplierCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input"},next:{title:"SupplierIdentityPermissionsInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-permissions-input"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>identityId</code> (ID)",id:"identityid-id",children:[],level:4},{value:"<code>identityParentEntityId</code> (ID)",id:"identityparententityid-id",children:[],level:4},{value:"<code>identityType</code> (SupplierIdentityType)",id:"identitytype-supplieridentitytype",children:[],level:4},{value:"<code>permissions</code> (SupplierIdentityPermissionsInput)",id:"permissions-supplieridentitypermissionsinput",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4}],level:3}],o={toc:d};function c(e){var t=e.components,i=(0,n.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Exactly like SupplierIdentity, but no updatedBy or identityType (always User)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierIdentityCreateInput {\n  identityId: ID!\n  identityParentEntityId: ID\n  identityType: SupplierIdentityType!\n  permissions: SupplierIdentityPermissionsInput!\n  supplierId: ID!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"identityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("p",null,"Always a user's userName (not appClientId)"),(0,p.kt)("h4",{id:"identityparententityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityParentEntityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"identitytype-supplieridentitytype"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-identity-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityType")),")"),(0,p.kt)("p",null,"Should always be USER"),(0,p.kt)("h4",{id:"permissions-supplieridentitypermissionsinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-permissions-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityPermissionsInput")),")"),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))}c.isMDXComponent=!0}}]);