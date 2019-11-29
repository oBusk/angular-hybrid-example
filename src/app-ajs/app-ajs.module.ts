import * as angular from 'angular';

import uiRouter from '@uirouter/angularjs';
import { upgradeModule as uiRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { appComponent } from './app.component';

export const appAjsModule = angular.module('appAjsModule', [
  uiRouter,
  uiRouterUpgradeModule.name,
])
  .component('appRoot', appComponent)
  ;
