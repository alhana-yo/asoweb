import { html } from 'lit-html';

export default [
  {
    path: '/home',
    componentRef: function () {
      return import('./pages/home').then((module) => this.routerPage = html`<home-page></home-page>`);
    }
  },
  {
    path: '/detail/:idDetail',
    componentRef: function (params) {
      return import('./pages/detail').then((module) => this.routerPage = html`<detail-page></detail-page>`);
    }
  },
  {
    path: '/login',
    componentRef: function () {
      return import('./pages/login').then((module) => this.routerPage = html`<login-page ></login-page>`);
    }
  }
]