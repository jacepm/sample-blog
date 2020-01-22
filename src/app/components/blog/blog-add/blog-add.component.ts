import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    this.create();
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

  save(value: string) {
    this.api
      .post("/blog", value)
      .then((res: any) => {
        console.log(res.data);
        this.create();
      })
      .catch(error => {
        console.log(error)
      });
  }
}
