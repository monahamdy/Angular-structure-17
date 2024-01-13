import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-change-banks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-banks.component.html',
  styleUrl: './change-banks.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChangeBanksComponent {

constructor(private ref:DynamicDialogRef){

}
close(){
  this.ref.close({isClosed:true});
}

}
