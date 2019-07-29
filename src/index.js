
import './template/theme.js'
import { html, LitElement } from 'lit-element';
import { RouterMixin } from './components/router/router-mixin';
import routes from './routes.js';

// import {  library, icon, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(fas);
// const glasses = findIconDefinition({ prefix: 'fas', iconName: 'user' });

// const glassesIcon = icon(glasses, {
//   transform: {
//     size: 1,     // starts at 16 so make it half
//     x: 0,       // the same as left-4
//     y: 0,        // the same as up-6
//     rotate: 180,  // the same as rotate-90
//     flipX: true, // the same as flip-h
//     flipY: true  // the same as flip-v
//   }
// }).html;

// const templateIcons = html(glassesIcon);

class MyApp extends RouterMixin(LitElement) {

  constructor() {
    super(routes, 'appContent');
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <a name="view1" is="router-link" path-to="/home">View One</a>
      <a name="view2" is="router-link" path-to="/detail/23463234">View Two</a>
      <a name="view3" is="router-link" path-to="/login">View Three</a>
      <div id="appContent">
        ${this.routerPage}
      </div>
    `;
  }
}

window.customElements.define('my-app', MyApp);
