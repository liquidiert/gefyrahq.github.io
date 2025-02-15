---
title: Getting Started
slug: getting-started-with-gefyra
sidebar_position: 3
---
import Feedback from './_includes/feedback.md';
import Terminal from '@site/src/components/Terminal';

# Getting started with Gefyra and Minikube
This guide describes the usage of Gefyra for the local development of a Kubernetes
application running in [Minikube](https://minikube.sigs.k8s.io/).


**Important:** This getting started guide for [Minikube](https://minikube.sigs.k8s.io/) requires Gefyra in version **>=2.0.0+**.

## Prerequisites
1. Minikube is [installed](https://minikube.sigs.k8s.io/docs/start/) (at least in version v1.26.1)
2. Gefyra is [available](https://gefyra.dev/installation) (at least in version 2.0.0)


## Creating a local Kubernetes cluster with Minikube

<Terminal src="/img/minikube2.gif" alt="Set up Minikube" />


#### 1. Create a local Kubernetes cluster with Minikube by running:

```bash
minikube start
```  
**Important:** the following example does not _fully_ work with `--driver=qemu` since `minikube service` is not currently 
implemented with the qemu2 driver. See [https://github.com/kubernetes/minikube/issues/14146](https://github.com/kubernetes/minikube/issues/14146) for details.   
Tested drivers are: _docker_, _kvm2_, _kvm_, _virtualbox_. Others are potentially working, but are not tested.

After some time of downloading the required resources, the cluster will be running. You may enable the required 
addons based on your requirements. The `kubectl` context is immediately set to this cluster. You can check if 
`kubectl config current-context` is set to `minikube`.
```sh
kubectl config current-context
```

#### 2. Apply some workload, for example from the testing directory from Gefyra:  
```
kubectl apply -f https://raw.githubusercontent.com/gefyrahq/gefyra/main/testing/workloads/hello.yaml
```
#### 3. Check the output of the deployed app with:
```
kubectl expose deployment hello-nginxdemo --type=NodePort --port=80
```
```sh
minikube service hello-nginxdemo
```

## Running Gefyra
#### 1. Set up Gefyra with your Minikube cluster:
```sh
gefyra up --minikube
```  
**Important**: The `--minikube` switch detects all required connection parameters from your local cluster. The connection won't work
if this switch is missing when working with Minikube.

#### 2. Run a local Docker container with Gefyra in order to connect it with the cluster.
##### 2.1 Build a simple Docker image with a local tag. Save the following two files in a directory on your disk.  
    
   File `./Dockerfile`
   
   ```Dockerfile
   FROM ubuntu
   # run a server on port 8000
   RUN apt update && apt install -y iproute2 iputils-ping python3 traceroute wget curl
   COPY local.py local.py
   CMD python3 local.py
   ```
   
   File `./local.py`

   ```python
   import http.server
   import signal
   import socket
   import socketserver
   import sys
   from datetime import datetime

   if sys.argv[1:]:
      port = int(sys.argv[1])
   else:
      port = 8000

   class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
      def do_GET(self):
         self.send_response(200)
         self.send_header("Content-type", "text/html")
         self.end_headers()
         hostname = socket.gethostname()
         now = datetime.utcnow()
         self.wfile.write(
               bytes(
                  f"<html><body><h1>Hello from Gefyra. It is {now} on"
                  f" {hostname}.</h1></body></html>".encode("utf-8")
               )
         )

   my_handler = MyHttpRequestHandler
   server = socketserver.ThreadingTCPServer(("", port), my_handler)

   def signal_handler(signal, frame):
      try:
         if server:
               server.server_close()
      finally:
         sys.exit(0)

   signal.signal(signal.SIGINT, signal_handler)
   try:
      while True:
         sys.stdout.flush()
         server.serve_forever()
   except KeyboardInterrupt:
      pass

   server.server_close()
   ```

##### 2.2 Build it by running `docker build -f Dockerfile . -t pyserver` in your directory.  
##### 2.3 Execute Gefyra's run command:    
   ```sh
   gefyra run -d -i pyserver -N mypyserver -n default
   ```
   **Important**: `gefyra run` is just a wrapper for `docker run` (with additional flags), yet it also applies Gefyra's networking 
   configuration to connect the container with Kubernetes. Check out [the docs for `gefyra run`](/docs/cli#run)

#### 3. _Exec_ into the running container and look around. You will find the container to run within your Kubernetes cluster.  
```sh
docker exec -it mypyserver bash
```
```sh
wget -O- hello-nginx
```
will print out the website of the cluster service _hello-nginx_ from within the cluster. 🚀

#### 4. Create a bridge to redirect the traffic from the cluster application to the one running locally:    
```sh
gefyra bridge -N mypyserver -n default --ports 80:8000 --target deploy/hello-nginxdemo/hello-nginx
``` 
Check out the locally running server serving the cluster by refreshing the address from:
```sh
minikube service hello-nginxdemo
```
It shows you a different message: `Hello from Gefyra. It is ...`. Yes, that is really coming from your local container! 😎

#### 5. List all running _bridges_:
You can list all currently active bridges with:
```sh
gefyra list --bridges
```
You will find all local containers that are currently linked into the cluster serving requests. 

#### 6. _Unbridge_ the local container and reset the cluster to its original state: 
```sh
gefyra unbridge --all
```
Check out the original response from: 
```sh
minikube service hello-nginxdemo
```
The cluster is now reset to its inital state again.

## Cleaning up
Remove Gefyra's components from the cluster and your local Docker host with:
```sh
gefyra down
```

## Deleting the Minikube cluster
```
minikube delete
```

<Feedback />

