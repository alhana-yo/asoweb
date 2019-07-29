export function RouterMixin (SubClass) {
  return class Router extends SubClass {

    constructor(options) {
      super();
      document.addEventListener('route-changed', (ev) => {
        
        ev.stopPropagation();
        const pathToNavigate = ev.detail.path;
        this.parsePath(pathToNavigate, options);
        
      });

      window.addEventListener('popstate', (ev) => this.getCurrentRouteState(options));

      this.getCurrentRouteState(options);
    }

    static get properties() {
      return { routerPage: String };
    }

    parsePath(pathToNavigate, options) {
      const pathLevels = pathToNavigate.split('/');
      let optionsCandidates = [...options.map(function (option) {
        const path = option.path.split('/');

        if (!path[0]) {
          path.shift()
        }

        return {
          ...option,
          parameters: {},
          path
        }
      })];

      if (!pathLevels[0]) {
        pathLevels.shift();
      }

      pathLevels.forEach(function (level, index) {
        optionsCandidates = optionsCandidates.filter(function (option, ci, arr) {
          
          const optionLevel = option.path[index];
          let isParameter = false;
          
          if (optionLevel && typeof optionLevel === 'string' && optionLevel.charAt(0) === ':') {
            isParameter = true;
            arr[ci].parameters = {
              key: optionLevel,
              value: level
            }

          }
          
          return optionLevel && (optionLevel === level || isParameter);
        });
      });

      if (optionsCandidates.length === 1) {
        const option = optionsCandidates[0];

        optionsCandidates[0].componentRef.call(this, option.parameters);
      }
    }

    getCurrentRouteState (options) {
      if (history.state) {
        this.parsePath(history.state.path, options);
      }
    }
  }
}

import './router-link';