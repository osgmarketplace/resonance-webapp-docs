"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[98680],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return s}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),s=o,f=d["".concat(c,".").concat(s)]||d[s]||u[s]||a;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96952:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"create-collection-image-from-url",title:"createCollectionImageFromUrl"},c=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection-image-from-url",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection-image-from-url",title:"createCollectionImageFromUrl",description:"Create a Image for a Collection from a URL.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection-image-from-url.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection-image-from-url",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection-image-from-url",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection-image-from-url.mdx",tags:[],version:"current",frontMatter:{id:"create-collection-image-from-url",title:"createCollectionImageFromUrl"},sidebar:"apisSidebar",previous:{title:"createCollectionImageFromFile",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection-image-from-file"},next:{title:"createCollectionImagesFromFiles",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection-images-from-files"}},m={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>CollectionImageFromUrlInput</code>)",id:"input-collectionimagefromurlinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>Collection</code>",id:"collection",level:4}],d={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a Image for a Collection from a URL."),(0,a.kt)("p",null,"Requires the collection/write permission on the given DemandHq"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"createCollectionImageFromUrl(\n  input: CollectionImageFromUrlInput!\n): Collection!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-collectionimagefromurlinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-image-from-url-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CollectionImageFromUrlInput")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"collection"},(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection"},(0,a.kt)("inlineCode",{parentName:"a"},"Collection"))),(0,a.kt)("p",null,'A Collection is a group of products, what may often be referred to as a "Category Page" of some variety.\nIn reality, a collection is far more flexible and can be used to represent any\nproduct grouping, and the collectionType can help differentiate between them.'))}s.isMDXComponent=!0}}]);