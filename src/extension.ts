'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as figlet from 'figlet';

function replaceEditorSelection(text) {
  const editor = vscode.window.activeTextEditor;
  const selections = editor.selections;

  editor.edit((editBuilder) => {
    selections.forEach((selection) => {
      editBuilder.replace(selection, '');
      editBuilder.insert(selection.active, text);
    });
  });
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "ascii-header" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('ascii-header.prompt', () => {
        // Display a message box to the user        
        vscode.window.showInputBox({
            prompt: 'Header Text'
        }).then((text) => {            
            // console.log('figleting....');
            figlet.text(text, {
                font: 'Roman',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            }, function(err, header) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }        
                replaceEditorSelection("/*" + header + "*/");
            });
        });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}