
export class RouterLink extends HTMLAnchorElement {
  constructor(path) {
    super();
  }

  static get observedAttributes () {
    return ['path-to'];
  }

  attributeChangedCallback (attrName, oldVal, newVal) {

    if (attrName === 'path-to' && !oldVal) {
      this.addEventListener('click', (ev) => {
        ev.stopPropagation();

        // Cambio la ruta
        if (!history.state || (history.state && history.state.path !== newVal)) {
          window.history.pushState(
            { path: newVal },
            '',
            newVal
          );
        } else {
          window.history.replaceState(
            { path: newVal },
            '',
            newVal
          );
        }


        // Envio un evento que se propague y traspase el shadow dom
        this.dispatchEvent(new CustomEvent('route-changed', {
          detail: {
            path: newVal
          },
          bubbles: true,
          composed: true
        }));
      });
    }
  }
}

customElements.define('router-link', RouterLink, { extends: 'a' });