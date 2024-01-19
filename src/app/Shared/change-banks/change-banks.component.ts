import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
@Component({
  selector: 'app-change-banks',
  standalone: true,
  imports: [CommonModule,InputGroupModule,InputGroupAddonModule,RadioButtonModule],
  templateUrl: './change-banks.component.html',
  styleUrl: './change-banks.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChangeBanksComponent implements OnInit {
 
  selecteditem: any = null;

  constructor(private ref:DynamicDialogRef){

  }
    items: any[] = [
        { name: 'Alt Bank', key: 'A' },
        { name: 'Bank', key: 'B' },
        { name: 'Uta kane', key: 'U' },
        { name: 'Candace Odonnell', key: 'C' }
    ];

    ngOnInit() {
        this.selecteditem = this.items[1];
    }

close(){
  this.ref.close({isClosed:true});
}

filterData(event: any): void {
  console.log(event?.target?.value);

}

}


