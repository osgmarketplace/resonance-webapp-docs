"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[82655],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=p.createContext({}),c=function(e){var r=p.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return p.createElement(o.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=n,y=d["".concat(o,".").concat(f)]||d[f]||s[f]||a;return t?p.createElement(y,i(i({ref:r},u),{},{components:t})):p.createElement(y,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62626:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var p=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"supplier-product-locale-create-input",title:"SupplierProductLocaleCreateInput",hide_table_of_contents:!1},o=void 0,c={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input",title:"SupplierProductLocaleCreateInput",description:"The necessary fields in order to create a new supplierProductLocale",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-locale-create-input",title:"SupplierProductLocaleCreateInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"SupplierProductInventoryPolicyFilterInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input"},next:{title:"SupplierProductLocaleInCompositeCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-in-composite-create-input"}},u={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>featureBullets</code> (<code>[String]</code>)",id:"featurebullets-string",level:4},{value:"<code>localeType</code> (<code>ResonanceLocaleType!</code>)",id:"localetype-resonancelocaletype",level:4},{value:"<code>supplierId</code> (<code>ID!</code>)",id:"supplierid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID!</code>)",id:"supplierproductid-id",level:4}],d={toc:s};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The necessary fields in order to create a new supplierProductLocale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductLocaleCreateInput {\n  description: String\n  featureBullets: [String]\n  localeType: ResonanceLocaleType!\n  supplierId: ID!\n  supplierProductId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"featurebullets-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"featureBullets"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,a.kt)("p",null,"Limited to 5 bullets"),(0,a.kt)("h4",{id:"localetype-resonancelocaletype"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"localeType"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!")),")"),(0,a.kt)("h4",{id:"supplierid-id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"supplierId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"supplierproductid-id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"supplierProductId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}f.isMDXComponent=!0}}]);