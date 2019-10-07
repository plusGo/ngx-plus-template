import {Routes} from '@angular/router';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/block-kit-builder'},
  {
    path: 'block-kit-builder',
    loadChildren: () => import('./pages/block-kit-builder/block-kit-builder.module').then(mod => mod.BlockKitBuilderModule)
  },
];
