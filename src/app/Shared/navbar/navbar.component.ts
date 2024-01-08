import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageComponent } from "../language/language.component";
import { ThemeComponent } from "../theme/theme.component";
import { NotificationComponent } from "../notification/notification.component";
import { UserinfoComponent } from "../userinfo/userinfo.component";
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../../search.pipe';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [FormsModule,SearchPipe,CommonModule,RouterModule, LanguageComponent, ThemeComponent, NotificationComponent, UserinfoComponent]
})
export class NavbarComponent {

    searchtext:any;
}