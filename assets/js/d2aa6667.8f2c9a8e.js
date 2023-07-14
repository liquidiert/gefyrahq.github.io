"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),g=a,d=c["".concat(p,".").concat(g)]||c[g]||m[g]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1529:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={toc:[{value:"Running Gefyra",id:"running-gefyra",level:2},{value:"Cleaning up",id:"cleaning-up",level:2}]},o="wrapper";function i(e){let{components:t,...r}=e;return(0,a.kt)(o,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"running-gefyra"},"Running Gefyra"),(0,a.kt)("div",null,r.hideUp?"":(0,a.kt)("div",null,(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Set up Gefyra with ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra up\n")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run a local Docker image with Gefyra in order to  make it part of the cluster."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Build your Docker image with a local tag, for example from the testing directory:\n",(0,a.kt)("inlineCode",{parentName:"li"},"cd testing/images/ && docker build -f Dockerfile.local . -t pyserver")),(0,a.kt)("li",{parentName:"ol"},"Execute Gefyra's run command:    ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra run -i pyserver -N mypyserver -n default\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"exec")," into the running container and look around. You will find the container to run within your Kubernetes cluster.  ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it mypyserver bash\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget -O- hello-nginx\n")),"will print out the website of the cluster service ",(0,a.kt)("em",{parentName:"li"},"hello-nginx")," from within the cluster."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a bridge in order to intercept the traffic to the cluster application with the one running locally:    "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra bridge -N mypyserver -n default --port 8000:80 --target deploy/hello-nginxdemo/hello-nginx\n")),(0,a.kt)("p",null,"Check out the locally running server comes up under: ",(0,a.kt)("a",{parentName:"p",href:"http://hello.127.0.0.1.nip.io:8080/"},"http://hello.127.0.0.1.nip.io:8080/"),"  "),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"List all running ",(0,a.kt)("em",{parentName:"li"},"bridges"),":  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra list --bridges\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Unbridge")," the local container and reset the cluster to its original state: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra unbridge -N mypybridge\n")),(0,a.kt)("p",null,"Check out the initial response from: ",(0,a.kt)("a",{parentName:"p",href:"http://hello.127.0.0.1.nip.io:8080/"},"http://hello.127.0.0.1.nip.io:8080/"),"  "),(0,a.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Remove Gefyra's components from the cluster with ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra down\n")))}i.isMDXComponent=!0},1e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),l=r(1529);const o={layout:"page",title:"Colima Kubernetes",permalink:"/getting-started/colima-kubernetes/",nav_order:8,parent:"Getting Started"},i="Getting started with Gefyra and Colima Kubernetes",p={unversionedId:"getting-started/colima",id:"getting-started/colima",title:"Colima Kubernetes",description:"This guide will show you how to use Gefyra for the local development of a Kubernetes application running in Colima Kubernetes.",source:"@site/docs/getting-started/colima.mdx",sourceDirName:"getting-started",slug:"/getting-started/colima",permalink:"/docs/getting-started/colima",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/colima.mdx",tags:[],version:"current",frontMatter:{layout:"page",title:"Colima Kubernetes",permalink:"/getting-started/colima-kubernetes/",nav_order:8,parent:"Getting Started"},sidebar:"docsSidebar",previous:{title:"Elastic Kubernetes Service (EKS)",permalink:"/docs/getting-started/eks"},next:{title:"SysEleven MetaKube Kubernetes",permalink:"/docs/getting-started/sys11"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2}],c={toc:u},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-gefyra-and-colima-kubernetes"},"Getting started with Gefyra and Colima Kubernetes"),(0,a.kt)("p",null,"This guide will show you how to use Gefyra for the local development of a Kubernetes application running in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/abiosoft/colima"},"Colima Kubernetes"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the ",(0,a.kt)("a",{parentName:"p",href:"https://gefyra.dev/installation"},"installation")," for your preferred platform.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a local Kubernetes cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"colima"),":    "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"colima start --kubernetes --network-address\n")),(0,a.kt)("p",null,"Find out the network address of your VM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"colima list\nPROFILE    STATUS     ARCH      CPUS    MEMORY    DISK     RUNTIME       ADDRESS\ndefault    Running    x86_64    2       2GiB      60GiB    docker+k3s    192.168.106.2\n")),(0,a.kt)("p",null,"Install Gefyra components in the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gefyra up --host=192.168.106.2\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Apply some workload, for example from the testing directory of this repo:  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml\n")),(0,a.kt)("p",null,"Check out this workload running under: ",(0,a.kt)("a",{parentName:"p",href:"http://hello.127.0.0.1.nip.io:8080/"},"http://hello.127.0.0.1.nip.io:8080/")),(0,a.kt)(l.ZP,{hideUp:!0,mdxType:"GettingStartedCommon"}),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Remove the locally running Kubernetes cluster with ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"colima delete\n")))}g.isMDXComponent=!0}}]);