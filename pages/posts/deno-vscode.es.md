---
title: Deno en VSCode
date: 2021/5/8
description: Deno tooling
tag: deno, tooling, vscode
author: You
---

# Deno en VSCode

Tener una buena DX hoy en día es crucial para programar, las extensiones nos han permitido desarrollar más rápido y sin preocuparnos por pequeñas cosas como formateo y los nombre de los métodos.

Deno es un runtime relativamente nuevo que soluciona mucho de los problemas que Node tiene, te recomiendo que mires la [presentación](https://www.youtube.com/watch?v=M3BM9TB-8yA) oficial por Ryan Dahl.

Para soportar Deno vamos a configurar nuestro Visual Studio Code, siguiendo estos pasos:

1. (Opcionalmente) instalemos Deno usando homebrew `homebrew install deno`

2. Instalemos la extensión [Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) para Visual Studio Code

3. Averiguemos donde esta instalado Deno usando `brew info deno` y copiemos el path

4. Asignemos el `path` de Deno en la configuración de VSCode `"deno.path": "/opt/homebrew/Cellar/deno/1.9.2/bin/deno"`

5. Habilitar la extensión de Deno con `"deno.enable": true`, pero tene cuidad porque la extensión va a deshabilitar los servicios nativos de VSCode para JavaScript y TypeScript, y en cambio va a a usar el servidor de lenguaje de Deno (deno lsp).

Eso es todo, disfruta codeando en este runtime increíble!
