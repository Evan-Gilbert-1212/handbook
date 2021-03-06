---
title: Visual Studio Code
---

Developers can be fiercely opinionated about which code editing environment is
better. Here at SDG, we require using Visual Studio Code.

VS Code is a extendable lightweight editor that allows us to see what is going
on so if you ever get the more powerful tools (like Visual Studio or Eclipse).
It will not be a crutch, but a tool. This is like starting with a screwdriver,
and working our way up to power drill.

## Installation

```shell
sudo snap install --classic code
```

## Adding command line option

Launch `VS Code`. Once launched use the key combination COMMAND + SHIFT + P.
This will launch a search window. Type `install code` and then click on the
option titled `Shell Command: Install code command in PATH`

## Enable Extensions

VS Code has a large number of optional extensions that increase the capabilities
of the editor. We have chosen a few that we feel improve the workflow during the
course. We recommend running the following commands to install these extensions
into your Visual Studio Code

### General Extensions:

Launch a new Terminal and run:

```shell
code --install-extension 2gua.rainbow-brackets
code --install-extension hasanali.gitignore-templates
code --install-extension streetsidesoftware.code-spell-checker
```

### C#/.NET Extensions:

```shell
code --install-extension ms-dotnettools.csharp
code --install-extension austincummings.razor-plus
code --install-extension jchannon.csharpextensions
code --install-extension jorgeserrano.vscode-csharp-snippets
code --install-extension ms-azuretools.vscode-docker
```

<!--
# These are not found
```
code --install-extension ms-vscode.csharp
code --install-extension ScottSauber.blazorsnippets

``` -->

## Front End Extensions:

```shell

code --install-extension aeschli.vscode-css-formatter
code --install-extension auchenberg.vscode-browser-preview
code --install-extension coderfee.open-html-in-browser
code --install-extension dbaeumer.vscode-eslint
code --install-extension ecmel.vscode-html-css
code --install-extension esbenp.prettier-vscode
code --install-extension hasanali.gitignore-templates
code --install-extension skyran.js-jsx-snippets
code --install-extension xabikos.ReactSnippets
code --install-extension Zignd.html-css-class-completion

```

## Required VS Code Configuration

Within VS Code go to the `File` menu, then `Preferences`, then `Settings`

- In the search bar enter `tab size`
- Find the setting `Editor: Tab Size` and change this to `2`

- In the search bar enter `formatOnSave`
- Find the setting `Editor: Format on Save` and turn this _ON_

## Configure proper spacing.

In VS Code Use `Control Shift P` to launch the command palette and Type
`Open Settings JSON` and select option that does _NOT_ mention "Default"

This will open an editor window.

At the top of the file and just after the first `{` paste the following:

```
  "[csharp]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 4
  },
```

## Additional Tips and Tricks

In VS Code Use `Command Shift P` to launch the command palette and Type
`Configure User Snippets`

- Look for the `csharp` option and select it.
- Copy the following below and paste underneath the commented section within the
  `{}`.

```json
"Print to console": {
	"prefix": "write",
	"body": [
		"Console.WriteLine($\"$1\");",
		"$2"
	],
	"description": "Log output to console"
},
"Read from Console": {
	"prefix": "read",
	"body": [
		"Console.ReadLine().ToLower();",
		"$1"
	],
	"description": "Read input from user, set to lower"
}
```

- This allows you to more efficiently create `Console.WriteLine($" ");` and
  `Console.ReadLine().ToLower();`
