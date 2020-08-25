import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  rows: any;

  constructor(private api: ApiService, private router: Router) {}

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
}
