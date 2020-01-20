import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { CardComponent } from './components/card/card.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogViewComponent } from './components/blog/blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    MainFooterComponent,
    CardComponent,
    BlogComponent,
    BlogListComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
