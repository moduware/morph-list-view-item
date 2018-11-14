// import { MorphElement } from '@moduware/morph-element/morph-element.js';
import { LitElement, html } from '@polymer/lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import '@moduware/morph-ripple/morph-ripple.js';
import '@moduware/morph-shared-styles/morph-shared-styles.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * `morph-list-view-item`
 * Item component for list view
 *
 * @customElement
 * @polymer
 * @extends HTMLElement
 * 
 * @demo demo/index.html
 */
export class MorphListViewItem extends LitElement {
  render() {
    return html`
    <style include="morph-shared-styles">
      :host {
        display: block;
        margin-bottom: 10px;
      }

      :host .container {
        display: flex;
        justify-content: space-between;
        align-items: var(--container-align-items, center);
        position: relative;
        white-space: nowrap;
        box-sizing: border-box;
        background-color: white;
      }

      :host .sub-container {
        width: 100%;
        display: flex;
        align-self: stretch;
        align-items: center;
        position: relative;
        min-width: 0;
      }

      :host([platform="ios"]) .container {
        padding-left: 15px;
        min-height: 44px;
      }

      :host([platform="android"]) .container {
        padding-left: 16px;
        min-height: 48px;
      }

      :host([platform="ios"][href]:not([no-chevron])) .sub-container {
        padding-right: 15px;
      }
      
      :host([platform="android"][href]:not([no-chevron])) .sub-container {
        padding-right: 16px;
      }

      :host([platform="ios"][contains-media]) ::slotted([slot="icon"]) {
        padding-top: 14px;
        padding-bottom: 14px;
      }

      :host([platform="ios"]) .container::before,
      :host([platform="ios"]) .expandable-content-container::after,
      :host([platform="ios"]:not([expandable])) .container::after,
      :host([platform="ios"]) .sub-container::after {
        content: '';
        position: absolute;
        background-color: #c8c7cc;
        left: 0;
        width: 100%;
        height: 1px;
        transform: scaleY(.5);
        transition: opacity 300ms;
      }
      
      :host([platform="ios"]) .sub-container::after,
      :host([platform="android"]) .sub-container::after {
        height: var(--sub-container-after-height, 1px);
        opacity: var(--sub-container-after-opacity, 1);
      }

      :host([platform="android"]) .container::before,
      :host([platform="android"]) .expandable-content-container::after,
      :host([platform="android"]:not([expandable])) .container::after,
      :host([platform="android"]) .sub-container::after {
        content: '';
        position: absolute;
        background-color: rgba(0,0,0,.12);
        left: 0;
        width: 100%;
        height: 1px;
        transition: opacity 300ms;
      }

      :host([platform="ios"]) .sub-container::after {
        display: var(--display-inner-item-bottom-line, none);
        transform-origin: 50% 100%;
        bottom: 0;
      }

      :host([platform="android"]) .sub-container::after {
        display: var(--display-inner-item-bottom-line, none);
        transform-origin: 50% 100%;
        bottom: 0;
      }

      :host([platform="ios"]) .container::before {
        display: var(--display-top-line, block);
        transform-origin: 50% 0;
        top: 0;
      }

      :host([platform="android"]) .container::before {
        display: var(--display-top-line, block);
        transform-origin: 50% 0;
        top: 0;
      }

      :host([platform="ios"]) .container::after,
      :host([platform="ios"][expandable]) .expandable-content-container::after {
        display: var(--display-bottom-line, block);
        transform-origin: 50% 100%;
        bottom: 0;
      }

      :host([platform="android"]) .container::after,
      :host([platform="android"][expandable]) .expandable-content-container::after {
        display: var(--display-bottom-line, block);
        transform-origin: 50% 100%;
        bottom: 0;
      }

      :host .main-text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        line-height: normal;
        width: 100%;
        padding-top: 8px;
        padding-bottom: 8px;
        min-width: 0;
      }

      :host([platform="ios"]) .main-text {
        font-size: 17px;
      }

      :host([platform="android"]) .main-text {
        font-size: 16px;
      }

      :host .main-text span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      :host([platform="android"]) .main-text ::slotted([slot="header"]),
      :host([platform="android"]) .main-text ::slotted([slot="footer"]), 
      :host([platform="ios"]) .main-text ::slotted([slot="header"]),
      :host([platform="ios"]) .main-text ::slotted([slot="footer"]) {
        font-weight: 400;
        font-size: 12px;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .main-text ::slotted([slot="footer"]) {
        color: #8e8e93;
      }

      :host([platform="ios"]) ::slotted([slot="secondary-content"]) {
        color: #8e8e93;
        font-size: 17px;
        padding-left: 5px;
        padding-right: 11px;
      }

      :host([platform="android"]) ::slotted([slot="secondary-content"]) {
        color: #757575;
        font-size: 14px;
        padding-left: 8px;
        padding-right: 18px;
      }

      :host ::slotted([slot="icon"]) {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: 15px;
      }

      :host([platform="android"]) ::slotted([slot="icon"]) {
        min-width: 40px;
      }

      :host([platform="ios"]) .expandable-content-container {
        position: relative;
        background-color: white;
        display: block;
        box-sizing: border-box;
        width: 100%;
        color: #6d6d72;
        overflow: hidden;
        transition: max-height 300ms;
      }

      :host([platform="android"]) .expandable-content-container {
        position: relative;
        background-color: white;
        display: block;
        box-sizing: border-box;
        width: 100%;
        color: #212121;
        overflow: hidden;
        line-height: 1.5;
        transition: max-height 300ms;
      }

      :host([platform="ios"]:not([expandable])) .expandable-content-container,
      :host([platform="android"]:not([expandable])) .expandable-content-container {
        display: none;
      }

      :host([platform="ios"]) ::slotted([slot="expandable-content"]) {
        display: block;
        padding: 10px 15px;
      }

      :host([platform="android"]) ::slotted([slot="expandable-content"]) {
        display: block;
        padding: 10px 16px;
      }

      :host([platform="ios"]:not([expanded])) .expandable-content-container,
      :host([platform="android"]:not([expanded])) .expandable-content-container {
        max-height: 1px !important;
      }

      a {
        color: inherit;
        cursor: default;
        text-decoration: none;
      }

      svg {
        flex-grow: 0;
        flex-shrink: 0;
      }

      /* ripple and chevron related styles to make them optional */
      /* :host([no-chevron]) svg#chevron-svg, */
      /* :host([no-ripple]) morph-ripple, */
      :host(:not([platform="android"])) morph-ripple {
        display: none;
      }
      :host([platform="android"]) morph-ripple {
        --ripple-color:  var(--ripple-color-android-light, rgba(0,0,0,0.1));
      }
      
    </style>
    
    <a @click="${event => this.clickHandler(event)}">
      <div class="container">
        <slot name="icon"></slot>

        <div class="sub-container">
          <div class="main-text">
            <slot name="header"></slot>
            <span>
              <slot></slot>
            </span>
            <slot name="footer"></slot>
          </div>

          <slot name="secondary-content"></slot>
          
          ${this.getRenderChevron()}
        </div>

        ${this.getRenderRipple()}
        
      </div>

      <div class="expandable-content-container" id="expandableContentContainer">
        <div><slot name="expandable-content"></slot></div>
      </div>
    </a>
    
    <!-- 
    
-    <a href="[[href]]" on-click="clickHandler">
       <div class="container">
-        <slot name="icon"></slot>
         
-        <div class="sub-container">
-          <div class="main-text">
-            <slot name="header"></slot>
-            <span>
-              <slot></slot>
-            </span>
-            <slot name="footer"></slot>
-          </div>
-          
-          <slot name="secondary-content"></slot>

-          <template is="dom-if" if="[[href]]">
-            <template is="dom-if" if="[[!noChevron]]">
-              <svg id="chevron-svg" width="8px" height="13px" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
-                <polygon fill="#c7c7cc" transform="translate(1.500000, 6.500000) rotate(-45.000000) translate(-1.500000, -6.500000) " points="6 11 6 2 4 2 4 9 -3 9 -3 11 5 11"></polygon>
-              </svg>
-            </template>
-          </template>
-        </div>
-        <template is="dom-if" if="[[href]]">
-          <template is="dom-if" if="[[!noRipple]]">
-            <morph-ripple></morph-ripple> 
-          </template>
-        </template>
       </div>
     </a>
-    <div class="expandable-content-container" id="expandableContentContainer">
-      <div><slot name="expandable-content"></slot></div>
-    </div>

    -->
`;
  }

  static get is() { return 'morph-list-view-item'; }
  static get properties() {
    return {
      platform: {
        type: String,
        reflect: true
      },
      href: {
        type: String,
        reflect: true
      },
      containsMedia: {
        type: Boolean,
        reflect: true
      },

      /** remove ripple effect */
      noRipple: {
        type: Boolean,
        reflect: true
      },
      
      /** remove chevron svg on links */
      noChevron: {
        type: Boolean
      },

      expandable: {
        type: Boolean
      },

      expanded: {
        type: Boolean,
        reflect: true
      }

    };
  }

  firstUpdated() {
    super.firstUpdated();

    if (!this.hasAttribute('platform')) {
      this.platform = getPlatform();
    }
  }

  clickHandler(event) {
    console.log('event', event.target);
    
    // if(this.expandable) {
    //   this._setMaxHeightForExpandableContentContainer();
    //   this.set('expanded', !this.expanded);
    // }
  }

  getRenderChevron() {
    const chevronSvg = html`
      <svg id="chevron-svg" width="8px" height="13px" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="#c7c7cc" transform="translate(1.500000, 6.500000) rotate(-45.000000) translate(-1.500000, -6.500000) " points="6 11 6 2 4 2 4 9 -3 9 -3 11 5 11"></polygon>
      </svg>
    `;
    if (this.hasAttribute('href') && !this.noChevron) {
      return chevronSvg;
    } else {
      return html``;
    }
  }

  getRenderRipple() {
    const ripple = html`<morph-ripple></morph-ripple>`;

    if (this.platform == 'android' && this.hasAttribute('href') && !this.noRipple) {
      return ripple;
    } else {
      return html``;
    }
  }

  _setMaxHeightForExpandableContentContainer() {
    // let shadow = this.shadowRoot;
    // let expandableContent = shadow.querySelector('#expandableContentContainer');
    
    // const height = expandableContent.children[0].offsetHeight;
    // expandableContent.style.maxHeight = height + 'px';
  }

  increment() {
    this.value++;
    this._valueChanged();
  }

  _valueChanged() {
    // Fire a custom event for others to listen to
    this.dispatchEvent(new CustomEvent('valueChange', { detail: this.value }));
  }
}

window.customElements.define(MorphListViewItem.is, MorphListViewItem);
