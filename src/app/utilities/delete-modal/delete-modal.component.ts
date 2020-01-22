import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  title: string;
  data: string;
  actionBtnName: string;
  actionBtnColor: string
  closeBtnName: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    
  }
}
