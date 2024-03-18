import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './Component/head/head.component';
import { PostComponent } from './Component/post/post.component';
import { PostlistComponent } from './Component/postlist/postlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppendPipe } from '../../src/app/Component/pipes/append.pipe';
import { UserformComponent } from './Component/userform/userform.component';
import { NewFormComponent } from './Component/new-form/new-form.component';
import { SuriyaComponent } from './Component/suriya/suriya.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    PostComponent,
    PostlistComponent,
    AppendPipe,
    UserformComponent,
    NewFormComponent,
    SuriyaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
