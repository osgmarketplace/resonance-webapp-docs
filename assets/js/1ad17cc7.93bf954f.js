"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9354],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9040:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Overall API Concepts",sidebar_position:1},s="Overall API Concepts",p={unversionedId:"developers/overall-concepts",id:"developers/overall-concepts",title:"Overall API Concepts",description:"The APIs are split into 3 different categories based on the area of the business they interact with: DemandHQ, Supplier, and Shared (both).",source:"@site/docs/developers/overall-concepts.md",sourceDirName:"developers",slug:"/developers/overall-concepts",permalink:"/developers/overall-concepts",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/overall-concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overall API Concepts",sidebar_position:1},sidebar:"apisSidebar",next:{title:"Authentication",permalink:"/developers/authentication"}},c=[{value:"Domains",id:"domains",children:[],level:2},{value:"Apps",id:"apps",children:[],level:2},{value:"IDs",id:"ids",children:[],level:2},{value:"GraphQL",id:"graphql",children:[{value:"GraphQL Developer Tools",id:"graphql-developer-tools",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overall-api-concepts"},"Overall API Concepts"),(0,o.kt)("p",null,"The APIs are split into 3 different categories based on the area of the business they interact with: DemandHQ, Supplier, and Shared (both)."),(0,o.kt)("h2",{id:"domains"},"Domains"),(0,o.kt)("p",null,"The APIs are split into areas of context (domains):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"shared-apis/concepts"},"Shared APIs"),": This includes the Admin Identity API. This API is not specific to Supply or Demand, and instead provide cross cutting functionality."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"supplier-apis/concepts"},"Supplier APIs"),": This includes the Supply API. In general, these APIs are used to interact with Suppliers, and can be used to manage inventory or purchase orders."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"demandhq-apis/concepts"},"DemandHQ APIs"),": This includes a Demand HQ Admin API, as well as a Storefront and Search API. These APIs can be used to interact with Demand HQ's. This is either directly, in the case of the Admin API, or to populate a storefront, in the case of the Storefront and Search APIs.")),(0,o.kt)("p",null,"Each API is further split into domain groups, and details on these can be found in the API documentation."),(0,o.kt)("h2",{id:"apps"},"Apps"),(0,o.kt)("p",null,"Apps can be created for, and installed on, both Suppliers and DemandHQs. Inside the DemandHQ domain, you can create either Admin or Storefront apps. Apps will be specific to one of these three, however, and cannot cross the boundary to have more than one purpose."),(0,o.kt)("h2",{id:"ids"},"IDs"),(0,o.kt)("p",null,"IDs are prefixed with a 5-character type, split by a dash, and then have a date created at, sortable, random ID appended to it. i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"prdct-adthcnhT234podvntae%g"),". All IDs are globally unique to the platform."),(0,o.kt)("p",null,"Two IDs are UUIDs due to case insensitivity, and these are User IDs (UserNames) and App Client IDs."),(0,o.kt)("h2",{id:"graphql"},"GraphQL"),(0,o.kt)("p",null,"All APIs (with a few exceptions) for the platform are based on GraphQL."),(0,o.kt)("h3",{id:"graphql-developer-tools"},"GraphQL Developer Tools"),(0,o.kt)("p",null,"GraphQL related developer tools are a very common way to discover API functionality, and we support any of them that use the GraphQL introspection query. This includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphiql"},"GraphiQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-playground"},"GraphQL Playground")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/studio/explorer/"},"Apollo Studio"))),(0,o.kt)("p",null,"Note that you must authenticate in order to use these tools, however. A token can be obtained in the Identity Portal Developer Settings."),(0,o.kt)("p",null,"Reference documentation is also generated directly here for easy reference."))}u.isMDXComponent=!0}}]);