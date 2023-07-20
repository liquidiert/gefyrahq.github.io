"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5044:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={toc:[{value:"Provide us with your feedback",id:"provide-us-with-your-feedback",level:2}]},l="wrapper";function i(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"provide-us-with-your-feedback"},"Provide us with your feedback"),(0,a.kt)("p",null,"Did everything work as expected? How was the experience of using Gefyra?\nWe'd appreciate if you could take 2 minutes of your time to fill out our ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/AWT9NparpTVk8E978"},"feedback form"),"."))}i.isMDXComponent=!0},6896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(5044);const l={title:"Google Cloud Platform (GCP)"},i="Getting started with Gefyra and the Google Cloud Platform",s={unversionedId:"getting-started/gcp",id:"getting-started/gcp",title:"Google Cloud Platform (GCP)",description:"This guide will show you how to use Gefyra for the remote development of a Kubernetes",source:"@site/docs/getting-started/gcp.mdx",sourceDirName:"getting-started",slug:"/getting-started/gcp",permalink:"/docs/getting-started/gcp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/gcp.mdx",tags:[],version:"current",frontMatter:{title:"Google Cloud Platform (GCP)"},sidebar:"docsSidebar",previous:{title:"Docker Desktop Kubernetes (OSX)",permalink:"/docs/getting-started/docker_desktop_osx"},next:{title:"Elastic Kubernetes Service (EKS)",permalink:"/docs/getting-started/eks"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup a cluster",id:"setup-a-cluster",level:2},{value:"Running Gefyra",id:"running-gefyra",level:2},{value:"Cleaning up",id:"cleaning-up",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-gefyra-and-the-google-cloud-platform"},"Getting started with Gefyra and the Google Cloud Platform"),(0,a.kt)("p",null,"This guide will show you how to use Gefyra for the remote development of a Kubernetes\nApplication running in the Google Kubernetes Engine (GKE)."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You have the ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install-sdk"},"gcloud")," command installed"),(0,a.kt)("li",{parentName:"ol"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"https://gefyra.dev/installation"},"installation")," of Gefyra for your preferred platform  ")),(0,a.kt)("p",null,"Additionally you need an account for the Google Cloud Platform including the\npermission to create a new cluster. Make sure your gcloud is using the right\nproject configuration. Googles documentation is available\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/get-started"},"here"),"."),(0,a.kt)("h2",{id:"setup-a-cluster"},"Setup a cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The easiest way to create a new cluster is using ",(0,a.kt)("inlineCode",{parentName:"li"},"gcloud"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create spacecraft\n")),(0,a.kt)("p",null,"This may take a few minutes, there will be 3 VM instances running a kubernetes\ncluster ready to serve your applications. ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," will set your\nkubectl context to the created cluster, nothing to worry about!  "),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The last thing we need to do is open a port in the firewall. This allows gefyra\nto connect to the cluster using wireguard:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute firewall-rules create gefyra --allow udp:31820\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Apply some workload, for example from the testing directory of this repo:  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello_dd.yaml\n")),(0,a.kt)("h2",{id:"running-gefyra"},"Running Gefyra"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"At first, we need a host IP of one of our compute instances. You can get\nthem with running ",(0,a.kt)("inlineCode",{parentName:"li"},"gcloud compute instances list"),". Pick one of them."),(0,a.kt)("li",{parentName:"ol"},"Now you can run ",(0,a.kt)("inlineCode",{parentName:"li"},"gefyra up --host <IP>")),(0,a.kt)("li",{parentName:"ol"},"Run a local Docker image with Gefyra in order to  make it part of the cluster.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Build your Docker image with a local tag, for example from the testing directory:\n",(0,a.kt)("inlineCode",{parentName:"li"},"cd testing/images/ && docker build -f Dockerfile.local . -t pyserver")),(0,a.kt)("li",{parentName:"ol"},"Execute Gefyra's run command:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra run -i pyserver -N mypyserver -n default")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Exec")," into the running container and look around. You will find the container to run within your Kubernetes cluster.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"docker exec -it mypyserver bash"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"wget -O- hello-nginx")," will print out the website of the cluster service ",(0,a.kt)("em",{parentName:"li"},"hello-nginx")," from within the cluster."))),(0,a.kt)("li",{parentName:"ol"},"Create a bridge in order to intercept the traffic to the cluster application with the one running locally:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra bridge -N mypyserver -n default --port 80:8000 --target deploy/hello-nginxdemo/hello-nginx"),"    "),(0,a.kt)("li",{parentName:"ol"},"List all running ",(0,a.kt)("em",{parentName:"li"},"bridges"),":",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra list --bridges")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Unbridge")," the local container and reset the cluster to its original state:\n",(0,a.kt)("inlineCode",{parentName:"li"},"gefyra unbridge -N mypybridge"))),(0,a.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,a.kt)("p",null,"Remove Gefyra's components from the cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"gefyra down")),(0,a.kt)(o.ZP,{mdxType:"Feedback"}))}g.isMDXComponent=!0}}]);