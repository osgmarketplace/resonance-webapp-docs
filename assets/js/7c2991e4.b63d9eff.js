"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[64776],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,v=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(v,p(p({ref:t},u),{},{components:r})):n.createElement(v,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88239:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),p=["components"],o={id:"supplier-variant-create-input",title:"SupplierVariantCreateInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input",title:"SupplierVariantCreateInput",description:"The necessary fields in order to create a new supplierVariant",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-create-input",title:"SupplierVariantCreateInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"SupplierVariantContentItemUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-content-item-update-input"},next:{title:"SupplierVariantCustomDataUpsertInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-custom-data-upsert-input"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>contentItemIds</code> (<code>[ID]</code>)",id:"contentitemids-id",level:4},{value:"<code>externalVariantId</code> (<code>String!</code>)",id:"externalvariantid-string",level:4},{value:"<code>inventoryPolicy</code> (<code>SupplierVariantInventoryPolicy!</code>)",id:"inventorypolicy-suppliervariantinventorypolicy",level:4},{value:"<code>inventoryQuantity</code> (<code>Int!</code>)",id:"inventoryquantity-int",level:4},{value:"<code>optionValues</code> (<code>[String!]!</code>)",id:"optionvalues-string",level:4},{value:"<code>supplierId</code> (<code>ID!</code>)",id:"supplierid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID!</code>)",id:"supplierproductid-id",level:4}],d={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The necessary fields in order to create a new supplierVariant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierVariantCreateInput {\n  contentItemIds: [ID]\n  externalVariantId: String!\n  inventoryPolicy: SupplierVariantInventoryPolicy!\n  inventoryQuantity: Int!\n  optionValues: [String!]!\n  supplierId: ID!\n  supplierProductId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"contentitemids-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"contentItemIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("p",null,"Associates contentItems with this variant"),(0,i.kt)("h4",{id:"externalvariantid-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"externalVariantId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"inventorypolicy-suppliervariantinventorypolicy"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"inventoryPolicy"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-inventory-policy"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantInventoryPolicy!")),")"),(0,i.kt)("h4",{id:"inventoryquantity-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"inventoryQuantity"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("h4",{id:"optionvalues-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"optionValues"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]!")),")"),(0,i.kt)("p",null,"An array of the option values that make up this variant.\nFor example, a product with a color and size option would have two option values,\none for each of the color and size options, i.e. ",'["Red", "Small"]','\nMust have 1-3, and it should match the number of options in the product, but there is no validation to do so.\nSet this to "No Option" if you don\'t want to use options for this product and this is the only variant.\nSee ',(0,i.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info."),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"supplierId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"supplierproductid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"supplierProductId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}f.isMDXComponent=!0}}]);