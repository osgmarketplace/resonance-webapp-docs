"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[99765],{3905:function(e,r,a){a.d(r,{Zo:function(){return m},kt:function(){return s}});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),c=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},m=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(a),s=n,g=u["".concat(l,".").concat(s)]||u[s]||d[s]||o;return a?t.createElement(g,i(i({ref:r},m),{},{components:a})):t.createElement(g,i({ref:r},m))}));function s(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72350:function(e,r,a){a.r(r),a.d(r,{assets:function(){return m},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var t=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],p={id:"create-page-image-from-url",title:"createPageImageFromUrl",hide_table_of_contents:!1},l=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-image-from-url",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-image-from-url",title:"createPageImageFromUrl",description:"Create a Image for a Page from a URL.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-image-from-url.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-image-from-url",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-image-from-url",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-image-from-url.mdx",tags:[],version:"current",frontMatter:{id:"create-page-image-from-url",title:"createPageImageFromUrl",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"createPageImageFromFile",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-image-from-file"},next:{title:"createPageImagesFromFiles",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-images-from-files"}},m={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>PageImageFromUrlInput!</code>)",id:"input-pageimagefromurlinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>Page</code>",id:"page",level:4}],u={toc:d};function s(e){var r=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a Image for a Page from a URL."),(0,o.kt)("p",null,"Requires the page/write permission on the given DemandHq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createPageImageFromUrl(\n  input: PageImageFromUrlInput!\n): Page!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-pageimagefromurlinput"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"input"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-url-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PageImageFromUrlInput!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"page"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page"},(0,o.kt)("inlineCode",{parentName:"a"},"Page"))),(0,o.kt)("p",null,'A Page is a part of the Demand Domain and represents a page with textual and\nimage content on it, that has nothing to do with products.\nThis can range from "About Us" pages to Blog articles. Use the "pageType" field to differentiate.\nPages do not have locales specified, but since everything would be different\nanyway, "pageType" can be a composite key with locale in it.'))}s.isMDXComponent=!0}}]);