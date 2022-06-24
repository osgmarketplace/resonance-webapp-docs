"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[94170],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(i,".").concat(m)]||u[m]||l[m]||s;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66089:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return l}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],d={id:"customer-address-update-input",title:"CustomerAddressUpdateInput",hide_table_of_contents:!1},i=void 0,p={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/inputs/customer-address-update-input",id:"developers/demandhq-apis/storefront-api/graphql/reference/inputs/customer-address-update-input",title:"CustomerAddressUpdateInput",description:"Input for updating a CustomerAddress",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/inputs/customer-address-update-input.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/customer-address-update-input",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/customer-address-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/inputs/customer-address-update-input.mdx",tags:[],version:"current",frontMatter:{id:"customer-address-update-input",title:"CustomerAddressUpdateInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"CustomerAddressCreateInput",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/customer-address-create-input"},next:{title:"CustomerMarketingConsentInput",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/customer-marketing-consent-input"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>city</code> (<code>String</code>)",id:"city-string",level:4},{value:"<code>company</code> (<code>String</code>)",id:"company-string",level:4},{value:"<code>country</code> (<code>String</code>)",id:"country-string",level:4},{value:"<code>customerAddressId</code> (<code>ID!</code>)",id:"customeraddressid-id",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>phoneNumber</code> (<code>String</code>)",id:"phonenumber-string",level:4},{value:"<code>postalCode</code> (<code>String</code>)",id:"postalcode-string",level:4},{value:"<code>state</code> (<code>String</code>)",id:"state-string",level:4},{value:"<code>streetAddress1</code> (<code>String</code>)",id:"streetaddress1-string",level:4},{value:"<code>streetAddress2</code> (<code>String</code>)",id:"streetaddress2-string",level:4}],u={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Input for updating a CustomerAddress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input CustomerAddressUpdateInput {\n  city: String\n  company: String\n  country: String\n  customerAddressId: ID!\n  name: String\n  phoneNumber: String\n  postalCode: String\n  state: String\n  streetAddress1: String\n  streetAddress2: String\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"city-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"city"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The city of the address"),(0,s.kt)("h4",{id:"company-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"company"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The company associated with the address"),(0,s.kt)("h4",{id:"country-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"country"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The country of the address"),(0,s.kt)("h4",{id:"customeraddressid-id"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"customerAddressId"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,s.kt)("h4",{id:"name-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The name associated with the address, i.e. the Person in the household"),(0,s.kt)("h4",{id:"phonenumber-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"phoneNumber"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The phone number of the address. Format +11231231234"),(0,s.kt)("h4",{id:"postalcode-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"postalCode"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The zip or postal code of the address"),(0,s.kt)("h4",{id:"state-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The state of the address"),(0,s.kt)("h4",{id:"streetaddress1-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"streetAddress1"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The first line of the street address"),(0,s.kt)("h4",{id:"streetaddress2-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"streetAddress2"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"The second line of the street address"))}m.isMDXComponent=!0}}]);