"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3699],{3905:function(e,r,t){t.d(r,{Zo:function(){return o},kt:function(){return f}});var p=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=p.createContext({}),l=function(e){var r=p.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},o=function(e){var r=l(e.components);return p.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,h=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return t?p.createElement(h,a(a({ref:r},o),{},{components:t})):p.createElement(h,a({ref:r},o))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return p.createElement.apply(null,a)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1465:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return o},default:function(){return d}});var p=t(3117),n=t(102),i=(t(7294),t(3905)),a=["components"],u={id:"supplier-update-input",title:"SupplierUpdateInput"},s=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input",title:"SupplierUpdateInput",description:"The possible fields in order to update a supplier. Partial updating in place.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-update-input",title:"SupplierUpdateInput"},sidebar:"apisSidebar",previous:{title:"SupplierIdentityUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-update-input"},next:{title:"SupplierVariantContentItemDeleteInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-content-item-delete-input"}},o=[{value:"Fields",id:"fields",children:[{value:"<code>description</code> (String)",id:"description-string",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>purchaseOrderNotifications</code> (PurchaseOrderNotificationInput)",id:"purchaseordernotifications-purchaseordernotificationinput",children:[],level:4},{value:"<code>status</code> (SupplierStatus)",id:"status-supplierstatus",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4}],level:3}],c={toc:o};function d(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,p.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The possible fields in order to update a supplier. Partial updating in place."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierUpdateInput {\n  description: String\n  name: String\n  purchaseOrderNotifications: [PurchaseOrderNotificationInput!]\n  status: SupplierStatus\n  supplierId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"purchaseordernotifications-purchaseordernotificationinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"purchaseOrderNotifications")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/purchase-order-notification-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PurchaseOrderNotificationInput")),")"),(0,i.kt)("h4",{id:"status-supplierstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-status"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierStatus")),")"),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}d.isMDXComponent=!0}}]);