import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferencesComponent } from './components/references/references.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { TaskbucketComponent } from './components/taskbucket/taskbucket.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'references', component: ReferencesComponent },
    { path: 'tasks', component: TaskbucketComponent },
    { path: 'tasks/:id', component: TaskDetailsComponent, pathMatch: 'full' },
    { path: 'utilities', component: UtilitiesComponent },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
