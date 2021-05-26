# webpack

## Introduction

**Web(Website) Pack(Packager)**
webpack is a tool/module bundler that process, bundle and manage your javaScript applications.
It also process the other assets as well like style-sheets and images.

## Why we need a Module bundler

To manage the modular javaScript code. For a big application you might be coding around multiple javaScript files or components or may be using third-party libraries. The simple way to is to put all the `.js` or `.css` files one after another in `index.html`.

like this way

```html
<html>
    <head>
        <link rel="stylesheet" src="main.css"/>
        <link rel="stylesheet" src="welcome.css"/>
        <link rel="stylesheet" src="about.css"/>
        <link rel="stylesheet" src="dashboard.css"/>
        and so on...
    </head>
    <body>
    <script src="app.js"></script>
    <script src="welcome.js"></script>
    <script src="about.js"></script>
    <script src="dashboard.js"></script>
    and so on...
    <body>
</html>
```

Few problem statements here:

1. Cause slow page rendering since so many script tags or link tags to load.
2. Everything loaded at once. e.g. there is no need of `dashboard.js` at `about` page.
3. Chance of easily messing up with the dependencies when you misarrange the files.
4. Conflict between names and overrides since everything is loaded in global context.
5. Dead codes like unused variables, unwanted comments.. etc.
6. Hard to manage asynchronous operations across the files.
7. Explicitly manage browser compatibility.

## :warning: **To cut a long story short, your code is not production ready.**
