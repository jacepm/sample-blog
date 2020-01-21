import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  blogForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  submit(value: string) {
    this.api
      .post("/blog", value)
      .then((res: any) => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error)
      });
  }

}
