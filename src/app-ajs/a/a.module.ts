import uiRouter from '@uirouter/angularjs';
import { StateRegistry } from '@uirouter/core';
import * as angular from 'angular';

import { aComponent } from "./a.component";

export const aModule = angular.module('aModule', [
  uiRouter,
])
  .component('appA', aComponent)
  .run([
    '$stateRegistry',
    (
      $stateRegistry: StateRegistry,
    ) => {
      $stateRegistry.register({
        name: 'a-state',
        url: '/a',
        component: 'appA',
      });
    }
  ])
