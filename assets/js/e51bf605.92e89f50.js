"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3224],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={title:"Token",sidebar_position:2},l="Token",p={unversionedId:"developers/shared-apis/adminidentity-api/rest/token",id:"developers/shared-apis/adminidentity-api/rest/token",isDocsHomePage:!1,title:"Token",description:"This route is one of the few REST routes in the APIs, and is used to get access tokens for apps.",source:"@site/docs/developers/shared-apis/adminidentity-api/rest/token.md",sourceDirName:"developers/shared-apis/adminidentity-api/rest",slug:"/developers/shared-apis/adminidentity-api/rest/token",permalink:"/developers/shared-apis/adminidentity-api/rest/token",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/rest/token.md",version:"current",sidebarPosition:2,frontMatter:{title:"Token",sidebar_position:2}},d=[{value:"Rate Limiting",id:"rate-limiting",children:[]},{value:"Method",id:"method",children:[]},{value:"Request Body",id:"request-body",children:[]},{value:"Response Body",id:"response-body",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"token"},"Token"),(0,i.kt)("p",null,"This route is one of the few REST routes in the APIs, and is used to get access tokens for apps."),(0,i.kt)("h2",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning")," This route is heavily rate limited in order to curb brute force attacks. You are allowed to make 5 calls to this route every 10 seconds, at which point you will receive a 429 (Too Many Requests). Please setup your apps to have a single instance create and refresh tokens and the other instances share this token."),(0,i.kt)("p",null,"Since this route does not have a token, IP address is used as the identifier."),(0,i.kt)("h2",{id:"method"},"Method"),(0,i.kt)("p",null,"This route only accepts POST calls."),(0,i.kt)("h2",{id:"request-body"},"Request Body"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"appClientId"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"This is one of your app's client IDs. This can be found in the Identity Portal when you create an app. This is a string composed of appcl, a dash, and an UUID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"appSecret"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"This must be the matching app secret to the Client ID. This can only be seen once, when you initially create the app, or when you reset this secret.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "appClientId": "appcl-xxxxx-xxxx-xxxx-xxxxx",\n    "appSecret": "kdn1n3prn246$^&%^*34lwrngknfvoknspdnfpsnsfnbpsfnbp"\n}\n')),(0,i.kt)("h2",{id:"response-body"},"Response Body"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accessToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the access token you will use to access the APIs your app has access to. It is a JSON web token (JWT).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expiresAt"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Epoch date in seconds that the token expires at. Generally this is 6 hours from time of obtaining it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"idToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"This is a token that will eventually be used to control aspects of your app. Rarely used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"This is a token that can be used to refresh the other tokens.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "accessToken": "...",\n    "expiresAt": "1234567890",\n    "idToken": "...",\n    "refreshToken": "..."\n}\n')))}c.isMDXComponent=!0}}]);