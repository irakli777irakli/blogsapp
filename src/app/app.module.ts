import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { TopicListComponent } from './topics/topic-list/topic-list.component';
import { TopicCardComponent } from './topics/topic-card/topic-card.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { BlogCardComponent } from './blogs/blog-card/blog-card.component';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    HomeComponent,
    TopicListComponent,
    TopicCardComponent,
    BlogListComponent,
    BlogCardComponent,
    ModalComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
