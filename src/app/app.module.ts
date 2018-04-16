import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { AppRouting } from './app.routing';
import { GoogleBookApiService } from './google-book-api.service';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ResultComponent,
    SearchComponent,
    UserComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
  ],
  providers: [GoogleBookApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
