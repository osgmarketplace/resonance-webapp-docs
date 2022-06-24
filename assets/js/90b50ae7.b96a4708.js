"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[21823],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(t),u=i,m=l["".concat(s,".").concat(u)]||l[u]||f[u]||o;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},61936:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={id:"user-notification-connection",title:"UserNotificationConnection",hide_table_of_contents:!1},s=void 0,p={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection",id:"developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection",title:"UserNotificationConnection",description:"Paginate through UserNotifications",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/objects",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection.mdx",tags:[],version:"current",frontMatter:{id:"user-notification-connection",title:"UserNotificationConnection",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"PublicIdentity",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity"},next:{title:"UserNotificationEdge",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-edge"}},d={},f=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>[UserNotificationEdge]!</code>)",id:"edges-usernotificationedge",level:4},{value:"<code>nodes</code> (<code>[UserNotification]!</code>)",id:"nodes-usernotification",level:4},{value:"<code>pageInfo</code> (<code>PageInfo!</code>)",id:"pageinfo-pageinfo",level:4}],l={toc:f};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paginate through UserNotifications"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserNotificationConnection {\n  edges: [UserNotificationEdge]!\n  nodes: [UserNotification]!\n  pageInfo: PageInfo!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-usernotificationedge"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"edges"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserNotificationEdge]!")),")"),(0,o.kt)("h4",{id:"nodes-usernotification"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserNotification]!")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"pageInfo"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"))}u.isMDXComponent=!0}}]);