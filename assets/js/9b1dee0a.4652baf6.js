"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[801],{3905:function(e,n,i){i.d(n,{Zo:function(){return u},kt:function(){return h}});var t=i(7294);function p(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){p(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,p=function(e,n){if(null==e)return{};var i,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(p[i]=e[i]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(p[i]=e[i])}return p}var s=t.createContext({}),o=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},u=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(i),h=p,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return i?t.createElement(f,a(a({ref:n},u),{},{components:i})):t.createElement(f,a({ref:n},u))}));function h(e,n){var i=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=i.length,a=new Array(r);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var o=2;o<r;o++)a[o]=i[o];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9406:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var t=i(3117),p=i(102),r=(i(7294),i(3905)),a=["components"],l={id:"supplier-variant-shipping-dimensions-input",title:"SupplierVariantShippingDimensionsInput"},s=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-shipping-dimensions-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-shipping-dimensions-input",title:"SupplierVariantShippingDimensionsInput",description:"Input object to indicate all three shipping box dimensions and a unit",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-shipping-dimensions-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-shipping-dimensions-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-shipping-dimensions-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-shipping-dimensions-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-shipping-dimensions-input",title:"SupplierVariantShippingDimensionsInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantOptionsInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-options-input"},next:{title:"SupplierVariantSupplementCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-supplement-create-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>height</code> (Float)",id:"height-float",children:[],level:4},{value:"<code>length</code> (Float)",id:"length-float",children:[],level:4},{value:"<code>unit</code> (SupplierVariantShippingDimensionUnit)",id:"unit-suppliervariantshippingdimensionunit",children:[],level:4},{value:"<code>width</code> (Float)",id:"width-float",children:[],level:4}],level:3}],c={toc:u};function d(e){var n=e.components,i=(0,p.Z)(e,a);return(0,r.kt)("wrapper",(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Input object to indicate all three shipping box dimensions and a unit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantShippingDimensionsInput {\n  height: Float!\n  length: Float!\n  unit: SupplierVariantShippingDimensionUnit!\n  width: Float!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"height-float"},(0,r.kt)("inlineCode",{parentName:"h4"},"height")," (",(0,r.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"length-float"},(0,r.kt)("inlineCode",{parentName:"h4"},"length")," (",(0,r.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"unit-suppliervariantshippingdimensionunit"},(0,r.kt)("inlineCode",{parentName:"h4"},"unit")," (",(0,r.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-shipping-dimension-unit"},(0,r.kt)("inlineCode",{parentName:"a"},"SupplierVariantShippingDimensionUnit")),")"),(0,r.kt)("h4",{id:"width-float"},(0,r.kt)("inlineCode",{parentName:"h4"},"width")," (",(0,r.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"))}d.isMDXComponent=!0}}]);