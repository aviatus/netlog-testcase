import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { IconModule } from '@visurel/iconify-angular';

import { MegaMenuModule } from '../../components/mega-menu/mega-menu.module';
import { NavigationItemModule } from '../../components/navigation-item/navigation-item.module';
import { ContainerModule } from '../../directives/container/container.module';
import { NavigationModule } from '../navigation/navigation.module';
import { ToolbarNotificationsModule } from './toolbar-notifications/toolbar-notifications.module';
import { ToolbarSearchModule } from './toolbar-search/toolbar-search.module';
import { ToolbarUserModule } from './toolbar-user/toolbar-user.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    ToolbarNotificationsModule,
    ToolbarUserModule,
    ToolbarSearchModule,
    IconModule,
    NavigationModule,
    RouterModule,
    NavigationItemModule,
    MegaMenuModule,
    ContainerModule,
    BreadcrumbsModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule {
}
