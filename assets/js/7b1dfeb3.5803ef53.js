"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[45418],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(i,".").concat(f)]||s[f]||u[f]||l;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},76147:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],c={id:"collection-rules",title:"CollectionRules"},i=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rules",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rules",title:"CollectionRules",description:"The rules to determine whether a Product should be part of a Collection.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rules.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rules",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rules",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rules.mdx",tags:[],version:"current",frontMatter:{id:"collection-rules",title:"CollectionRules"},sidebar:"apisSidebar",previous:{title:"CollectionRule",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rule"},next:{title:"CollectionTags",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-tags"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>all</code> (<code>CollectionRule</code>)",id:"all-collectionrule",level:4},{value:"<code>any</code> (<code>CollectionRule</code>)",id:"any-collectionrule",level:4},{value:"<code>not</code> (<code>CollectionRule</code>)",id:"not-collectionrule",level:4}],s={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The rules to determine whether a Product should be part of a Collection."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type CollectionRules {\n  all: [CollectionRule]\n  any: [CollectionRule]\n  not: [CollectionRule]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"all-collectionrule"},(0,l.kt)("inlineCode",{parentName:"h4"},"all")," (",(0,l.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rule"},(0,l.kt)("inlineCode",{parentName:"a"},"CollectionRule")),")"),(0,l.kt)("p",null,"ALL of the rules for this array must match a given prospective Product"),(0,l.kt)("h4",{id:"any-collectionrule"},(0,l.kt)("inlineCode",{parentName:"h4"},"any")," (",(0,l.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rule"},(0,l.kt)("inlineCode",{parentName:"a"},"CollectionRule")),")"),(0,l.kt)("p",null,"ANY of the rules for this array must match a given prospective Product"),(0,l.kt)("h4",{id:"not-collectionrule"},(0,l.kt)("inlineCode",{parentName:"h4"},"not")," (",(0,l.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/collection-rule"},(0,l.kt)("inlineCode",{parentName:"a"},"CollectionRule")),")"),(0,l.kt)("p",null,"If rules in this array match, a prospective Product should be excluded from the Collection"))}f.isMDXComponent=!0}}]);