import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog-add",
  templateUrl: "./blog-add.component.html",
  styleUrls: ["./blog-add.component.css"]
})
export class BlogAddComponent implements OnInit {
  blogForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

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
    this.loading = true;
    this.api
      .post("/blog", value)
      .then((res: any) => {
        console.log(res.message);
        this.router.navigate([`/blog`]);
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  }
}
