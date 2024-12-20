import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAddTaskComponent } from './components/tasks/form-add-task/form-add-task.component';
import { SearchTaskComponent } from './components/tasks/search-task/search-task.component';
import { TaskGroupComponent } from './components/tasks/task-group/task-group.component';
import { TaskGroupListComponent } from './components/tasks/task-group-list/task-group-list.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TestComponent } from './components/tests/test/test.component';
import { DisplayListLanguagesComponent } from './components/tests/display-list-languages/display-list-languages.component';
import { DisplayDetailLanguageComponent } from './components/tests/display-detail-language/display-detail-language.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GamesComponent } from './components/games/games.component';
import { FifaComponent } from './components/games/fifa/fifa.component';
import { GtaComponent } from './components/games/gta/gta.component';
import { AddTaskGroupComponent } from './components/tasks/add-task-group/add-task-group.component';
import { PipeComponent } from './components/les-pipes/pipe/pipe.component';
import { CustomPipe } from './pipe/custom.pipe';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormAddTaskComponent,
    SearchTaskComponent,
    TaskGroupComponent,
    TaskGroupListComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    MainContentComponent,
    NavComponent,
    TaskComponent,
    TestComponent,
    DisplayListLanguagesComponent,
    DisplayDetailLanguageComponent,
    NotFoundComponent,
    GamesComponent,
    FifaComponent,
    GtaComponent,
    AddTaskGroupComponent,
    PipeComponent,
    CustomPipe,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
