import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgbCollapseModule,SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent {
  isSettingCollapsed=true
  isLocCollapsed=true
  isUserCollapsed=true

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e: Event): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;
}
