import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-change-banks',
  standalone: true,
  imports: [DialogModule,CommonModule],
  templateUrl: './change-banks.component.html',
  styleUrl: './change-banks.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChangeBanksComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
