import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogViewComponent } from './components/blog/blog-view/blog-view.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogComponent},
  { path: "blog/:id", component: BlogViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
