# Angular 2 workshop - Routing

In order to use this project, you need the following prerequisites:
 
1. In order to clone the project, you will need to have git installed and use the following command (or use your IDE)  
  `git clone https://github.com/RDAngular2/DHLSessions-Routing.git`  
   in your project directory.
  
2. Make sure Node.js is installed (then you will also have NPM installed). We will need versions node v4.x.x or higher and npm 3.x.x or higher. To check which version you are using, run node -v and npm -v.
   
3. Open a terminal and inside your project directory and issue the `npm install` command. This will install the required dependencies in the `node_modules` directory.

4. You can test your setup by running the command `npm run start` in your project directory. This should compile your Typescript code, start up
a node.js server and open up a browser window with a minimal application. The url of the application is 'http://localhost:9000'
(maybe the port was changed by the node.js server, in this case check your terminal for the correct port).  
This process will also watch your source code for changes and recompile your code & reload your web page if needed.

5. You can use a simple text editor to edit your files, but an IDE will make your life much easier. I can recommend [Webstorm](https://www.jetbrains.com/webstorm/) or Intellij (Commercial, trial available) but [Visual Studio Code](https://code.visualstudio.com/) 
is a good free alternative. For this workshop we will not use a backend technology.

Remark: If you are behind a corporate proxy, you might need to configure your proxy for npm and git.

You might try it by setting system environment variables or configure it for both programs separately (of course, leave out user/pasword if the proxies are not authenticated), 
see [http://digitaldrummerj.me/proxy-configurations/](http://digitaldrummerj.me/proxy-configurations/)

NPM: 

`npm config set https-proxy http://[user:password@][proxy-url-including-port]`      
`npm config set proxy http://[user:password@][proxy-url-including-port]`

GIT

`git config --add http.proxy http://[user:password@][proxy-url-including-port]`  
`git config --add https.proxy http://[user:password@][proxy-url-including-port]`

If you set them as system environment variables, you should try HTTP_PROXY and HTTPS_PROXY as variable names but this might not work on all system.    
    
     
  
 
 
 