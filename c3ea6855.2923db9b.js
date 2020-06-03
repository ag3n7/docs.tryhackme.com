(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var i=t(1),o=t(9),r=(t(0),t(174)),a={id:"openvpn-installing",title:"Installing OpenVPN",sidebar_label:"Installing OpenVPN"},l={id:"openvpn/connecting/openvpn-installing",title:"Installing OpenVPN",description:"## Installing the OpenVPN Client on Linux",source:"@site/docs/openvpn/connecting/installing.md",permalink:"/docs/openvpn/connecting/openvpn-installing",editUrl:"https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master/docs/openvpn/connecting/installing.md",lastUpdatedBy:"James",lastUpdatedAt:1585327306,sidebar_label:"Installing OpenVPN",sidebar:"docs",previous:{title:"Why do I Need OpenVPN?",permalink:"/docs/openvpn/why-openvpn"},next:{title:"Connecting With OpenVPN",permalink:"/docs/openvpn/connecting/openvpn-connecting"}},p=[{value:"Installing the OpenVPN Client on Linux",id:"installing-the-openvpn-client-on-linux",children:[]},{value:"Installing the OpenVPN Client on Windows",id:"installing-the-openvpn-client-on-windows",children:[]}],c={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installing-the-openvpn-client-on-linux"},"Installing the OpenVPN Client on Linux"),Object(r.b)("p",null,"The following documentation assumes that you are using a Linux distribution that uses ",Object(r.b)("inlineCode",{parentName:"p"},"apt-get")," package manager. For example, Ubuntu, Debian and Kali Linux uses this."),Object(r.b)("p",null,"Firstly you will need to open a terminal and update your systems local copy of the apt package lists. It is always good practice to do so before installing any software:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"sudo apt-get update"))),Object(r.b)("p",null,"It is extremely easy to install:"),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"sudo apt-get install openvpn"))),Object(r.b)("h2",{id:"installing-the-openvpn-client-on-windows"},"Installing the OpenVPN Client on Windows"),Object(r.b)("p",null,"OpenVPN have installable binaries for Windows, simply visit the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(i.a)({parentName:"strong"},{href:"https://openvpn.net/community-downloads/"}),"OpenVPN Community Downloads page"))),Object(r.b)("p",null,"There will be a few options, however for convenience sake - this document advises using the intuitive executables, as if you were installing any other application."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/UbePQFE.png",alt:"OpenVPN Windows Downloads"}))))}s.isMDXComponent=!0},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var i=t(0),o=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),s=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=s(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||r;return t?o.a.createElement(m,l({ref:n},c,{components:t})):o.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);