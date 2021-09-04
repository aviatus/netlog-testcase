import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterComponent } from './master.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '', component: ReportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
