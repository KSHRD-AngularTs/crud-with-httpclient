import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ArticlesComponent} from './articles/articles.component';
import {CreateComponent} from './articles/create/create.component';
import {ShowComponent} from './articles/show/show.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SkeletonModule} from 'primeng/skeleton';
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CreateComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    SkeletonModule,
    DropdownModule,
    RippleModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
