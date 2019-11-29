import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { BComponent } from './b.component';

@NgModule({
  declarations: [BComponent],
  imports: [
    CommonModule,
    UIRouterUpgradeModule.forChild({
      states: [
        {
          name: 'b-state',
          url: '/b',
          component: BComponent,
        }
      ]
    })
  ],
})
export class BModule { }
