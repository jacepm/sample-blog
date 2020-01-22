import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { BlogViewComponent } from "./components/blog/blog-view/blog-view.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { BlogAddComponent } from "./components/blog/blog-add/blog-add.component";
import { BlogEditComponent } from "./components/blog/blog-edit/blog-edit.component";
import { NoAuthGuard } from "./guards/noAuth.guard";

const routes: Routes = [
  {
    path: "blog",
    component: BlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "blog/view/:id",
    component: BlogViewComponent
  },
  {
    path: "blog/add",
    component: BlogAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "blog/edit/:id",
    component: BlogEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
