"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[7686],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(n),m=a,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},70299:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],i={id:"upsert-page-content",title:"upsertPageContent"},c=void 0,s={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/upsert-page-content",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/upsert-page-content",title:"upsertPageContent",description:"Add or Update PageContent for an existing Page.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/upsert-page-content.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/upsert-page-content",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/upsert-page-content",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/upsert-page-content.mdx",tags:[],version:"current",frontMatter:{id:"upsert-page-content",title:"upsertPageContent"},sidebar:"apisSidebar",previous:{title:"upsertCollectionContent",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/upsert-collection-content"},next:{title:"upsertStorefrontNavSettings",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/upsert-storefront-nav-settings"}},u={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>PageContentUpsertInput</code>)",id:"input-pagecontentupsertinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>PageContent</code>",id:"pagecontent",level:4}],l={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add or Update PageContent for an existing Page."),(0,o.kt)("p",null,"Requires the page/write permission on the given DemandHq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"upsertPageContent(\n  input: PageContentUpsertInput!\n): PageContent!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-pagecontentupsertinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-content-upsert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PageContentUpsertInput")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"pagecontent"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-content"},(0,o.kt)("inlineCode",{parentName:"a"},"PageContent"))),(0,o.kt)("p",null,"This is the actual content of the page"))}m.isMDXComponent=!0}}]);