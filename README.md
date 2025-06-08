# VSCode-Extension
Multiple Extension to learn how its work

## How to code an extension
### Generate an extension using Yeoman tool
```sh
npm install -g yo generator-code
```
Choose New Extension (TypeScript)
### Make C++ Extension
- Create a 'cpp' named folder
- Create a 'hello.cpp' file within your code
- Then generate the '.exe' using
```sh
g++ hello.cpp -o hello
```
## Make Package Extension && Use it
### Install VSCE tools
```sh
npm install -g @vscode/vsce
```
### Package the extension
It's produce a .vsix file which is your extension
```sh
vsce package --allow-star-activation
```
### Install your extension in VSCode
```sh
code --install-extension hello-world-cpp-0.0.1.vsix
```