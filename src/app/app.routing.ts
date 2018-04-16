import { RouterModule , Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';


const appRoutes: Routes = [
    { path: 'login', component:LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'search',  component: SearchComponent },
    { path: 'search/:isbn', component: SearchComponent },
    { path: '**', component: NotFoundComponent }
]

export const AppRouting = RouterModule.forRoot(appRoutes);