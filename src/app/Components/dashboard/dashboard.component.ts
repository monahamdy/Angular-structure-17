import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [NavbarComponent, SidebarComponent]
})
export class DashboardComponent {

}