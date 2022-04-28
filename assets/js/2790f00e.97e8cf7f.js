"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[12073],{3905:function(e,p,r){r.d(p,{Zo:function(){return s},kt:function(){return d}});var t=r(67294);function n(e,p,r){return p in e?Object.defineProperty(e,p,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[p]=r,e}function i(e,p){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);p&&(t=t.filter((function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var p=1;p<arguments.length;p++){var r=null!=arguments[p]?arguments[p]:{};p%2?i(Object(r),!0).forEach((function(p){n(e,p,r[p])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(p){Object.defineProperty(e,p,Object.getOwnPropertyDescriptor(r,p))}))}return e}function u(e,p){if(null==e)return{};var r,t,n=function(e,p){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],p.indexOf(r)>=0||(n[r]=e[r]);return n}(e,p);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],p.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),o=function(e){var p=t.useContext(l),r=p;return e&&(r="function"==typeof e?e(p):a(a({},p),e)),r},s=function(e){var p=o(e.components);return t.createElement(l.Provider,{value:p},e.children)},c={inlineCode:"code",wrapper:function(e){var p=e.children;return t.createElement(t.Fragment,{},p)}},m=t.forwardRef((function(e,p){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=o(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?t.createElement(f,a(a({ref:p},s),{},{components:r})):t.createElement(f,a({ref:p},s))}));function d(e,p){var r=arguments,n=p&&p.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var l in p)hasOwnProperty.call(p,l)&&(u[l]=p[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var o=2;o<i;o++)a[o]=r[o];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31800:function(e,p,r){r.r(p),r.d(p,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return c}});var t=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],u={id:"supplier-variant-composite-create-input",title:"SupplierVariantCompositeCreateInput"},l=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-composite-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-composite-create-input",title:"SupplierVariantCompositeCreateInput",description:"The necessary fields in order to create a new supplierVariant and supplierVariantSupplement.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-composite-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-composite-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-composite-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-composite-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-composite-create-input",title:"SupplierVariantCompositeCreateInput"},sidebar:"apisSidebar",previous:{title:"SupplierUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input"},next:{title:"SupplierVariantCompositeInCompositeCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-composite-in-composite-create-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>supplierVariantInput</code> (<code>SupplierVariantCreateInput</code>)",id:"suppliervariantinput-suppliervariantcreateinput",level:4},{value:"<code>supplierVariantSupplementInput</code> (<code>SupplierVariantSupplementInCompositeCreateInput</code>)",id:"suppliervariantsupplementinput-suppliervariantsupplementincompositecreateinput",level:4}],m={toc:c};function d(e){var p=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:p,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The necessary fields in order to create a new supplierVariant and supplierVariantSupplement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierVariantCompositeCreateInput {\n  supplierVariantInput: SupplierVariantCreateInput!\n  supplierVariantSupplementInput: SupplierVariantSupplementInCompositeCreateInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"suppliervariantinput-suppliervariantcreateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierVariantInput")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantCreateInput")),")"),(0,i.kt)("h4",{id:"suppliervariantsupplementinput-suppliervariantsupplementincompositecreateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierVariantSupplementInput")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-supplement-in-composite-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementInCompositeCreateInput")),")"))}d.isMDXComponent=!0}}]);