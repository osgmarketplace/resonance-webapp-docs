"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[51060],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=p.createContext({}),a=function(e){var r=p.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=a(e.components);return p.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=a(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return t?p.createElement(m,o(o({ref:r},c),{},{components:t})):p.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var a=2;a<i;a++)o[a]=t[a];return p.createElement.apply(null,o)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18298:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return s}});var p=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],u={id:"supplier-product-sort-input",title:"SupplierProductSortInput",hide_table_of_contents:!1},l=void 0,a={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-sort-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-sort-input",title:"SupplierProductSortInput",description:"Sort SupplierProducts by a field and direction.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-sort-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-sort-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-sort-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-sort-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-sort-input",title:"SupplierProductSortInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"SupplierProductLocaleUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-update-input"},next:{title:"SupplierProductStandardizedColorFilterInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-standardized-color-filter-input"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>direction</code> (<code>SortDirection!</code>)",id:"direction-sortdirection",level:4},{value:"<code>field</code> (<code>SupplierProductSortField!</code>)",id:"field-supplierproductsortfield",level:4}],d={toc:s};function f(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,p.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sort SupplierProducts by a field and direction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductSortInput {\n  direction: SortDirection!\n  field: SupplierProductSortField!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"direction-sortdirection"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"direction"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/sort-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"SortDirection!")),")"),(0,i.kt)("h4",{id:"field-supplierproductsortfield"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"field"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-product-sort-field"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductSortField!")),")"))}f.isMDXComponent=!0}}]);