import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { MainNavComponent } from "./components/main-nav/main-nav.component";
import { HomeComponent } from "./components/home/home.component";
import { MainFooterComponent } from "./components/main-footer/main-footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CardComponent } from "./components/card/card.component";
import { BlogComponent } from "./components/blog/blog.component";
import { BlogListComponent } from "./components/blog/blog-list/blog-list.component";
import { HttpClientModule } from "@angular/common/http";
import { BlogViewComponent } from "./components/blog/blog-view/blog-view.component";
import { LoginComponent } from "./components/login/login.component";
import { BlogAddComponent } from "./components/blog/blog-add/blog-add.component";
import { AuthGuard } from "./guards/auth.guard";
import { BlogEditComponent } from "./components/blog/blog-edit/blog-edit.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { DeleteModalComponent } from "./utilities/delete-modal/delete-modal.component";
import { NoAuthGuard } from "./guards/noAuth.guard";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    MainFooterComponent,
    CardComponent,
    BlogComponent,
    BlogListComponent,
    BlogViewComponent,
    LoginComponent,
    BlogAddComponent,
    BlogEditComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ModalModule.forRoot(),
  ],
  providers: [AuthGuard, NoAuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [DeleteModalComponent],
})
export class AppModule {}
