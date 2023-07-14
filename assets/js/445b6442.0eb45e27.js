"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[633],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={layout:"page",title:"Elastic Kubernetes Service (EKS)",permalink:"/getting-started/aws-eks/",nav_order:5,parent:"Getting Started"},i="Getting started with Gefyra and Elastic Kubernetes Service (EKS)",l={unversionedId:"getting-started/eks",id:"getting-started/eks",title:"Elastic Kubernetes Service (EKS)",description:"This guide will show you how to use Gefyra for the remote development of a Kubernetes",source:"@site/docs/getting-started/eks.mdx",sourceDirName:"getting-started",slug:"/getting-started/eks",permalink:"/docs/getting-started/eks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/eks.mdx",tags:[],version:"current",frontMatter:{layout:"page",title:"Elastic Kubernetes Service (EKS)",permalink:"/getting-started/aws-eks/",nav_order:5,parent:"Getting Started"},sidebar:"docsSidebar",previous:{title:"Google Cloud Platform (GCP)",permalink:"/docs/getting-started/gcp"},next:{title:"Colima Kubernetes",permalink:"/docs/getting-started/colima"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup a cluster",id:"setup-a-cluster",level:2},{value:"Running Gefyra",id:"running-gefyra",level:2},{value:"Cleaning up",id:"cleaning-up",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-gefyra-and-elastic-kubernetes-service-eks"},"Getting started with Gefyra and Elastic Kubernetes Service (EKS)"),(0,a.kt)("p",null,"This guide will show you how to use Gefyra for the remote development of a Kubernetes\napplication running on Elastic Kubernetes Service (EKS)."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You have the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html"},"aws")," command installed and configured"),(0,a.kt)("li",{parentName:"ol"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"https://gefyra.dev/installation"},"installation")," of Gefyra for your preferred platform  ")),(0,a.kt)("p",null,"Additionally, you need an account for the Amazon Web Services including the\npermission to create a new cluster. Make sure your ",(0,a.kt)("inlineCode",{parentName:"p"},"aws")," is using the right\nproject configuration and/or profile."),(0,a.kt)("h2",{id:"setup-a-cluster"},"Setup a cluster"),(0,a.kt)("p",null,"You may follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"this guide to create a cluster using the AWS Management Console"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The easiest way to create a new cluster is using ",(0,a.kt)("inlineCode",{parentName:"li"},"aws"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks create-cluster --name gefyra --kubernetes-version 1.22 \\\n   --role-arn arn:aws:iam::111122223333:role/myAmazonEKSClusterRole \\\n   --resources-vpc-config subnetIds=subnet-ExampleID1,subnet-ExampleID2,securityGroupIds=sg-ExampleID1\n")),(0,a.kt)("p",null,"This may take a long time. You can check the cluster status with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'aws eks describe-cluster --name gefyra --query "cluster.status"\n> "ACTIVE"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Depending on your way of creating the cluster, you may have to add a ",(0,a.kt)("inlineCode",{parentName:"li"},"NodeGroup")," to  the cluster, so you can actually run workloads."),(0,a.kt)("li",{parentName:"ol"},"Pull the ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," configuration to connect to the cluster, with:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks update-kubeconfig --name gefyra\n")),(0,a.kt)("p",null,"Now you should be able to run any ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," command in that cluster."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Apply some workload, for example from the testing directory of this repo:  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello_dd.yaml\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Important:")," before Gefyra can connect from outside the cluster, you must set the security group of the nodes to allow UDP traffic on port 31820.")),(0,a.kt)("p",null,"Find out the security group of the cluster. Then, create the required inbound traffic rule:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'aws eks describe-cluster --name gefyra --query "cluster.resourcesVpcConfig.clusterSecurityGroupId"\n> "<security-group-id>"\n\naws ec2 authorize-security-group-ingress --group-id "<security-group-id>" --protocol udp --port 31820  --cidr 0.0.0.0/0\n')),(0,a.kt)("h2",{id:"running-gefyra"},"Running Gefyra"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"At first, we need a host IP of one of our nodes. You can get\nthem by running ",(0,a.kt)("inlineCode",{parentName:"li"},'kubectl get nodes -o wide |  awk {\'print $1" " $2 " " $7\'} | column -t'),". Pick one of them from the ",(0,a.kt)("inlineCode",{parentName:"li"},"EXTERNAL-IP")," column."),(0,a.kt)("li",{parentName:"ol"},"Now you can run ",(0,a.kt)("inlineCode",{parentName:"li"},"gefyra up --host <IP>")),(0,a.kt)("li",{parentName:"ol"},"Run a local Docker image with Gefyra to make it part of the cluster.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Build your Docker image with a local tag, for example from the testing directory:\n",(0,a.kt)("inlineCode",{parentName:"li"},"cd testing/images/ && docker build -f Dockerfile.local . -t pyserver")),(0,a.kt)("li",{parentName:"ol"},"Execute Gefyra's run command:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra run -i pyserver -N mypyserver -n default")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Exec")," into the running container and look around. You will find the container to run within your Kubernetes cluster.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"docker exec -it mypyserver bash"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"wget -O- hello-nginx")," will print out the website of the cluster service ",(0,a.kt)("em",{parentName:"li"},"hello-nginx")," from within the cluster."))),(0,a.kt)("li",{parentName:"ol"},"Create a bridge to intercept the traffic to the cluster application with the one running locally:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra bridge -N mypyserver -n default --port 80:8000 --target deploy/hello-nginxdemo/hello-nginx"),"    "),(0,a.kt)("li",{parentName:"ol"},"List all running ",(0,a.kt)("em",{parentName:"li"},"bridges"),":",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra list --bridges")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Unbridge")," the local container and reset the cluster to its original state:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"gefyra unbridge -N mypybridge"))),(0,a.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,a.kt)("p",null,"Remove Gefyra's components from the cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"gefyra down")))}m.isMDXComponent=!0}}]);