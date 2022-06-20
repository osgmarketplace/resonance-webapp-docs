"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[99890],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,u=m["".concat(c,".").concat(h)]||m[h]||s[h]||o;return n?r.createElement(u,d(d({ref:t},p),{},{components:n})):r.createElement(u,d({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var l=2;l<o;l++)d[l]=n[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),d=["components"],i={id:"collection-type-content",title:"CollectionTypeContent"},c=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/collection-type-content",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/collection-type-content",title:"CollectionTypeContent",description:"This holds content specific to a collectionType. This is generally used on a",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-type-content.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-type-content",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-type-content",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-type-content.mdx",tags:[],version:"current",frontMatter:{id:"collection-type-content",title:"CollectionTypeContent"},sidebar:"apisSidebar",previous:{title:"CollectionTypeContentEdge",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-type-content-edge"},next:{title:"Collection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>collectionType</code> (<code>String</code>)",id:"collectiontype-string",level:4},{value:"<code>collectionTypeContentId</code> (<code>ID</code>)",id:"collectiontypecontentid-id",level:4},{value:"<code>contentAsString</code> (<code>String</code>)",id:"contentasstring-string",level:4},{value:"<code>createdAt</code> (<code>Date</code>)",id:"createdat-date",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>secondaryContentAsString</code> (<code>String</code>)",id:"secondarycontentasstring-string",level:4},{value:"<code>storefrontId</code> (<code>ID</code>)",id:"storefrontid-id",level:4},{value:"<code>subtitle</code> (<code>String</code>)",id:"subtitle-string",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>updatedAt</code> (<code>Date</code>)",id:"updatedat-date",level:4},{value:"<code>updatedBy</code> (<code>ID</code>)",id:"updatedby-id",level:4}],m={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This holds content specific to a collectionType. This is generally used on a\npage that lists all collections for a collectionType."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CollectionTypeContent {\n  collectionType: String!\n  collectionTypeContentId: ID!\n  contentAsString: String\n  createdAt: Date!\n  demandHqId: ID!\n  secondaryContentAsString: String\n  storefrontId: ID!\n  subtitle: String\n  title: String\n  updatedAt: Date!\n  updatedBy: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"collectiontype-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"collectionType")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"collectiontypecontentid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"collectionTypeContentId")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"contentasstring-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"contentAsString")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"createdat-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"demandhqid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"secondarycontentasstring-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"secondaryContentAsString")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"storefrontid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"storefrontId")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"subtitle-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"subtitle")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"title-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"updatedat-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"updatedby-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}h.isMDXComponent=!0}}]);