"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[72012],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||p;return n?t.createElement(m,a(a({ref:r},u),{},{components:n})):t.createElement(m,a({ref:r},u))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<p;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19212:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var t=n(87462),i=n(63366),p=(n(67294),n(3905)),a=["components"],o={id:"include",title:"include"},l=void 0,c={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/directives/include",id:"developers/supplier-apis/supply-api/graphql/reference/directives/include",title:"include",description:"Directs the executor to include this field or fragment only when the if argument is true.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/directives/include.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/directives",slug:"/developers/supplier-apis/supply-api/graphql/reference/directives/include",permalink:"/developers/supplier-apis/supply-api/graphql/reference/directives/include",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/directives/include.mdx",tags:[],version:"current",frontMatter:{id:"include",title:"include"},sidebar:"apisSidebar",previous:{title:"deprecated",permalink:"/developers/supplier-apis/supply-api/graphql/reference/directives/deprecated"},next:{title:"skip",permalink:"/developers/supplier-apis/supply-api/graphql/reference/directives/skip"}},u={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>if</code> (<code>Boolean</code>)",id:"if-boolean",level:4}],d={toc:s};function f(e){var r=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Directs the executor to include this field or fragment only when the ",(0,p.kt)("inlineCode",{parentName:"p"},"if")," argument is true."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @include(\n  if: Boolean!\n)\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"if-boolean"},(0,p.kt)("inlineCode",{parentName:"h4"},"if")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/boolean"},(0,p.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,p.kt)("p",null,"Included when true."))}f.isMDXComponent=!0}}]);