# morph-list-view-item

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/PolymerElements/paper-progress)

List view item component

`morph-list-view-item` changes its look automatically and will native native based on when it is either IOS device or Android device.

## Getting Started

For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.

## Demo

<!---

```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../iron-icons/maps-icons.html">
    <link rel="import" href="morph-list-view-item.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>

```

-->

```html

<h3>Android</h3>

<morph-list-view-item platform="android">
  <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
  Android List Item
  <span slot="secondary-content">Android Version</span>
</morph-list-view-item>

<morph-list-view-item platform="android" href="#moduware">
  <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
  Android list item with href becomes a link with ripple effect by default
  <span slot="secondary-content">Android Version</span>
</morph-list-view-item>

<morph-list-view-item platform="android" href="#moduware" expandable expanded>
  <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
  Expandable Link - Click to close or expand
  <span slot="secondary-content">Android Version</span>
  <span slot="expandable-content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
  </span>
</morph-list-view-item>

<h3>IOS</h3>

<morph-list-view-item platform="ios">
  <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
  IOS List Item
  <span slot="secondary-content">IOS Version</span>
</morph-list-view-item>

<morph-list-view-item platform="ios" href="#moduware" no-chevron>
  <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
  IOS list item with no-chevron attribute
  <span slot="secondary-content">IOS Version</span> 
</morph-list-view-item>

<morph-list-view-item platform="ios" href="#moduware" expandable>
  <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
  Expandable Link - Click to close or expand
  <span slot="secondary-content">IOS Version</span>
  <span slot="expandable-content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
  </span>
</morph-list-view-item>

```

- Here is a quick demo of the morph-list-view-item element for IOS platform.

  <p align="center">
    <img src="demo-images/ios-basic-demo.png" alt="IOS morph-list-view-item demo"/>
  </p>

- Here is a quick demo of the morph-list-view-item element for Android platform.

  <p align="center">
    <img src="demo-images/android-basic-demo.png" alt="IOS morph-list-view-item demo"/>
  </p>

- Both IOS and Android demo are using the HTML markup. 

```html

<template>
  <morph-list-view-item>Item 1</morph-list-view-item>
  <morph-list-view-item>
    <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
    Item 2
    <span slot="secondary-content">Version</span> 
  </morph-list-view-item>

  <morph-list-view-item href="#moduware" no-ripple>
    <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
    Link 1
    <span slot="secondary-content">Version</span> 
  </morph-list-view-item>

  <morph-list-view-item href="#moduware" no-chevron>
    <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
    no-chevron
    <span slot="secondary-content">Version</span> 
  </morph-list-view-item>
  <morph-list-view-item href="#moduware" contains-media>
    <span slot="icon">
      <img src="http://lorempixel.com/160/160/people/1" width="80">
    </span>
    <span slot="header">Header</span>
    Item 3
    <span slot="footer">Footer</span>
  </morph-list-view-item>
</template>

```

- Demo when morph-list-view-item is inside morph-list-view for IOS platform

  <p align="center">
    <img src="demo-images/ios-with-morph-list-view-demo.png" alt="IOS morph-list-view-item demo"/>
  </p>

- Demo when morph-list-view-item is inside morph-list-view for IOS platform

  <p align="center">
    <img src="demo-images/android-with-morph-list-view-demo.png" alt="IOS morph-list-view-item demo"/>
  </p>

- Here's the HTML markup when morph-list-view-item is inside morph-list-view for both IOS and Android platform

```html

<template>
  <morph-list-view>
    <morph-list-view-title>First list</morph-list-view-title>
    <morph-list-view-item>Item 1</morph-list-view-item>

    <morph-list-view-divider>Divider</morph-list-view-divider>

    <morph-list-view-item>
      <!-- <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span> -->
      Item 2
      <span slot="secondary-content">Version</span> 
    </morph-list-view-item>
    <morph-list-view-item href="#moduware">
      <span slot="header">Header</span>
      Item 3
      <span slot="footer">Footer</span>
    </morph-list-view-item>
  </morph-list-view>

  <morph-list-view>
    <morph-list-view-title>Second list</morph-list-view-title>
    <morph-list-view-item>Item 4</morph-list-view-item>
  </morph-list-view>
</template>

```

- Demo showing ripple effect when morph-list-view-item is a link on Android platform

  <p align="center">
    <img src="demo-images/android-list-view-item-with-demo.gif" alt="IOS morph-list-view-item demo"/>
  </p>

- Sample HTML markup for expandable item

```html

<morph-list-view-item href="#moduware" expandable expanded>
  <span slot="icon"><iron-icon icon="maps:directions-bus"></iron-icon></span>
  Link 1
  <span slot="secondary-content">Version</span>
  <span slot="expandable-content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
  </span>
</morph-list-view-item>

```

  - Demo showing expandable item

  <p align="center">
    <img src="demo-images/expandable-list-view-item-demo.gif" alt="IOS morph-list-view-item demo"/>
  </p>
  
### Attributes

|     Custom Attribute    |   Type  | Description                                                                                   | Default        |
|:-----------------------:|:-------:|-----------------------------------------------------------------------------------------------|----------------|
|       **`href`**        | String  | Takes the value of the url. When **`href`** is present, the item becomes a link               | **no default** |
|    **`containsMedia`**  | Boolean | This is an option for items to take in media/images instead of just icons                     | **`false`**    |
|    **`noRipple`**       | Boolean | To have a list item with no ripple assign **`true`** or just set this on the the html markup  | **`false`**    |
|    **`noChevron`**      | Boolean | To have a list item with no chevron assign **`true`** or just set this on the the html markup | **`false`**    |
|    **`expandable`**     | Boolean | Option to have expandable list item with expandable content just assign **`true`**            | **`false`**    |
|    **`expanded`**       | Boolean | Option to expand list item just assign **`true`** or just set this on the the html markup     | **`false`**    |

### Styling

- Custom CSS property

Custom property                    | Description                                                                      | Default    |
-----------------------------------|----------------------------------------------------------------------------------|------------|
`--display-top-line`               | Display property for item top line use to configure when on a list view          | block      |
`--display-inner-item-bottom-line` | Display property for item inner bottom line use to configure when on a list view | none       |

## Further help

For more information on how to install and run test please go here - [Polymorph elements getting started]

[Polymorph elements getting started]: https://github.com/moduware/polymorph-components/blob/master/INFO.md
