"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[32787],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],a={sidebar_position:1},s="CDN Concepts",p={unversionedId:"concepts/cdn/cdn-concepts",id:"concepts/cdn/cdn-concepts",title:"CDN Concepts",description:"At the heart of every website lies its content, and likewise, at the heart of Resonance lies the CDN.",source:"@site/docs/concepts/cdn/cdn-concepts.md",sourceDirName:"concepts/cdn",slug:"/concepts/cdn/cdn-concepts",permalink:"/concepts/cdn/cdn-concepts",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/cdn/cdn-concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"conceptsSidebar",previous:{title:"SupplierVariant",permalink:"/concepts/suppliers/entities/SupplierVariant"},next:{title:"Image Processor",permalink:"/concepts/cdn/image-processor"}},l={},u=[{value:"Images",id:"images",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"cdn-concepts"},"CDN Concepts"),(0,c.kt)("p",null,"At the heart of every website lies its content, and likewise, at the heart of Resonance lies the CDN."),(0,c.kt)("p",null,"You will interact with the CDN initally through other APIs (Supply and Demand, say, to upload an image). This ensures that every piece of content is valid, stored, and in the correct location."),(0,c.kt)("p",null,"Once you have done so, you can use that uploaded image directly (Typically a URL like ",(0,c.kt)("inlineCode",{parentName:"p"},"https://cdn.buildresonance.com/images/{imageId}/image.jpg")," that you can place in an ",(0,c.kt)("inlineCode",{parentName:"p"},"<img src />")," tag)."),(0,c.kt)("p",null,"Our CDN is globally distributed, and provides local caching of assets to every region across the globe individually for lowest possible latency for requests."),(0,c.kt)("h2",{id:"images"},"Images"),(0,c.kt)("p",null,'Images are the most used type of content item, and as such, additional functionality has been provided specific to their use. When creating an image request to the API, you can either use the URL with no modification whatsoever, or provide "edits" to the ',(0,c.kt)("a",{parentName:"p",href:"image-processor"},"image processor"),", and the image will be modified on the fly while being returned."))}f.isMDXComponent=!0}}]);