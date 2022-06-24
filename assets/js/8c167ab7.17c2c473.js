"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[55943],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),f=l,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},40838:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(87462),l=t(63366),o=(t(67294),t(3905)),a=["components"],i={id:"collection-rules-input",title:"CollectionRulesInput",hide_table_of_contents:!1},p=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input",title:"CollectionRulesInput",description:"Input object to set rules for a Collection",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input.mdx",tags:[],version:"current",frontMatter:{id:"collection-rules-input",title:"CollectionRulesInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"CollectionRuleInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rule-input"},next:{title:"CollectionSortInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-sort-input"}},u={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>all</code> (<code>[CollectionRuleInput]</code>)",id:"all-collectionruleinput",level:4},{value:"<code>any</code> (<code>[CollectionRuleInput]</code>)",id:"any-collectionruleinput",level:4},{value:"<code>not</code> (<code>[CollectionRuleInput]</code>)",id:"not-collectionruleinput",level:4}],s={toc:d};function f(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input object to set rules for a Collection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CollectionRulesInput {\n  all: [CollectionRuleInput]\n  any: [CollectionRuleInput]\n  not: [CollectionRuleInput]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"all-collectionruleinput"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"all"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rule-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[CollectionRuleInput]")),")"),(0,o.kt)("p",null,"ALL of the rules for this array must match a given prospective Product"),(0,o.kt)("h4",{id:"any-collectionruleinput"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"any"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rule-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[CollectionRuleInput]")),")"),(0,o.kt)("p",null,"ANY of the rules for this array must match a given prospective Product"),(0,o.kt)("h4",{id:"not-collectionruleinput"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"not"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rule-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[CollectionRuleInput]")),")"),(0,o.kt)("p",null,"If rules in this array match, a prospective Product should be excluded from the Collection"))}f.isMDXComponent=!0}}]);