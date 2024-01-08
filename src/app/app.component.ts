import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./Shared/navbar/navbar.component";
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from "./Shared/footer/footer.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, NavbarComponent, HomeComponent, FooterComponent, DashboardComponent]
})
export class AppComponent {
  title = 'Angular-structure-17';
}
