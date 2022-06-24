"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5146],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,f=s["".concat(d,".").concat(m)]||s[m]||l[m]||p;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=s;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<p;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},88946:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var a=t(87462),r=t(63366),p=(t(67294),t(3905)),i=["components"],o={id:"update-nav",title:"updateNav",hide_table_of_contents:!1},d=void 0,u={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-nav",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-nav",title:"updateNav",description:"Update an existing Nav.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-nav.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-nav",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-nav",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-nav.mdx",tags:[],version:"current",frontMatter:{id:"update-nav",title:"updateNav",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"updateDemandHq",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-demand-hq"},next:{title:"updatePageTypeContent",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-page-type-content"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>NavUpdateInput!</code>)",id:"input-navupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>Nav</code>",id:"nav",level:4}],s={toc:l};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Update an existing Nav."),(0,p.kt)("p",null,'Requires the "nav/write" permission on the associated DemandHq.'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"updateNav(\n  input: NavUpdateInput!\n): Nav\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"input-navupdateinput"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"input"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/nav-update-input"},(0,p.kt)("inlineCode",{parentName:"a"},"NavUpdateInput!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"nav"},(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/nav"},(0,p.kt)("inlineCode",{parentName:"a"},"Nav"))),(0,p.kt)("p",null,"Nav is an item within a navigational heirarchy of some kind, most often viewed as a menu."))}m.isMDXComponent=!0}}]);