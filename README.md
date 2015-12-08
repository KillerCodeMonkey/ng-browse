# ng-browse [![Build Status](https://travis-ci.org/KillerCodeMonkey/ng-browse.svg?branch=master)](https://travis-ci.org/KillerCodeMonkey/ng-browse)
unified browse service for angularjs projects based on uiRouter and angular 1.x

## Installation
1. Download last release or use npm Installation
2. Load angular, ui.router and ngBrowse in your index.html
3. add ngBrowse as dependency to your module declaration
4. inject $ngBrowse to your components (e.g. controller)

An example can found in the demo.html file in the repository.

## $ngBrowse service functions
- back(steps): goes a defined count of steps back in window.history (default: -1)
- navigate(path, notInHistory): navigates to another url ($location) and can replace current history state
- go(stateName, params, notInHistory): navigates to another state (ui.router) and can replace current history state
- current(): return currenct state (ui.router)
- params(): return current state params (ui.router)
- location(): return current path/url ($location)
- reload(fullPageReload): reloads current state (ui.router) or forces a full page reload
