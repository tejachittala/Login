import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

import { SharedService } from './shared.service';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
const route : Routes = [
  {
    path : '',  component : DashboardComponent
  },
  {
    path : 'about',  component : AboutComponent
  },
  {
    path : 'contact',  component : ContactComponent
  },
  {
    path : 'products',  component : ProductsComponent
  },
  {
    path : '**',  component : PageNotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  RouterModule.forRoot(route)

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
