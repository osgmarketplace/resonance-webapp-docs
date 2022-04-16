"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9056],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=a.createContext({}),l=function(e){var n=a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=l(r),u=t,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return r?a.createElement(f,p(p({ref:n},c),{},{components:r})):a.createElement(f,p({ref:n},c))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,p=new Array(i);p[0]=s;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},53728:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var a=r(87462),t=r(63366),i=(r(67294),r(3905)),p=["components"],o={id:"page-image-from-file-input",title:"PageImageFromFileInput"},d=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-file-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-file-input",title:"PageImageFromFileInput",description:"Input object for creating an Image for a Page from a File on a device",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-file-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-file-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-file-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-file-input.mdx",tags:[],version:"current",frontMatter:{id:"page-image-from-file-input",title:"PageImageFromFileInput"},sidebar:"apisSidebar",previous:{title:"PageCreateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-create-input"},next:{title:"PageImageFromUrlInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-image-from-url-input"}},c={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>fileExtension</code> (<code>String</code>)",id:"fileextension-string",level:4},{value:"<code>fileName</code> (<code>String</code>)",id:"filename-string",level:4},{value:"<code>pageId</code> (<code>ID</code>)",id:"pageid-id",level:4}],s={toc:m};function u(e){var n=e.components,r=(0,t.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input object for creating an Image for a Page from a File on a device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PageImageFromFileInput {\n  demandHqId: ID!\n  fileExtension: String!\n  fileName: String!\n  pageId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"fileextension-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"fileExtension")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"filename-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"fileName")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"pageid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}u.isMDXComponent=!0}}]);