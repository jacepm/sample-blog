import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: "app-blog-view",
  templateUrl: "./blog-view.component.html",
  styleUrls: ["./blog-view.component.css"]
})
export class BlogViewComponent implements OnInit {
  id: any;
  row: any;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getBlog();
  }

  getBlog() {
    this.api
      .get("/blog/" + this.id)
      .then((res: any) => {
        this.row = res.data;
        console.log(this.row);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
