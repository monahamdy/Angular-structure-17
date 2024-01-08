import { Component } from '@angular/core';
import { ChangeBanksComponent } from '../change-banks/change-banks.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.scss'
})
export class UserinfoComponent {
change: any;
banks: any;
  private modalService: NgbModal = new NgbModal;

modal(){
  const modalRef = this.modalService.open(ChangeBanksComponent, { size: 'lg', backdrop: 'static' , centered: true});
  modalRef.hidden.subscribe(() => {
     alert('Done');
   })
}
}
