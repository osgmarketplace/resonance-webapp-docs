"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[92166],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=s,g=u["".concat(o,".").concat(f)]||u[f]||c[f]||a;return t?n.createElement(g,p(p({ref:r},d),{},{components:t})):n.createElement(g,p({ref:r},d))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34606:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=t(87462),s=t(63366),a=(t(67294),t(3905)),p=["components"],i={id:"address",title:"Address"},o=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/address",id:"developers/supplier-apis/supply-api/graphql/reference/objects/address",title:"Address",description:"The globally used Address of Resonance",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/address.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/address",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/address",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/address.mdx",tags:[],version:"current",frontMatter:{id:"address",title:"Address"},sidebar:"apisSidebar",previous:{title:"upsertSupplierVariantSupplements",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-variant-supplements"},next:{title:"AppInstallationOutput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/app-installation-output"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>city</code> (<code>String</code>)",id:"city-string",level:4},{value:"<code>country</code> (<code>String</code>)",id:"country-string",level:4},{value:"<code>phoneNumber</code> (<code>String</code>)",id:"phonenumber-string",level:4},{value:"<code>postalCode</code> (<code>String</code>)",id:"postalcode-string",level:4},{value:"<code>state</code> (<code>String</code>)",id:"state-string",level:4},{value:"<code>streetAddress1</code> (<code>String</code>)",id:"streetaddress1-string",level:4},{value:"<code>streetAddress2</code> (<code>String</code>)",id:"streetaddress2-string",level:4}],u={toc:c};function f(e){var r=e.components,t=(0,s.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The globally used Address of Resonance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Address {\n  city: String!\n  country: String!\n  phoneNumber: String\n  postalCode: String!\n  state: String!\n  streetAddress1: String!\n  streetAddress2: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"city-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"city")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The city of the address"),(0,a.kt)("h4",{id:"country-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"country")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The country of the address"),(0,a.kt)("h4",{id:"phonenumber-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"phoneNumber")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The phone number of the address. Format +11231231234"),(0,a.kt)("h4",{id:"postalcode-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"postalCode")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The zip or postal code of the address"),(0,a.kt)("h4",{id:"state-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"state")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The state of the address"),(0,a.kt)("h4",{id:"streetaddress1-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"streetAddress1")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The first line of the street address"),(0,a.kt)("h4",{id:"streetaddress2-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"streetAddress2")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The second line of the street address"))}f.isMDXComponent=!0}}]);