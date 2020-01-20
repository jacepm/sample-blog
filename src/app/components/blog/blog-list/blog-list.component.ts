import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  rows: any;

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

ngOnInit() {
  this.getBlogLists();
}

getBlogLists() {
  this.api
    .get("/blog")
    .then((res: any) => {
      this.rows = res.data.filter((data: any) => data.deleted === false);
      console.log(this.rows);
    })
    .catch(error => {
      console.log(error);
    });
  }

  goto(value: string) {
    this.router.navigate([`/blog/${value}`]);
  }
}