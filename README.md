# DOM Timer
WIP

## Motivation
When working on complex web applications, I needed to do rough benchmarking within subsections of the app based on DOM element load time. I could do it from the browser's console, but figured life would be much easier if it were available as a browser extension. This extension lets you define DOM selectors and their respective load criteria and reports how long it took to load them.

This extension is made possible by the [MutationObserver API](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/).

## Contributing
To contribute to this repository with features, fork it, create new branch, add your feature and create pull-request. To report bugs or new features, create an issue using the Issues tab.