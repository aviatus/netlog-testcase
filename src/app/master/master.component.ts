import { filter, map } from 'rxjs/operators';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SidebarComponent } from '../../@vex/components/sidebar/sidebar.component';
import { ConfigService } from '../../@vex/services/config.service';
import { LayoutService } from '../../@vex/services/layout.service';
import { checkRouterChildsData } from '../../@vex/utils/check-router-childs-data';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
  isFooterVisible$ = this.configService.config$.pipe(map(config => config.footer.visible));
  isDesktop$ = this.layoutService.isDesktop$;

  toolbarShadowEnabled$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => checkRouterChildsData(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled))
  );

  @ViewChild('configpanel', { static: true }) configpanel: SidebarComponent;

  constructor(private layoutService: LayoutService,
    private configService: ConfigService,
    private router: Router) { }

  ngOnInit() {
    this.layoutService.configpanelOpen$.subscribe(open => open ? this.configpanel.open() : this.configpanel.close());
  }
}
