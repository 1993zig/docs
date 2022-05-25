# DOCs reference

[markdown reference](https://v2.vuepress.vuejs.org/guide/markdown.html#markdown)

## emoji

use

```
VuePress 2 is out :tada: !
```

to get

VuePress 2 is out :tada: !

## containers

[see](https://v2.vuepress.vuejs.org/reference/default-theme/markdown.html#custom-containers)

use

```
::: <type> [title]
[content]
:::
```

like

```
::: tip
This is a tip
:::
```

to get 

::: tip
This is a tip
:::

types
- tip
- warning
- danger
- details

optinally add a title

```
::: tip myTitle
This is a tip
:::
```

## code

use backticks to enclose code

## codegroups

to show code for ie different languages use code blocks

[see](https://v2.vuepress.vuejs.org/reference/default-theme/components.html#codegroup)

use 

````md
<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

````

to get

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

## badges

[see](https://v2.vuepress.vuejs.org/reference/default-theme/components.html#badge)

use 

```
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
```

to get 

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

## syntax highlighting

### language list

[see](https://github.com/shikijs/shiki/blob/main/docs/languages.md)

```
'abap'
'actionscript-3'
'ada'
'apache'
'apex'
'apl'
'applescript'
'asm'
'astro'
'awk'
'ballerina'
'bat' | 'batch'
'berry' | 'be'
'bibtex'
'bicep'
'c'
'clojure' | 'clj'
'cobol'
'codeql' | 'ql'
'coffee'
'cpp'
'crystal'
'csharp' | 'c#'
'css'
'cue'
'd'
'dart'
'diff'
'docker'
'dream-maker'
'elixir'
'elm'
'erb'
'erlang'
'fish'
'fsharp' | 'f#'
'gherkin'
'git-commit'
'git-rebase'
'gnuplot'
'go'
'graphql'
'groovy'
'hack'
'haml'
'handlebars' | 'hbs'
'haskell'
'hcl'
'hlsl'
'html'
'ini'
'java'
'javascript' | 'js'
'jinja-html'
'json'
'jsonc'
'jsonnet'
'jssm' | 'fsl'
'jsx'
'julia'
'kotlin'
'latex'
'less'
'lisp'
'logo'
'lua'
'make' | 'makefile'
'markdown' | 'md'
'marko'
'matlab'
'mdx'
'mermaid'
'nginx'
'nim'
'nix'
'objective-c' | 'objc'
'objective-cpp'
'ocaml'
'pascal'
'perl'
'php'
'plsql'
'postcss'
'powershell' | 'ps' | 'ps1'
'prisma'
'prolog'
'pug' | 'jade'
'puppet'
'purescript'
'python' | 'py'
'r'
'raku' | 'perl6'
'razor'
'rel'
'riscv'
'ruby' | 'rb'
'rust' | 'rs'
'sas'
'sass'
'scala'
'scheme'
'scss'
'shaderlab' | 'shader'
'shellscript' | 'shell' | 'bash' | 'sh' | 'zsh'
'smalltalk'
'solidity'
'sparql'
'sql'
'ssh-config'
'stata'
'stylus' | 'styl'
'svelte'
'swift'
'system-verilog'
'tasl'
'tcl'
'tex'
'toml'
'tsx'
'turtle'
'twig'
'typescript' | 'ts'
'vb' | 'cmd'
'verilog'
'vhdl'
'viml' | 'vim' | 'vimscript'
'vue-html'
'vue'
'wasm'
'wenyan' | '文言'
'xml'
'xsl'
'yaml'
'zenscript'
```