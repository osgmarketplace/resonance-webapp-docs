"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6085],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||p;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<p;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75203:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),i=["components"],l={id:"delete-supplier-variant-custom-data",title:"deleteSupplierVariantCustomData"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-custom-data",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-custom-data",title:"deleteSupplierVariantCustomData",description:"Delete specified keys from the SupplierVariantCustomData",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-custom-data.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-custom-data",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-custom-data",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-custom-data.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-variant-custom-data",title:"deleteSupplierVariantCustomData"},sidebar:"apisSidebar",previous:{title:"deleteSupplierVariantContentItem",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-content-item"},next:{title:"deleteSupplierVariant",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>keysToDelete</code> (<code>String</code>)",id:"keystodelete-string",level:4},{value:"<code>supplierVariantId</code> (<code>ID</code>)",id:"suppliervariantid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierVariantCustomData</code>",id:"suppliervariantcustomdata",level:4}],d={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Delete specified keys from the SupplierVariantCustomData"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierVariantCustomData(\n  keysToDelete: [String!]!\n  supplierVariantId: ID!\n): SupplierVariantCustomData!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"keystodelete-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"keysToDelete")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"suppliervariantid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"suppliervariantcustomdata"},(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-custom-data"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierVariantCustomData"))),(0,p.kt)("p",null,"Data that doesn't fit in the provided SupplierVariant fields needs to live here."))}m.isMDXComponent=!0}}]);