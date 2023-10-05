"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[7831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"What are Gefyra Clients?",sidebar_position:1},o="Gefyra Clients",s={unversionedId:"shared-environments/clients",id:"version-2.0.0/shared-environments/clients",title:"What are Gefyra Clients?",description:"Gefyra Clients provide a way to grant multiple clients (i.e. users, robots, pipelines, etc.) limited access to a Kubernetes cluster in order to use Gefyra's capabilities.",source:"@site/versioned_docs/version-2.0.0/shared-environments/clients.md",sourceDirName:"shared-environments",slug:"/shared-environments/clients",permalink:"/docs/shared-environments/clients",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.0/shared-environments/clients.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"What are Gefyra Clients?",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Setting Up Shared Kubernetes Clusters",permalink:"/docs/shared-environments/"},next:{title:"Installing Gefyra in a Cluster",permalink:"/docs/shared-environments/installation"}},c={},l=[{value:"Workflow for teams",id:"workflow-for-teams",level:2}],p={toc:l},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gefyra-clients"},"Gefyra Clients"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"TLDR;")),(0,i.kt)("p",{parentName:"admonition"},"Gefyra Clients provide a way to grant multiple clients (i.e. users, robots, pipelines, etc.) limited access to a Kubernetes cluster in order to use Gefyra's capabilities.")),(0,i.kt)("p",null,"Gefyra introduced the concept of ",(0,i.kt)("strong",{parentName:"p"},"Gefyra Clients"),". These are to better manage access to the cluster.\nCreating a new client via ",(0,i.kt)("inlineCode",{parentName:"p"},"gefyra client create")," generates a dedicated Service Account for the client. The corresponding\nclient file, which contains the connection parameters for the Service Account can retrieved through ",(0,i.kt)("inlineCode",{parentName:"p"},"gefyra client config"),".\nThis file can be then distributed to anyone which needs to ",(0,i.kt)("inlineCode",{parentName:"p"},"connections connect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bridge")," workloads in the given cluster.\nPermissions of the service account are limited, so that not everyone gets admin-access to the cluster."),(0,i.kt)("h2",{id:"workflow-for-teams"},"Workflow for teams"),(0,i.kt)("mermaid",{value:'flowchart TD;\n    install["DevOps installs Gefyra (<a href=\'/docs/cli#install\'>gefyra install</a>)"]\n    generate["DevOps generates Gefyra client (<a href=\'/docs/cli#clients\'>gefyra clients create</a>)"]\n    save["DevOps saves Gefyra connection files (<a href=\'/docs/cli#clients-config\'>gefyra clients config</a>)"]\n    distribute["DevOps distributes client file"]\n    connect["Developer connects via client file (<a href=\'/docs/cli#connections\'>gefyra connections</a>)"]\n    run["Developer runs workload (<a href=\'/docs/cli#run\'>gefyra run</a>)"]\n    install--\x3egenerate\n    generate--\x3esave\n    save--\x3edistribute\n    distribute--\x3econnect\n    connect--\x3erun'}))}f.isMDXComponent=!0}}]);