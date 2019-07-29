import { LitElement, html } from "lit-element";

export class HomePage extends LitElement {

  static get is() {
    return 'home-page';
  }

  render() {
      return html`<h1>Home page</h1>`;
  }

}

customElements.define(HomePage.is, HomePage);