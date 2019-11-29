import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b.component';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';



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
  entryComponents: [BComponent]
})
export class BModule { }
