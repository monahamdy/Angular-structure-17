import { Component } from '@angular/core';
import { ChangeBanksComponent } from '../change-banks/change-banks.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [DynamicDialogModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.scss',
  providers: [DialogService]
})
export class UserinfoComponent {

  constructor(private dialogService: DialogService) {

  }
  OpenAllBanks() {
    const ref = this.dialogService.open(ChangeBanksComponent, {
      header: '',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      styleClass: 'change-bank-modal'
    });

    ref.onClose.subscribe((res: any) => {
      console.log(res)
    });
  }

}
