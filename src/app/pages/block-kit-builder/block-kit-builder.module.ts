import {NgModule} from '@angular/core';
import {BlockKitBuilderComponent} from './block-kit-builder.component';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './block-kit-builder.route';
import {TemplatesListComponent} from './templates-list/templates-list.component';


@NgModule({
  declarations: [BlockKitBuilderComponent, TemplatesListComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  entryComponents: [TemplatesListComponent]
})
export class BlockKitBuilderModule {
}
