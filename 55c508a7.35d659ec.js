(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),a=(n(0),n(182)),c={id:"why-openvpn",title:"Why do I Need OpenVPN?",sidebar_label:"Why do I Need OpenVPN?"},i={id:"openvpn/why-openvpn",title:"Why do I Need OpenVPN?",description:"The TryHackMe platform is ran through a cloud-based environment. Due to the fact that the large majority of the deployable content on the platform is of vulnerable Virtual Machines (VMs), they are placed into an isolated network away from the wider-internet. OpenVPN connects you to this isolated network so that you are able to access the instance assigned to you.",source:"@site/docs/openvpn/why.md",permalink:"/docs/openvpn/why-openvpn",lastUpdatedBy:"Ben Eriksson",lastUpdatedAt:1584992921,sidebar_label:"Why do I Need OpenVPN?"},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The TryHackMe platform is ran through a cloud-based environment. Due to the fact that the large majority of the deployable content on the platform is of vulnerable Virtual Machines (VMs), they are placed into an isolated network away from the wider-internet. OpenVPN connects you to this isolated network so that you are able to access the instance assigned to you."),Object(a.b)("p",null,"Note, if you are a subscriber, TryHackMe provides already-connected instances of ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"https://tryhackme.com/room/kali"}),"Kali Linux")),", removing the need to use OpenVPN. These non-persistent instances can be interacted with via the following means:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Directly within your Browser"),Object(a.b)("li",{parentName:"ol"},"Remote Desktop Protocol (RDP) (I.e. Remmina for Linux, or Microsoft's client if using Windows)"),Object(a.b)("li",{parentName:"ol"},"SSH (Secure Socket Shell)")))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?o.a.createElement(y,i({ref:t},p,{components:n})):o.a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);