import { PopoverService } from 'src/@vex/components/popover/popover.service';
import { ConfigService } from 'src/@vex/services/config.service';
import { LayoutService } from 'src/@vex/services/layout.service';

import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FundService, FundSpkService } from '@shared/services';

import { ConfigPanelModule } from '../../@vex/components/config-panel/config-panel.module';
import { SidebarModule } from '../../@vex/components/sidebar/sidebar.module';
import { FooterModule } from '../../@vex/layout/footer/footer.module';
import { LayoutModule } from '../../@vex/layout/layout.module';
import { QuickpanelModule } from '../../@vex/layout/quickpanel/quickpanel.module';
import { SidenavModule } from '../../@vex/layout/sidenav/sidenav.module';
import { ToolbarModule } from '../../@vex/layout/toolbar/toolbar.module';
import { SharedModule } from '../shared/shared.module';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';

@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FooterModule,
    ConfigPanelModule,
    SidebarModule,
    QuickpanelModule,
    SharedModule
  ],
  providers: [
    LayoutService,
    PopoverService,
    ConfigService,
    DatePipe,
    { provide: FundService, useClass: FundSpkService }
  ]
})
export class MasterModule {
}
