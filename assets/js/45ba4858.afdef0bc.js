"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[18580],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=p,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1222:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(87462),p=t(63366),o=(t(67294),t(3905)),a=["components"],i={id:"supply-event-connection",title:"SupplyEventConnection",hide_table_of_contents:!1},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-connection",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-connection",title:"SupplyEventConnection",description:"Paginate through SupplyEvents",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-connection.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-connection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-connection",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-connection.mdx",tags:[],version:"current",frontMatter:{id:"supply-event-connection",title:"SupplyEventConnection",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"Supplier",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier"},next:{title:"SupplyEventEdge",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-edge"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>[SupplyEventEdge]!</code>)",id:"edges-supplyeventedge",level:4},{value:"<code>nodes</code> (<code>[SupplyEvent]!</code>)",id:"nodes-supplyevent",level:4},{value:"<code>pageInfo</code> (<code>PageInfo!</code>)",id:"pageinfo-pageinfo",level:4}],d={toc:u};function f(e){var n=e.components,t=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paginate through SupplyEvents"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplyEventConnection {\n  edges: [SupplyEventEdge]!\n  nodes: [SupplyEvent]!\n  pageInfo: PageInfo!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-supplyeventedge"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"edges"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[SupplyEventEdge]!")),")"),(0,o.kt)("h4",{id:"nodes-supplyevent"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event"},(0,o.kt)("inlineCode",{parentName:"a"},"[SupplyEvent]!")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"pageInfo"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"))}f.isMDXComponent=!0}}]);