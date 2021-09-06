import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterComponent } from './master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '', loadChildren: () => import('./report/report.module').then(m => m.ReportModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
