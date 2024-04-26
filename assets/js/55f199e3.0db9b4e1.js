"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[8913],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3191:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={toc:[{value:"Please provide us with your feedback",id:"please-provide-us-with-your-feedback",level:2}]},l="wrapper";function i(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"please-provide-us-with-your-feedback"},"Please provide us with your feedback"),(0,a.kt)("p",null,"Did everything work as expected? How was the experience of using Gefyra?\nWe'd appreciate if you could take 2 minutes of your time to fill out our ",(0,a.kt)("a",{parentName:"p",href:"https://forms.gle/AWT9NparpTVk8E978"},"feedback form"),"."))}i.isMDXComponent=!0},1396:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={toc:[{value:"2. Run a local Docker container with Gefyra in order to connect it with the cluster.",id:"2-run-a-local-docker-container-with-gefyra-in-order-to-connect-it-with-the-cluster",level:4},{value:"2.1 Build a simple Docker image with a local tag. Save the following two files in a directory on your disk.",id:"21-build-a-simple-docker-image-with-a-local-tag-save-the-following-two-files-in-a-directory-on-your-disk",level:5},{value:"2.2 Build it by running <code>docker build -f Dockerfile . -t pyserver</code> in your directory.",id:"22-build-it-by-running-docker-build--f-dockerfile---t-pyserver-in-your-directory",level:5},{value:"2.3 Execute Gefyra&#39;s run command:",id:"23-execute-gefyras-run-command",level:5},{value:"3. <em>Exec</em> into the running container and look around. You will find the container to run within your Kubernetes cluster.",id:"3-exec-into-the-running-container-and-look-around-you-will-find-the-container-to-run-within-your-kubernetes-cluster",level:4},{value:"4. Create a bridge to redirect the traffic from the cluster application to the one running locally:",id:"4-create-a-bridge-to-redirect-the-traffic-from-the-cluster-application-to-the-one-running-locally",level:4},{value:"5. List all running <em>bridges</em>:",id:"5-list-all-running-bridges",level:4},{value:"6. <em>Unbridge</em> the local container and reset the cluster to its original state:",id:"6-unbridge-the-local-container-and-reset-the-cluster-to-its-original-state",level:4},{value:"Cleaning up",id:"cleaning-up",level:2}]},l="wrapper";function i(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"2-run-a-local-docker-container-with-gefyra-in-order-to-connect-it-with-the-cluster"},"2. Run a local Docker container with Gefyra in order to connect it with the cluster."),(0,a.kt)("h5",{id:"21-build-a-simple-docker-image-with-a-local-tag-save-the-following-two-files-in-a-directory-on-your-disk"},"2.1 Build a simple Docker image with a local tag. Save the following two files in a directory on your disk."),(0,a.kt)("p",null,"   File ",(0,a.kt)("inlineCode",{parentName:"p"},"./Dockerfile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM ubuntu\n# run a server on port 8000\nRUN apt update && apt install -y iproute2 iputils-ping python3 traceroute wget curl\nCOPY local.py local.py\nCMD python3 local.py\n")),(0,a.kt)("p",null,"   File ",(0,a.kt)("inlineCode",{parentName:"p"},"./local.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import http.server\nimport signal\nimport socket\nimport socketserver\nimport sys\nfrom datetime import datetime\n\nif sys.argv[1:]:\n   port = int(sys.argv[1])\nelse:\n   port = 8000\n\nclass MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):\n   def do_GET(self):\n      self.send_response(200)\n      self.send_header("Content-type", "text/html")\n      self.end_headers()\n      hostname = socket.gethostname()\n      now = datetime.utcnow()\n      self.wfile.write(\n            bytes(\n               f"<html><body><h1>Hello from Gefyra. It is {now} on"\n               f" {hostname}.</h1></body></html>".encode("utf-8")\n            )\n      )\n\nmy_handler = MyHttpRequestHandler\nserver = socketserver.ThreadingTCPServer(("", port), my_handler)\n\ndef signal_handler(signal, frame):\n   try:\n      if server:\n            server.server_close()\n   finally:\n      sys.exit(0)\n\nsignal.signal(signal.SIGINT, signal_handler)\ntry:\n   while True:\n      sys.stdout.flush()\n      server.serve_forever()\nexcept KeyboardInterrupt:\n   pass\n\nserver.server_close()\n')),(0,a.kt)("h5",{id:"22-build-it-by-running-docker-build--f-dockerfile---t-pyserver-in-your-directory"},"2.2 Build it by running ",(0,a.kt)("inlineCode",{parentName:"h5"},"docker build -f Dockerfile . -t pyserver")," in your directory."),(0,a.kt)("h5",{id:"23-execute-gefyras-run-command"},"2.3 Execute Gefyra's run command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra run -d -i pyserver -N mypyserver -n default\n")),(0,a.kt)("p",null,"   ",(0,a.kt)("strong",{parentName:"p"},"Important"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"gefyra run")," is just a wrapper for ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," (with additional flags), yet it also applies Gefyra's networking\nconfiguration to connect the container with Kubernetes. Check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli#run"},"the docs for ",(0,a.kt)("inlineCode",{parentName:"a"},"gefyra run"))),(0,a.kt)("h4",{id:"3-exec-into-the-running-container-and-look-around-you-will-find-the-container-to-run-within-your-kubernetes-cluster"},"3. ",(0,a.kt)("em",{parentName:"h4"},"Exec")," into the running container and look around. You will find the container to run within your Kubernetes cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it mypyserver bash\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget -O- hello-nginx\n")),(0,a.kt)("p",null,"will print out the website of the cluster service ",(0,a.kt)("em",{parentName:"p"},"hello-nginx")," from within the cluster. \ud83d\ude80"),(0,a.kt)("h4",{id:"4-create-a-bridge-to-redirect-the-traffic-from-the-cluster-application-to-the-one-running-locally"},"4. Create a bridge to redirect the traffic from the cluster application to the one running locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra bridge -N mypyserver -n default --ports 80:8000 --target deploy/hello-nginxdemo/hello-nginx\n")),(0,a.kt)("p",null,"Check out the locally running server serving the cluster by refreshing the address from the service in Kubernetes.",(0,a.kt)("br",{parentName:"p"}),"\n","It shows you a different message: ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello from Gefyra. It is ..."),". Yes, that is really coming from your local container! \ud83d\ude0e"),(0,a.kt)("h4",{id:"5-list-all-running-bridges"},"5. List all running ",(0,a.kt)("em",{parentName:"h4"},"bridges"),":"),(0,a.kt)("p",null,"You can list all currently active bridges with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra list --bridges\n")),(0,a.kt)("p",null,"You will find all local containers that are currently linked into the cluster serving requests. "),(0,a.kt)("h4",{id:"6-unbridge-the-local-container-and-reset-the-cluster-to-its-original-state"},"6. ",(0,a.kt)("em",{parentName:"h4"},"Unbridge")," the local container and reset the cluster to its original state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra unbridge --all\n")),(0,a.kt)("p",null,"Check out the original response from from the service. The cluster is now reset to its inital state again."),(0,a.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,a.kt)("p",null,"Remove Gefyra's components from the cluster and your local Docker host with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gefyra down\n")))}i.isMDXComponent=!0},4861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(1396),l=r(3191);const i={title:"Colima Kubernetes"},s="Getting started with Gefyra and Colima Kubernetes",c={unversionedId:"local-environments/colima",id:"version-2.x/local-environments/colima",title:"Colima Kubernetes",description:"This guide will show you how to use Gefyra for the local development of a Kubernetes application running in Colima Kubernetes.",source:"@site/versioned_docs/version-2.x/local-environments/colima.md",sourceDirName:"local-environments",slug:"/local-environments/colima",permalink:"/docs/local-environments/colima",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.x/local-environments/colima.md",tags:[],version:"2.x",frontMatter:{title:"Colima Kubernetes"},sidebar:"docsSidebar",previous:{title:"Getting Started With Local Kubernetes Cluster",permalink:"/docs/local-environments/"},next:{title:"Docker Desktop Kubernetes (OSX)",permalink:"/docs/local-environments/docker_desktop_osx"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a local Kubernetes cluster",id:"creating-a-local-kubernetes-cluster",level:2},{value:"1. Creating a local Kubernetes cluster with <code>colima</code>",id:"1-creating-a-local-kubernetes-cluster-with-colima",level:3},{value:"2. Find out the network address of your VM:",id:"2-find-out-the-network-address-of-your-vm",level:3},{value:"3. Apply some workload, for example from the testing directory of this repo:",id:"3-apply-some-workload-for-example-from-the-testing-directory-of-this-repo",level:3},{value:"Running Gefyra",id:"running-gefyra",level:2},{value:"1. Set up Gefyra with your Colima cluster:",id:"1-set-up-gefyra-with-your-colima-cluster",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-gefyra-and-colima-kubernetes"},"Getting started with Gefyra and Colima Kubernetes"),(0,a.kt)("p",null,"This guide will show you how to use Gefyra for the local development of a Kubernetes application running in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/abiosoft/colima"},"Colima Kubernetes"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Colima is ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/abiosoft/colima"},"available")," (at least in version v0.5.5)"),(0,a.kt)("li",{parentName:"ol"},"Gefyra is ",(0,a.kt)("a",{parentName:"li",href:"https://gefyra.dev/installation"},"available")," (at least in version 2.0.0)")),(0,a.kt)("h2",{id:"creating-a-local-kubernetes-cluster"},"Creating a local Kubernetes cluster"),(0,a.kt)("h3",{id:"1-creating-a-local-kubernetes-cluster-with-colima"},"1. Creating a local Kubernetes cluster with ",(0,a.kt)("inlineCode",{parentName:"h3"},"colima")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"colima start --kubernetes --network-address\n")),(0,a.kt)("h3",{id:"2-find-out-the-network-address-of-your-vm"},"2. Find out the network address of your VM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"colima list\nPROFILE    STATUS     ARCH      CPUS    MEMORY    DISK     RUNTIME       ADDRESS\ndefault    Running    x86_64    2       2GiB      60GiB    docker+k3s    192.168.106.2\n")),(0,a.kt)("h3",{id:"3-apply-some-workload-for-example-from-the-testing-directory-of-this-repo"},"3. Apply some workload, for example from the testing directory of this repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml\n")),(0,a.kt)("p",null,"Check out this workload running under: ",(0,a.kt)("a",{parentName:"p",href:"http://hello.127.0.0.1.nip.io:8080/"},"http://hello.127.0.0.1.nip.io:8080/")),(0,a.kt)("h2",{id:"running-gefyra"},"Running Gefyra"),(0,a.kt)("h3",{id:"1-set-up-gefyra-with-your-colima-cluster"},"1. Set up Gefyra with your Colima cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gefyra up\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important"),": "),(0,a.kt)(o.ZP,{mdxType:"GettingStarted"}),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Remove the locally running Kubernetes cluster with ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"colima delete\n")),(0,a.kt)(l.ZP,{mdxType:"Feedback"}))}h.isMDXComponent=!0}}]);