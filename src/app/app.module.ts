import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { HireComponent } from './hire/hire.component';
import { ApplyComponent } from './apply/apply.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TrackComponent } from './track/track.component';
import { ManageComponent } from './manage/manage.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    HireComponent,
    ApplyComponent,
    TrackComponent,
    ManageComponent,
    UpdatestatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
