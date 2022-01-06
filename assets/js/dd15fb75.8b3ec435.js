"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[2362],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),p=["components"],l={id:"supplier-variant-content-item",title:"SupplierVariantContentItem"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item",title:"SupplierVariantContentItem",description:"This has a many to one relationship with SupplierVariant, and provides a connection to the CDN items.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-content-item",title:"SupplierVariantContentItem"},sidebar:"apisSidebar",previous:{title:"SupplierVariantContentItemEdge",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item-edge"},next:{title:"SupplierVariantCustomData",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-custom-data"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>alt</code> (String)",id:"alt-string",children:[],level:4},{value:"<code>contentItemId</code> (ID)",id:"contentitemid-id",children:[],level:4},{value:"<code>contentKey</code> (String)",id:"contentkey-string",children:[],level:4},{value:"<code>contentType</code> (SupplierVariantContentType)",id:"contenttype-suppliervariantcontenttype",children:[],level:4},{value:"<code>createdAt</code> (String)",id:"createdat-string",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4},{value:"<code>supplierVariantId</code> (ID)",id:"suppliervariantid-id",children:[],level:4},{value:"<code>updatedAt</code> (String)",id:"updatedat-string",children:[],level:4},{value:"<code>updatedBy</code> (String)",id:"updatedby-string",children:[],level:4},{value:"<code>variantRelation</code> (SupplierVariantContentRelation)",id:"variantrelation-suppliervariantcontentrelation",children:[],level:4}],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This has a many to one relationship with SupplierVariant, and provides a connection to the CDN items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantContentItem {\n  alt: String!\n  contentItemId: ID!\n  contentKey: String!\n  contentType: SupplierVariantContentType!\n  createdAt: String!\n  supplierId: ID!\n  supplierVariantId: ID!\n  updatedAt: String!\n  updatedBy: String!\n  variantRelation: SupplierVariantContentRelation!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"alt-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"contentitemid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItemId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"contentkey-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentKey")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The key to the file in the CDN"),(0,i.kt)("h4",{id:"contenttype-suppliervariantcontenttype"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-content-type"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantContentType")),")"),(0,i.kt)("h4",{id:"createdat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"suppliervariantid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"updatedat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"updatedby-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"variantrelation-suppliervariantcontentrelation"},(0,i.kt)("inlineCode",{parentName:"h4"},"variantRelation")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-content-relation"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantContentRelation")),")"))}u.isMDXComponent=!0}}]);