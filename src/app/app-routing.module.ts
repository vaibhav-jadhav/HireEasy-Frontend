import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { HireComponent } from './hire/hire.component';
// import {ApplyComponent} from '.apply/app'
import { ApplyComponent } from './apply/apply.component';
import { TrackComponent } from './track/track.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { ManageComponent } from './manage/manage.component';
const routes: Routes = [
  { path: 'jobs', component: JobsComponent },
  { path: 'hire', component: HireComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'track', component: TrackComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'update', component:  UpdatestatusComponent },


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
