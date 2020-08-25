import { Component, OnInit, EventEmitter } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.css"]
})
export class DeleteModalComponent implements OnInit {
  title: string;
  data: string;
  loading = false;
  event: EventEmitter<boolean> = new EventEmitter();

  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {}

  close() {
    this.modalRef.hide();
  }

  delete() {
    this.loading = true;
    setTimeout(() => {
      this.event.emit(true);
      this.modalRef.hide();
    }, 3000);
  }
}
