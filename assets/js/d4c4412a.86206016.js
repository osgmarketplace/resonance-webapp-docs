"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9829],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return y}});var n=t(7294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=n.createContext({}),u=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),y=p,f=d["".concat(a,".").concat(y)]||d[y]||s[y]||i;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function y(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2204:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return y}});var n=t(7462),p=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"supplier-product-inventory-policy-filter-input",title:"SupplierProductInventoryPolicyFilterInput"},a=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input",title:"SupplierProductInventoryPolicyFilterInput",description:"Filter SupplierProducts using InventoryPolicy (Variant).",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-inventory-policy-filter-input",title:"SupplierProductInventoryPolicyFilterInput"},sidebar:"apisSidebar",previous:{title:"SupplierProductImageFromUrlInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-url-input"},next:{title:"SupplierProductLocaleCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>operator</code> (<code>FilterOperator</code>)",id:"operator-filteroperator",level:4},{value:"<code>values</code> (<code>SupplierVariantInventoryPolicy</code>)",id:"values-suppliervariantinventorypolicy",level:4}],d={toc:s};function y(e){var r=e.components,t=(0,p.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filter SupplierProducts using InventoryPolicy (Variant)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductInventoryPolicyFilterInput {\n  operator: FilterOperator\n  values: [SupplierVariantInventoryPolicy!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"operator-filteroperator"},(0,i.kt)("inlineCode",{parentName:"h4"},"operator")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/filter-operator"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterOperator")),")"),(0,i.kt)("h4",{id:"values-suppliervariantinventorypolicy"},(0,i.kt)("inlineCode",{parentName:"h4"},"values")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-inventory-policy"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantInventoryPolicy")),")"))}y.isMDXComponent=!0}}]);