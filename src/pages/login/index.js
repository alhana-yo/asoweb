import { LitElement, html } from "lit-element";

export class LoginPage extends LitElement {

  static get is() {
    return 'login-page';
  }

  render () {
    return html`<h1>Login page</h1>`;
  }

}

customElements.define(LoginPage.is, LoginPage);