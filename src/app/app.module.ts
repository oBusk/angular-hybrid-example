import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { appAjsModule } from 'src/app-ajs/app-ajs.module';

import { BModule } from './b/b.module';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular directives and registers
    // the future state for the lazy loaded contacts module
    UIRouterUpgradeModule.forRoot(),
    BModule,
  ],
  providers: [],
  entryComponents: [
    BComponent,
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [appAjsModule.name], { strictDi: true })
  }
}
