import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogViewComponent } from './components/blog/blog-view/blog-view.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogComponent},
  { path: "blog/:id", component: BlogViewComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
