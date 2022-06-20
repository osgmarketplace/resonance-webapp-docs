"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[85835],{3905:function(e,r,p){p.d(r,{Zo:function(){return s},kt:function(){return f}});var t=p(67294);function n(e,r,p){return r in e?Object.defineProperty(e,r,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[r]=p,e}function i(e,r){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),p.push.apply(p,t)}return p}function a(e){for(var r=1;r<arguments.length;r++){var p=null!=arguments[r]?arguments[r]:{};r%2?i(Object(p),!0).forEach((function(r){n(e,r,p[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):i(Object(p)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(p,r))}))}return e}function u(e,r){if(null==e)return{};var p,t,n=function(e,r){if(null==e)return{};var p,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||(n[p]=e[p]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(n[p]=e[p])}return n}var l=t.createContext({}),o=function(e){var r=t.useContext(l),p=r;return e&&(p="function"==typeof e?e(r):a(a({},r),e)),p},s=function(e){var r=o(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var p=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=o(p),f=n,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return p?t.createElement(m,a(a({ref:r},s),{},{components:p})):t.createElement(m,a({ref:r},s))}));function f(e,r){var p=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=p.length,a=new Array(i);a[0]=d;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var o=2;o<i;o++)a[o]=p[o];return t.createElement.apply(null,a)}return t.createElement.apply(null,p)}d.displayName="MDXCreateElement"},61945:function(e,r,p){p.r(r),p.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return c}});var t=p(87462),n=p(63366),i=(p(67294),p(3905)),a=["components"],u={id:"update-supplier",title:"updateSupplier"},l=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier",title:"updateSupplier",description:"Update an existing supplier",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier.mdx",tags:[],version:"current",frontMatter:{id:"update-supplier",title:"updateSupplier"},sidebar:"apisSidebar",previous:{title:"updateSupplierVariants",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variants"},next:{title:"upsertSupplierProductCustomData",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-product-custom-data"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierUpdateInput</code>)",id:"input-supplierupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>Supplier</code>",id:"supplier",level:4}],d={toc:c};function f(e){var r=e.components,p=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,p,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update an existing supplier"),(0,i.kt)("p",null,"Requires supplier/write permission on the requesting identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupplier(\n  input: SupplierUpdateInput!\n): Supplier!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplierupdateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierUpdateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplier"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier"},(0,i.kt)("inlineCode",{parentName:"a"},"Supplier"))),(0,i.kt)("p",null,"The parent-most entity of the Supplier Domain"))}f.isMDXComponent=!0}}]);