import { Component } from '@angular/core';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {
  currentLanguage: any;
  language: string = '';
  page: any;
  collapse: boolean = false;
  constructor() {
}
}

