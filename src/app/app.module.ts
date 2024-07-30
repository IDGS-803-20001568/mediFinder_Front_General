import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    MegaMenuModule,
    CommonModule,
    AvatarModule,
    FormsModule,
    AppRoutingModule,
    MegaMenuModule,
    ButtonModule,
    FormsModule,
    AvatarModule,
    InputTextModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
