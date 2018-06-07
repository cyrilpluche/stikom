import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { NavBarComponent} from "./shared/layout/nav-bar/nav-bar.component";
import { AccountComponent } from './component/account/account.component';
import { SopListComponent } from './component/sop-list/sop-list.component';
import { StaffListComponent } from './component/staff-list/staff-list.component';
import { StaffComponent } from './component/staff-list/staff/staff.component';
import { AdminComponent } from './component/admin/admin.component';
import { PerformanceProjectComponent } from './component/performance-project/performance-project.component';
import { PerformanceTargetComponent } from './component/performance-project/performance-target/performance-target.component';
import { PerformanceReportComponent } from './component/performance-project/performance-report/performance-report.component';
import { WorkScheduleComponent } from './component/work-schedule/work-schedule.component';
import { ProjectListComponent } from './component/project-list/project-list.component';
import { ProjectComponent } from './component/project-list/project/project.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'sop-list', component: SopListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AccountComponent,
    SopListComponent,
    StaffListComponent,
    StaffComponent,
    AdminComponent,
    PerformanceProjectComponent,
    PerformanceTargetComponent,
    PerformanceReportComponent,
    WorkScheduleComponent,
    ProjectListComponent,
    ProjectComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
