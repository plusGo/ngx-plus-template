import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {ShareModule} from './share/share.module';
import {MAT_DATE_LOCALE} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ShareModule,
    RouterModule.forRoot(ROUTER_CONFIG, {
      useHash: true
    })
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'zh'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
