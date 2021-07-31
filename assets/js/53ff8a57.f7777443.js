"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5119],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},392:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},p="What is Resonance?",c={unversionedId:"concepts/intro",id:"concepts/intro",isDocsHomePage:!1,title:"What is Resonance?",description:"Resonance is an e-commerce platform focused on Marketplaces. A Marketplace is an e-commerce site with multiple suppliers.",source:"@site/docs/concepts/intro.md",sourceDirName:"concepts",slug:"/concepts/intro",permalink:"/concepts/intro",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"conceptsSidebar",next:{title:"Supplier Concepts",permalink:"/concepts/suppliers/supplier-concepts"}},u=[{value:"Main Concepts",id:"main-concepts",children:[{value:"Suppliers",id:"suppliers",children:[]},{value:"DemandHQs",id:"demandhqs",children:[]},{value:"User Accounts",id:"user-accounts",children:[]},{value:"Apps",id:"apps",children:[]},{value:"Subscriptions",id:"subscriptions",children:[]}]}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-resonance"},"What is Resonance?"),(0,a.kt)("p",null,"Resonance is an e-commerce platform focused on Marketplaces. A Marketplace is an e-commerce site with multiple suppliers."),(0,a.kt)("h2",{id:"main-concepts"},"Main Concepts"),(0,a.kt)("p",null,"Resonance is composed of ",(0,a.kt)("strong",{parentName:"p"},"Suppliers")," and ",(0,a.kt)("strong",{parentName:"p"},"DemandHQs"),"."),(0,a.kt)("h3",{id:"suppliers"},"Suppliers"),(0,a.kt)("p",null,"Suppliers are where goods are supplied. This could be a warehouse, a group of digital creations, or even your garage. Sample important metrics are inventory quantity and cost."),(0,a.kt)("h3",{id:"demandhqs"},"DemandHQs"),(0,a.kt)("p",null,"DemandHQs are where goods are sold. DemandHQs are composed of one to many storefronts. These can be things like websites, mobile apps, or other, 3rd party marketplaces. Sample important metrics are quantity sold and price. ",(0,a.kt)("strong",{parentName:"p"},"A DemandHQ must be populated by Suppliers"),". Every order placed on a storefront will be routed to a Supplier for delivery. The payment will be split between the Supplier and the DemandHQ according to the Cost dictated by the Supplier."),(0,a.kt)("p",null,"DK: How is shipping handled?"),(0,a.kt)("h3",{id:"user-accounts"},"User Accounts"),(0,a.kt)("p",null,"Your user account can access and create any number of Suppliers and DemandHQs. A Supplier can approve their supply be open to any number of DemandHQs and a DemandHQ can implement any number of Suppliers."),(0,a.kt)("p",null,"Customer accounts in storefronts are separate and unique to each DemandHQ, but are shared across storefronts."),(0,a.kt)("h3",{id:"apps"},"Apps"),(0,a.kt)("p",null,"Apps can be created for, and installed on, both Suppliers and DemandHQs. Apps will be specific to one or the other, however."),(0,a.kt)("h3",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("p",null,"DemandHQs require having a subscription in order to activate. Suppliers are free to create and maintain."))}d.isMDXComponent=!0}}]);