import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule, NgForm, Validators, FormBuilder } from '@angular/forms';
import { SignUpComponent } from './component/authentification/sign-up/sign-up.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SopCreationComponent } from './component/sop-list/sop-creation/sop-creation.component';
import { ConfirmationComponent } from './shared/modals/confirmation/confirmation.component';
import { SummaryComponent } from './shared/summary/summary.component';
import { SopComponent} from "./component/sop-list/sop/sop.component";
import { ProjectCreationComponent } from './component/project-list/project-creation/project-creation.component';
import { WarningComponent } from './shared/modals/warning/warning.component';
import { ActivityListComponent } from './component/activity-list/activity-list.component';
import { ActivityCreationComponent } from './component/activity-list/activity-creation/activity-creation.component';
import { AccountValidationComponent } from './component/account-validation/account-validation.component';
import { AdminUsersComponent } from './component/admin-users/admin-users.component';
import { OrganizationManagementComponent } from './component/organization-management/organization-management.component';
import { ActionComponent } from './shared/modals/action/action.component';
import { JobListComponent } from './component/job-list/job-list.component';
import { JobComponent } from './component/job-list/job/job.component';
import { JobCreationComponent } from './component/job-list/job-creation/job-creation.component';
import { PdfSopComponent} from "./documents/pdf-sop/pdf-sop.component";
import { PdfGanttComponent } from './documents/pdf-gantt/pdf-gantt.component';
import { PdfProgressEvaluationComponent } from './documents/pdf-progress-evaluation/pdf-progress-evaluation.component';
import { PdfPerformanceTargetComponent } from './documents/pdf-performance-target/pdf-performance-target.component';
import { PdfPerformanceReportComponent } from './documents/pdf-performance-report/pdf-performance-report.component';

import { GanttComponent } from './component/gantt/gantt.component';
import { GanttCreationComponent } from './component/gantt/gantt-creation/gantt-creation.component';
import { LoaderComponent } from './shared/Loader/loader/loader.component';
import { VolumeProgressComponent } from './component/project-list/volume-progress/volume-progress.component';
import { NotFoundComponent } from './component/not-found/not-found/not-found.component';
import { TextHelperComponent } from './helpers/text-helper/text-helper.component';
import { ActivityUpdateComponent } from './shared/modals/activity-update/activity-update.component';
import { DateHelperComponent } from './helpers/date-helper/date-helper.component';
import { MasterOfWorkComponent } from './component/master-of-work/master-of-work.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account-validation/:seed', component: AccountValidationComponent},
  {path: 'personal-achievement', component: PerformanceProjectComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'project-list', component: ProjectListComponent, canActivate: [AuthGuard]},
  {path: 'project', component: ProjectComponent, canActivate: [AuthGuard]},
  {path: 'sop-creation', component: SopCreationComponent, canActivate: [AuthGuard]},
  {path: 'sop-list', component: SopListComponent, canActivate: [AuthGuard]},
  {path: 'sop', component: SopComponent, canActivate: [AuthGuard]},
  {path: 'activity-creation', component: ActivityCreationComponent, canActivate: [AuthGuard]},
  {path: 'project-creation', component: ProjectCreationComponent, canActivate: [AuthGuard]},
  {path: 'admin-users', component: AdminUsersComponent , canActivate: [AuthGuard]},
  {path: 'job-creation', component: JobCreationComponent , canActivate: [AuthGuard]},
  {path: 'admin-organization-management', component: OrganizationManagementComponent , canActivate: [AuthGuard]},
  {path: 'pdf-sop', component: PdfSopComponent},
  {path: 'pdf-gantt', component: PdfGanttComponent},
  {path: 'pdf-progress-evaluation', component: PdfProgressEvaluationComponent},
  {path: 'job-list', component: JobListComponent , canActivate: [AuthGuard]},
  {path: 'admin-organization-management', component: OrganizationManagementComponent , canActivate: [AuthGuard]},
  {path: 'gantt', component: GanttComponent , canActivate: [AuthGuard]},
  {path: 'gantt-creation', component: GanttCreationComponent , canActivate: [AuthGuard]},
  {path: 'admin-organization-management', component: OrganizationManagementComponent , canActivate: [AuthGuard]},
  {path: 'pdf-performance-target', component: PdfPerformanceTargetComponent},
  {path: 'pdf-performance-report', component: PdfPerformanceReportComponent},
  {path: 'volume-progress', component: VolumeProgressComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
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
    AuthentificationComponent,
    SignUpComponent,
    SopCreationComponent,
    SummaryComponent,
    ConfirmationComponent,
    SopComponent,
    ProjectCreationComponent,
    WarningComponent,
    ActivityListComponent,
    ActivityCreationComponent,
    AccountValidationComponent,
    AdminUsersComponent,
    OrganizationManagementComponent,
    AdminUsersComponent,
    ActionComponent,
    JobListComponent,
    JobComponent,
    JobCreationComponent,
    PdfSopComponent,
    PdfGanttComponent,
    PdfProgressEvaluationComponent,
    PdfPerformanceTargetComponent,
    PdfPerformanceReportComponent,
    PdfGanttComponent,
    GanttComponent,
    GanttCreationComponent,
    LoaderComponent,
    VolumeProgressComponent,
    NotFoundComponent,
    TextHelperComponent,
    ActivityUpdateComponent,
    FooterComponent,
    ActivityUpdateComponent,
    DateHelperComponent,
    MasterOfWorkComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
