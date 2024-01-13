import { Component } from '@angular/core';
import { ChangeBanksComponent } from '../change-banks/change-banks.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [DynamicDialogModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.scss',
  providers:[DialogService]
})
export class UserinfoComponent {
change: any;
banks: any;
  private modalService: NgbModal = new NgbModal;

  constructor(private dialogService:DialogService){

  }
  OpenAllBanks() {
    const ref   = this.dialogService.open(ChangeBanksComponent, {
        header: 'Select a Product',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true
    });

    ref.onClose.subscribe((res: any) => {
        console.log(res)
    });
}

}
