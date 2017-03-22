'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var fs = require('fs');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // I HOPE it's constant
const univers = { "font" : "univers", "lines": 8, "letters" : [                        
[
"       db         ",
"      d88b        ",
"     d8'`8b       ",
"    d8'  `8b      ",
"   d8YaaaaY8b     ",
"  d8\"\"\"\"\"\"\"\"8b    ",
" d8'        `8b   ",
"d8'          `8b  ",
],[
"88888888ba    ",
"88		 \"8b   ",
"88      ,8P   ",
"88aaaaaa8P'   ",
"88\"\"\"\"\"\"8b,   ",
"88      `8b   ",
"88      a8P   ",
"88888888P\"    ",
],[
"  ,ad8888ba,   ",
" d8\"'    `\"8b  ",
"d8'            ",
"88             ",
"88             ",
"Y8,            ",
" Y8a.    .a8P  ",
"  `\"Y8888Y\"'   ",
],[
"88888888ba,    ",
"88      `\"8b   ",
"88        `8b  ",
"88         88  ",
"88         88  ",
"88         8P  ",
"88      .a8P   ",
"88888888Y\"'    ",
],[
"88888888888  ",
"88           ",
"88           ",
"88aaaaa      ",
"88\"\"\"\"       ",
"88           ",
"88           ",
"88888888888  ",
],[
"88888888888  ",
"88           ",
"88           ",
"88aaaaa      ",
"88\"\"\"\"       ",
"88           ",
"88           ",
"88           ",
],[
"  ,ad8888ba,   ",
" d8\"'    `\"8b  ",
"d8'            ",
"88             ",
"88      88888  ",
"Y8,        88  ",
" Y8a.    .a88  ",
"  `\"Y88888P\"   ",
],[
"88        88  ",
"88        88  ",
"88        88  ",
"88aaaaaaaa88  ",
"88\"\"\"\"\"\"\"\"88  ",
"88        88  ",
"88        88  ",
"88        88  ",
],[
"88  ",
"88  ",
"88  ",
"88  ",
"88  ",
"88  ",
"88  ",
"88  ",
],[
"        88  ",
"        88  ",
"        88  ",
"        88  ",
"        88  ",
"        88  ",
"88,   ,d88  ",
"\"Y8888P     ",
],[
"88      a8P  ",
"88    ,88'   ",
"88  ,88      ",
"88,d88'      ",
"8888\"88,    ",
"88P   Y8b    ",
"88		\"88,  ",
"88       Y8b ",
],[
"88           ",
"88           ",
"88           ",
"88           ",
"88           ",
"88           ",
"88           ",
"88888888888  ",
],[
"88b           d88  ",
"888b         d888  ",
"88`8b       d8'88  ",
"88 `8b     d8' 88  ",
"88  `8b   d8'  88  ",
"88   `8b d8'   88  ",
"88    `888'    88  ",
"88     `8'     88  ",
],[
"888b      88  ",
"8888b     88  ",
"88 `8b    88  ",
"88  `8b   88  ",
"88   `8b  88  ",
"88    `8b 88  ",
"88     `8888  ",
"88      `888  ",
],[
"  ,ad8888ba,    ",
" d8\"'     `\"8b  ",
"d8'        `8b  ",
"88          88  ",
"88          88  ",
"Y8,        ,8P  ",
" Y8a.    .a8P   ",
"  `\"Y8888Y\"'    ",
],[
"88888888ba   ",
"88     \"8b   ",
"88      ,8P  ",
"88aaaaaa8P'  ",
"88\"\"\"\"\"\"'    ",
"88           ",
"88           ",
"88           ",
],[
"  ,ad8888ba,    ",
" d8\"'    `\"8b   ",
"d8'        `8b  ",
"88          88  ",
"88          88  ",
"Y8,    \"88,,8P  ",
" Y8a.    Y88P   ",
"  `\"Y8888Y\"Y8a  ",
],[
"88888888ba   ",
"88     \"8b   ",
"88      ,8P  ",
"88aaaaaa8P'  ",
"88\"\"\"\"88'    ",
"88    `8b    ",
"88     `8b   ",
"88      `8b  ",
],[
" ad88888ba   ",
"d8     \"\"8b  ",
"Y8,          ",
"`Y8aaaaa,    ",
"  `\"\"\"\"\"8b,  ",
"        `8b  ",
"Y8a     a8P  ",
"\"Y88888P     ",
],[
"888888888888  ",
"     88       ",
"     88       ",
"     88       ",
"     88       ",
"     88       ",
"     88       ",
"     88       ",
],[
"88        88  ",
"88        88  ",
"88        88  ",
"88        88  ",
"88        88  ",
"Y8a.    .a8P  ",
" `\"Y8888Y\"'   ",
],[
"8b           d8  ",
"`8b         d8'  ",
" `8b       d8'   ",
"  `8b     d8'    ",
"   `8b   d8'     ",
"    `8b d8'      ",
"     `888'       ",
"      `8'        ",
],[
"I8,        8        ,8I  ",
"`8b       d8b       d8'  ",
" \"8,     ,8\"8,     ,8    ",
"  Y8     8P Y8     8P    ",
"  `8b   d8' `8b   d8'    ",
"   `8a a8'   `8a a8'     ",
"    `8a8'     `8a8'      ",
"     `8'       `8'       ",
],[
"8b        d8  ",
" Y8,    ,8P   ",
"  `8b  d8'    ",
"    Y88P      ",
"    d88b      ",
"  ,8P  Y8,    ",
" d8'    `8b   ",
"8P        Y8  ",
],[
"8b        d8  ",
" Y8,    ,8P   ",
"  Y8,  ,8P    ",
"   \"8aa8      ",
"    `88'      ",
"     88       ",
"     88       ",
"     88       ",
],[
"888888888888  ",
"         ,88  ",
"       ,88    ",
"     ,88      ",
"   ,88        ",
" ,88          ",
"88            ",
"888888888888  ",
]]
}


function getHeader(text)
{       
    var o = "\r\n";
    // foreach line in the font
    for(var i = 0; i < univers.lines; i++)
    {
        // foreach letter in the text                  
        for(var x in text.toLowerCase().split(''))
        {
            o += univers.letters[alphabet.indexOf(text[x])][i];
        }
        o+= "\r\n";
    }

    return o + "\r\n";
}

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
    console.log('Congratulations, your extension "asciiheader" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.asciiHeader', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user        
        vscode.window.showInputBox({
            prompt: 'Header Text'
        }).then((text) => {
            var header = getHeader(text);   
            // vscode.window.showInformationMessage(header.length.toString());         
            replaceEditorSelection("/*" + header + "*/");
        });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}