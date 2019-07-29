import { LitElement, html } from "lit-element";

export class DetailPage extends LitElement {
    static get is() {
      return 'detail-page';
    }
    render() {
        return html`<h1>Detail page</h1>`;
    }

}

customElements.define(DetailPage.is, DetailPage);