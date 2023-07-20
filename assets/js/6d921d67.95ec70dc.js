"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),k=a,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5044:(e,t,r)=>{r.d(t,{ZP:()=>o});var n=r(7462),a=(r(7294),r(3905));const i={toc:[{value:"Provide us with your feedback",id:"provide-us-with-your-feedback",level:2}]},l="wrapper";function o(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"provide-us-with-your-feedback"},"Provide us with your feedback"),(0,a.kt)("p",null,"Did everything work as expected? How was the experience of using Gefyra?\nWe'd appreciate if you could take 2 minutes of your time to fill out our ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/AWT9NparpTVk8E978"},"feedback form"),"."))}o.isMDXComponent=!0},8352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(5044);const l={title:"Minikube"},o="Getting started with Gefyra and Minikube",s={unversionedId:"getting-started/minikube",id:"getting-started/minikube",title:"Minikube",description:"This guide describes the usage of Gefyra for the local development of a Kubernetes",source:"@site/docs/getting-started/minikube.mdx",sourceDirName:"getting-started",slug:"/getting-started/minikube",permalink:"/docs/getting-started/minikube",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/minikube.mdx",tags:[],version:"current",frontMatter:{title:"Minikube"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started/"},next:{title:"k3d",permalink:"/docs/getting-started/k3d"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a local Kubernetes cluster",id:"creating-a-local-kubernetes-cluster",level:2},{value:"Running Gefyra",id:"running-gefyra",level:2},{value:"Cleaning up",id:"cleaning-up",level:2}],c={toc:p},m="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-gefyra-and-minikube"},"Getting started with Gefyra and Minikube"),(0,a.kt)("p",null,"This guide describes the usage of Gefyra for the local development of a Kubernetes\napplication running in ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"Minikube"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:")," This getting started guide for ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"Minikube")," requires Gefyra in version ",(0,a.kt)("strong",{parentName:"p"},"0.9.0+"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Minikube is ",(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"installed")," (at least in version v1.26.1)"),(0,a.kt)("li",{parentName:"ol"},"Gefyra is ",(0,a.kt)("a",{parentName:"li",href:"https://gefyra.dev/installation"},"available")," (at least in version 0.9.0)")),(0,a.kt)("h2",{id:"creating-a-local-kubernetes-cluster"},"Creating a local Kubernetes cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a local Kubernetes cluster with Minikube by running:  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:")," the following example does not ",(0,a.kt)("em",{parentName:"p"},"fully")," work with ",(0,a.kt)("inlineCode",{parentName:"p"},"--driver=qemu")," since ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube service")," is not currently\nimplemented with the qemu2 driver. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/minikube/issues/14146"},"https://github.com/kubernetes/minikube/issues/14146")," for details.",(0,a.kt)("br",{parentName:"p"}),"\n","Tested drivers are: ",(0,a.kt)("em",{parentName:"p"},"docker"),", ",(0,a.kt)("em",{parentName:"p"},"kvm2"),", ",(0,a.kt)("em",{parentName:"p"},"kvm"),", ",(0,a.kt)("em",{parentName:"p"},"virtualbox"),". Others are potentially working, but are not tested."),(0,a.kt)("p",null,"After some time of downloading the required resources, the cluster will be running. You may enable the required\naddons based on your requirements. The ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," context is immediately set to this cluster. You can check if\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config current-context")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl config current-context\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Apply some workload, for example from the testing directory of this repository:  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Check the output of the deployed app with:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl expose deployment hello-nginxdemo --type=NodePort --port=80\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"minikube service hello-nginxdemo\n")),(0,a.kt)("h2",{id:"running-gefyra"},"Running Gefyra"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set up Gefyra with your Minikube cluster:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra up --minikube\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--minikube")," switch detects all required connection parameters from your local cluster.\n2. Run a local Docker image with Gefyra in order to  make it part of the cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Build your Docker image with a local tag, for example ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gefyrahq/gefyra/tree/main/testing"},"from the testing directory"),":\n",(0,a.kt)("inlineCode",{parentName:"li"},"cd testing/images/ && docker build -f Dockerfile.local . -t pyserver")),(0,a.kt)("li",{parentName:"ol"},"Execute Gefyra's run command:    ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra run -i pyserver -N mypyserver -n default\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Exec")," into the running container and look around. You will find the container to run within your Kubernetes cluster.  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it mypyserver bash\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget -O- hello-nginx\n")),(0,a.kt)("p",null," will print out the website of the cluster service ",(0,a.kt)("em",{parentName:"p"},"hello-nginx")," from within the cluster.\n3. Create a bridge in order to intercept the traffic to the cluster application with the one running locally:    "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra bridge -N mypyserver -n default --port 8000:80 --target deploy/hello-nginxdemo/hello-nginx\n")),(0,a.kt)("p",null,"Check out the locally running server comes up by refreshing the address from:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"minikube service hello-nginxdemo\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"List all running ",(0,a.kt)("em",{parentName:"li"},"bridges"),":  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra list --bridges\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Unbridge")," the local container and reset the cluster to its original state: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra unbridge -N mypybridge\n")),(0,a.kt)("p",null,"Check out the initial response from: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"minikube service hello-nginxdemo\n")),(0,a.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,a.kt)("p",null,"Remove Gefyra's components from the cluster with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra down\n")),(0,a.kt)(i.ZP,{mdxType:"Feedback"}))}k.isMDXComponent=!0}}]);