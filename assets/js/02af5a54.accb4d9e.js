"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[6810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3191:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={toc:[{value:"Please provide us with your feedback",id:"please-provide-us-with-your-feedback",level:2}]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"please-provide-us-with-your-feedback"},"Please provide us with your feedback"),(0,a.kt)("p",null,"Did everything work as expected? How was the experience of using Gefyra?\nWe'd appreciate if you could take 2 minutes of your time to fill out our ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/AWT9NparpTVk8E978"},"feedback form"),"."))}l.isMDXComponent=!0},6423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(3191);const i={title:"SysEleven MetaKube Kubernetes",sidebar_position:4},l="Getting started with Gefyra and SysEleven MetaKube",s={unversionedId:"shared-environments/remote-k8s/sys11",id:"version-2.x/shared-environments/remote-k8s/sys11",title:"SysEleven MetaKube Kubernetes",description:"This guide will show you how to use Gefyra for the remote development of a Kubernetes",source:"@site/versioned_docs/version-2.x/shared-environments/remote-k8s/sys11.md",sourceDirName:"shared-environments/remote-k8s",slug:"/shared-environments/remote-k8s/sys11",permalink:"/docs/shared-environments/remote-k8s/sys11",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.x/shared-environments/remote-k8s/sys11.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"SysEleven MetaKube Kubernetes",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Elastic Kubernetes Service (EKS)",permalink:"/docs/shared-environments/remote-k8s/eks"},next:{title:"Technical Details",permalink:"/docs/technical-details/"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup a cluster",id:"setup-a-cluster",level:2},{value:"Running Gefyra",id:"running-gefyra",level:2},{value:"Cleaning up",id:"cleaning-up",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-gefyra-and-syseleven-metakube"},"Getting started with Gefyra and SysEleven MetaKube"),(0,a.kt)("p",null,"This guide will show you how to use Gefyra for the remote development of a Kubernetes\napplication running on MetaKube."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You have a ",(0,a.kt)("a",{parentName:"li",href:"https://metakube.syseleven.de/"},"MetaKube")," account and privileges to create a new cluster"),(0,a.kt)("li",{parentName:"ol"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"https://gefyra.dev/installation"},"installation")," of Gefyra for your preferred platform  ")),(0,a.kt)("h2",{id:"setup-a-cluster"},"Setup a cluster"),(0,a.kt)("p",null,"You may follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.syseleven.de/metakube/en/tutorials/create-a-cluster"},"this guide to create a cluster using the MetaKube management console"),"."),(0,a.kt)("p",null,"This guide assumes you are running an ",(0,a.kt)("strong",{parentName:"p"},"OpenStack"),"-based Kubernetes cluster on SysEleven."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/img/sys11_image2.png",alt:"syseleven cluster settings"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:")," Before Gefyra can connect from outside the cluster, you must set the security group of the nodes to allow UDP traffic on port 31820."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/img/sys11_image1.png",alt:"syseleven security group settings"})),"Please set the direction to _Ingress_ and the protocol to _UDP_. The port range should be set to _31820_ and the source CIDR to _0.0.0.0/0_. That way, Gefyra can connect to any data plane node of the cluster using a [Floating-IP](https://docs.syseleven.de/syseleven-stack/en/reference/network).",(0,a.kt)("p",null,"After all of the MetaKube components are ready, you can download the ",(0,a.kt)("em",{parentName:"p"},"kubeconfig")," to access the cluster using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),'. Just click on the "Download Config" button in the MetaKube management console and save the file to your local machine.'),(0,a.kt)("h2",{id:"running-gefyra"},"Running Gefyra"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You may apply some workload, for example from Gefyra's testing directory:  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello_dd.yaml\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"At first, we need a host IP of one of our nodes. You can get it by running: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl get nodes -o wide |  awk {\'print $1" " $2 " " $7\'} | column -t\n')),(0,a.kt)("p",null,"Pick one of them from the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," column."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Now you can run ",(0,a.kt)("inlineCode",{parentName:"li"},"gefyra up --host <IP>")," using the IP you just picked. This will create the Gefyra components in your cluster and local host."),(0,a.kt)("li",{parentName:"ol"},"Run a local Docker image with Gefyra to make it part of the cluster.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Build your Docker image with a local tag, for example from Gefyra's testing directory (in the repo):\n",(0,a.kt)("inlineCode",{parentName:"li"},"cd testing/images/ && docker build -f Dockerfile.local . -t pyserver")),(0,a.kt)("li",{parentName:"ol"},"Execute Gefyra's run command:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra run -i pyserver -N mypyserver -n default")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Exec")," into the running container and look around. You will find the container to run within your Kubernetes cluster.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"docker exec -it mypyserver bash"),(0,a.kt)("inlineCode",{parentName:"li"},"wget -O- hello-nginx")," will print out the website of the cluster service ",(0,a.kt)("em",{parentName:"li"},"hello-nginx")," from within the cluster."))),(0,a.kt)("li",{parentName:"ol"},"Create a bridge to intercept the traffic to the cluster application with the one running locally:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra bridge -N mypyserver -n default --port 80:8000 --target deploy/hello-nginxdemo/hello-nginx"),"    "),(0,a.kt)("li",{parentName:"ol"},"List all running ",(0,a.kt)("em",{parentName:"li"},"bridges"),":",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra list --bridges")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Unbridge")," the local container and reset the cluster to its original state:\n",(0,a.kt)("inlineCode",{parentName:"li"},"gefyra unbridge -N mypybridge"))),(0,a.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,a.kt)("p",null,"Remove Gefyra's components from the cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"gefyra down")),(0,a.kt)(o.ZP,{mdxType:"Feedback"}))}d.isMDXComponent=!0}}]);