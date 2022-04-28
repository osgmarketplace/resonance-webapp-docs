"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[88731],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:3},s="Products",l={unversionedId:"concepts/products",id:"concepts/products",title:"Products",description:"Products exist for both DemandHQs and for Suppliers, where they are known as SupplierProducts.",source:"@site/docs/concepts/products.md",sourceDirName:"concepts",slug:"/concepts/products",permalink:"/concepts/products",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/products.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"conceptsSidebar",previous:{title:"Create your Account",permalink:"/concepts/create-your-account"},next:{title:"Tags",permalink:"/concepts/tags"}},u={},p=[{value:"No Option Products",id:"no-option-products",level:2},{value:"Handling Recommendation",id:"handling-recommendation",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"products"},"Products"),(0,a.kt)("p",null,"Products exist for both DemandHQs and for Suppliers, where they are known as SupplierProducts."),(0,a.kt)("h2",{id:"no-option-products"},"No Option Products"),(0,a.kt)("p",null,"Perhaps also thought of as Single Option Products, No Variant Products, or Single Variant Products, these products have a single SKU associated with them and contain no size/color/anything else variations."),(0,a.kt)("h3",{id:"handling-recommendation"},"Handling Recommendation"),(0,a.kt)("p",null,"Since you have full control over your frontend, you can handle this situation anyway you like, but you should be aware of one delicate situation: Products can have variants, but only one variant available. As in, you might only have the Red, but it comes in Blue, Green, and Black. In this case, you likely want to still show the selector, but there are other cases with a single variant you would not."),(0,a.kt)("p",null,"Recommendation for disabling variant selectors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the product's first ",(0,a.kt)("inlineCode",{parentName:"li"},"optionLabel")," to the case sensitive string ",(0,a.kt)("inlineCode",{parentName:"li"},"No Option"),"."),(0,a.kt)("li",{parentName:"ul"},"Set the (only) variant associated with that product's ",(0,a.kt)("inlineCode",{parentName:"li"},"optionValue")," to the case sensitive string ",(0,a.kt)("inlineCode",{parentName:"li"},"No Option"),"."),(0,a.kt)("li",{parentName:"ul"},"Allow your frontend to detect this exact string, and adjust accordingly.")),(0,a.kt)("p",null,"These recommendations will help when using the portals, as the UI will recognize this string and act accordinly as well. It will also have help text and buttons aiding with this task."))}f.isMDXComponent=!0}}]);