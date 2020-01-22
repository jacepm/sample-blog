import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  blogForm: FormGroup
  id: string;
  row: any;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getBlog();
    this.create();
  }

  getBlog() {
    this.api
      .get("/blog/" + this.id)
      .then((res: any) => {
        this.row = res.data;
        this.blogForm.patchValue({
          title: this.row.title,
          author: this.row.author,
          content: this.row.content
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  create() {
    this.blogForm = this.fb.group({
      title: ["", Validators.required],
      author: ["", Validators.required],
      content: ["", Validators.required]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.blogForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  update(value: string) {
    this.loading = true;
    this.api
      .patch("/blog/" + this.id, value)
      .then((res: any) => {
        console.log(res.data);
        this.getBlog();
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  }
}
