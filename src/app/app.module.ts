import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';
import { FormateurListComponent } from './formateur/formateur-list/formateur-list.component';
import { CreateFormateurComponent } from './formateur/create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './formateur/update-formateur/update-formateur.component';
import { EvaluationListComponent } from './evaluation/evaluation-list/evaluation-list.component';
import { CreateEvaluationComponent } from './evaluation/create-evaluation/create-evaluation.component';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';



import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    FormateurListComponent,
    CreateFormateurComponent ,
    UpdateFormateurComponent ,
    EvaluationListComponent,
    CreateEvaluationComponent ,
    FormationListComponent ,
    CreateFormationComponent ,
    UpdateFormationComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
