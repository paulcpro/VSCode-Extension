import * as vscode from 'vscode';
import { execFile } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('hello-world-cpp.helloWorld', () => {
        const cppPath = path.join(context.extensionPath, 'cpp', 'hello');

        execFile(cppPath, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Erreur : ${error.message}`);
                return;
            }
            if (stderr) {
                vscode.window.showWarningMessage(`Stderr : ${stderr}`);
                return;
            }
            vscode.window.showInformationMessage(`C++ a dit : ${stdout}`);
        });
    });

    context.subscriptions.push(disposable);
}
