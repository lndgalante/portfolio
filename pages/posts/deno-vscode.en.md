---
title: Deno on VSCode
date: 2021/5/8
description: Deno tooling
tag: deno, tooling, vscode
author: You
---

# Deno on VSCode

Having a good DX nowadays is crucial for coding, extensions have allowed us to develop faster and without worrying about things like formatting or method names.

Deno is a new-ish runtime that fixes many problems that Node has, I recommend you to have a look at the official [presentation](https://www.youtube.com/watch?v=M3BM9TB-8yA) by Ryan Dahl.

Let's setup our Visual Studio Code to support Deno follow the next steps:

1. (Optionally) install Deno with homebrew using `homebrew install deno`

2. Install [Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) extension for Visual Studio Code

3. Let's find out where our Deno bin path is located running `brew info deno`

4. Set Deno path on our VSCode settings: `"deno.path": "/opt/homebrew/Cellar/deno/1.9.2/bin/deno"`

5. Enable Deno extension with `"deno.enable": true`, but be careful the extension will disable the built-in VSCode JavaScript and TypeScript language services, and will use the Deno Language Server (deno lsp) instead.

That's it enjoy coding in this amazing runtime!
