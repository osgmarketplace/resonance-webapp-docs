"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9795],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||p;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=t.length,a=new Array(p);a[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<p;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6290:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=t(3117),i=t(102),p=(t(7294),t(3905)),a=["components"],l={id:"supplier-product-image-from-file-input",title:"SupplierProductImageFromFileInput"},o=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-file-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-file-input",title:"SupplierProductImageFromFileInput",description:"Input object for creating an Image SupplierProductContentItem from a File on a device",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-file-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-file-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-file-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-file-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-image-from-file-input",title:"SupplierProductImageFromFileInput"},sidebar:"apisSidebar",previous:{title:"SupplierProductCustomDataUpsertInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-custom-data-upsert-input"},next:{title:"SupplierProductImageFromUrlInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-url-input"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>alt</code> (String)",id:"alt-string",children:[],level:4},{value:"<code>category</code> (String)",id:"category-string",children:[],level:4},{value:"<code>fileExtension</code> (String)",id:"fileextension-string",children:[],level:4},{value:"<code>fileName</code> (String)",id:"filename-string",children:[],level:4},{value:"<code>position</code> (Float)",id:"position-float",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4},{value:"<code>supplierProductId</code> (ID)",id:"supplierproductid-id",children:[],level:4}],level:3}],c={toc:s};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Input object for creating an Image SupplierProductContentItem from a File on a device"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductImageFromFileInput {\n  alt: String!\n  category: String\n  fileExtension: String!\n  fileName: String!\n  position: Float\n  supplierId: ID!\n  supplierProductId: ID!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"alt-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"alt")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"category-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"fileextension-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"fileExtension")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"filename-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"fileName")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"position-float"},(0,p.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/float"},(0,p.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,p.kt)("p",null,"Used to determine what order the content comes out in.\nYou can place any number here, including non-integers and negatives, and it does not have to be unique or sequential."),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"supplierproductid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierProductId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))}d.isMDXComponent=!0}}]);