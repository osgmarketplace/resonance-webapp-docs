"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8870],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return f}});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=p,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},o),{},{components:r})):n.createElement(m,i({ref:t},o))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:p,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6371:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return o},default:function(){return d}});var n=r(3117),p=r(102),a=(r(7294),r(3905)),i=["components"],u={id:"supplier-variant-custom-data-upsert-input",title:"SupplierVariantCustomDataUpsertInput"},s=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-custom-data-upsert-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-custom-data-upsert-input",title:"SupplierVariantCustomDataUpsertInput",description:"The input type to upsert SupplierVariantCustomData.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-custom-data-upsert-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-custom-data-upsert-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-custom-data-upsert-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-custom-data-upsert-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-custom-data-upsert-input",title:"SupplierVariantCustomDataUpsertInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input"},next:{title:"SupplierVariantHandlingCostInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-handling-cost-input"}},o=[{value:"Fields",id:"fields",children:[{value:"<code>data</code> (JSONObject)",id:"data-jsonobject",children:[],level:4},{value:"<code>supplierVariantId</code> (ID)",id:"suppliervariantid-id",children:[],level:4}],level:3}],c={toc:o};function d(e){var t=e.components,r=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The input type to upsert SupplierVariantCustomData.\nThe data object is required, but is a partial update, and keys not mentioned will be left alone."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantCustomDataUpsertInput {\n  data: JSONObject!\n  supplierVariantId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"data-jsonobject"},(0,a.kt)("inlineCode",{parentName:"h4"},"data")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/jsonobject"},(0,a.kt)("inlineCode",{parentName:"a"},"JSONObject")),")"),(0,a.kt)("h4",{id:"suppliervariantid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}d.isMDXComponent=!0}}]);