"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[77485],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var u=n.createContext({}),o=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=o(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=o(t),d=p,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function d(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var o=2;o<a;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34608:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var n=t(87462),p=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"create-supplier-variant",title:"createSupplierVariant",hide_table_of_contents:!1},u=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant",title:"createSupplierVariant",description:"Create a new supplierVariant",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier-variant",title:"createSupplierVariant",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"createSupplierVariantSupplement",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-supplement"},next:{title:"createSupplier",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierVariantCreateInput!</code>)",id:"input-suppliervariantcreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierVariant</code>",id:"suppliervariant",level:4}],f={toc:c};function d(e){var r=e.components,t=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a new supplierVariant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplierVariant(\n  input: SupplierVariantCreateInput!\n): SupplierVariant!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-suppliervariantcreateinput"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"input"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariantCreateInput!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"suppliervariant"},(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariant"))),(0,a.kt)("p",null,"The main item of the Supplier Domain, represents a single SKU of a product\nOnly the variant level exists, there is no parent product."))}d.isMDXComponent=!0}}]);