import * as angular from 'angular';

import uiRouter from '@uirouter/angularjs';
import { upgradeModule as uiRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { aModule } from './a/a.module';
import { appComponent } from './app.component';

export const appAjsModule = angular.module('appAjsModule', [
  uiRouter,
  uiRouterUpgradeModule.name,
  aModule.name,
])
  .component('appRoot', appComponent)
  ;
