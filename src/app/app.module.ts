import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes : Routes = [
  { path : '', component : AppareilViewComponent },
  { path : 'not-found', component : FourOhFourComponent},
  { path : 'auth', component : AuthComponent },
  { path : 'users', component : UserListComponent},
  { path : 'new-user', component : NewUserComponent},
  { path : 'appareils', canActivate : [AuthGuard], component : AppareilViewComponent },
  { path : 'edit', canActivate : [AuthGuard], component : EditAppareilComponent },
  { path : 'appareils/:id', canActivate : [AuthGuard], component : SingleAppareilComponent },
  { path : '**' , redirectTo : '/not-found'} // wild card à la fin, routes regardées dans l'ordre
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ], 
  providers: [
    AuthService,
    AuthGuard,
    AppareilService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
