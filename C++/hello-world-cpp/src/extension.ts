import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('🔥 Extension activée !');

	let disposable = vscode.commands.registerCommand('hello-world-cpp.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from hello-world-cpp!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
