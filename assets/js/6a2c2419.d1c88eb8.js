"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5021],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=p,v=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(v,i(i({ref:r},c),{},{components:t})):n.createElement(v,i({ref:r},c))}));function f(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4700:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return f}});var n=t(7462),p=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"supplier-variant-locale-create-input",title:"SupplierVariantLocaleCreateInput"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input",title:"SupplierVariantLocaleCreateInput",description:"The necessary fields in order to create a new supplierVariantLocale",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-locale-create-input",title:"SupplierVariantLocaleCreateInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantInCompositeCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-in-composite-create-input"},next:{title:"SupplierVariantLocaleUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>featureBullets</code> (<code>String</code>)",id:"featurebullets-string",level:4},{value:"<code>isDefault</code> (<code>Boolean</code>)",id:"isdefault-boolean",level:4},{value:"<code>localeType</code> (<code>ResonanceLocaleType</code>)",id:"localetype-resonancelocaletype",level:4},{value:"<code>productDescription</code> (<code>String</code>)",id:"productdescription-string",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>supplierVariantId</code> (<code>ID</code>)",id:"suppliervariantid-id",level:4}],d={toc:u};function f(e){var r=e.components,t=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The necessary fields in order to create a new supplierVariantLocale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantLocaleCreateInput {\n  featureBullets: [String]\n  isDefault: Boolean!\n  localeType: ResonanceLocaleType!\n  productDescription: String\n  supplierId: ID!\n  supplierVariantId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"featurebullets-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"featureBullets")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"isdefault-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"isDefault")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"localetype-resonancelocaletype"},(0,a.kt)("inlineCode",{parentName:"h4"},"localeType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"),(0,a.kt)("h4",{id:"productdescription-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"productDescription")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"supplierid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"suppliervariantid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}f.isMDXComponent=!0}}]);