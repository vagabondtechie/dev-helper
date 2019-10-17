import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReferencesComponent } from './components/references/references.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskbucketComponent } from './components/taskbucket/taskbucket.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksService } from './services/tasks.service';
import { PathsComponent } from './components/paths/paths.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    ReferencesComponent,
    TaskDetailsComponent,
    TaskbucketComponent,
    UtilitiesComponent,
    PathsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
