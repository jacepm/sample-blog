import { Component, OnInit, TemplateRef } from "@angular/core";
import { ApiService } from "../../../services/api.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { DeleteModalComponent } from "src/app/utilities/delete-modal/delete-modal.component";
import { BsModalService, BsModalRef } from "ngx-bootstrap";

@Component({
  selector: "app-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.css"]
})
export class BlogListComponent implements OnInit {
  rows: any;
  modalRef: BsModalRef;

  constructor(
    private api: ApiService,
    public auth: AuthService,
    private router: Router,
    private modal: BsModalService
  ) {}

  ngOnInit() {
    this.getBlogLists();
  }

  getBlogLists() {
    this.api
      .get("/blog")
      .then((res: any) => {
        this.rows = res.data
          .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
          .filter((data: any) => data.deleted === false);

      })
      .catch(error => {
        console.log(error);
      });
  }

  goto(value: string) {
    this.router.navigate([`/blog/view/${value}`]);
  }

  add() {
    this.router.navigate([`/blog/add`]);
  }

  edit(id: string) {
    this.router.navigate([`/blog/edit/${id}`]);
  }

  deleteModal(id: string) {
    const initialState = {
      data: "Are you sure you want to delete this blog?",
      title: "Delete blog"
    };

    this.modalRef = this.modal.show(DeleteModalComponent, { initialState });

    this.modalRef.content.event.subscribe(result => {
      if (!result) {
        return;
      }

      const value = { deleted: true };
      this.api
        .patch("/blog/" + id, value)
        .then(res => {
          console.log(res);
          this.getBlogLists();
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
}
