"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[99771],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34875:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],c={id:"customer-marketing-consent",title:"CustomerMarketingConsent",hide_table_of_contents:!1},i=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/customer-marketing-consent",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/customer-marketing-consent",title:"CustomerMarketingConsent",description:"Details about the Customer's marketing consent",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/customer-marketing-consent.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/customer-marketing-consent",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/customer-marketing-consent",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/customer-marketing-consent.mdx",tags:[],version:"current",frontMatter:{id:"customer-marketing-consent",title:"CustomerMarketingConsent",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"CustomerEdge",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/customer-edge"},next:{title:"CustomerTags",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/customer-tags"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>consentLevel</code> (<code>CustomerMarketingConsentLevel!</code>)",id:"consentlevel-customermarketingconsentlevel",level:4},{value:"<code>consentedAt</code> (<code>Date!</code>)",id:"consentedat-date",level:4},{value:"<code>hasConsented</code> (<code>Boolean!</code>)",id:"hasconsented-boolean",level:4},{value:"<code>source</code> (<code>String</code>)",id:"source-string",level:4}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Details about the Customer's marketing consent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CustomerMarketingConsent {\n  consentLevel: CustomerMarketingConsentLevel!\n  consentedAt: Date!\n  hasConsented: Boolean!\n  source: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"consentlevel-customermarketingconsentlevel"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"consentLevel"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/customer-marketing-consent-level"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerMarketingConsentLevel!")),")"),(0,o.kt)("p",null,"The level at which the Customer has consented to marketing"),(0,o.kt)("h4",{id:"consentedat-date"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"consentedAt"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!")),")"),(0,o.kt)("p",null,"The date the associated Customer agreed to the marketing consent"),(0,o.kt)("h4",{id:"hasconsented-boolean"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"hasConsented"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,o.kt)("h4",{id:"source-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"source"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Optional field to store where consent was sourced from"))}u.isMDXComponent=!0}}]);