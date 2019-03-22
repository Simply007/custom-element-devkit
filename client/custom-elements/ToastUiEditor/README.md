# Toast UI editor

Toast UI editor is based on [Toast UI Editor for React](https://github.com/nhnent/toast-ui.react-editor) (https://ui.toast.com/tui-editor/). It is a Markdown WYSIWYG Editor including GFM Standard + Chart & UML Extensible.
All of the editor [extensions]()https://github.com/nhnent/tui.editor/blob/master/docs/using-extensions.md) are enabled in this custom element.

![Toast UI editor](TODO.gif)

## Usage

If you want to use the Shopify product selector in your project in Kentico Cloud, follow these steps:

* In Kentico Cloud open Content types tab
* Open / create a content model to which you want to add the Shopify product selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/custom-element-samples/ToastUiEditor/index.html

## Installation

Toast UI editor is in repository: https://github.com/Simply007/kc-toast-ui-editor.

If you want to adjust the implementation, first download [Kentico Cloud Custom Elements Devkit](https://github.com/kentico/custom-element-devkit). This repository should be positioned within `/client/custom-elements` folder. 

You could use following commands to set up the development environment

Prerequisites:
* Node.js
* git

```markdown
git clone https://github.com/Kentico/custom-element-devkit.git
cd custom-element-devkit
git clone https://github.com/Simply007/kc-country-selector.git ./client/custom-elements/kc-country-selector
npm install --save react react-dom @toast-ui/react-editor
npm start -- -hw
```
Browse: https://localhost:3000/custom-elements/kc-country-selector/wrap

For further instructions on devkit implementation, please refer to [Custom Element Devkit README](https://github.com/Kentico/custom-element-devkit/blob/master/readme.md).

sample value

~~~~markdown

```uml
partition Conductor {
  (*) --> "Climbs on Platform"
  --> === S1 ===
  --> Bows
}

partition Audience #LightSkyBlue {
  === S1 === --> Applauds
}

partition Conductor {
  Bows --> === S2 ===
  --> WavesArmes
  Applauds --> === S2 ===
}

partition Orchestra #CCCCEE {
  WavesArmes --> Introduction
  --> "Play music"
}
```

```chart
,category1,category2
Jan,21,23
Feb,31,17

type: column
title: Monthly Revenue
x.title: Amount
y.title: Month
y.min: 1
y.max: 40
y.suffix: $
````

| @cols=2:merged |
| --- | --- |
| table | table |

~~~~

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-elements-samples/ToastUiEditor?pixel)
