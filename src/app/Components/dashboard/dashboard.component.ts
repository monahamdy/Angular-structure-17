import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CourseComponent } from "../course/course.component";
import { NavDashboardComponent } from "../../Shared/nav-dashboard/nav-dashboard.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [NavbarComponent, SidebarComponent, CourseComponent, NavDashboardComponent]
})
export class DashboardComponent {

}
