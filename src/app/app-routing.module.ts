import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FormateurListComponent } from './formateur/formateur-list/formateur-list.component';
import { CreateFormateurComponent } from './formateur/create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './formateur/update-formateur/update-formateur.component';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';
import { EvaluationListComponent } from './evaluation/evaluation-list/evaluation-list.component';
import { CreateEvaluationComponent } from './evaluation/create-evaluation/create-evaluation.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'formateurs', component: FormateurListComponent },
  { path: 'formateur/new', component: CreateFormateurComponent },
  { path: 'update-formateur/:id', component: UpdateFormateurComponent },
  { path: 'formations', component: FormationListComponent },
  { path: 'formation/new', component: CreateFormationComponent },
  { path: 'update-formation/:id', component: UpdateFormationComponent },
  { path: 'evaluations', component: EvaluationListComponent },
  { path: 'evaluation/new', component: CreateEvaluationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
