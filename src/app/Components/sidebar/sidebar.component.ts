import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSettingCollapsed=true
  isLocCollapsed=true
  isUserCollapsed=true
}
