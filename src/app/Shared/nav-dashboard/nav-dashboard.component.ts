import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from "../language/language.component";
import { UserinfoComponent } from "../userinfo/userinfo.component";
import { NotificationComponent } from "../notification/notification.component";
import { ThemeComponent } from "../theme/theme.component";
@Component({
    selector: 'app-nav-dashboard',
    standalone: true,
    templateUrl: './nav-dashboard.component.html',
    styleUrl: './nav-dashboard.component.scss',
    imports: [CommonModule, LanguageComponent, UserinfoComponent, NotificationComponent, ThemeComponent]
})
export class NavDashboardComponent {

}
