"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[16814],{3905:function(e,r,t){t.d(r,{Zo:function(){return g},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),l=p(t),m=a,u=l["".concat(c,".").concat(m)]||l[m]||s[m]||o;return t?n.createElement(u,i(i({ref:r},g),{},{components:t})):n.createElement(u,i({ref:r},g))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},64386:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],d={id:"product-term-aggregations",title:"ProductTermAggregations",hide_table_of_contents:!1},c=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/product-term-aggregations",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/product-term-aggregations",title:"ProductTermAggregations",description:"A Map of several fields of Product and term aggregations for each",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/product-term-aggregations.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product-term-aggregations",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product-term-aggregations",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/product-term-aggregations.mdx",tags:[],version:"current",frontMatter:{id:"product-term-aggregations",title:"ProductTermAggregations",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"ProductTags",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product-tags"},next:{title:"Product",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product"}},g={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>manufacturers</code> (<code>[TermAggregation!]</code>)",id:"manufacturers-termaggregation",level:4},{value:"<code>tags</code> (<code>[TermAggregation!]</code>)",id:"tags-termaggregation",level:4},{value:"<code>vendors</code> (<code>[TermAggregation!]</code>)",id:"vendors-termaggregation",level:4}],l={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Map of several fields of Product and term aggregations for each"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductTermAggregations {\n  manufacturers: [TermAggregation!]\n  tags: [TermAggregation!]\n  vendors: [TermAggregation!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"manufacturers-termaggregation"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"manufacturers"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]")),")"),(0,o.kt)("h4",{id:"tags-termaggregation"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"tags"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]")),")"),(0,o.kt)("h4",{id:"vendors-termaggregation"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"vendors"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]")),")"))}m.isMDXComponent=!0}}]);