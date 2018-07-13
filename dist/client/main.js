(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: #f1f1f0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layout/nav-bar/nav-bar.component */ "./src/app/shared/layout/nav-bar/nav-bar.component.ts");
/* harmony import */ var _component_account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/account/account.component */ "./src/app/component/account/account.component.ts");
/* harmony import */ var _component_sop_list_sop_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/sop-list/sop-list.component */ "./src/app/component/sop-list/sop-list.component.ts");
/* harmony import */ var _component_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/staff-list/staff-list.component */ "./src/app/component/staff-list/staff-list.component.ts");
/* harmony import */ var _component_staff_list_staff_staff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/staff-list/staff/staff.component */ "./src/app/component/staff-list/staff/staff.component.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _component_performance_project_performance_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/performance-project/performance-project.component */ "./src/app/component/performance-project/performance-project.component.ts");
/* harmony import */ var _component_performance_project_performance_target_performance_target_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/performance-project/performance-target/performance-target.component */ "./src/app/component/performance-project/performance-target/performance-target.component.ts");
/* harmony import */ var _component_performance_project_performance_report_performance_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/performance-project/performance-report/performance-report.component */ "./src/app/component/performance-project/performance-report/performance-report.component.ts");
/* harmony import */ var _component_work_schedule_work_schedule_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/work-schedule/work-schedule.component */ "./src/app/component/work-schedule/work-schedule.component.ts");
/* harmony import */ var _component_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/project-list/project-list.component */ "./src/app/component/project-list/project-list.component.ts");
/* harmony import */ var _component_project_list_project_project_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/project-list/project/project.component */ "./src/app/component/project-list/project/project.component.ts");
/* harmony import */ var _component_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/authentification/authentification.component */ "./src/app/component/authentification/authentification.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_authentification_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/authentification/sign-up/sign-up.component */ "./src/app/component/authentification/sign-up/sign-up.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _component_sop_list_sop_creation_sop_creation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/sop-list/sop-creation/sop-creation.component */ "./src/app/component/sop-list/sop-creation/sop-creation.component.ts");
/* harmony import */ var _shared_modals_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/modals/confirmation/confirmation.component */ "./src/app/shared/modals/confirmation/confirmation.component.ts");
/* harmony import */ var _shared_summary_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/summary/summary.component */ "./src/app/shared/summary/summary.component.ts");
/* harmony import */ var _component_sop_list_sop_sop_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/sop-list/sop/sop.component */ "./src/app/component/sop-list/sop/sop.component.ts");
/* harmony import */ var _component_project_list_project_creation_project_creation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/project-list/project-creation/project-creation.component */ "./src/app/component/project-list/project-creation/project-creation.component.ts");
/* harmony import */ var _shared_modals_warning_warning_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/modals/warning/warning.component */ "./src/app/shared/modals/warning/warning.component.ts");
/* harmony import */ var _component_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/activity-list/activity-list.component */ "./src/app/component/activity-list/activity-list.component.ts");
/* harmony import */ var _component_activity_list_activity_creation_activity_creation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/activity-list/activity-creation/activity-creation.component */ "./src/app/component/activity-list/activity-creation/activity-creation.component.ts");
/* harmony import */ var _component_account_validation_account_validation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/account-validation/account-validation.component */ "./src/app/component/account-validation/account-validation.component.ts");
/* harmony import */ var _component_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/admin-users/admin-users.component */ "./src/app/component/admin-users/admin-users.component.ts");
/* harmony import */ var _component_organization_management_organization_management_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/organization-management/organization-management.component */ "./src/app/component/organization-management/organization-management.component.ts");
/* harmony import */ var _shared_modals_action_action_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/modals/action/action.component */ "./src/app/shared/modals/action/action.component.ts");
/* harmony import */ var _component_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./component/job-list/job-list.component */ "./src/app/component/job-list/job-list.component.ts");
/* harmony import */ var _component_job_list_job_job_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./component/job-list/job/job.component */ "./src/app/component/job-list/job/job.component.ts");
/* harmony import */ var _component_job_list_job_creation_job_creation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./component/job-list/job-creation/job-creation.component */ "./src/app/component/job-list/job-creation/job-creation.component.ts");
/* harmony import */ var _documents_pdf_sop_pdf_sop_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./documents/pdf-sop/pdf-sop.component */ "./src/app/documents/pdf-sop/pdf-sop.component.ts");
/* harmony import */ var _documents_pdf_gantt_pdf_gantt_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./documents/pdf-gantt/pdf-gantt.component */ "./src/app/documents/pdf-gantt/pdf-gantt.component.ts");
/* harmony import */ var _documents_pdf_progress_evaluation_pdf_progress_evaluation_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./documents/pdf-progress-evaluation/pdf-progress-evaluation.component */ "./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.ts");
/* harmony import */ var _documents_pdf_performance_target_pdf_performance_target_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./documents/pdf-performance-target/pdf-performance-target.component */ "./src/app/documents/pdf-performance-target/pdf-performance-target.component.ts");
/* harmony import */ var _documents_pdf_performance_report_pdf_performance_report_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./documents/pdf-performance-report/pdf-performance-report.component */ "./src/app/documents/pdf-performance-report/pdf-performance-report.component.ts");
/* harmony import */ var _component_gantt_gantt_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./component/gantt/gantt.component */ "./src/app/component/gantt/gantt.component.ts");
/* harmony import */ var _component_gantt_gantt_creation_gantt_creation_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./component/gantt/gantt-creation/gantt-creation.component */ "./src/app/component/gantt/gantt-creation/gantt-creation.component.ts");
/* harmony import */ var _shared_Loader_loader_loader_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./shared/Loader/loader/loader.component */ "./src/app/shared/Loader/loader/loader.component.ts");
/* harmony import */ var _component_project_list_volume_progress_volume_progress_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./component/project-list/volume-progress/volume-progress.component */ "./src/app/component/project-list/volume-progress/volume-progress.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'account-validation/:seed', component: _component_account_validation_account_validation_component__WEBPACK_IMPORTED_MODULE_31__["AccountValidationComponent"] },
    { path: 'personal-achievement', component: _component_performance_project_performance_project_component__WEBPACK_IMPORTED_MODULE_13__["PerformanceProjectComponent"] },
    { path: 'account', component: _component_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'authentification', component: _component_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_19__["AuthentificationComponent"] },
    { path: 'sign-up', component: _component_authentification_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_21__["SignUpComponent"] },
    { path: 'authentification', component: _component_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_19__["AuthentificationComponent"] },
    { path: 'project-list', component: _component_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_17__["ProjectListComponent"] },
    { path: 'sop-creation', component: _component_sop_list_sop_creation_sop_creation_component__WEBPACK_IMPORTED_MODULE_23__["SopCreationComponent"] },
    { path: 'sop-list', component: _component_sop_list_sop_list_component__WEBPACK_IMPORTED_MODULE_9__["SopListComponent"] },
    { path: 'activity-creation', component: _component_activity_list_activity_creation_activity_creation_component__WEBPACK_IMPORTED_MODULE_30__["ActivityCreationComponent"] },
    { path: 'project-creation', component: _component_project_list_project_creation_project_creation_component__WEBPACK_IMPORTED_MODULE_27__["ProjectCreationComponent"] },
    { path: 'admin-users', component: _component_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_32__["AdminUsersComponent"] },
    { path: 'job-creation', component: _component_job_list_job_creation_job_creation_component__WEBPACK_IMPORTED_MODULE_37__["JobCreationComponent"] },
    { path: 'admin-organization-management', component: _component_organization_management_organization_management_component__WEBPACK_IMPORTED_MODULE_33__["OrganizationManagementComponent"] },
    { path: 'pdf-sop', component: _documents_pdf_sop_pdf_sop_component__WEBPACK_IMPORTED_MODULE_38__["PdfSopComponent"] },
    { path: 'pdf-gantt', component: _documents_pdf_gantt_pdf_gantt_component__WEBPACK_IMPORTED_MODULE_39__["PdfGanttComponent"] },
    { path: 'pdf-progress-evaluation', component: _documents_pdf_progress_evaluation_pdf_progress_evaluation_component__WEBPACK_IMPORTED_MODULE_40__["PdfProgressEvaluationComponent"] },
    { path: 'job-list', component: _component_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_35__["JobListComponent"] },
    { path: 'admin-organization-management', component: _component_organization_management_organization_management_component__WEBPACK_IMPORTED_MODULE_33__["OrganizationManagementComponent"] },
    { path: 'gantt', component: _component_gantt_gantt_component__WEBPACK_IMPORTED_MODULE_43__["GanttComponent"] },
    { path: 'gantt-creation', component: _component_gantt_gantt_creation_gantt_creation_component__WEBPACK_IMPORTED_MODULE_44__["GanttCreationComponent"] },
    { path: 'admin-organization-management', component: _component_organization_management_organization_management_component__WEBPACK_IMPORTED_MODULE_33__["OrganizationManagementComponent"] },
    { path: 'pdf-performance-target', component: _documents_pdf_performance_target_pdf_performance_target_component__WEBPACK_IMPORTED_MODULE_41__["PdfPerformanceTargetComponent"] },
    { path: 'pdf-performance-report', component: _documents_pdf_performance_report_pdf_performance_report_component__WEBPACK_IMPORTED_MODULE_42__["PdfPerformanceReportComponent"] },
    { path: 'volume-progress', component: _component_project_list_volume_progress_volume_progress_component__WEBPACK_IMPORTED_MODULE_46__["VolumeProgressComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _shared_layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _component_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
                _component_sop_list_sop_list_component__WEBPACK_IMPORTED_MODULE_9__["SopListComponent"],
                _component_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_10__["StaffListComponent"],
                _component_staff_list_staff_staff_component__WEBPACK_IMPORTED_MODULE_11__["StaffComponent"],
                _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _component_performance_project_performance_project_component__WEBPACK_IMPORTED_MODULE_13__["PerformanceProjectComponent"],
                _component_performance_project_performance_target_performance_target_component__WEBPACK_IMPORTED_MODULE_14__["PerformanceTargetComponent"],
                _component_performance_project_performance_report_performance_report_component__WEBPACK_IMPORTED_MODULE_15__["PerformanceReportComponent"],
                _component_work_schedule_work_schedule_component__WEBPACK_IMPORTED_MODULE_16__["WorkScheduleComponent"],
                _component_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_17__["ProjectListComponent"],
                _component_project_list_project_project_component__WEBPACK_IMPORTED_MODULE_18__["ProjectComponent"],
                _component_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_19__["AuthentificationComponent"],
                _component_authentification_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_21__["SignUpComponent"],
                _component_sop_list_sop_creation_sop_creation_component__WEBPACK_IMPORTED_MODULE_23__["SopCreationComponent"],
                _shared_summary_summary_component__WEBPACK_IMPORTED_MODULE_25__["SummaryComponent"],
                _shared_modals_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationComponent"],
                _component_sop_list_sop_sop_component__WEBPACK_IMPORTED_MODULE_26__["SopComponent"],
                _component_project_list_project_creation_project_creation_component__WEBPACK_IMPORTED_MODULE_27__["ProjectCreationComponent"],
                _shared_modals_warning_warning_component__WEBPACK_IMPORTED_MODULE_28__["WarningComponent"],
                _component_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_29__["ActivityListComponent"],
                _component_activity_list_activity_creation_activity_creation_component__WEBPACK_IMPORTED_MODULE_30__["ActivityCreationComponent"],
                _component_account_validation_account_validation_component__WEBPACK_IMPORTED_MODULE_31__["AccountValidationComponent"],
                _component_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_32__["AdminUsersComponent"],
                _component_organization_management_organization_management_component__WEBPACK_IMPORTED_MODULE_33__["OrganizationManagementComponent"],
                _component_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_32__["AdminUsersComponent"],
                _shared_modals_action_action_component__WEBPACK_IMPORTED_MODULE_34__["ActionComponent"],
                _component_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_35__["JobListComponent"],
                _component_job_list_job_job_component__WEBPACK_IMPORTED_MODULE_36__["JobComponent"],
                _component_job_list_job_creation_job_creation_component__WEBPACK_IMPORTED_MODULE_37__["JobCreationComponent"],
                _documents_pdf_sop_pdf_sop_component__WEBPACK_IMPORTED_MODULE_38__["PdfSopComponent"],
                _documents_pdf_gantt_pdf_gantt_component__WEBPACK_IMPORTED_MODULE_39__["PdfGanttComponent"],
                _documents_pdf_progress_evaluation_pdf_progress_evaluation_component__WEBPACK_IMPORTED_MODULE_40__["PdfProgressEvaluationComponent"],
                _documents_pdf_performance_target_pdf_performance_target_component__WEBPACK_IMPORTED_MODULE_41__["PdfPerformanceTargetComponent"],
                _documents_pdf_performance_report_pdf_performance_report_component__WEBPACK_IMPORTED_MODULE_42__["PdfPerformanceReportComponent"],
                _documents_pdf_gantt_pdf_gantt_component__WEBPACK_IMPORTED_MODULE_39__["PdfGanttComponent"],
                _component_gantt_gantt_component__WEBPACK_IMPORTED_MODULE_43__["GanttComponent"],
                _component_gantt_gantt_creation_gantt_creation_component__WEBPACK_IMPORTED_MODULE_44__["GanttCreationComponent"],
                _shared_Loader_loader_loader_component__WEBPACK_IMPORTED_MODULE_45__["LoaderComponent"],
                _component_project_list_volume_progress_volume_progress_component__WEBPACK_IMPORTED_MODULE_46__["VolumeProgressComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["MDBBootstrapModule"].forRoot()
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/account-validation/account-validation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/component/account-validation/account-validation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-summary *ngIf=\"title !== null\"\r\n             title=\"{{title}}\"\r\n             text=\"{{message}}\"\r\n             buttonTitle=\"Home\" link=\"home\">\r\n</app-summary>\r\n"

/***/ }),

/***/ "./src/app/component/account-validation/account-validation.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/component/account-validation/account-validation.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/account-validation/account-validation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/account-validation/account-validation.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccountValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountValidationComponent", function() { return AccountValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountValidationComponent = /** @class */ (function () {
    function AccountValidationComponent(_memberService, _route, router) {
        this._memberService = _memberService;
        this._route = _route;
        this.router = router;
        this.seed = "";
        this.statut = false;
        this.message = "";
        this.title = "";
    }
    AccountValidationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.seed = params['seed'];
        });
        console.log(this.seed);
        this._memberService.seedCheck(this.seed)
            .subscribe(function (res) {
            console.log("OK : ", res);
            _this.message = "Your account will be available when an administrator will have validate it.";
            _this.title = "Your mail has been validated";
            _this.statut = true;
        }, function (error) {
            console.log("ERREUR : ", error);
            _this.title = "ERRROR";
            _this.message = "The link you've just clicked is not valide anymore";
            _this.statut = false;
        });
    };
    AccountValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-validation',
            template: __webpack_require__(/*! ./account-validation.component.html */ "./src/app/component/account-validation/account-validation.component.html"),
            styles: [__webpack_require__(/*! ./account-validation.component.scss */ "./src/app/component/account-validation/account-validation.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountValidationComponent);
    return AccountValidationComponent;
}());



/***/ }),

/***/ "./src/app/component/account/account.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/account/account.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/account/account.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/account/account.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!changeFinished\" class=\"container\">\r\n  <div class=\"row row-first\">\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n        My account\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 20px;\">\r\n    <div class=\"col-sm-12 col-lg-3\">\r\n      <p class=\"font-weight-bold\">Name first_name</p>\r\n    </div>\r\n    <div class=\"col-sm-12 col-lg-9 \">\r\n      <p class=\"float-lg-left float-sm-right\">{{name}} {{firstName}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 20px;\">\r\n    <div class=\"col-sm-12 col-lg-3\">\r\n      <p class=\"font-weight-bold\">Mail</p>\r\n    </div>\r\n    <div class=\"col-sm-12 col-lg-9 \">\r\n      <p class=\"float-lg-left float-sm-right\">{{mail}}</p>\r\n    </div>\r\n  </div>\r\n  <form (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\" style=\"margin-top: 20px;\">\r\n    <div class=\"col-sm-12 col-lg-12\" style=\"padding-top: 30px;\">\r\n      <p class=\"font-weight-bold\">Change password</p>\r\n    </div>\r\n    <div class=\"col-sm-12 col-lg-3\">\r\n      <div class=\"md-form\">\r\n        <i class=\"fa fa-lock prefix grey-text\"></i>\r\n        <input required [(ngModel)]=\"actualPassword\" name=actualPassword type=\"password\" id=\"actualPassword\" class=\"form-control\">\r\n        <label for=\"newPassword\">Actual password</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-lg-3\">\r\n      <div class=\"md-form\">\r\n        <i class=\"fa fa-lock prefix grey-text\"></i>\r\n        <input required [(ngModel)]=\"newPassword\" name=newPassword type=\"password\" id=\"newPassword\" class=\"form-control\">\r\n        <label for=\"newPassword\">New password</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-lg-3\">\r\n      <div class=\"md-form\">\r\n        <i class=\"fa fa-lock prefix grey-text\"></i>\r\n        <input required [(ngModel)]=\"newPasswordCheck\" name=password type=\"password\" id=\"newPasswordCheck\" class=\"form-control\">\r\n        <label for=\"newPasswordCheck\">Confirm new password</label>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n      {{errorMessage}}\r\n    </div>\r\n    <div class=\"col-sm-12 col-lg-3\">\r\n      <div class=\"text-center mt-4\">\r\n        <button class=\"btn btn-default btn-sm\" type=\"submit\">Change</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </form>\r\n\r\n</div>\r\n\r\n<app-summary *ngIf=\"changeFinished\"\r\n             title=\"Success\"\r\n             text=\"Your password has been updated, please login to confirm your statut.\"\r\n             buttonTitle=\"Login\" link=\"authentification\">\r\n</app-summary>\r\n"

/***/ }),

/***/ "./src/app/component/account/account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/account/account.component.ts ***!
  \********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = /** @class */ (function () {
    function AccountComponent(_memberService) {
        this._memberService = _memberService;
        this.errorMessage = "";
        this.changeFinished = false;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var userData = this._memberService.getUserDataFull();
        this.mail = userData['mail'];
        this.firstName = userData['first_name'];
        this.name = userData['name'];
    };
    AccountComponent.prototype.onSubmit = function () {
        this.errorMessage = "";
        if (this.actualPassword == null || this.actualPassword == "") {
            this.errorMessage = "Actual password is required.";
        }
        else if (this.newPassword == null || this.newPassword == "") {
            this.errorMessage = "New password is required.";
        }
        else if (this.newPasswordCheck == null || this.newPasswordCheck == "") {
            this.errorMessage = "New password confirmation is required.";
        }
        else if (this.newPassword !== this.newPasswordCheck) {
            this.errorMessage = "New password and confirmation not the same.";
        }
        else {
            this.sendPassword(this.actualPassword, this.newPassword, this.newPasswordCheck);
        }
    };
    AccountComponent.prototype.sendPassword = function (actual, newP, confP) {
        var _this = this;
        this._memberService.passwordUpdate(actual, newP, confP)
            .subscribe(function (res) {
            _this.errorMessage = "";
            _this._memberService.logout();
            _this.changeFinished = true;
        }, function (error) {
            console.log("ERREUR : ", error);
            _this.errorMessage = error.error.message;
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/component/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/component/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/component/activity-list/activity-creation/activity-creation.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/component/activity-list/activity-creation/activity-creation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- Back button -> Sop List -->\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-danger waves-effect\" data-toggle=\"modal\" data-target=\"#warningModal\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-times mr-3\"></i>Exit</h6></button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Activity Form -->\r\n\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\" [hidden]=\"!step1\">\r\n\r\n        <p class=\"h4 text-center mb-4\">Activities Creation</p>\r\n\r\n        <!-- Activity Form -->\r\n        <form (ngSubmit)=\"onSubmit()\">\r\n\r\n          <!-- Title -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <input [(ngModel)]=\"newActivityTitle\" name=\"newActivityTitle\" type=\"text\" id=\"newActivityTitle\" class=\"form-control\">\r\n              <label for=\"newActivityTitle\">Activity Name</label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Description -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <textarea [(ngModel)]=\"newActivityDescription\" name=\"newActivityDescription\" type=\"text\" id=\"newActivityDescription\" class=\"form-control md-textarea\" rows=\"1\" ></textarea>\r\n              <label for=\"newActivityDescription\">Activity description</label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Management Level -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <p class=\"text-center mb-4 text-description\"> Please select a management level </p>\r\n              <select [(ngModel)]=\"newActivityLevelId\" name=\"newActivityLevelId\" class=\"form-control\">\r\n                <option value=\"\" disabled selected>Choose your management level</option>\r\n                <option *ngFor=\"let m of managmentLevelsArray\" value=\"{{m.managment_level_id}}\">{{m.managment_level_label}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Unit -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <p class=\"text-center mb-4 text-description\"> Please select a unit</p>\r\n              <select [(ngModel)]=\"unit_id_selected\" name=\"unit_id_selected\" class=\"form-control\">\r\n                <option value=\"\" disabled selected>Choose an unit</option>\r\n                <option *ngFor=\"let u of units\" value=\"{{u.unit_id}}\">{{u.unit_name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Type Duration -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <p class=\"text-center mb-4 text-description\"> Please select a duration type </p>\r\n              <select [(ngModel)]=\"newActivityTypeDuration\" name=\"newActivityTypeDuration\" class=\"form-control\">\r\n                <option value=\"\" disabled selected>Choose your duration type</option>\r\n                <option value=\"minutes\">Minute</option>\r\n                <option value=\"hours\">Hour</option>\r\n                <option value=\"days\">Day</option>\r\n                <option value=\"weeks\">Week</option>\r\n                <option value=\"months\">Month</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Duration -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <input [(ngModel)]=\"newActivityDuration\" name=\"newActivityDuration\" type=\"number\" id=\"newActivityDuration\" class=\"form-control\">\r\n              <label for=\"newActivityDuration\">Duration</label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Type output -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <input [(ngModel)]=\"newActivityTypeOutput\" name=\"newActivityTypeOutput\" type=\"text\" id=\"newActivityTypeOutput\" class=\"form-control\">\r\n              <label for=\"newActivityTypeOutput\">Type of output</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-5\">\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" (click)=\"addNewActivity()\">Add</button>\r\n            </div>\r\n            <div class=\"col-5 row justify-content-end\">\r\n              <div class=\"\">\r\n                <button [disabled]=\"activityArray.length == 0\" class=\"btn btn-success waves-effect\" data-toggle=\"modal\" data-target=\"#confirmationModal\" type=\"button\">Finish</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n      <!-- Card content -->\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\" [hidden]=\"!step2\">\r\n\r\n        <p class=\"h4 text-center mb-4\">Sub Activity Creation</p>\r\n\r\n        <!-- Activity Form -->\r\n        <form (ngSubmit)=\"onSubmit()\">\r\n\r\n          <!-- Title -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <input [(ngModel)]=\"newSubActivityTitle\" name=\"newActivityTitle\" type=\"text\" id=\"newSubActivityTitle\" class=\"form-control\">\r\n              <label for=\"newSubActivityTitle\">Sub Activity Name</label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Description -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <textarea [(ngModel)]=\"newSubActivityDescription\" name=\"newActivityDescription\" type=\"text\" id=\"newSubActivityDescription\" class=\"form-control md-textarea\" rows=\"1\" ></textarea>\r\n              <label for=\"newSubActivityDescription\">Sub Activity description</label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Management Level -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <p class=\"text-center mb-4 text-description\"> Please select a management level </p>\r\n              <select [(ngModel)]=\"newSubActivityLevelId\" name=\"newSubActivityLevelId\" class=\"form-control\">\r\n                <option value=\"\" disabled selected>Choose your management level</option>\r\n                <option *ngFor=\"let m of managmentLevelsArray\" value=\"{{m.managment_level_id}}\">{{m.managment_level_label}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Unit -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <p class=\"text-center mb-4 text-description\"> Please select a unit</p>\r\n              <select [(ngModel)]=\"unit_id_selected\" name=\"unit_id_selected\" class=\"form-control\">\r\n                <option value=\"\" disabled selected>Choose an unit</option>\r\n                <option *ngFor=\"let u of units\" value=\"{{u.unit_id}}\">{{u.unit_name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Type Duration -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <p class=\"text-center mb-4 text-description\"> Please select a duration type </p>\r\n              <select [(ngModel)]=\"newSubActivityTypeDuration\" name=\"newSubActivityTypeDuration\" class=\"form-control\">\r\n                <option value=\"\" disabled selected>Choose your duration type</option>\r\n                <option value=\"minutes\">Minute</option>\r\n                <option value=\"hours\">Hour</option>\r\n                <option value=\"days\">Day</option>\r\n                <option value=\"weeks\">Week</option>\r\n                <option value=\"months\">Month</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Duration -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <input [(ngModel)]=\"newSubActivityDuration\" name=\"newActivityDuration\" type=\"number\" id=\"newSubActivityDuration\" class=\"form-control\">\r\n              <label for=\"newSubActivityDuration\">Duration</label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Type output -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-10\">\r\n              <input [(ngModel)]=\"newSubActivityTypeOutput\" name=\"newActivityTypeOutput\" type=\"text\" id=\"newSubActivityTypeOutput\" class=\"form-control\">\r\n              <label for=\"newSubActivityTypeOutput\">Type of output</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row md-form\">\r\n            <div class=\"offset-1 col-5\">\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" (click)=\"addNewSubActivity()\">Add</button>\r\n            </div>\r\n            <div class=\"col-5 row justify-content-end\">\r\n              <div class=\"\">\r\n                <button class=\"btn btn-primary waves-effect\" type=\"button\" (click)=\"changeStep(true)\">Back</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n\r\n      </div>\r\n      <!-- Card content -->\r\n\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n\r\n  <!-- Activity Form -->\r\n\r\n  <!--Title of the step-->\r\n  <div class=\"row row-first\">\r\n    <h4>\r\n      <span class=\"badge badge-pill badge-primary\" [hidden]=\"!step1\">Activity List</span>\r\n      <span class=\"badge badge-pill badge-primary\" [hidden]=\"!step2\">Activity List</span>\r\n    </h4>\r\n    <!-- Error alert -->\r\n    <div *ngIf=\"errorMessage\" class=\"col offset-2 row justify-content-end error-text\">\r\n      <i>{{errorMessage}}</i>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SOP Display -->\r\n  <div class=\"row row-last justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <table class=\"table table-borderless table-hover table-fixed\" id=\"activiy-table\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"\">\r\n          <tr class=\"text-white\">\r\n            <th style=\"width:1%;\"></th>\r\n            <th style=\"width:40%;\"  (click)=\"sortTable(1)\"><a>Title</a></th>\r\n            <th style=\"width:10%;\" (click)=\"sortTable(2)\"><a>Duration</a></th>\r\n            <th style=\"width:40%;\" (click)=\"sortTable(3)\"><a>Type of output</a></th>\r\n            <th style=\"width:5%;\"></th>\r\n          </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n\r\n          <tr *ngFor=\"let element of activityArray\" (change)=\"isCheckboxActive()\" [hidden]=\"!step1\">\r\n            <td class=\"text-center\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" (click)=\"checkActivity(element)\" [checked]=\"checkboxActive(element)\" autocomplete=\"off\">\r\n            </td>\r\n            <td>{{element.activity_title}}</td>\r\n            <td>{{element.activity_duration}} {{element.activity_type_duration}}</td>\r\n            <td>{{element.activity_type_output}}</td>\r\n            <td>\r\n              <a (click)=\"deleteActivity(element.activity_id)\"><i class=\"fa fa-close text-red\"></i></a>\r\n            </td>\r\n          </tr>\r\n\r\n          <button [disabled]=\"!isCheckboxChecked\" class=\"btn btn-primary waves-effect text-end\" type=\"button\" (click)=\"changeStep(false)\" [hidden]=\"!step1\">Add Sub Activities</button>\r\n\r\n          <tr *ngFor=\"let element of subActivityArray[activityArray.indexOf(activitySelected)]\" [hidden]=\"!step2\">\r\n            <td></td>\r\n            <td>{{element.activity_title}}</td>\r\n            <td>{{element.activity_duration}} {{element.activity_type_duration}}</td>\r\n            <td>{{element.activity_type_output}}</td>\r\n            <td>\r\n              <a (click)=\"deleteActivity(element.activity_id)\"><i class=\"fa fa-close text-red\"></i></a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <!-- Card content -->\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n  <!-- Activity Display -->\r\n\r\n  <!-- Activity link display -->\r\n  <div class=\"row row-first justify-content-center\" [hidden]=\"step1\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col card card-cascade hoverable\">\r\n\r\n\r\n\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n  <!-- Activity link display -->\r\n\r\n</div>\r\n\r\n<!-- Modal confirmation -->\r\n<app-confirmation title=\"Confirmation activities creation\"\r\n                  text=\"Are you sure all informations provided are correct ?\"\r\n                  [isLinkActive]=true\r\n                  link=\"sop-list\"\r\n                  >\r\n</app-confirmation>\r\n\r\n<!-- Modal warning -->\r\n<app-warning title=\"Exit\"\r\n             text=\"Are you sure you want to go back to the SOP list ?\"\r\n             [isLink]=true\r\n             link=\"sop-list\">\r\n</app-warning>\r\n\r\n\r\n<script>\r\n  // Tooltips Initialization\r\n  $(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip()\r\n  })\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/component/activity-list/activity-creation/activity-creation.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/component/activity-list/activity-creation/activity-creation.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/activity-list/activity-creation/activity-creation.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/component/activity-list/activity-creation/activity-creation.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ActivityCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityCreationComponent", function() { return ActivityCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../objects/sop/sop.service */ "./src/app/objects/sop/sop.service.ts");
/* harmony import */ var _objects_activity_activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../objects/activity/activity */ "./src/app/objects/activity/activity.ts");
/* harmony import */ var _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../objects/activity/activity.service */ "./src/app/objects/activity/activity.service.ts");
/* harmony import */ var _objects_managment_level_managment_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../objects/managment_level/managment-level.service */ "./src/app/objects/managment_level/managment-level.service.ts");
/* harmony import */ var _objects_unit_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../objects/unit/unit.service */ "./src/app/objects/unit/unit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivityCreationComponent = /** @class */ (function () {
    function ActivityCreationComponent(router, _sopService, _activityService, _managmentService, _unitService) {
        this.router = router;
        this._sopService = _sopService;
        this._activityService = _activityService;
        this._managmentService = _managmentService;
        this._unitService = _unitService;
        this.managmentLevelsArray = [];
        this.units = [];
        this.unit_id_selected = "";
        this.isCheckboxChecked = false;
        this.newActivityTitle = "";
        this.newActivityDescription = "";
        this.newActivityTypeDuration = "";
        this.newActivityType = "";
        this.newActivityTypeOutput = "";
        this.newActivityLevelId = "";
        this.newSubActivityTitle = "";
        this.newSubActivityDescription = "";
        this.newSubActivityTypeDuration = "";
        this.newSubActivityType = "";
        this.newSubActivityTypeOutput = "";
        this.newSubActivityLevelId = "";
        this.errorMessage = "";
        this.sopId = "";
    }
    ActivityCreationComponent.prototype.ngOnInit = function () {
        this.sopId = this._sopService.getSopIdLocal();
        this.step1 = true;
        this.step2 = false;
        this.activityArray = [];
        this.subActivityArray = [[]];
        this.loadActivity();
        this.loadManagmentLevels();
        this.loadUnitsFromSop();
    };
    ActivityCreationComponent.prototype.onSubmit = function (isSubmitted) {
        this.router.navigate(["/sop-list"]);
    };
    ActivityCreationComponent.prototype.loadUnitsFromSop = function () {
        var _this = this;
        this._unitService.selectAllFromSop(this.sopId).subscribe(function (res) {
            _this.errorMessage = "";
            _this.units = res['data'];
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ActivityCreationComponent.prototype.loadActivity = function () {
        var _this = this;
        this.activityArray = [];
        this.subActivityArray = [[]];
        this._activityService.selectAllFromSop(this.sopId).subscribe(function (res) {
            _this.errorMessage = "";
            for (var _i = 0, _a = res['data']; _i < _a.length; _i++) {
                var element = _a[_i];
                var activity = element;
                if (activity.activity_id_is_father == null || activity.activity_id_is_father == "") {
                    _this.activityArray.push(activity);
                    _this.subActivityArray.push([]);
                }
            }
            console.log(_this.activityArray);
            for (var _b = 0, _c = res['data']; _b < _c.length; _b++) {
                var element = _c[_b];
                var activity = element;
                if (activity.activity_id_is_father != null || activity.activity_id_is_father != "") {
                    var i = 0;
                    while (i < _this.activityArray.length && _this.activityArray[i].activity_id != element.activity_id_is_father) {
                        i++;
                    }
                    if (i < _this.activityArray.length) {
                        _this.subActivityArray[i].push(activity);
                    }
                }
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ActivityCreationComponent.prototype.loadManagmentLevels = function () {
        var _this = this;
        this._managmentService.selectAll().subscribe(function (res) {
            _this.errorMessage = "";
            _this.managmentLevelsArray = res['data'];
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ActivityCreationComponent.prototype.changeStep = function (step1) {
        this.step1 = step1;
        this.step2 = !step1;
    };
    //Give the activity checked to the activitySelected attribut
    ActivityCreationComponent.prototype.checkActivity = function (activity) {
        this.activitySelected = activity;
        this.activity_index = this.activityArray.indexOf(activity);
    };
    ActivityCreationComponent.prototype.checkboxActive = function (activity) {
        if (this.activitySelected != null) {
            return this.activitySelected.activity_id == activity.activity_id;
        }
        else {
            return false;
        }
    };
    ActivityCreationComponent.prototype.isCheckboxActive = function () {
        var elements = document.querySelectorAll(".form-check-input");
        var isChecked = false;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i]['checked']) {
                isChecked = true;
            }
        }
        this.isCheckboxChecked = isChecked;
    };
    ActivityCreationComponent.prototype.addNewActivity = function () {
        var _this = this;
        var newActivity;
        //We check if all fields are filled
        var verificationTrue = this.fieldsVerification();
        if (verificationTrue) {
            //We create the activity that may will be added
            newActivity = new _objects_activity_activity__WEBPACK_IMPORTED_MODULE_3__["Activity"]();
            newActivity.sop_id = this.sopId;
            newActivity.activity_title = this.newActivityTitle;
            newActivity.activity_description = this.newActivityDescription;
            newActivity.activity_type_duration = this.newActivityTypeDuration;
            newActivity.activity_duration = this.newActivityDuration;
            newActivity.activity_type_output = this.newActivityTypeOutput;
            newActivity.activity_id_is_father = null;
            newActivity.activity_shape = 'shape of you';
            newActivity.activity_type = null;
            newActivity.managment_level_id = this.newActivityLevelId;
            //We check for all activity added, if the new one already exist
            var activityExist = false;
            for (var _i = 0, _a = this.activityArray; _i < _a.length; _i++) {
                var a = _a[_i];
                activityExist = (a.activity_title == newActivity.activity_title &&
                    a.activity_description == newActivity.activity_description &&
                    a.activity_type_duration == newActivity.activity_type_duration &&
                    a.activity_duration == newActivity.activity_duration &&
                    a.activity_type_output == newActivity.activity_type_output &&
                    a.managment_level_id == newActivity.managment_level_id);
            }
            if (activityExist) {
                this.errorMessage = "This activity already exists.";
            }
            else {
                this.errorMessage = "";
                console.log("the id : " + newActivity.managment_level_id);
                //Database insert
                this._activityService.createActivity(newActivity.activity_title, newActivity.activity_description, newActivity.activity_type_duration, newActivity.activity_duration, newActivity.activity_type, newActivity.activity_type_output, newActivity.activity_shape, newActivity.activity_id_is_father, newActivity.sop_id, newActivity.managment_level_id).subscribe(function (res) {
                    _this.errorMessage = "";
                    //We get the id of the new activity
                    newActivity.activity_id = res['data'];
                    newActivity.activity_id = newActivity.activity_id['activity_id'];
                    //We link the unit and the activity
                    _this._unitService.bindUnitActivity(_this.unit_id_selected, newActivity.activity_id)
                        .subscribe(function (res) {
                        _this.errorMessage = "";
                    }, function (error) {
                        _this.errorMessage = error;
                    });
                    //View insert
                    _this.activityArray.push(newActivity);
                    _this.subActivityArray.push([]);
                    //Set the fields blank
                    _this.newActivityTitle = "";
                    _this.newActivityDescription = "";
                    _this.newActivityTypeDuration = "";
                    _this.newActivityDuration = null;
                    _this.newActivityType = "";
                    _this.newActivityTypeOutput = "";
                    _this.newActivityLevelId = "";
                }, function (error) {
                    _this.errorMessage = error.error.message;
                });
            }
        }
    };
    ActivityCreationComponent.prototype.addNewSubActivity = function () {
        var _this = this;
        var newSubActivity;
        //We check if all fields are filled
        var verificationTrue = this.subFieldsVerification();
        if (verificationTrue) {
            //We create the activity that may will be added
            newSubActivity = new _objects_activity_activity__WEBPACK_IMPORTED_MODULE_3__["Activity"]();
            newSubActivity.activity_id_is_father = this.activitySelected.activity_id;
            newSubActivity.sop_id = this.sopId;
            newSubActivity.activity_title = this.newSubActivityTitle;
            newSubActivity.activity_description = this.newSubActivityDescription;
            newSubActivity.activity_type_duration = this.newSubActivityTypeDuration;
            newSubActivity.activity_duration = this.newSubActivityDuration;
            newSubActivity.activity_type_output = this.newSubActivityTypeOutput;
            newSubActivity.activity_shape = 'body';
            newSubActivity.activity_type = null;
            newSubActivity.managment_level_id = this.newSubActivityLevelId;
            //We check for all activity added, if the new one already exist
            var activityExist = false;
            console.log("The Index is : ", this.activity_index);
            console.log("The sub array index give : ", this.subActivityArray);
            for (var _i = 0, _a = this.subActivityArray[this.activity_index]; _i < _a.length; _i++) {
                var a = _a[_i];
                activityExist = (a.activity_title == newSubActivity.activity_title &&
                    a.activity_description == newSubActivity.activity_description &&
                    a.activity_type_duration == newSubActivity.activity_type_duration &&
                    a.activity_duration == newSubActivity.activity_duration &&
                    a.activity_type_output == newSubActivity.activity_type_output &&
                    a.managment_level_id == newSubActivity.managment_level_id);
            }
            if (activityExist) {
                this.errorMessage = "This activity already exists.";
            }
            else {
                this.errorMessage = "";
                //Database insert
                this._activityService.createActivity(newSubActivity.activity_title, newSubActivity.activity_description, newSubActivity.activity_type_duration, newSubActivity.activity_duration, newSubActivity.activity_type, newSubActivity.activity_type_output, newSubActivity.activity_shape, newSubActivity.activity_id_is_father, newSubActivity.sop_id, newSubActivity.managment_level_id).subscribe(function (res) {
                    _this.errorMessage = "";
                    //We get the id of the new activity
                    newSubActivity.activity_id = res['data'];
                    newSubActivity.activity_id = newSubActivity.activity_id['activity_id'];
                    //We link the unit and the activity
                    _this._unitService.bindUnitActivity(_this.unit_id_selected, newSubActivity.activity_id)
                        .subscribe(function (res) {
                        _this.errorMessage = "";
                    }, function (error) {
                        _this.errorMessage = error;
                    });
                    //View insert
                    _this.subActivityArray[_this.activity_index].push(newSubActivity);
                    //Set the fields blank
                    _this.newSubActivityTitle = "";
                    _this.newSubActivityDescription = "";
                    _this.newSubActivityTypeDuration = "";
                    _this.newSubActivityDuration = null;
                    _this.newSubActivityType = "";
                    _this.newSubActivityTypeOutput = "";
                    _this.newSubActivityLevelId = "";
                }, function (error) {
                    _this.errorMessage = error.error.message;
                });
            }
        }
    };
    ActivityCreationComponent.prototype.fieldsVerification = function () {
        this.errorMessage = "";
        if (this.newActivityTitle == "") {
            console.log("Title");
            this.errorMessage = "Title is required.";
        }
        else if (this.newActivityDescription == "") {
            console.log("Description");
            this.errorMessage = "Description is required.";
        }
        else if (this.newActivityTypeDuration == "") {
            console.log("Type duration");
            this.errorMessage = "Type duration is required.";
        }
        else if (this.newActivityDuration == 0) {
            console.log("Duration");
            this.errorMessage = "Duration time is required.";
        }
        else if (this.newActivityTypeOutput == "") {
            console.log("Output");
            this.errorMessage = "Output type is required.";
        }
        return this.errorMessage == "";
    };
    ActivityCreationComponent.prototype.subFieldsVerification = function () {
        this.errorMessage = "";
        if (this.newSubActivityTitle == "") {
            console.log("Title");
            this.errorMessage = "Title is required.";
        }
        else if (this.newSubActivityDescription == "") {
            console.log("Description");
            this.errorMessage = "Description is required.";
        }
        else if (this.newSubActivityTypeDuration == "") {
            console.log("Type duration");
            this.errorMessage = "Type duration is required.";
        }
        else if (this.newSubActivityDuration == 0) {
            console.log("Duration");
            this.errorMessage = "Duration time is required.";
        }
        else if (this.newSubActivityTypeOutput == "") {
            console.log("Output");
            this.errorMessage = "Output type is required.";
        }
        return this.errorMessage == "";
    };
    ActivityCreationComponent.prototype.deleteActivity = function (activity_id) {
        var _this = this;
        this._activityService.delete(activity_id).subscribe(function (res) {
            _this.errorMessage = "";
            _this.loadActivity();
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ActivityCreationComponent.prototype.sortTable = function (n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("activiy-table");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /* Loop through all table rows (except the
            first, which contains table headers): */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount++;
            }
            else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    ActivityCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-creation',
            template: __webpack_require__(/*! ./activity-creation.component.html */ "./src/app/component/activity-list/activity-creation/activity-creation.component.html"),
            styles: [__webpack_require__(/*! ./activity-creation.component.scss */ "./src/app/component/activity-list/activity-creation/activity-creation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_2__["SopService"],
            _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _objects_managment_level_managment_level_service__WEBPACK_IMPORTED_MODULE_5__["ManagmentLevelService"],
            _objects_unit_unit_service__WEBPACK_IMPORTED_MODULE_6__["UnitService"]])
    ], ActivityCreationComponent);
    return ActivityCreationComponent;
}());



/***/ }),

/***/ "./src/app/component/activity-list/activity-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/activity-list/activity-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  activity-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/activity-list/activity-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/activity-list/activity-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/activity-list/activity-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/activity-list/activity-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ActivityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListComponent", function() { return ActivityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityListComponent = /** @class */ (function () {
    function ActivityListComponent() {
    }
    ActivityListComponent.prototype.ngOnInit = function () {
    };
    ActivityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-list',
            template: __webpack_require__(/*! ./activity-list.component.html */ "./src/app/component/activity-list/activity-list.component.html"),
            styles: [__webpack_require__(/*! ./activity-list.component.scss */ "./src/app/component/activity-list/activity-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityListComponent);
    return ActivityListComponent;
}());



/***/ }),

/***/ "./src/app/component/admin-users/admin-users.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/admin-users/admin-users.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!actionFinished\" class=\"container\">\r\n\r\n  <div class=\"row row-first\">\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n        Manage Users\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\" style=\"margin-top: 20px\">\r\n\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n        <table class=\"table\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"\">\r\n          <tr class=\"text-white\">\r\n            <th>First Name</th>\r\n            <th>Name</th>\r\n            <th>Mail</th>\r\n            <th>Role</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n          </thead>\r\n          <!--Table head-->\r\n\r\n          <!--Table body-->\r\n          <tbody>\r\n          <tr *ngFor=\"let user of users\">\r\n            <th scope=\"row\">{{user.member_first_name}}</th>\r\n            <td scope=\"row\">{{user.member_name}}</td>\r\n            <td>{{user.member_mail}}</td>\r\n            <td *ngIf=\"user.member_admin == 1\">admin</td>\r\n            <td *ngIf=\"user.member_admin !== 1 && user.member_role === null\">no role</td>\r\n            <td *ngIf=\"user.member_admin !== 1 && user.member_role !== null\">\r\n              <span  *ngFor=\"let role of user.member_role\">{{role}}<br></span>\r\n            </td>\r\n            <td *ngIf=\"user.member_valid == 0\"><span style=\"color: red;\">mail not validated</span> </td>\r\n            <td *ngIf=\"user.member_valid == 2\"> <button (click)=\"validateUser(user.member_id)\" class=\"btn btn-warning btn-sm\">approve account</button></td>\r\n            <td *ngIf=\"user.member_valid == 1\"> <button class=\"btn btn-default btn-sm\">No action</button></td>\r\n          </tr>\r\n\r\n          </tbody>\r\n          <!--Table body-->\r\n\r\n        </table>\r\n        <!--Table-->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div *ngIf=\"actionFinished\" class=\"container\">\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col-10 col-sm-8 col-md-6 col-xl-4 card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <p class=\"h4 text-center mb-4\" >{{title}}</p>\r\n\r\n\r\n        <p class=\"text-center mb-4\">\r\n          {{text}}\r\n        </p>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <a class=\"btn btn-default\" (click)=\"goBack()\" >go Back</a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/admin-users/admin-users.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/admin-users/admin-users.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/admin-users/admin-users.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/admin-users/admin-users.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(_memberService) {
        this._memberService = _memberService;
        this.actionFinished = false;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    AdminUsersComponent.prototype.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._memberService.selectAll()
                            .subscribe(function (res) {
                            console.log(res['data']);
                            _this.users = res['data'];
                        }, function (error) {
                            console.log("ERREUR : ", error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminUsersComponent.prototype.validateUser = function (idUser) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._memberService.validateUser(idUser)
                            .subscribe(function (res) {
                            _this.getAllUsers();
                            _this.title = "Member has been validated";
                            _this.text = "He can now login with his mail and password";
                            _this.actionFinished = true;
                        }, function (error) {
                            _this.title = "Error";
                            _this.text = error.error.message;
                            _this.actionFinished = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminUsersComponent.prototype.goBack = function () {
        this.title = "";
        this.text = "";
        this.actionFinished = false;
    };
    AdminUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/component/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.scss */ "./src/app/component/admin-users/admin-users.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/component/admin/admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/admin/admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/admin/admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/admin/admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/admin/admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/admin/admin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/component/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/component/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/component/authentification/authentification.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/authentification/authentification.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#authentification {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/authentification/authentification.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/authentification/authentification.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col-10 col-md-8 col-md-6 col-xl-4 card card-cascade hoverable\" id=\"authentification\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <!-- Material form login -->\r\n        <form (ngSubmit)=\"onSubmit()\">\r\n          <p class=\"h4 text-center mb-4\">Sign in</p>\r\n\r\n          <!-- Material input email -->\r\n          <div class=\"md-form\">\r\n            <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n            <input required [(ngModel)]=\"email\" name=\"mail\" type=\"email\" id=\"materialFormLoginEmailEx\" class=\"form-control\" email>\r\n            <label for=\"materialFormLoginEmailEx\">Your email</label>\r\n          </div>\r\n\r\n          <!-- Material input password -->\r\n          <div class=\"md-form\">\r\n            <i class=\"fa fa-lock prefix grey-text\"></i>\r\n            <input required [(ngModel)]=\"password\" name=password type=\"password\" id=\"materialFormLoginPasswordEx\" class=\"form-control\">\r\n            <label for=\"materialFormLoginPasswordEx\">Your password</label>\r\n            <!-- Forgotten password -->\r\n            <p class=\"font-small blue-text d-flex justify-content-end text-link\">Forgot <a class=\"blue-text ml-1 text-link\"> Password ?</a></p>\r\n          </div>\r\n\r\n          <!-- Error alert -->\r\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n            {{errorMessage}}\r\n          </div>\r\n\r\n          <div class=\"text-center mt-4\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Login</button>\r\n          </div>\r\n        </form>\r\n        <!-- Material form login -->\r\n\r\n        <hr>\r\n\r\n        <div class=\"row justify-content-center\">\r\n          <!-- Sign up -->\r\n          <p class=\"font-small grey-text d-flex justify-content-end mt-3\">Don't have an account ? <a [routerLink]=\"['/sign-up']\" class=\"dark-grey-text ml-1 font-weight-bold text-link\"> Sign up</a></p>\r\n          <!-- Forgotten password -->\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/authentification/authentification.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/authentification/authentification.component.ts ***!
  \**************************************************************************/
/*! exports provided: AuthentificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationComponent", function() { return AuthentificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthentificationComponent = /** @class */ (function () {
    function AuthentificationComponent(_memberService, router) {
        this._memberService = _memberService;
        this.router = router;
        /* ----- Data ----- */
        this.errorMessage = "";
        this.email = "";
        this.password = "";
        this.user = "";
        //Norme RFC2822 email validation
        this.emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    AuthentificationComponent.prototype.ngOnInit = function () {
    };
    AuthentificationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.email == null || this.email == "") {
            this.errorMessage = "Email is required.";
        }
        else if (!this.emailReg.test(this.email)) {
            this.errorMessage = "Please enter a valid email.";
        }
        else if (this.password == null || this.password == "") {
            this.errorMessage = "Password is required";
        }
        else {
            var user = void 0;
            var auth = true;
            var resultat = void 0;
            this._memberService.auth(this.email, this.password)
                .subscribe(function (res) {
                _this.errorMessage = "";
                _this._memberService.storeUserData(res['token']);
                _this.router.navigate(['/home']);
            }, function (error) {
                console.log("ERREUR : ", error);
                _this.errorMessage = error.error.message;
            });
        }
    };
    AuthentificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authentification',
            template: __webpack_require__(/*! ./authentification.component.html */ "./src/app/component/authentification/authentification.component.html"),
            styles: [__webpack_require__(/*! ./authentification.component.css */ "./src/app/component/authentification/authentification.component.css")]
        }),
        __metadata("design:paramtypes", [_objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthentificationComponent);
    return AuthentificationComponent;
}());



/***/ }),

/***/ "./src/app/component/authentification/sign-up/sign-up.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/component/authentification/sign-up/sign-up.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/authentification/sign-up/sign-up.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/component/authentification/sign-up/sign-up.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!displayEnd\" class=\"container\">\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col-10 col-sm-8 col-md-6 col-xl-4 card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n      <!-- Material form register -->\r\n      <form (ngSubmit)=\"onSubmitRegistration()\">\r\n        <p class=\"h4 text-center mb-4\">Sign up</p>\r\n\r\n        <!-- First step of the form -->\r\n        <div [hidden]=\"!step1\">\r\n\r\n          <!-- Input first name -->\r\n          <div class=\"md-form\">\r\n            <i class=\"fa fa-user prefix grey-text\"></i>\r\n            <input [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" id=\"firstName\" class=\"form-control\">\r\n            <label for=\"firstName\">First name</label>\r\n          </div>\r\n\r\n          <!-- Input last name -->\r\n          <div class=\"md-form\">\r\n            <i class=\"fa fa-user prefix grey-text\"></i>\r\n            <input [(ngModel)]=\"lastName\" name=\"lastName\" type=\"text\" id=\"lastName\" class=\"form-control\">\r\n            <label for=\"lastName\">Last name</label>\r\n          </div>\r\n\r\n          <!-- Input email -->\r\n          <div class=\"md-form\">\r\n            <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n            <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" id=\"email\" class=\"form-control\">\r\n            <label for=\"email\">Your email</label>\r\n          </div>\r\n\r\n          <!-- Input email confirmation -->\r\n          <div class=\"md-form\">\r\n            <i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>\r\n            <input [(ngModel)]=\"emailConfirmation\" name=\"emailConfirmation\" type=\"email\" id=\"emailConfirm\" class=\"form-control\">\r\n            <label for=\"emailConfirm\">Confirm your email</label>\r\n          </div>\r\n\r\n          <!-- Input password -->\r\n          <div class=\"md-form\">\r\n            <i class=\"fa fa-lock prefix grey-text\"></i>\r\n            <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" id=\"password\" class=\"form-control\">\r\n            <label for=\"password\">Your password</label>\r\n          </div>\r\n\r\n          <!-- Input password confirmation -->\r\n          <div class=\"md-form\">\r\n            <i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>\r\n            <input [(ngModel)]=\"passwordConfirmation\" name=\"passwordConfirmation\" type=\"password\" id=\"passwordConfirm\" class=\"form-control\">\r\n            <label for=\"passwordConfirm\">Confirm your password</label>\r\n          </div>\r\n\r\n          <div class=\"md-form\">\r\n            <select [(ngModel)]=\"managmentLevelChoosen\" name=\"managmentLevel\" class=\"form-control mdb-select\" >\r\n              <option value=\"\" disabled selected>Choose managment level</option>\r\n              <option *ngFor=\"let manage of managmentLevels\" [ngValue]=manage.managment_level_id>{{manage.managment_level_label}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Error alert -->\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n          {{errorMessage}}\r\n        </div>\r\n\r\n        <!-- Second step of the form -->\r\n        <div class=\"form-group\" [hidden]=\"!step2\">\r\n\r\n          <!-- Organisation -->\r\n          <div class=\"md-form\">\r\n            <select [(ngModel)]=\"organisationChoosen\" name=\"organisation\" class=\"form-control mdb-select\" (change)=\"enableBranch()\" >\r\n              <option value=\"\" disabled selected>Choose organisation</option>\r\n              <option *ngFor=\"let orga of organisations\" [ngValue]=orga.organisation_id>{{orga.organisation_name}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <!-- Branch -->\r\n          <div class=\"md-form\">\r\n            <select [(ngModel)]=\"branchChoosen\" name=\"branch\" class=\"form-control\" [disabled]=\"!branchEnabled\" (change)=\"enableDepartment()\" >\r\n              <option value=\"\" disabled selected>Choose a branch</option>\r\n              <option *ngFor=\"let branch of branchs\" [ngValue]=branch.branch_id>{{branch.branch_name}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <!-- Department -->\r\n          <div class=\"md-form\">\r\n            <select [(ngModel)]=\"departmentChoosen\" name=\"department\" class=\"form-control mdb-select\" [disabled]=\"!departmentEnabled\" (change)=\"enableSubDepartment()\" >\r\n              <option value=\"\" disabled selected>Choose department</option>\r\n              <option *ngFor=\"let department of departments\" [ngValue]=department.department_id>{{department.department_name}}</option>\r\n\r\n            </select>\r\n          </div>\r\n\r\n          <!-- SubDepartment -->\r\n          <div class=\"md-form\">\r\n            <select [(ngModel)]=\"subDepartmentChoosen\" name=\"subDepartment\" class=\"form-control mdb-select\" [disabled]=\"!subDepartmentEnabled\" >\r\n              <option value=\"\" disabled selected>Choose sub-department</option>\r\n              <option *ngFor=\"let subDepartment of subDepartments\" [ngValue]=subDepartment.sub_department_id>{{subDepartment.sub_department_name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <a class=\"btn btn-default\" (click)=\"firstStepVerification()\" [hidden]=\"!step1\" >Next</a>\r\n          <a class=\"btn btn-default\" (click)=\"changeStep()\" [hidden]=\"!step2\" >Back</a>\r\n          <button class=\"btn btn-default\" type=\"\" [hidden]=\"!step2\" >Sign Up</button>\r\n        </div>\r\n\r\n      </form>\r\n      <!-- Material form register -->\r\n\r\n      <hr>\r\n\r\n      <div class=\"row justify-content-center\">\r\n        <!-- Forgotten password -->\r\n        <p class=\"font-small grey-text d-flex justify-content-end mt-3\">Already have an account ? <a [routerLink]=\"['/authentification']\" class=\"dark-grey-text ml-1 font-weight-bold text-link\"> Sign in</a></p>\r\n        <!--<a class=\"px-2 fa-lg email-ic\"><i class=\"fa fa-envelope\"> </i></a>-->\r\n      </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-summary *ngIf=\"displayEnd\"\r\n             title=\"Your account was created\"\r\n             text=\"To complete your registration please follow the instruction on the mail you received and wait for the admin validation\"\r\n             buttonTitle=\"Home\" link=\"home\">\r\n</app-summary>\r\n\r\n<!--\r\n\r\n\r\n-->\r\n\r\n<script>\r\n  $(document).ready(function() {\r\n  $('.mdb-select').material_select();\r\n});\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/component/authentification/sign-up/sign-up.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/authentification/sign-up/sign-up.component.ts ***!
  \*************************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objects_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../objects/organisation/organisation.service */ "./src/app/objects/organisation/organisation.service.ts");
/* harmony import */ var _objects_branch_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../objects/branch/branch.service */ "./src/app/objects/branch/branch.service.ts");
/* harmony import */ var _objects_department_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../objects/department/department.service */ "./src/app/objects/department/department.service.ts");
/* harmony import */ var _objects_sub_department_sub_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../objects/sub_department/sub-department.service */ "./src/app/objects/sub_department/sub-department.service.ts");
/* harmony import */ var _objects_managment_level_managment_level_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../objects/managment_level/managment-level.service */ "./src/app/objects/managment_level/managment-level.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(_memberService, _organisationService, _managmentLevelService, _branchService, _departmentService, _subDepartmentService, router) {
        this._memberService = _memberService;
        this._organisationService = _organisationService;
        this._managmentLevelService = _managmentLevelService;
        this._branchService = _branchService;
        this._departmentService = _departmentService;
        this._subDepartmentService = _subDepartmentService;
        this.router = router;
        /* ----- Data ----- */
        this.step1 = true;
        this.step2 = false;
        this.branchEnabled = false;
        this.departmentEnabled = false;
        this.subDepartmentEnabled = false;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.emailConfirmation = "";
        this.password = "";
        this.passwordConfirmation = "";
        this.organisationChoosen = "";
        this.branchChoosen = "";
        this.departmentChoosen = "";
        this.subDepartmentChoosen = "";
        this.managmentLevelChoosen = "";
        this.errorMessage = "";
        this.displayEnd = false;
        //Norme RFC2822 email validation
        this.emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.getOrganisations();
        this.getManagmentLevels();
    };
    SignUpComponent.prototype.getOrganisations = function () {
        var _this = this;
        this._organisationService.selectAll()
            .subscribe(function (res) {
            console.log(res['data']);
            _this.organisations = res['data'];
        }, function (error) {
            console.log("ERREUR : ", error);
        });
    };
    SignUpComponent.prototype.getManagmentLevels = function () {
        var _this = this;
        this._managmentLevelService.selectAll()
            .subscribe(function (res) {
            console.log(res['data']);
            _this.managmentLevels = res['data'];
        }, function (error) {
            console.log("ERREUR : ", error);
        });
    };
    SignUpComponent.prototype.onSubmitRegistration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.subDepartmentChoosen == "")) return [3 /*break*/, 1];
                        this.errorMessage = "Sub-Department name required. If not select default.";
                        return [3 /*break*/, 3];
                    case 1: 
                    //this._memberService.register(this.email,this.password,this.firstName, this.lastName, "0",this.subDepartmentChoosen)
                    return [4 /*yield*/, this._memberService.register(this.email, this.password, this.firstName, this.lastName, "0", this.subDepartmentChoosen, this.managmentLevelChoosen)
                            .subscribe(function (res) {
                            _this.errorMessage = "";
                            _this.step1 = false;
                            _this.step2 = false;
                            _this.displayEnd = true;
                            _this.errorMessage = "";
                        }, function (error) {
                            _this.errorMessage = error.error.message;
                        })];
                    case 2:
                        //this._memberService.register(this.email,this.password,this.firstName, this.lastName, "0",this.subDepartmentChoosen)
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignUpComponent.prototype.changeStep = function () {
        this.step1 = !this.step1;
        this.step2 = !this.step2;
        this.errorMessage = "";
    };
    SignUpComponent.prototype.firstStepVerification = function () {
        if (this.firstName == null || this.firstName == "") {
            this.errorMessage = "First name is required.";
        }
        else if (this.lastName == null || this.lastName == "") {
            this.errorMessage = "Last name is required.";
        }
        else if (this.email == null || this.email == "") {
            this.errorMessage = "Email is required.";
        }
        else if (!this.emailReg.test(this.email)) {
            this.errorMessage = "Please enter a valid email.";
        }
        else if (this.emailConfirmation != this.email) {
            console.log(this.emailConfirmation);
            console.log(this.email);
            this.errorMessage = "Email confirmation is wrong.";
        }
        else if (this.password == null || this.password == "") {
            this.errorMessage = "Password is required";
        }
        else if (this.passwordConfirmation != this.password) {
            this.errorMessage = "Password confirmation is wrong.";
        }
        else if (this.managmentLevelChoosen == "") {
            this.errorMessage = "You need to choose a managment level.";
        }
        else {
            //Connexion code
            this.step1 = false;
            this.step2 = true;
            console.log("Next");
            this.errorMessage = "";
        }
    };
    // Select fields authorizations
    SignUpComponent.prototype.enableBranch = function () {
        var _this = this;
        if (this.organisationChoosen != "") {
            this._branchService.selectAllFromOrganisation(this.organisationChoosen)
                .subscribe(function (res) {
                _this.branchs = res['data'];
                _this.branchEnabled = true;
            }, function (error) {
                _this.errorMessage = error.error.message;
            });
        }
    };
    SignUpComponent.prototype.enableDepartment = function () {
        var _this = this;
        if (this.branchChoosen != "") {
            if (this.branchChoosen != 'blank') {
                this._departmentService.selectAllFromBranch(this.branchChoosen)
                    .subscribe(function (res) {
                    console.log(res['data']);
                    _this.departments = res['data'];
                    _this.departmentEnabled = true;
                }, function (error) {
                    _this.errorMessage = error.error.message;
                    _this.departmentEnabled = false;
                    _this.subDepartmentEnabled = false;
                    _this.departmentChoosen = "blank";
                    _this.subDepartmentChoosen = "blank";
                });
            }
            else {
                this.departmentEnabled = false;
                this.subDepartmentEnabled = false;
                this.departmentChoosen = "blank";
                this.subDepartmentChoosen = "blank";
            }
        }
    };
    SignUpComponent.prototype.enableSubDepartment = function () {
        var _this = this;
        if (this.departmentChoosen != "") {
            if (this.departmentChoosen != "blank") {
                this._subDepartmentService.selectAllFromDepartment(this.departmentChoosen)
                    .subscribe(function (res) {
                    console.log(res['data']);
                    _this.subDepartments = res['data'];
                    _this.subDepartmentEnabled = true;
                }, function (error) {
                    _this.errorMessage = error.error.message;
                    _this.subDepartmentEnabled = false;
                    _this.subDepartmentChoosen = "blank";
                });
            }
            else {
                this.subDepartmentEnabled = false;
                this.subDepartmentChoosen = "blank";
            }
        }
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/component/authentification/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/component/authentification/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"],
            _objects_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_3__["OrganisationService"],
            _objects_managment_level_managment_level_service__WEBPACK_IMPORTED_MODULE_7__["ManagmentLevelService"],
            _objects_branch_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"],
            _objects_department_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"],
            _objects_sub_department_sub_department_service__WEBPACK_IMPORTED_MODULE_6__["SubDepartmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/component/gantt/gantt-creation/gantt-creation.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/gantt/gantt-creation/gantt-creation.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!ready\">\r\n  <div class=\"row-first\">\r\n    <app-loader></app-loader>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"ready\">\r\n\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-danger waves-effect\" data-toggle=\"modal\" data-target=\"#warningModal\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-times mr-3\"></i>Back</h6></button>\r\n      <button class=\"btn btn-success waves-effect\" type=\"button\" data-toggle=\"modal\" data-target=\"#confirmationModal\">Submit</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-first justify-content-end\">\r\n    <div class=\" md-form\" id=\"search-bar\">\r\n      <input id=\"search\" (keyup)=\"search()\" class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\">\r\n\r\n        <table class=\"col-12 hoverable table table-borderless table-hover table-fixed\" id=\"gantt-table\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"\">\r\n          <tr class=\"text-white\">\r\n            <th (click)=\"sortTable(0)\"><a>No</a></th>\r\n            <th (click)=\"sortTable(1)\"><a>Activity</a></th>\r\n            <th (click)=\"sortTable(2)\"><a>Target Date</a></th>\r\n            <th (click)=\"sortTable(3)\"><a>Begin Date</a></th>\r\n          </tr>\r\n          </thead>\r\n          <!--Table head-->\r\n\r\n          <!--Table body-->\r\n          <tbody>\r\n          <!-- elements[0]: activity_id && elements[1]: activity && elements[2]: m_a_p && elements[3]: members linked -->\r\n            <tr *ngFor=\"let element of elements\" (click)=\"selectRow(element)\">\r\n              <td><a>{{element[1]['activity_id']}}</a></td>\r\n              <td><a>{{element[1]['activity_title']}}</a></td>\r\n              <td>\r\n                <input [ngModel]=\"calculDateTarget(element) | date:'yyyy-MM-dd'\" type=\"date\" id=\"{{element[1]['activity_id']}}\" min=\"{{calculDateTarget(element) | date:'yyyy-MM-dd'}}\" max=\"{{project.project_end | date:'yyyy-MM-dd'}}\" class=\"form-control\">\r\n              </td>\r\n              <td>\r\n                <input [ngModel]=\"calculDateBegin(element) | date:'yyyy-MM-dd'\" type=\"date\" id=\"start_{{element[1]['activity_id']}}\" min=\"{{project.project_start | date:'yyyy-MM-dd'}}\" max=\"{{calculDateBegin(element) | date:'yyyy-MM-dd'}}\" class=\"form-control\">\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n          <!--Table body-->\r\n\r\n        </table>\r\n        <!--Table-->\r\n\r\n        <table class=\"col-12 hoverable table table-borderless table-hover table-fixed\" id=\"worker-table\" *ngIf=\"workers_selected != null\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"thead-secondary\">\r\n          <tr class=\"text-white\">\r\n            <th (click)=\"sortTable1(0)\"><a>Last Name</a></th>\r\n            <th (click)=\"sortTable1(1)\"><a>First Name</a></th>\r\n            <th>Target Quantity</th>\r\n          </tr>\r\n          </thead>\r\n          <!--Table head-->\r\n\r\n          <!--Table body-->\r\n          <tbody >\r\n          <tr *ngFor=\"let worker of workers_selected\">\r\n            <td>{{worker[0].member_name.toUpperCase()}}</td>\r\n            <td>{{worker[0].member_first_name}}</td>\r\n            <td>\r\n              <input [ngModel]=\"worker[1]\" [(ngModel)]=\"target_quantities[activity_selected.activity_id.toString() + worker[0].member_id]\" id=\"q_{{worker[0].member_id}}\" (change)=\"saveTarget(worker[0].member_id)\" type=\"number\" class=\"form-control\">\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n          <!--Table body-->\r\n\r\n        </table>\r\n        <!--Table-->\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal warning -->\r\n<app-warning title=\"Exit\"\r\n             text=\"Are you sure you want to go back to the projects list ?\"\r\n             [isLink]=true\r\n             link=\"project-list\">\r\n</app-warning>\r\n\r\n<!-- Modal confirmation -->\r\n<app-confirmation title=\"Finalize gantt informations\"\r\n                  text=\"Are you sure all informations provided are correct ?\"\r\n                  (success)=\"onSubmit()\"\r\n                  [isLinkActive]=false\r\n                  link=\"project-list\">\r\n</app-confirmation>\r\n"

/***/ }),

/***/ "./src/app/component/gantt/gantt-creation/gantt-creation.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/gantt/gantt-creation/gantt-creation.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/gantt/gantt-creation/gantt-creation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/gantt/gantt-creation/gantt-creation.component.ts ***!
  \****************************************************************************/
/*! exports provided: GanttCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttCreationComponent", function() { return GanttCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_activity_activity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../objects/activity/activity */ "./src/app/objects/activity/activity.ts");
/* harmony import */ var _objects_member_activity_project_member_activity_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../objects/member_activity_project/member-activity-project.service */ "./src/app/objects/member_activity_project/member-activity-project.service.ts");
/* harmony import */ var _objects_member_activity_project_member_activity_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../objects/member_activity_project/member-activity-project */ "./src/app/objects/member_activity_project/member-activity-project.ts");
/* harmony import */ var _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../objects/activity/activity.service */ "./src/app/objects/activity/activity.service.ts");
/* harmony import */ var _objects_project_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../objects/project/project.service */ "./src/app/objects/project/project.service.ts");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var GanttCreationComponent = /** @class */ (function () {
    function GanttCreationComponent(_memberActivityProjectService, _activityService, _projectService, _memberService, router) {
        this._memberActivityProjectService = _memberActivityProjectService;
        this._activityService = _activityService;
        this._projectService = _projectService;
        this._memberService = _memberService;
        this.router = router;
        /* ----- Data ----- */
        this.errorMessage = "";
        this.project_id = "";
        this.ready = false;
        this.test = "0";
        this.elements = [];
        this.element_selected = [];
        this.target_quantities = new Map();
        this.activities_from_project = [];
        this.members_activities_project = [];
        this.activity_selected = new _objects_activity_activity__WEBPACK_IMPORTED_MODULE_1__["Activity"]();
        this.member_activity_project_selected = new _objects_member_activity_project_member_activity_project__WEBPACK_IMPORTED_MODULE_3__["MemberActivityProject"]();
        this.new_dates_target = [];
    }
    GanttCreationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.project_id = localStorage.getItem('Project_id');
                this.loadProject();
                this.loadRows();
                return [2 /*return*/];
            });
        });
    };
    GanttCreationComponent.prototype.onSubmit = function () {
        this.updateQuantities();
        this.router.navigate(['/project-list']);
    };
    GanttCreationComponent.prototype.loadProject = function () {
        var _this = this;
        this._projectService.select(this.project_id).subscribe(function (res) {
            _this.errorMessage = "";
            _this.project = res['data'];
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    GanttCreationComponent.prototype.loadRows = function () {
        this.elements = [];
        this.activities_from_project = [];
        this.members_activities_project = [];
        var vm = this;
        this.loadRowsDistinct();
        setTimeout(function () {
            vm._memberActivityProjectService.selectAllFromProject(vm.project_id)
                .subscribe(function (res) {
                vm.errorMessage = "";
                vm.members_activities_project = res['data'];
                var i = 0;
                var _loop_1 = function (e) {
                    vm._memberService.select(e);
                    var sort_map = [];
                    var sort_members = [];
                    var _loop_2 = function (map) {
                        if (map.activity_id == e[1]['activity_id']) {
                            sort_map.push(map);
                            vm._memberService.select(map.member_id)
                                .subscribe(function (res) {
                                vm.errorMessage = "";
                                var libelle = map.activity_id.toString() + map.member_id.toString();
                                vm.target_quantities.set(libelle, map.target_quantity);
                                sort_members.push(res['data']);
                            }, function (error) {
                                vm.errorMessage = error.error.message;
                            });
                        }
                    };
                    for (var _i = 0, _a = vm.members_activities_project; _i < _a.length; _i++) {
                        var map = _a[_i];
                        _loop_2(map);
                    }
                    e[3] = sort_members;
                    e[2] = sort_map;
                    i++;
                };
                //For each m_a_p we check which activity is linked
                for (var _i = 0, _a = vm.elements; _i < _a.length; _i++) {
                    var e = _a[_i];
                    _loop_1(e);
                }
                vm.ready = true;
            }, function (error) {
                vm.errorMessage = error.error.message;
            });
        }, 2000);
    };
    GanttCreationComponent.prototype.loadRowsDistinct = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._memberActivityProjectService.selectAllFromProjectDistinct(_this.project_id).toPromise()
                .then(function (res) {
                _this.errorMessage = "";
                var _loop_3 = function (map) {
                    //Now that we have all m_a_p of the project, we select information of each activity
                    _this._activityService.select(map['activity_id'])
                        .subscribe(function (res1) {
                        _this.errorMessage = "";
                        _this.activities_from_project.push(res1['data']);
                        _this.elements.push([map, res1['data'], [], []]);
                    }, function (error) {
                        _this.errorMessage = error.error.message;
                    });
                };
                for (var _i = 0, _a = res['data']; _i < _a.length; _i++) {
                    var map = _a[_i];
                    _loop_3(map);
                }
                resolve();
            }, function (error) {
                _this.errorMessage = error.error.message;
                reject(error);
            });
        });
        return promise;
    };
    GanttCreationComponent.prototype.selectRow = function (element) {
        this.element_selected = element;
        this.activity_selected = element[1];
        this.member_activity_project_selected = element[0];
        this.workers_selected = [];
        for (var _i = 0, _a = element[3]; _i < _a.length; _i++) {
            var e = _a[_i];
            //We get the quantity stored in the Map
            var libelle = element[1]['activity_id'].toString() + e['member_id'];
            var q = this.target_quantities.get(libelle);
            //We add it the the displayed list
            this.workers_selected.push([e, q]);
        }
    };
    GanttCreationComponent.prototype.saveTarget = function (member_id) {
        //We take the quantity from the input
        var quantity = document.getElementById('q_' + member_id)['value'];
        //We store it into the Map
        this.target_quantities.set(this.activity_selected.activity_id.toString() + member_id, quantity);
    };
    GanttCreationComponent.prototype.sortTable = function (n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("gantt-table");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /* Loop through all table rows (except the
            first, which contains table headers): */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount++;
            }
            else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    GanttCreationComponent.prototype.sortTable1 = function (n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("worker-table");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /* Loop through all table rows (except the
            first, which contains table headers): */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount++;
            }
            else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    GanttCreationComponent.prototype.search = function () {
        // Declare variables
        var input, filter, table, tr, td, i;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        table = document.getElementById("gantt-table");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    GanttCreationComponent.prototype.calculDateTarget = function (element) {
        var activity = element[1];
        var informations = element[2][0];
        var answer = new Date(this.project.project_start);
        if (activity.activity_type_duration == "days") {
            answer.setDate(answer.getDate() + activity.activity_duration);
        }
        else if (activity.activity_type_duration == "months") {
            answer.setMonth(answer.getMonth() + activity.activity_duration);
        }
        var target_date = new Date(informations.target_date);
        if (answer > target_date) {
            return answer;
        }
        else {
            return target_date;
        }
    };
    GanttCreationComponent.prototype.calculDateBegin = function (element) {
        var activity = element[1];
        var informations = element[2][0];
        var answer = new Date(informations.target_date);
        if (activity.activity_type_duration == "days") {
            answer.setDate(answer.getDate() - activity.activity_duration);
        }
        else if (activity.activity_type_duration == "months") {
            answer.setMonth(answer.getMonth() - activity.activity_duration);
        }
        var date_begin = new Date(this.project.project_start);
        if (answer > date_begin) {
            return answer;
        }
        else {
            return date_begin;
        }
    };
    GanttCreationComponent.prototype.updateQuantities = function () {
        var _this = this;
        for (var _i = 0, _a = this.members_activities_project; _i < _a.length; _i++) {
            var m_a_p = _a[_i];
            //We set the new quantity
            var libelle = m_a_p.activity_id.toString() + m_a_p.member_id;
            var quantity = this.target_quantities.get(libelle);
            m_a_p.target_quantity = quantity;
            //We search for the new date_target to set it
            var target_date = document.getElementById(m_a_p.activity_id.toString())['value'];
            m_a_p.target_date = target_date;
            //We update the database
            this._memberActivityProjectService.update(m_a_p)
                .subscribe(function (res) {
                _this.errorMessage = "";
            }, function (error) {
                _this.errorMessage = error.error.message;
            });
        }
    };
    GanttCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gantt-creation',
            template: __webpack_require__(/*! ./gantt-creation.component.html */ "./src/app/component/gantt/gantt-creation/gantt-creation.component.html"),
            styles: [__webpack_require__(/*! ./gantt-creation.component.scss */ "./src/app/component/gantt/gantt-creation/gantt-creation.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_member_activity_project_member_activity_project_service__WEBPACK_IMPORTED_MODULE_2__["MemberActivityProjectService"],
            _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _objects_project_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            _objects_member_member_service__WEBPACK_IMPORTED_MODULE_6__["MemberService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], GanttCreationComponent);
    return GanttCreationComponent;
}());



/***/ }),

/***/ "./src/app/component/gantt/gantt.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/gantt/gantt.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/gantt/gantt.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/gantt/gantt.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/gantt/gantt.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/gantt/gantt.component.ts ***!
  \****************************************************/
/*! exports provided: GanttComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanttComponent", function() { return GanttComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GanttComponent = /** @class */ (function () {
    function GanttComponent() {
        this.project_id = "";
    }
    GanttComponent.prototype.ngOnInit = function () {
    };
    GanttComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gantt',
            template: __webpack_require__(/*! ./gantt.component.html */ "./src/app/component/gantt/gantt.component.html"),
            styles: [__webpack_require__(/*! ./gantt.component.scss */ "./src/app/component/gantt/gantt.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GanttComponent);
    return GanttComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row row-first\">\r\n    <div class=\"col-6 col-padding-1\">\r\n\r\n    </div>\r\n    <div class=\"col-6 col-padding-1\">\r\n      <h1>Set up and manage your projects with SOP Manager</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/job-list/job-creation/job-creation.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/component/job-list/job-creation/job-creation.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- SOP List back button -->\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-danger waves-effect\" data-toggle=\"modal\" data-target=\"#warningModal\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-times mr-3\"></i>Back</h6></button>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Error message-->\r\n  <div class=\"row\">\r\n    <!-- Error alert -->\r\n    <div *ngIf=\"errorMessage\" class=\"col offset-2 row justify-content-end error-text\">\r\n      <i>{{errorMessage}}</i>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SOP Form -->\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <p class=\"h4 text-center mb-4\">Job code : {{job.job_code}}</p>\r\n\r\n          <div class=\"row row-first\">\r\n            <div class=\"col-3 text-center\">Selected</div>\r\n            <div class=\"offset-1 col-6\">Activity name</div>\r\n            <div class=\"col-2 text-center\">Sub activities</div>\r\n          </div>\r\n\r\n          <div (click)=\"isActivityPicked()\" *ngFor=\"let activity of activities\">\r\n            <hr>\r\n            <div class=\"row\">\r\n              <div class=\"col-3 text-center\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" (click)=\"pickActivity(activity)\" id=\"{{activity.activity_id}}\">\r\n              </div>\r\n              <div class=\"offset-1 col-6\">{{activity.activity_title}}</div>\r\n              <div class=\"col text-center\">\r\n                <a>\r\n                  <i class=\"fa fa-eye text-blue\" data-toggle=\"collapse\" [attr.data-target]=\"'#s_' + activity.activity_id\" aria-expanded=\"false\" aria-controls=\"{{activity.activity_title}}\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <!-- Collapsible element -->\r\n            <div class=\"collapse\" id=\"s_{{activity.activity_id}}\">\r\n              <div *ngFor=\"let sub_activity of sub_activities[activities.indexOf(activity)]\" class=\"row\">\r\n                <div class=\"offset-1 col-2 text-center\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"{{sub_activity.activity_id}}\">\r\n                </div>\r\n                <div class=\"offset-1 col-6\">{{sub_activity.activity_title}}</div>\r\n              </div>\r\n            </div>\r\n            <!-- / Collapsible element -->\r\n          </div>\r\n\r\n        <div class=\"row md-form\">\r\n          <div class=\"col-12 row justify-content-end\">\r\n            <div class=\"\">\r\n              <button [disabled]=\"!isJobChecked\" class=\"btn btn-success waves-effect\" data-toggle=\"modal\" data-target=\"#confirmationModal\" type=\"button\">Finish</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- Card content -->\r\n\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n  <!-- SOP Form -->\r\n\r\n</div>\r\n\r\n<!-- Modal confirmation -->\r\n<app-confirmation title=\"Confirmation SOP creation\"\r\n                  text=\"Are you sure do you want to link these activities to the job : {{job.job_code}} ?\"\r\n                  (success)=\"onSubmit($event)\"\r\n                  [isLinkActive]=false\r\n                  link=\"job-list\">\r\n</app-confirmation>\r\n\r\n<!-- Modal warning -->\r\n<app-warning title=\"Exit\"\r\n             text=\"Are you sure you want to go back to the JOB list ?\"\r\n             [isLink]=true\r\n             link=\"job-list\">\r\n</app-warning>\r\n"

/***/ }),

/***/ "./src/app/component/job-list/job-creation/job-creation.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/component/job-list/job-creation/job-creation.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\n  padding-bottom: 6% !important; }\n"

/***/ }),

/***/ "./src/app/component/job-list/job-creation/job-creation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/job-list/job-creation/job-creation.component.ts ***!
  \***************************************************************************/
/*! exports provided: JobCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCreationComponent", function() { return JobCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_job_job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../objects/job/job */ "./src/app/objects/job/job.ts");
/* harmony import */ var _objects_job_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../objects/job/job.service */ "./src/app/objects/job/job.service.ts");
/* harmony import */ var _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../objects/sop/sop.service */ "./src/app/objects/sop/sop.service.ts");
/* harmony import */ var _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../objects/activity/activity.service */ "./src/app/objects/activity/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobCreationComponent = /** @class */ (function () {
    function JobCreationComponent(_jobService, _sopService, _activityService, router) {
        this._jobService = _jobService;
        this._sopService = _sopService;
        this._activityService = _activityService;
        this.router = router;
        /* ----- Data ----- */
        this.errorMessage = "";
        this.job = new _objects_job_job__WEBPACK_IMPORTED_MODULE_1__["Job"]();
    }
    JobCreationComponent.prototype.ngOnInit = function () {
        this.sop_id = this._sopService.getSopIdLocal();
        this.job.job_id = this._jobService.getJobIdLocal();
        this.loadActivity();
        this.selectJob(this.job.job_id);
        this.loadChekedActivities();
    };
    JobCreationComponent.prototype.onSubmit = function () {
        var _this = this;
        var elements = document.querySelectorAll(".form-check-input");
        var sub_id;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i]['checked'] == true) {
                sub_id = elements[i].id;
                this._jobService.bind_job_activity(this.job.job_id, sub_id).subscribe(function (res) {
                    _this.errorMessage = "";
                    _this.router.navigate(['/job-list']);
                }, function (error) {
                    _this.errorMessage = error.error.message;
                });
                ;
            }
        }
    };
    JobCreationComponent.prototype.loadChekedActivities = function () {
        var _this = this;
        this._activityService.selectAllFromJob(this.job.job_id).subscribe(function (res) {
            _this.errorMessage = "";
            var picks = document.querySelectorAll(".form-check-input");
            var activities = res['data'];
            console.log(activities);
            for (var i = 0; i < picks.length; i++) {
                for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
                    var a = activities_1[_i];
                    if (a['activity_id'] == picks[i]['id']) {
                        picks[i]['checked'] = true;
                    }
                }
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    JobCreationComponent.prototype.loadActivity = function () {
        var _this = this;
        this.activities = [];
        this.sub_activities = [[]];
        this._activityService.selectAllFromSop(this.sop_id).subscribe(function (res) {
            _this.errorMessage = "";
            for (var _i = 0, _a = res['data']; _i < _a.length; _i++) {
                var element = _a[_i];
                var activity = element;
                if (activity.activity_id_is_father == null || activity.activity_id_is_father == "") {
                    _this.activities.push(activity);
                    _this.sub_activities.push([]);
                }
            }
            console.log(_this.activities);
            for (var _b = 0, _c = res['data']; _b < _c.length; _b++) {
                var element = _c[_b];
                var activity = element;
                if (activity.activity_id_is_father != null || activity.activity_id_is_father != "") {
                    var i = 0;
                    while (i < _this.activities.length && _this.activities[i].activity_id != element.activity_id_is_father) {
                        i++;
                    }
                    if (i < _this.activities.length) {
                        _this.sub_activities[i].push(activity);
                    }
                }
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    JobCreationComponent.prototype.selectJob = function (job_id) {
        var _this = this;
        this._jobService.select(job_id).subscribe(function (res) {
            _this.errorMessage = "";
            _this.job = res['data'];
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    JobCreationComponent.prototype.pickActivity = function (activity) {
        var a = document.getElementById(activity.activity_id);
        var sub_a = this.sub_activities[this.activities.indexOf(activity)];
        if (a['checked']) {
            for (var _i = 0, sub_a_1 = sub_a; _i < sub_a_1.length; _i++) {
                var s = sub_a_1[_i];
                document.getElementById(s.activity_id)['checked'] = true;
            }
        }
        else {
            for (var _a = 0, sub_a_2 = sub_a; _a < sub_a_2.length; _a++) {
                var s = sub_a_2[_a];
                document.getElementById(s.activity_id)['checked'] = false;
            }
        }
    };
    JobCreationComponent.prototype.isActivityPicked = function () {
        var elements = document.querySelectorAll(".form-check-input");
        var isChecked = false;
        for (var i = 0; i < elements.length; i++) {
            console.log("Let's check");
            if (elements[i]['checked'] == true) {
                isChecked = true;
            }
        }
        this.isJobChecked = isChecked;
    };
    JobCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-creation',
            template: __webpack_require__(/*! ./job-creation.component.html */ "./src/app/component/job-list/job-creation/job-creation.component.html"),
            styles: [__webpack_require__(/*! ./job-creation.component.scss */ "./src/app/component/job-list/job-creation/job-creation.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_job_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"],
            _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_3__["SopService"],
            _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], JobCreationComponent);
    return JobCreationComponent;
}());



/***/ }),

/***/ "./src/app/component/job-list/job-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/job-list/job-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- SOP List back button -->\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-danger waves-effect\" [routerLink]=\"['/sop-list']\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-times mr-3\"></i>Back</h6></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <form>\r\n          <!-- Job Title -->\r\n          <div class=\"row md-form\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <input [(ngModel)]=\"newJobTitle\" name=\"newJobTitle\" type=\"text\" id=\"newJobTitle\" class=\"form-control\">\r\n              <label for=\"newJobTitle\">Job title</label>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-success waves-effect\" type=\"button\" (click)=\"addJob()\">Add</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n        <table class=\"table table-borderless table-hover table-fixed\" id=\"sop-table\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"\">\r\n          <tr class=\"text-white\">\r\n            <th style=\"width:80%;\" ><a>Job Code</a></th>\r\n            <th class=\"text-center\" style=\"width:10%;\" ><a>Activities</a></th>\r\n            <th class=\"text-center\" style=\"width:10%;\"><a>Delete</a></th>\r\n          </tr>\r\n          </thead>\r\n          <!--Table head-->\r\n\r\n          <!--Table body-->\r\n          <tbody>\r\n          <tr *ngFor=\"let job of jobs\">\r\n            <td>{{job.job_code}}</td>\r\n            <td class=\"text-center\">\r\n              <a (click)=\"bindActivities(job.job_id)\"><i class=\"fa fa-cog text-blue\"></i></a>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <a data-toggle=\"modal\" data-target=\"#warningModal\"><i class=\"fa fa-close text-red\"></i></a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n          <!--Table body-->\r\n\r\n        </table>\r\n        <!--Table-->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal warning -->\r\n<app-warning title=\"Delete Job\"\r\n             text=\"Are you sure you want to delete the Job : from the Job list ?\"\r\n             link=\"sop-list\"\r\n             [isLink]=false>\r\n             <!--(success)=\"deleteSop(sopSelected.sop_id)\"-->\r\n\r\n</app-warning>\r\n\r\n"

/***/ }),

/***/ "./src/app/component/job-list/job-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/job-list/job-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/job-list/job-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/job-list/job-list.component.ts ***!
  \**********************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_job_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/job/job.service */ "./src/app/objects/job/job.service.ts");
/* harmony import */ var _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/sop/sop.service */ "./src/app/objects/sop/sop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobListComponent = /** @class */ (function () {
    function JobListComponent(_jobService, _sopService, router) {
        this._jobService = _jobService;
        this._sopService = _sopService;
        this.router = router;
        this.errorMessage = "";
        this.newJobTitle = "";
    }
    JobListComponent.prototype.ngOnInit = function () {
        this.sop_id = this._sopService.getSopIdLocal();
        this._jobService.removeJobIdLocal();
        this.loadJobs();
    };
    JobListComponent.prototype.loadJobs = function () {
        var _this = this;
        this.jobs = [];
        this._jobService.selectAllFromSop(this.sop_id).subscribe(function (res) {
            _this.errorMessage = "";
            for (var _i = 0, _a = res['data']; _i < _a.length; _i++) {
                var element = _a[_i];
                var job = element;
                _this.jobs.push(job);
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    JobListComponent.prototype.addJob = function () {
        var _this = this;
        this._jobService.createJob(this.newJobTitle, this.newJobTitle, this.sop_id).subscribe(function (res) {
            _this.errorMessage = "";
            _this.loadJobs();
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    JobListComponent.prototype.bindActivities = function (job_id) {
        //We store this id in the local storage to re-use it for the activities binding
        localStorage.setItem('Job_id', job_id);
        this.router.navigate(['/', 'job-creation']);
    };
    JobListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-list',
            template: __webpack_require__(/*! ./job-list.component.html */ "./src/app/component/job-list/job-list.component.html"),
            styles: [__webpack_require__(/*! ./job-list.component.scss */ "./src/app/component/job-list/job-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_job_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"],
            _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_2__["SopService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JobListComponent);
    return JobListComponent;
}());



/***/ }),

/***/ "./src/app/component/job-list/job/job.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/job-list/job/job.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  job works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/job-list/job/job.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/component/job-list/job/job.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/job-list/job/job.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/job-list/job/job.component.ts ***!
  \*********************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobComponent = /** @class */ (function () {
    function JobComponent() {
    }
    JobComponent.prototype.ngOnInit = function () {
    };
    JobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/component/job-list/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.scss */ "./src/app/component/job-list/job/job.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/component/organization-management/organization-management.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/component/organization-management/organization-management.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!displayEnd\">\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col-10 col-sm-8 col-md-6 col-xl-4 card\" style=\"padding-top: 10px;\">\r\n      <p class=\"h4 text-center mb-4\">Organization management</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\" style=\"margin-top: 10px;\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col-10 col-sm-8 col-md-6 col-xl-4 card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <!-- Material form register -->\r\n        <form>\r\n\r\n          <!-- First step of the form -->\r\n\r\n          <!-- Error alert -->\r\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n            {{errorMessage}}\r\n          </div>\r\n\r\n          <!-- Second step of the form -->\r\n          <div class=\"form-group\">\r\n\r\n            <!-- Organisation -->\r\n            <div class=\"md-form\">\r\n              <select [(ngModel)]=\"organisationChoosen\" name=\"organisation\" class=\"form-control mdb-select\" (change)=\"enableBranch()\" >\r\n                <option value=\"\" disabled selected>Choose organisation</option>\r\n                <option *ngFor=\"let orga of organisations\" [ngValue]=orga.organisation_id>{{orga.organisation_name}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <!-- Branch -->\r\n            <div class=\"md-form\" *ngIf=\"organisationChoosen\">\r\n              <select [(ngModel)]=\"branchChoosen\" name=\"branch\" class=\"form-control\" [disabled]=\"!branchEnabled\" (change)=\"enableDepartment()\" >\r\n                <option value=\"\" disabled selected>Choose a branch</option>\r\n                <option *ngFor=\"let branch of branchs\" [ngValue]=branch.branch_id>{{branch.branch_name}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <!-- Department -->\r\n            <div class=\"md-form\" *ngIf=\"branchChoosen\">\r\n              <select [(ngModel)]=\"departmentChoosen\" name=\"department\" class=\"form-control mdb-select\" [disabled]=\"!departmentEnabled\" (change)=\"enableSubDepartment()\" >\r\n                <option value=\"\" disabled selected>Choose department</option>\r\n                <option *ngFor=\"let department of departments\" [ngValue]=department.department_id>{{department.department_name}}</option>\r\n\r\n              </select>\r\n            </div>\r\n\r\n            <!-- SubDepartment -->\r\n            <div class=\"md-form\" *ngIf=\"departmentChoosen\">\r\n              <select [(ngModel)]=\"subDepartmentChoosen\" name=\"subDepartment\" class=\"form-control mdb-select\" [disabled]=\"!subDepartmentEnabled\" >\r\n                <option value=\"\" disabled selected>Choose sub-department</option>\r\n                <option *ngFor=\"let subDepartment of subDepartments\" [ngValue]=subDepartment.sub_department_id>{{subDepartment.sub_department_name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"text-center mt-4\">\r\n            <div class=\"md-form\">\r\n              <a class=\"btn btn-danger\" (click)=\"deleteOrganization()\" *ngIf=\"organisationChoosen && !branchChoosen\">Delete this organization</a>\r\n              <a class=\"btn btn-danger\" (click)=\"deleteBranch()\" *ngIf=\"branchChoosen && !departmentChoosen\">Delete this branch</a>\r\n              <a class=\"btn btn-danger\" (click)=\"deletedepartment()\" *ngIf=\"departmentChoosen && !subDepartmentChoosen\">Delete this department</a>\r\n              <a class=\"btn btn-danger\" (click)=\"deleteSubDepartment()\" *ngIf=\"subDepartmentChoosen\">Delete this sub department</a>\r\n            </div>\r\n            <div class=\"md-form\">\r\n              <input [(ngModel)]=\"addInput\" name=\"addInput\" type=\"text\" id=\"addInput\" class=\"form-control\">\r\n              <label *ngIf=\"!organisationChoosen\" for=\"addInput\">New Organization name</label>\r\n              <label *ngIf=\"organisationChoosen && !branchChoosen\" for=\"addInput\">New Branch name</label>\r\n              <label *ngIf=\"branchChoosen && !departmentChoosen\" for=\"addInput\">New Department name</label>\r\n              <label *ngIf=\"departmentChoosen && !subDepartmentChoosen\" for=\"addInput\">New Sub department name</label>\r\n            </div>\r\n            <div class=\"md-form\">\r\n              <a class=\"btn btn-success\" (click)=\"addOrganization()\" *ngIf=\"!organisationChoosen\">Add a new organization</a>\r\n              <a class=\"btn btn-success\" (click)=\"addBranch()\" *ngIf=\"organisationChoosen && !branchChoosen\">Add a new branch</a>\r\n              <a class=\"btn btn-success\" (click)=\"addDepartment()\" *ngIf=\"branchChoosen && !departmentChoosen\">Add a new department</a>\r\n              <a class=\"btn btn-success\" (click)=\"addSubDepartment()\" *ngIf=\"departmentChoosen && !subDepartmentChoosen\">Add a new sub department</a>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n        <!-- Material form register -->\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"displayEnd\" class=\"container\">\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col-10 col-sm-8 col-md-6 col-xl-4 card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <p class=\"h4 text-center mb-4\" >{{title}}</p>\r\n\r\n\r\n        <p class=\"text-center mb-4\">\r\n          {{text}}\r\n        </p>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <a class=\"btn btn-default\" (click)=\"goBack()\" >go Back</a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/organization-management/organization-management.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/component/organization-management/organization-management.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/organization-management/organization-management.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/organization-management/organization-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OrganizationManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationManagementComponent", function() { return OrganizationManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objects_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/organisation/organisation.service */ "./src/app/objects/organisation/organisation.service.ts");
/* harmony import */ var _objects_branch_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objects/branch/branch.service */ "./src/app/objects/branch/branch.service.ts");
/* harmony import */ var _objects_department_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../objects/department/department.service */ "./src/app/objects/department/department.service.ts");
/* harmony import */ var _objects_sub_department_sub_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../objects/sub_department/sub-department.service */ "./src/app/objects/sub_department/sub-department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var OrganizationManagementComponent = /** @class */ (function () {
    function OrganizationManagementComponent(_organisationService, _branchService, _departmentService, _subDepartmentService, router) {
        this._organisationService = _organisationService;
        this._branchService = _branchService;
        this._departmentService = _departmentService;
        this._subDepartmentService = _subDepartmentService;
        this.router = router;
        this.branchEnabled = false;
        this.departmentEnabled = false;
        this.subDepartmentEnabled = false;
        this.organisationChoosen = "";
        this.branchChoosen = "";
        this.departmentChoosen = "";
        this.subDepartmentChoosen = "";
        this.addInput = "";
        this.errorMessage = "";
        this.displayEnd = false;
    }
    OrganizationManagementComponent.prototype.ngOnInit = function () {
        this.getOrganisations();
    };
    OrganizationManagementComponent.prototype.getOrganisations = function () {
        var _this = this;
        this._organisationService.selectAll()
            .subscribe(function (res) {
            console.log(res['data']);
            _this.organisations = res['data'];
        }, function (error) {
            console.log("ERREUR : ", error);
        });
    };
    // Select fields authorizations
    OrganizationManagementComponent.prototype.enableBranch = function () {
        var _this = this;
        if (this.organisationChoosen != "") {
            this._branchService.selectAllFromOrganisation(this.organisationChoosen)
                .subscribe(function (res) {
                _this.branchs = res['data'];
                _this.branchEnabled = true;
                _this.errorMessage = "";
            }, function (error) {
                _this.errorMessage = error.error.message;
            });
        }
        this.branchChoosen = "";
        this.departmentChoosen = "";
        this.subDepartmentChoosen = "";
    };
    OrganizationManagementComponent.prototype.enableDepartment = function () {
        var _this = this;
        if (this.branchChoosen != "") {
            if (this.branchChoosen != 'blank') {
                this._departmentService.selectAllFromBranch(this.branchChoosen)
                    .subscribe(function (res) {
                    console.log(res['data']);
                    _this.departments = res['data'];
                    _this.departmentEnabled = true;
                    _this.errorMessage = "";
                }, function (error) {
                    _this.errorMessage = error.error.message;
                    _this.departmentEnabled = false;
                    _this.subDepartmentEnabled = false;
                    _this.departmentChoosen = "blank";
                    _this.subDepartmentChoosen = "blank";
                });
            }
            else {
                this.departmentEnabled = false;
                this.subDepartmentEnabled = false;
                this.departmentChoosen = "blank";
                this.subDepartmentChoosen = "blank";
            }
        }
        this.departmentChoosen = "";
        this.subDepartmentChoosen = "";
    };
    OrganizationManagementComponent.prototype.enableSubDepartment = function () {
        var _this = this;
        if (this.departmentChoosen != "") {
            if (this.departmentChoosen != "blank") {
                this._subDepartmentService.selectAllFromDepartment(this.departmentChoosen)
                    .subscribe(function (res) {
                    console.log(res['data']);
                    _this.subDepartments = res['data'];
                    _this.subDepartmentEnabled = true;
                    _this.errorMessage = "";
                }, function (error) {
                    _this.errorMessage = error.error.message;
                    _this.subDepartmentEnabled = false;
                    _this.subDepartmentChoosen = "blank";
                });
            }
            else {
                this.subDepartmentEnabled = false;
                this.subDepartmentChoosen = "blank";
            }
        }
        this.subDepartmentChoosen = "";
    };
    OrganizationManagementComponent.prototype.goBack = function () {
        this.title = "";
        this.text = "";
        this.displayEnd = false;
    };
    OrganizationManagementComponent.prototype.reloadForm = function () {
        this.getOrganisations();
        this.organisationChoosen = "";
        this.branchChoosen = "";
        this.departmentChoosen = "";
        this.subDepartmentChoosen = "";
        this.addInput = "";
    };
    OrganizationManagementComponent.prototype.addOrganization = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.addInput == "")) return [3 /*break*/, 1];
                        this.errorMessage = "Organization label invalid.";
                        return [3 /*break*/, 3];
                    case 1: 
                    //adding organisation
                    return [4 /*yield*/, this.newOrganization()];
                    case 2:
                        //adding organisation
                        _a.sent();
                        this.reloadForm();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.newOrganization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._organisationService.add(this.addInput)
                            .subscribe(function (res) {
                            _this.newBranch(res['data']['organisation_id'], "No branch");
                            _this.title = "Succes";
                            _this.text = "The organization has been added";
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        }, function (error) {
                            _this.title = "ERROR";
                            _this.text = error.error.message;
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.addBranch = function () {
        if (this.addInput == "") {
            this.errorMessage = "Branch label invalid.";
        }
        else if (this.organisationChoosen == "") {
            this.errorMessage = "Choose a organisation to add a new branch";
        }
        else {
            //adding organisation
            this.newBranch(this.organisationChoosen, this.addInput);
            this.reloadForm();
        }
    };
    OrganizationManagementComponent.prototype.newBranch = function (organizationId, input) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._branchService.add(input, organizationId)
                            .subscribe(function (res) {
                            _this.newDepartment(res['data']['branch_id'], "No department");
                            _this.title = "Succes";
                            _this.text = "The branch has been added";
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        }, function (error) {
                            _this.title = "ERROR";
                            _this.text = error.error.message;
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.addDepartment = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.addInput == "")) return [3 /*break*/, 1];
                        this.errorMessage = "Department label invalid.";
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.branchChoosen == "")) return [3 /*break*/, 2];
                        this.errorMessage = "Choose a branch to add a new department";
                        return [3 /*break*/, 4];
                    case 2: 
                    //adding organisation
                    return [4 /*yield*/, this.newDepartment(this.branchChoosen, this.addInput)];
                    case 3:
                        //adding organisation
                        _a.sent();
                        this.reloadForm();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.newDepartment = function (branchId, input) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._departmentService.add(input, branchId)
                            .subscribe(function (res) {
                            _this.newSubDepartment(res['data']['department_id'], "No sub department");
                            _this.title = "Succes";
                            _this.text = "The department has been added";
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        }, function (error) {
                            _this.title = "ERROR";
                            _this.text = error.error.message;
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.addSubDepartment = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.addInput == "")) return [3 /*break*/, 1];
                        this.errorMessage = "Sub department label invalid.";
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.departmentChoosen == "")) return [3 /*break*/, 2];
                        this.errorMessage = "Choose a department to add a new sub department";
                        return [3 /*break*/, 4];
                    case 2: 
                    //adding organisation
                    return [4 /*yield*/, this.newSubDepartment(this.departmentChoosen, this.addInput)];
                    case 3:
                        //adding organisation
                        _a.sent();
                        this.reloadForm();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.newSubDepartment = function (departmentId, input) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._subDepartmentService.add(input, departmentId)
                            .subscribe(function (res) {
                            _this.title = "Succes";
                            _this.text = "The sub department has been added";
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        }, function (error) {
                            _this.title = "ERROR";
                            _this.text = error.error.message;
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.deleteOrganization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._organisationService.delete(this.organisationChoosen)
                            .subscribe(function (res) {
                            _this.title = "Succes";
                            _this.text = "The organization has been deleted";
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                            _this.reloadForm();
                        }, function (error) {
                            _this.title = "ERROR";
                            _this.text = error.error.message;
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.deleteBranch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._branchService.delete(this.branchChoosen)
                            .subscribe(function (res) {
                            _this.title = "Succes";
                            _this.text = "The branch has been deleted";
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                            _this.reloadForm();
                        }, function (error) {
                            _this.title = "ERROR";
                            _this.text = error.error.message;
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.deleteDepartment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._departmentService.delete(this.departmentChoosen)
                            .subscribe(function (res) {
                            _this.title = "Succes";
                            _this.text = "The department has been deleted";
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                            _this.reloadForm();
                        }, function (error) {
                            _this.title = "ERROR";
                            _this.text = error.error.message;
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent.prototype.deleteSubDepartment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._subDepartmentService.delete(this.subDepartmentChoosen)
                            .subscribe(function (res) {
                            _this.title = "Succes";
                            _this.text = "The sub department has been deleted";
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                            _this.reloadForm();
                        }, function (error) {
                            _this.title = "ERROR";
                            _this.text = error.error.message;
                            _this.errorMessage = "";
                            _this.displayEnd = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-management',
            template: __webpack_require__(/*! ./organization-management.component.html */ "./src/app/component/organization-management/organization-management.component.html"),
            styles: [__webpack_require__(/*! ./organization-management.component.scss */ "./src/app/component/organization-management/organization-management.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"],
            _objects_branch_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"],
            _objects_department_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"],
            _objects_sub_department_sub_department_service__WEBPACK_IMPORTED_MODULE_5__["SubDepartmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrganizationManagementComponent);
    return OrganizationManagementComponent;
}());



/***/ }),

/***/ "./src/app/component/performance-project/performance-project.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-project.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/performance-project/performance-project.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-project.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row row-first\">\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n        Global vue\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"padding: 20px;\">\r\n    <div class=\"col-sm-12 col-lg-6\" style=\"height: 350px\">\r\n      <p>You are <span class=\"red-text\">Late</span> of 2 days</p>\r\n    </div>\r\n    <div class=\"col-sm-12 col-lg-6 \">\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row row-first\">\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n        Tasks\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\" style=\"margin-top: 20px\">\r\n\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n        <table class=\"table\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"\">\r\n          <tr class=\"text-white\">\r\n            <th>No</th>\r\n            <th>Work</th>\r\n            <th>Output</th>\r\n            <th>Target duration</th>\r\n            <th>Target date</th>\r\n          </tr>\r\n          </thead>\r\n          <!--Table head-->\r\n\r\n          <!--Table body-->\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Create document</td>\r\n            <td>1 document</td>\r\n            <td>1/2 day</td>\r\n            <td>18/05/2018</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Create document</td>\r\n            <td>1 document</td>\r\n            <td>1/2 day</td>\r\n            <td>18/05/2018</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Create document</td>\r\n            <td>1 document</td>\r\n            <td>1/2 day</td>\r\n            <td>18/05/2018</td>\r\n          </tr>\r\n          </tbody>\r\n          <!--Table body-->\r\n\r\n        </table>\r\n        <!--Table-->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/performance-project/performance-project.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-project.component.ts ***!
  \********************************************************************************/
/*! exports provided: PerformanceProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceProjectComponent", function() { return PerformanceProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerformanceProjectComponent = /** @class */ (function () {
    function PerformanceProjectComponent() {
    }
    PerformanceProjectComponent.prototype.ngOnInit = function () {
    };
    PerformanceProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-project',
            template: __webpack_require__(/*! ./performance-project.component.html */ "./src/app/component/performance-project/performance-project.component.html"),
            styles: [__webpack_require__(/*! ./performance-project.component.css */ "./src/app/component/performance-project/performance-project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerformanceProjectComponent);
    return PerformanceProjectComponent;
}());



/***/ }),

/***/ "./src/app/component/performance-project/performance-report/performance-report.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-report/performance-report.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/performance-project/performance-report/performance-report.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-report/performance-report.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  performance-report works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/performance-project/performance-report/performance-report.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-report/performance-report.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PerformanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceReportComponent", function() { return PerformanceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerformanceReportComponent = /** @class */ (function () {
    function PerformanceReportComponent() {
    }
    PerformanceReportComponent.prototype.ngOnInit = function () {
    };
    PerformanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-report',
            template: __webpack_require__(/*! ./performance-report.component.html */ "./src/app/component/performance-project/performance-report/performance-report.component.html"),
            styles: [__webpack_require__(/*! ./performance-report.component.css */ "./src/app/component/performance-project/performance-report/performance-report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerformanceReportComponent);
    return PerformanceReportComponent;
}());



/***/ }),

/***/ "./src/app/component/performance-project/performance-target/performance-target.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-target/performance-target.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/performance-project/performance-target/performance-target.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-target/performance-target.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  performance-target works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/performance-project/performance-target/performance-target.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/component/performance-project/performance-target/performance-target.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PerformanceTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceTargetComponent", function() { return PerformanceTargetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerformanceTargetComponent = /** @class */ (function () {
    function PerformanceTargetComponent() {
    }
    PerformanceTargetComponent.prototype.ngOnInit = function () {
    };
    PerformanceTargetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-target',
            template: __webpack_require__(/*! ./performance-target.component.html */ "./src/app/component/performance-project/performance-target/performance-target.component.html"),
            styles: [__webpack_require__(/*! ./performance-target.component.css */ "./src/app/component/performance-project/performance-target/performance-target.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerformanceTargetComponent);
    return PerformanceTargetComponent;
}());



/***/ }),

/***/ "./src/app/component/project-list/project-creation/project-creation.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/project-list/project-creation/project-creation.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- SOP List back button -->\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-danger waves-effect\" data-toggle=\"modal\" data-target=\"#warningModal\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-times mr-3\"></i>Back</h6></button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Project Form -->\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <p class=\"card-title h4 text-center mb-4\">Project Creation</p>\r\n\r\n        <!-- Form -->\r\n        <form (ngSubmit)=\"onSubmit()\">\r\n\r\n          <!-- SOP Model -->\r\n          <div [hidden]=\"stepSelected != 0\">\r\n            <div class=\"row md-form\">\r\n\r\n              <div class=\"offset-2 col-8\">\r\n                <p class=\"text-center mb-4 text-description\"> Please select a SOP model to begin your project </p>\r\n                <select [(ngModel)]=\"sop_id_selected\" name=\"sop_id_selected\" (click)=\"loadJobsFromSop(); loadUnitsFromSop();\" class=\"form-control\" multiple>\r\n                  <option value=\"\" disabled selected>Choose your model</option>\r\n                  <option *ngFor=\"let sop of sops\" value=\"{{sop.sop_id}}\">{{sop.sop_title}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row justify-content-center\">\r\n              <div>\r\n                <button [disabled]=\"sop_id_selected == null\" class=\"btn btn-primary waves-effect\" type=\"button\" (click)=\"changeStep(true)\">Next</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Project name -->\r\n          <div [hidden]=\"stepSelected != 1\">\r\n            <div class=\"row md-form\">\r\n              <p class=\"col-12 text-center mb-4 text-description\"> Please choose a project name </p>\r\n              <div class=\"offset-2 col-8\">\r\n                <input [(ngModel)]=\"new_project_title\" name=\"new_project_title\" type=\"text\" id=\"newTitle\" class=\"form-control\">\r\n                <label for=\"newTitle\">Project name</label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row md-form\">\r\n              <p class=\"col-12 text-center mb-4 text-description\"> Project date start </p>\r\n              <div class=\"offset-2 col-8\">\r\n                <input [ngModel]=\"new_project_start | date:'yyyy-MM-dd'\" [(ngModel)]=\"new_project_start\" name=\"new_project_start\" type=\"date\" id=\"new_project_start\" class=\"form-control\" (click)=\"see()\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row md-form\">\r\n              <p class=\"col-12 text-center mb-4 text-description\"> Project date start </p>\r\n              <div class=\"offset-2 col-8\">\r\n                <input [ngModel]=\"new_project_end | date:'yyyy-MM-dd'\" [(ngModel)]=\"new_project_end\" name=\"new_project_end\" type=\"date\" id=\"new_project_end\" class=\"form-control\" (click)=\"see()\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row justify-content-center\">\r\n              <div>\r\n                <button class=\"btn btn-danger waves-effect\" type=\"button\" (click)=\"changeStep(false)\">Back</button>\r\n              </div>\r\n              <div>\r\n                <button [disabled]=\"new_project_title == ''\" class=\"btn btn-primary waves-effect\" type=\"button\" (click)=\"changeStep(true)\">Next</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Job selection -->\r\n          <div [hidden]=\"stepSelected != 2\">\r\n\r\n            <div class=\"row md-form\">\r\n              <p class=\"col-12 text-center mb-4 text-description\"> Please choose one or more jobs </p>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div class=\"card-body card-body-cascade\">\r\n\r\n                  <!--Table-->\r\n                  <table class=\"table table-borderless table-hover table-fixed\" id=\"job-table\">\r\n\r\n                    <!--Table head-->\r\n                    <thead class=\"\">\r\n                    <tr class=\"text-white\">\r\n                      <th style=\"width:10%\">Selected</th>\r\n                      <th style=\"width:40%;\" ><a>Job Code</a></th>\r\n                      <th style=\"width:40%;\" ><a>Job Name</a></th>\r\n                      <th class=\"text-center\" style=\"width:10%;\" ><a>Activities</a></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <!--Table head-->\r\n\r\n                    <!--Table body-->\r\n                    <tbody>\r\n                    <tr *ngFor=\"let job of jobs\">\r\n                      <td class=\"text-center\">\r\n                        <input type=\"checkbox\" class=\"form-check-input\" (click)=\"pickJob(job)\" id=\"{{job.job_id}}\">\r\n                      </td>\r\n                      <td>{{job.job_code}}</td>\r\n                      <td>{{job.job_name}}</td>\r\n                      <td class=\"text-center\">\r\n                        <a><i class=\"fa fa-eye text-blue\"></i></a>\r\n                      </td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <!--Table body-->\r\n\r\n                  </table>\r\n                  <!--Table-->\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row justify-content-center\">\r\n              <div>\r\n                <button class=\"btn btn-danger waves-effect\" type=\"button\" (click)=\"changeStep(false)\">Back</button>\r\n              </div>\r\n              <div>\r\n                <button [disabled]=\"jobs_selected.length == 0\" class=\"btn btn-primary waves-effect\" type=\"button\" (click)=\"changeStep(true)\">Next</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Job selection -->\r\n\r\n          <!-- Unit affectation -->\r\n          <div [hidden]=\"stepSelected != 3\">\r\n            <div class=\"row md-form\">\r\n              <div class=\"offset-2 col-8\">\r\n                <p class=\"text-center mb-4 text-description\"> Choose an unit and pick members you want to add into </p>\r\n                <select name=\"unit_id_selected\" class=\"form-control\" multiple>\r\n                  <option value=\"\" disabled selected>Choose an unit</option>\r\n                  <option *ngFor=\"let unit of units\" (click)=\"pickUnit(unit); \" value=\"{{unit.unit_id}}\">{{unit.unit_name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row md-form\">\r\n              <div class=\"offset-2 col-8\">\r\n                <select [(ngModel)]=\"member_selected\" name=\"member_selected\" class=\"form-control\" multiple>\r\n                  <option value=\"\" disabled selected>Add a member to the selected unit</option>\r\n                  <option *ngFor=\"let member of members\" (click)=\"pickMember(member); \">{{member.member_name}} {{member.member_first_name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row justify-content-center\">\r\n              <div>\r\n                <button class=\"btn btn-danger waves-effect\" type=\"button\" (click)=\"changeStep(false)\">Back</button>\r\n              </div>\r\n              <div>\r\n                <button class=\"btn btn-success waves-effect\" type=\"button\" data-toggle=\"modal\" data-target=\"#confirmationModal\">Finish</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Unit affectation -->\r\n\r\n        </form>\r\n        <!-- Form -->\r\n\r\n      </div>\r\n      <!-- Card content -->\r\n\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n  <!-- Project Form -->\r\n\r\n\r\n  <!--Title of the unit-->\r\n  <div class=\"row row-first\" [hidden]=\"stepSelected != 3\" >\r\n    <h4>\r\n      <span class=\"badge badge-pill badge-primary\" *ngIf=\"unit_selected != null\">{{unit_selected.unit_name}}</span>\r\n    </h4>\r\n    <!-- Error alert -->\r\n    <div *ngIf=\"errorMessage\" class=\"col offset-2 row justify-content-end error-text\">\r\n      <i>{{errorMessage}}</i>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Member Unit Binding Display -->\r\n  <div class=\"row row-last justify-content-center\" [hidden]=\"stepSelected != 3\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <table class=\"table table-borderless table-hover table-fixed\" id=\"member-table\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"\">\r\n          <tr class=\"text-white\" *ngIf=\"unit_selected != null\">\r\n            <th style=\"width:40%;\"  (click)=\"sortTable(0)\"><a>Last Name</a></th>\r\n            <th style=\"width:40%;\" (click)=\"sortTable(1)\"><a>First Name</a></th>\r\n            <th style=\"width:10%;\">Remove</th>\r\n          </tr>\r\n\r\n          <tbody *ngIf=\"unit_selected != null\">\r\n\r\n          <tr *ngFor=\"let member of members_binded[units.indexOf(unit_selected)]\">\r\n            <td>{{member.member_name}}</td>\r\n            <td>{{member.member_first_name}}</td>\r\n            <td>\r\n              <a (click)=\"removeMember(member)\"><i class=\"fa fa-close text-red\"></i></a>\r\n            </td>\r\n          </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <!-- Card content -->\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n  <!-- Activity Display -->\r\n\r\n\r\n\r\n</div>\r\n\r\n<!-- Modal warning -->\r\n<app-warning title=\"Exit\"\r\n                  text=\"Are you sure you want to exit ? All your work will be lost.\"\r\n                  [isLink]=true\r\n                  link=\"project-list\">\r\n</app-warning>\r\n\r\n<!-- Modal confirmation -->\r\n<app-confirmation title=\"Confirmation Project creation\"\r\n                  text=\"Are you sure all informations about this project are correct ?\"\r\n                  (success)=\"onSubmit()\"\r\n                  [isLinkActive]=false\r\n                  link=\"project-creation\">\r\n</app-confirmation>\r\n"

/***/ }),

/***/ "./src/app/component/project-list/project-creation/project-creation.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/project-list/project-creation/project-creation.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/project-list/project-creation/project-creation.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/component/project-list/project-creation/project-creation.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProjectCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreationComponent", function() { return ProjectCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../objects/sop/sop.service */ "./src/app/objects/sop/sop.service.ts");
/* harmony import */ var _objects_job_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../objects/job/job.service */ "./src/app/objects/job/job.service.ts");
/* harmony import */ var _objects_unit_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../objects/unit/unit.service */ "./src/app/objects/unit/unit.service.ts");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../objects/activity/activity.service */ "./src/app/objects/activity/activity.service.ts");
/* harmony import */ var _objects_project_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../objects/project/project.service */ "./src/app/objects/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProjectCreationComponent = /** @class */ (function () {
    function ProjectCreationComponent(_sopService, _jobService, _unitService, _memberService, _activityService, _projectService, router) {
        this._sopService = _sopService;
        this._jobService = _jobService;
        this._unitService = _unitService;
        this._memberService = _memberService;
        this._activityService = _activityService;
        this._projectService = _projectService;
        this.router = router;
        /* ----- Data ----- */
        this.errorMessage = "";
        this.jobs_selected = [];
        this.new_project_title = "";
        this.new_project_id = "";
    }
    ProjectCreationComponent.prototype.ngOnInit = function () {
        this.new_project_start = new Date();
        this.new_project_end = new Date();
        this.new_project_end.setDate(this.new_project_end.getDate() + 30);
        this.stepSelected = 0;
        this.loadSops();
        this.loadMembers();
    };
    ProjectCreationComponent.prototype.onSubmit = function () {
        var _this = this;
        //We insert the project into the database (project_code & project_work_code to modify!)
        var project_code = "XXXXX";
        var project_work_code = "000000";
        var sub_department_id = "";
        //We find the id of the sub_department by checking the member
        this._memberService.select(localStorage.getItem('Id'))
            .subscribe(function (res) {
            _this.errorMessage = "";
            sub_department_id = res['data']['sub_department_id'];
            //We insert the project
            _this._projectService.createProject(_this.new_project_title, project_code, project_work_code, _this.new_project_start, _this.new_project_end, sub_department_id)
                .subscribe(function (res) {
                _this.errorMessage = "";
                _this.new_project_id = res['data']['project_id'];
                //We have the project id, now we can insert into project_has_job
                for (var _i = 0, _a = _this.jobs_selected; _i < _a.length; _i++) {
                    var j = _a[_i];
                    _this._projectService.bindProjectJob(_this.new_project_id, j.job_id)
                        .subscribe(function (res) {
                        _this.errorMessage = "";
                    }, function (error) {
                        _this.errorMessage = error;
                    });
                }
                //We have the project id, now we can insert in member_unit_project and member_activity_project
                _this.bindMemberUnitProject();
                _this.router.navigate(['/project-list']);
            }, function (error) {
                _this.errorMessage = error;
            });
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ProjectCreationComponent.prototype.bindMemberUnitProject = function () {
        var _this = this;
        this.member_unit_project = [];
        for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
            var u = _a[_i];
            var i = this.units.indexOf(u);
            if (this.members_binded[i].length > 0) {
                for (var _b = 0, _c = this.members_binded[i]; _b < _c.length; _b++) {
                    var m = _c[_b];
                    this._projectService.bindMemberUnitProject(this.new_project_id, u.unit_id, m.member_id.toString())
                        .subscribe(function (res) {
                        _this.errorMessage = "";
                        _this.member_unit_project.push(res['data']);
                        _this.bindMemberActivityProject(res['data']['member_id'], res['data']['unit_id']);
                    }, function (error) {
                        _this.errorMessage = error.error.message;
                    });
                }
            }
        }
    };
    //We insert into the database : member_activity_project
    ProjectCreationComponent.prototype.bindMemberActivityProject = function (member_id, unit_id) {
        var _this = this;
        //First we load all activities of the unit of the member choosen
        this._activityService.selectAllFromUnit(unit_id).subscribe(function (res) {
            _this.errorMessage = "";
            _this.activities_from_unit = res['data'];
            //For each activities we insert into the database member_activity_project
            for (var _i = 0, _a = _this.activities_from_unit; _i < _a.length; _i++) {
                var a = _a[_i];
                var target_date = new Date();
                _this._projectService.bindMemberActivityProject(_this.new_project_id, member_id, a.activity_id, target_date, _this.new_project_start, "", null, "", "", 0, 0, 0)
                    .subscribe(function (res) {
                    _this.errorMessage = "";
                }, function (error) {
                    _this.errorMessage = error;
                });
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ProjectCreationComponent.prototype.loadSops = function () {
        var _this = this;
        this.sops = [];
        this._sopService.selectAll()
            .subscribe(function (res) {
            _this.errorMessage = "";
            _this.sops = res['data'];
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ProjectCreationComponent.prototype.loadJobsFromSop = function () {
        var _this = this;
        this.jobs = [];
        this._jobService.selectAllFromSop(this.sop_id_selected).subscribe(function (res) {
            _this.errorMessage = "";
            _this.jobs = res['data'];
            for (var _i = 0, _a = _this.jobs; _i < _a.length; _i++) {
                var i = _a[_i];
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ProjectCreationComponent.prototype.loadUnitsFromSop = function () {
        var _this = this;
        this.members_binded = [];
        this._unitService.selectAllFromSop(this.sop_id_selected).subscribe(function (res) {
            _this.errorMessage = "";
            _this.units = res['data'];
            for (var _i = 0, _a = _this.units; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.members_binded.push([]);
            }
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ProjectCreationComponent.prototype.loadMembers = function () {
        var _this = this;
        this._memberService.selectAll().subscribe(function (res) {
            _this.errorMessage = "";
            _this.members = res['data'];
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ProjectCreationComponent.prototype.pickJob = function (job) {
        var j = document.getElementById(job.job_id);
        if (j['checked']) {
            this.jobs_selected.push(job);
        }
        else {
            if (this.jobs_selected.includes(job)) {
                var indice = this.jobs_selected.indexOf(job);
                this.jobs_selected.splice(indice, 1);
            }
        }
    };
    ProjectCreationComponent.prototype.pickUnit = function (unit) {
        this.unit_selected = unit;
    };
    //add a member to the right index of the member_binded array
    ProjectCreationComponent.prototype.pickMember = function (member) {
        if (!this.members_binded[this.units.indexOf(this.unit_selected)].includes(member)) {
            this.members_binded[this.units.indexOf(this.unit_selected)].push(member);
        }
    };
    ProjectCreationComponent.prototype.removeMember = function (member) {
        var indice = this.members_binded[this.units.indexOf(this.unit_selected)].indexOf(member);
        this.members_binded[this.units.indexOf(this.unit_selected)].splice(indice, 1);
    };
    ProjectCreationComponent.prototype.changeStep = function (next) {
        if (next) {
            this.stepSelected += 1;
        }
        else {
            this.stepSelected -= 1;
        }
    };
    ProjectCreationComponent.prototype.sortTable = function (n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("member-table");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /* Loop through all table rows (except the
            first, which contains table headers): */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount++;
            }
            else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    ProjectCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-creation',
            template: __webpack_require__(/*! ./project-creation.component.html */ "./src/app/component/project-list/project-creation/project-creation.component.html"),
            styles: [__webpack_require__(/*! ./project-creation.component.scss */ "./src/app/component/project-list/project-creation/project-creation.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_1__["SopService"],
            _objects_job_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"],
            _objects_unit_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"],
            _objects_member_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"],
            _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"],
            _objects_project_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ProjectCreationComponent);
    return ProjectCreationComponent;
}());



/***/ }),

/***/ "./src/app/component/project-list/project-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/project-list/project-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-form\r\n{\r\n  margin-bottom: 20px;\r\n  margin-top: 0;\r\n}\r\n\r\n#search-bar {\r\n  margin-bottom: 0%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/project-list/project-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/project-list/project-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-default waves-effect\" [routerLink]=\"['/project-creation']\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-plus mr-3\"></i>New Project</h6></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-first justify-content-end\">\r\n    <div class=\" md-form\" id=\"search-bar\">\r\n      <input id=\"search\" (keyup)=\"search()\" class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\">\r\n\r\n  <!--Table-->\r\n    <table class=\"col-12 table table-borderless table-hover table-fixed\" id=\"project-table\">\r\n\r\n      <!--Table head-->\r\n      <thead class=\"\">\r\n      <tr class=\"text-white\">\r\n        <th style=\"width:5%;\"></th>\r\n        <th style=\"width:10%;\"  (click)=\"sortTable(1)\"><a>Code</a></th>\r\n        <th style=\"width:40%;\" (click)=\"sortTable(2)\"><a>Title</a></th>\r\n        <th style=\"width:20%;\" (click)=\"sortTable(3)\"><a>Start Date</a></th>\r\n        <th style=\"width:20%;\" (click)=\"sortTable(4)\"><a>Finished Date</a></th>\r\n        <th style=\"width:5%;\"></th>\r\n      </tr>\r\n      </thead>\r\n      <!--Table head-->\r\n\r\n      <!--Table body-->\r\n      <tbody>\r\n      <tr *ngFor=\"let project of projects\" (click)=\"selectProject(project)\">\r\n        <td scope=\"row\">\r\n          <a data-toggle=\"modal\" data-target=\"#actionModal\"><i class=\"fa fa-cog text-blue\"></i></a>\r\n        </td>\r\n        <td>{{project.project_code}}</td>\r\n        <td>{{project.project_title.substr(0,50)}}</td>\r\n        <td>{{project.project_start | date:\"MM/dd/yyyy\"}}</td>\r\n        <td>{{project.project_end | date:\"MM/dd/yyyy\"}}</td>\r\n        <td>\r\n          <a data-toggle=\"modal\" data-target=\"#warningModal\"><i class=\"fa fa-close text-red\"></i></a>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n      <!--Table body-->\r\n\r\n    </table>\r\n    <!--Table-->\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-action title={{project_selected.project_title}}\r\n            text=\"\"\r\n            buttons={{buttonsTitles}}\r\n            links={{buttonsLinks}}\r\n            [isLinkActive]=true\r\n>\r\n</app-action>\r\n\r\n<!-- Modal warning -->\r\n<app-warning title=\"Delete Project {{project_selected.project_id}}\"\r\n             text=\"Are you sure you want to delete the Project : {{project_selected.project_title}} from the project list ? All data linked will be destroyed.\"\r\n             link=\"project-list\"\r\n             (success)=\"deleteProject(project_selected.project_id)\"\r\n             [isLink]=false>\r\n</app-warning>\r\n"

/***/ }),

/***/ "./src/app/component/project-list/project-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/project-list/project-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_project_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/project/project */ "./src/app/objects/project/project.ts");
/* harmony import */ var _objects_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/project/project.service */ "./src/app/objects/project/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(_projectService) {
        this._projectService = _projectService;
        /* ----- Data ----- */
        this.errorMessage = "";
        this.project_selected = new _objects_project_project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        this.buttonsTitles = ['Set up project informations', 'Master of work', 'Set up Gantt', 'Volume Progress'];
        this.buttonsLinks = ['', '', 'gantt-creation', 'volume-progress'];
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.loadProjects();
    };
    ProjectListComponent.prototype.loadProjects = function () {
        var _this = this;
        this.projects = [];
        this._projectService.selectAll()
            .subscribe(function (res) {
            _this.errorMessage = "";
            _this.projects = res['data'];
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ProjectListComponent.prototype.sortTable = function (n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("project-table");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /* Loop through all table rows (except the
            first, which contains table headers): */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount++;
            }
            else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    ProjectListComponent.prototype.search = function () {
        // Declare variables
        var input, filter, table, tr, td, td2, i;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        table = document.getElementById("project-table");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            td2 = tr[i].getElementsByTagName("td")[2];
            if (td || td2) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    ProjectListComponent.prototype.selectProject = function (project) {
        this.project_selected = project;
        localStorage.setItem('Project_id', project.project_id);
    };
    ProjectListComponent.prototype.deleteProject = function (project_id) {
        var _this = this;
        this._projectService.delete(project_id).subscribe(function (res) {
            _this.errorMessage = "";
            _this.loadProjects();
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    ProjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/component/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.css */ "./src/app/component/project-list/project-list.component.css")]
        }),
        __metadata("design:paramtypes", [_objects_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/component/project-list/project/project.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/component/project-list/project/project.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/project-list/project/project.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/component/project-list/project/project.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/project-list/project/project.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/project-list/project/project.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/component/project-list/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/component/project-list/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/component/project-list/volume-progress/volume-progress.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/component/project-list/volume-progress/volume-progress.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!ready\">\r\n  <div class=\"row-first\">\r\n    <app-loader></app-loader>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"ready\">\r\n\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-danger waves-effect\" routerLink=\"/project-list\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-times mr-3\"></i>Back</h6></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-first justify-content-end\">\r\n    <div class=\" md-form\" id=\"search-bar\">\r\n      <input id=\"search\" (keyup)=\"search()\" class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\">\r\n\r\n    <table class=\"col-12 hoverable table table-borderless table-hover table-fixed\" id=\"gantt-table\">\r\n\r\n      <!--Table head-->\r\n      <thead class=\"\">\r\n      <tr class=\"text-white\">\r\n        <th><a>No</a></th>\r\n        <th class=\"text-small\"><a>Staff Names</a></th>\r\n        <th class=\"text-small\"><a>Total Target</a></th>\r\n        <th><a>{{months_label[month_index]}}</a></th>\r\n      </tr>\r\n      </thead>\r\n      <!--Table head-->\r\n\r\n      <!--Table body-->\r\n      <tbody>\r\n      <!-- elements[0]: activity_id && elements[1]: activity && elements[2]: m_a_p && elements[3]: members linked -->\r\n      <tr *ngFor=\"let element of elements\">\r\n        <td>{{element['member']['member_id']}}</td>\r\n        <td class=\"text-small\">{{element['member']['member_name'].toUpperCase()}} {{element['member']['member_first_name']}}</td>\r\n        <td>{{element['total_target']}}</td>\r\n        <td></td>\r\n      </tr>\r\n      </tbody>\r\n      <!--Table body-->\r\n\r\n    </table>\r\n    <!--Table-->\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/component/project-list/volume-progress/volume-progress.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/component/project-list/volume-progress/volume-progress.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-small {\n  font-size: 0.7em !important;\n  font-weight: 500 !important; }\n\n.text-medium {\n  font-size: 0.7em !important;\n  font-weight: 500 !important; }\n"

/***/ }),

/***/ "./src/app/component/project-list/volume-progress/volume-progress.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/component/project-list/volume-progress/volume-progress.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VolumeProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeProgressComponent", function() { return VolumeProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_member_activity_project_member_activity_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../objects/member_activity_project/member-activity-project.service */ "./src/app/objects/member_activity_project/member-activity-project.service.ts");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../objects/activity/activity.service */ "./src/app/objects/activity/activity.service.ts");
/* harmony import */ var _objects_project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../objects/project/project.service */ "./src/app/objects/project/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var VolumeProgressComponent = /** @class */ (function () {
    function VolumeProgressComponent(_memberActivityProjectService, _memberService, _activityService, _projectService) {
        this._memberActivityProjectService = _memberActivityProjectService;
        this._memberService = _memberService;
        this._activityService = _activityService;
        this._projectService = _projectService;
        /* ----- Data ----- */
        this.errorMessage = "";
        this.m_a_p = [];
        this.workers = [];
        this.activities = [];
        this.elements = [];
        this.sorted_workers = [];
        this.ready = false;
        this.months_label = [];
        this.month_index = 0;
    }
    VolumeProgressComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.sortElements()];
                    case 2:
                        _a.sent();
                        this.calendarRange();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Load the project & all m_a_p data with the activity & member linked */
    VolumeProgressComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var project_id, project, error_1, m_a_p, error_2, _i, _a, m, worker, activity, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.ready = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        project_id = localStorage.getItem('Project_id');
                        return [4 /*yield*/, this._projectService.select(project_id).toPromise()];
                    case 2:
                        project = _b.sent();
                        this.project = project['data'];
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.errorMessage = error_1.error.message;
                        return [3 /*break*/, 4];
                    case 4:
                        //We select all MemberActivityProject linked to the project
                        this.m_a_p = [];
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this._memberActivityProjectService.selectAllFromProject(this.project.project_id).toPromise()];
                    case 6:
                        m_a_p = _b.sent();
                        this.m_a_p = m_a_p['data'];
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _b.sent();
                        this.errorMessage = error_2.error.message;
                        return [3 /*break*/, 8];
                    case 8:
                        //We select all Members & Activities linked to theses m_a_p
                        this.workers = [];
                        this.activities = [];
                        this.elements = [];
                        _b.label = 9;
                    case 9:
                        _b.trys.push([9, 15, , 16]);
                        _i = 0, _a = this.m_a_p;
                        _b.label = 10;
                    case 10:
                        if (!(_i < _a.length)) return [3 /*break*/, 14];
                        m = _a[_i];
                        return [4 /*yield*/, this._memberService.select(m.member_id).toPromise()];
                    case 11:
                        worker = _b.sent();
                        return [4 /*yield*/, this._activityService.select(m.activity_id).toPromise()];
                    case 12:
                        activity = _b.sent();
                        this.workers.push(worker['data']);
                        this.activities.push(activity['data']);
                        _b.label = 13;
                    case 13:
                        _i++;
                        return [3 /*break*/, 10];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        error_3 = _b.sent();
                        this.errorMessage = error_3.error.message;
                        return [3 /*break*/, 16];
                    case 16:
                        this.ready = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /* For one member, we group all his m_a_p inside the elements array.It's like a distinct member request */
    VolumeProgressComponent.prototype.sortElements = function () {
        this.sorted_workers = [];
        var add;
        //I CHECK EVERY WORKERS
        for (var _i = 0, _a = this.workers; _i < _a.length; _i++) {
            var w = _a[_i];
            add = true;
            for (var _b = 0, _c = this.sorted_workers; _b < _c.length; _b++) {
                var s = _c[_b];
                if (s.member_id == w.member_id) {
                    add = false;
                }
            }
            if (add) {
                this.sorted_workers.push(w);
            }
        }
        //NOW I INSERT ALL M_A_P
        for (var _d = 0, _e = this.sorted_workers; _d < _e.length; _d++) {
            var s = _e[_d];
            var sorted_map = [];
            var total_target = 0;
            for (var _f = 0, _g = this.m_a_p; _f < _g.length; _f++) {
                var m = _g[_f];
                if (s.member_id == m.member_id) {
                    sorted_map.push(m);
                    total_target += m.target_quantity;
                }
            }
            var element = { member: s, m_a_ps: sorted_map, total_target: total_target };
            this.elements.push(element);
        }
    };
    VolumeProgressComponent.prototype.calendarRange = function () {
        var start = new Date(this.project.project_start);
        var end = new Date(this.project.project_end);
        var intervalDay = this.dateInterval(start, end);
        //let intervalMonth = Math.ceil(intervalDay/31);
        // We get label of all months
        var locale = "en-us";
        var date = start;
        var month;
        for (var i = start.getMonth(); i <= end.getMonth(); i++) {
            month = date.toLocaleDateString(locale, { month: "long" });
            this.months_label.push(month);
            date.setMonth(date.getMonth() + 1);
        }
    };
    /* Give the number of days between 2 dates */
    VolumeProgressComponent.prototype.dateInterval = function (d1, d2) {
        var nb = d2.getTime() - d1.getTime();
        return Math.ceil(nb / (1000 * 60 * 60 * 24));
    };
    VolumeProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-volume-progress',
            template: __webpack_require__(/*! ./volume-progress.component.html */ "./src/app/component/project-list/volume-progress/volume-progress.component.html"),
            styles: [__webpack_require__(/*! ./volume-progress.component.scss */ "./src/app/component/project-list/volume-progress/volume-progress.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_member_activity_project_member_activity_project_service__WEBPACK_IMPORTED_MODULE_1__["MemberActivityProjectService"],
            _objects_member_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"],
            _objects_activity_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"],
            _objects_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
    ], VolumeProgressComponent);
    return VolumeProgressComponent;
}());



/***/ }),

/***/ "./src/app/component/sop-list/sop-creation/sop-creation.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/component/sop-list/sop-creation/sop-creation.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- SOP List back button -->\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-danger waves-effect\" data-toggle=\"modal\" data-target=\"#warningModal\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-times mr-3\"></i>Back</h6></button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SOP Form -->\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <p class=\"h4 text-center mb-4\">SOP Creation</p>\r\n\r\n        <!--Pagination -->\r\n        <nav>\r\n\r\n          <ul class=\"pagination pg-blue justify-content-center\"  >\r\n            <li class=\"page-item\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"previous\" ><i class=\"page-link no-hover fa fa-arrow-left\" (click)=\"arrowChangeCaption(false, $event)\"></i></li>\r\n\r\n            <!--Numbers-->\r\n            <li *ngFor=\"let n of captions; let first = first;\" [ngClass]=\"{ active: first }\" id={{n.split(space)[0]}} class=\"page-item\" data-toggle=\"tooltip\" data-placement=\"top\" title={{n}} ><a class=\"page-link\" (click)=\"changeCaption(n, $event)\">{{captions.indexOf(n)+1}}</a></li>\r\n\r\n            <li class=\"page-item\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"next\" ><i id=\"nextArrow\" class=\"page-link no-hover fa fa-arrow-right\" (click)=\"arrowChangeCaption(true, $event)\"></i></li>\r\n\r\n          </ul>\r\n        </nav>\r\n\r\n        <!--Title of the step-->\r\n        <div class=\"row justify-content-center\">\r\n          <h4><span class=\"badge badge-pill badge-default\">{{captionSelected}}</span></h4>\r\n        </div>\r\n\r\n        <!-- Material form login -->\r\n        <form (ngSubmit)=\"onSubmit()\">\r\n\r\n          <!-- SOP Title -->\r\n          <div class=\"row md-form\" [hidden]=\"stepSelected != 0\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <input [(ngModel)]=\"newTitle\" name=\"newObjective\" type=\"text\" id=\"newTitle\" class=\"form-control\">\r\n              <label for=\"newTitle\">SOP Name</label>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" (click)=\"fakeNext()\">Next</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Rules -->\r\n          <div class=\"row md-form\" [hidden]=\"stepSelected != 1\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <textarea [(ngModel)]=\"newRule\" name=\"newRule\" type=\"text\" id=\"rule\" class=\"form-control md-textarea\" rows=\"1\" ></textarea>\r\n              <label for=\"rule\">Rule indication</label>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" onclick=\"newRule.value=''\" (click)=\"addNewRule()\">Add</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Unit -->\r\n          <div class=\"row md-form\" [hidden]=\"stepSelected != 2\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <input [(ngModel)]=\"newUnit\" name=\"newUnit\" type=\"text\" id=\"newUnit\" class=\"form-control\">\r\n              <label for=\"newUnit\">Unit name</label>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" onclick=\"newUnit.value=''\"  (click)=\"addNewUnit()\">Add</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Warning -->\r\n          <div class=\"row md-form\" [hidden]=\"stepSelected != 3\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <textarea [(ngModel)]=\"newWarning\" name=\"newWarning\" type=\"text\" id=\"warning\" class=\"form-control md-textarea\" rows=\"1\" ></textarea>\r\n              <label for=\"warning\">Warning indication</label>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" onclick=\"newWarning.value=''\" (click)=\"addNewWarning()\">Add</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Staff Quaification -->\r\n          <div class=\"row md-form\" [hidden]=\"stepSelected != 4\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <textarea [(ngModel)]=\"newStaffQualification\" name=\"newStaffQualification\" type=\"text\" id=\"newStaffQualification\" class=\"form-control md-textarea\" rows=\"1\" ></textarea>\r\n              <label for=\"newStaffQualification\">Staff qualification indication</label>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" onclick=\"newStaffQualification.value=''\" (click)=\"addNewStaffQualification()\">Add</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Supporting tool -->\r\n          <div class=\"row md-form\" [hidden]=\"stepSelected != 5\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <input [(ngModel)]=\"newSupportingTool\" name=\"newSupportingTool\" type=\"text\" id=\"newSupportingTool\" class=\"form-control\">\r\n              <label for=\"newSupportingTool\">Supporting tool name</label>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" onclick=\"newSupportingTool.value=''\"  (click)=\"addNewSupportingTool()\">Add</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Type Form Report -->\r\n          <div class=\"row md-form\" [hidden]=\"stepSelected != 6\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <input [(ngModel)]=\"newTypeFormReport\" name=\"newTypeFormReport\" type=\"text\" id=\"newTypeFormReport\" class=\"form-control\">\r\n              <label for=\"newTypeFormReport\">Type of form and report name</label>\r\n            </div>\r\n            <div>\r\n              <button class=\"btn btn-primary waves-effect\" type=\"button\" onclick=\"newTypeFormReport.value=''\"  (click)=\"addNewTypeFormReport()\">Add</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Objective -->\r\n          <div class=\"row md-form\"  [hidden]=\"stepSelected != 7\">\r\n            <div class=\"col\">\r\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\r\n              <input (keyup)=\"fieldVerification()\" [(ngModel)]=\"newObjective\" name=\"newObjective\" type=\"text\" id=\"newObjective\" class=\"form-control\">\r\n              <label for=\"newObjective\">Objectif indication</label>\r\n            </div>\r\n            <div>\r\n              <button [disabled]=\"!formValid\" class=\"btn btn-success waves-effect\" data-toggle=\"modal\" data-target=\"#confirmationModal\" type=\"submit\">Save SOP</button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n      <!-- Card content -->\r\n\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n  <!-- SOP Form -->\r\n\r\n  <!--Title of the step-->\r\n  <div class=\"row row-first\">\r\n    <h4 [hidden]=\"stepSelected == 7 || stepSelected == 0\" ><span class=\"badge badge-pill badge-primary\">{{captionSelected}} List</span></h4>\r\n    <!-- Error alert -->\r\n    <div *ngIf=\"errorMessage\" class=\"col offset-2 row justify-content-end error-text\">\r\n      <i>{{errorMessage}}</i>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SOP Display -->\r\n  <div class=\"row justify-content-center\" [hidden]=\"stepSelected == 7 || stepSelected == 0\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li *ngFor=\"let element of elementsArray\" class=\"list-group-item\">\r\n            <a (click)=\"deleteElement(element)\"><i class=\"fa fa-close text-red\"></i></a>\r\n            {{element}}\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <!-- Card content -->\r\n    </div>\r\n    <!-- Card -->\r\n\r\n  </div>\r\n  <!-- SOP Display -->\r\n</div>\r\n\r\n<!-- Modal confirmation -->\r\n<app-confirmation title=\"Confirmation SOP creation\"\r\n                  text={{summary}}\r\n                  (success)=\"addSop($event)\"\r\n                  isLinkActive=\"false\"\r\n                  link=\"activity-creation\">\r\n</app-confirmation>\r\n\r\n<!-- Modal warning -->\r\n<app-warning title=\"Exit\"\r\n             text=\"Are you sure you want to go back to the SOP list ? All your work not saved will be lost.\"\r\n             isLink=true\r\n             link=\"sop-list\">\r\n</app-warning>\r\n\r\n<script>\r\n  // Tooltips Initialization\r\n  $(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip()\r\n  })\r\n</script>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/component/sop-list/sop-creation/sop-creation.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/component/sop-list/sop-creation/sop-creation.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/sop-list/sop-creation/sop-creation.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/sop-list/sop-creation/sop-creation.component.ts ***!
  \***************************************************************************/
/*! exports provided: SopCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SopCreationComponent", function() { return SopCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../objects/sop/sop.service */ "./src/app/objects/sop/sop.service.ts");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _objects_unit_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../objects/unit/unit.service */ "./src/app/objects/unit/unit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SopCreationComponent = /** @class */ (function () {
    function SopCreationComponent(_sopService, _memberService, router, _unitService) {
        this._sopService = _sopService;
        this._memberService = _memberService;
        this.router = router;
        this._unitService = _unitService;
        /* ----- Data ----- */
        this.errorMessage = "";
        this.space = " "; //Used for the id of pagination
        this.summary = "";
        this.formValid = false;
        this.sopId = "";
        this.rules = [];
        this.units = [];
        this.warnings = [];
        this.staffQualifications = [];
        this.supportingTools = [];
        this.typesFormsReports = [];
        this.captions = ["Title", "Rules", "Related Working Units", "Warnings", "Staff Qualifications", "Supporting Tools", "Types of Forms and Reports", "Objective"];
        this.captionSelected = this.captions[0];
        this.elementsArray = [];
        this.newTitle = "";
        this.newRule = "";
        this.newUnit = "";
        this.newWarning = "";
        this.newStaffQualification = "";
        this.newSupportingTool = "";
        this.newTypeFormReport = "";
        this.newObjective = "";
    }
    SopCreationComponent.prototype.ngOnInit = function () {
        this.captionSelected = this.captions[0];
        this.elementsArray = this.rules;
        this.stepSelected = 0;
        //document.querySelector(this.captions[2]).className += ".active";
    };
    //Enable to change page with the arrows
    SopCreationComponent.prototype.arrowChangeCaption = function (next, $event) {
        if (next && this.stepSelected < 7) {
            this.changeCaption(this.captions[this.stepSelected + 1], $event);
        }
        else if (!next && this.stepSelected > 0) {
            this.changeCaption(this.captions[this.stepSelected - 1], $event);
        }
    };
    // This function change the page selected and set the right array to the view list
    SopCreationComponent.prototype.changeCaption = function (stepNumber, $event) {
        this.errorMessage = "";
        this.stepSelected = this.captions.indexOf(stepNumber);
        this.captionSelected = this.captions[this.stepSelected];
        if (this.stepSelected == 1) {
            this.elementsArray = this.rules;
        }
        else if (this.stepSelected == 2) {
            this.elementsArray = this.units;
        }
        else if (this.stepSelected == 3) {
            this.elementsArray = this.warnings;
        }
        else if (this.stepSelected == 4) {
            this.elementsArray = this.staffQualifications;
        }
        else if (this.stepSelected == 5) {
            this.elementsArray = this.supportingTools;
        }
        else if (this.stepSelected == 6) {
            this.elementsArray = this.typesFormsReports;
        }
        else if (this.stepSelected == 7) {
            this.fieldVerification();
        }
        this.numberNavigation($event, stepNumber);
    };
    // ---------------- ADD FUNCTIONS ---------------- //
    // ---------------- ADD FUNCTIONS ---------------- //
    SopCreationComponent.prototype.addNewRule = function () {
        if (this.newRule == "") {
            this.errorMessage = "Rule indication field is required.";
        }
        else if (this.rules.includes(this.newRule)) {
            this.errorMessage = "This rule indication already exists.";
        }
        else {
            this.rules.push(this.newRule);
            this.errorMessage = "";
        }
    };
    SopCreationComponent.prototype.addNewUnit = function () {
        if (this.newUnit == "") {
            this.errorMessage = "Unit name is required.";
        }
        else if (this.units.includes(this.newUnit)) {
            this.errorMessage = "This unit name already exists.";
        }
        else {
            this.units.push(this.newUnit);
            this.errorMessage = "";
        }
    };
    SopCreationComponent.prototype.addNewWarning = function () {
        if (this.newWarning == "") {
            this.errorMessage = "Warning indication field is required.";
        }
        else if (this.warnings.includes(this.newWarning)) {
            this.errorMessage = "This warning indication already exists.";
        }
        else {
            this.errorMessage = "";
            this.warnings.push(this.newWarning);
        }
    };
    SopCreationComponent.prototype.addNewStaffQualification = function () {
        if (this.newStaffQualification != "" && !this.staffQualifications.includes(this.newStaffQualification)) {
            this.staffQualifications.push(this.newStaffQualification);
        }
    };
    SopCreationComponent.prototype.addNewSupportingTool = function () {
        if (this.newSupportingTool != "" && !this.supportingTools.includes(this.newSupportingTool)) {
            this.supportingTools.push(this.newSupportingTool);
        }
    };
    SopCreationComponent.prototype.addNewTypeFormReport = function () {
        if (this.newTypeFormReport != "" && !this.typesFormsReports.includes(this.newTypeFormReport)) {
            this.typesFormsReports.push(this.newTypeFormReport);
        }
    };
    // ---------------- FORM VALIDATION ---------------- //
    // ---------------- FORM VALIDATION ---------------- //
    SopCreationComponent.prototype.fakeNext = function () {
        if (this.newTitle != "") {
            document.getElementById('nextArrow').click();
        }
        else {
            this.fieldVerification();
        }
    };
    SopCreationComponent.prototype.fieldVerification = function () {
        if (this.newTitle == "") {
            this.errorMessage = "SOP title name is required.";
            this.formValid = false;
        }
        else if (this.newObjective == "") {
            this.errorMessage = "Objective indication is required.";
            this.formValid = false;
        }
        else if (this.rules.length == 0) {
            this.errorMessage = "At least one rule is required.";
            this.formValid = false;
        }
        else if (this.units.length == 0) {
            this.errorMessage = "At least one unit is required.";
            this.formValid = false;
        }
        else {
            this.errorMessage = "";
            this.formValid = true;
        }
    };
    //Delete an element of the current array displayed
    SopCreationComponent.prototype.deleteElement = function (element) {
        var i = this.elementsArray.indexOf(element);
        this.elementsArray.splice(i, 1);
    };
    SopCreationComponent.prototype.onSubmit = function () {
        //Need to fix the ligne jump
        this.summary += "Are you sure all informations provided for this SOP are given ? \n\n";
        this.summary += "Title : " + this.newTitle + '\n';
        this.summary += "Objective : " + this.newObjective + '\n';
    };
    //Final function that add the SOP into the database
    SopCreationComponent.prototype.addSop = function (add) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date_creation, date_revision, date_published, sop_approvment, sop_rules, _i, _a, r, sop_warning, _b, _c, w, sop_staff_qualification, _d, _e, s, sop_tools, _f, _g, t, sop_type_reports, _h, _j, t;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        if (!add) return [3 /*break*/, 2];
                        date_creation = new Date(Date.now());
                        date_revision = new Date(Date.now());
                        date_published = new Date(Date.now());
                        sop_approvment = this._memberService.getUserDataFull().name.toUpperCase() + ' ' + this._memberService.getUserDataFull().first_name;
                        sop_rules = "";
                        for (_i = 0, _a = this.rules; _i < _a.length; _i++) {
                            r = _a[_i];
                            sop_rules += r;
                        }
                        sop_warning = "";
                        for (_b = 0, _c = this.warnings; _b < _c.length; _b++) {
                            w = _c[_b];
                            sop_rules += w;
                        }
                        sop_staff_qualification = "";
                        for (_d = 0, _e = this.staffQualifications; _d < _e.length; _d++) {
                            s = _e[_d];
                            sop_staff_qualification += s;
                        }
                        sop_tools = "";
                        for (_f = 0, _g = this.supportingTools; _f < _g.length; _f++) {
                            t = _g[_f];
                            sop_tools += t;
                        }
                        sop_type_reports = "";
                        for (_h = 0, _j = this.typesFormsReports; _h < _j.length; _h++) {
                            t = _j[_h];
                            sop_type_reports += t;
                        }
                        return [4 /*yield*/, this._sopService.createSop(this.newTitle, date_creation, date_revision, date_published, sop_approvment, sop_rules, sop_warning, sop_staff_qualification, sop_tools, sop_type_reports, this.newObjective).subscribe(function (res) {
                                _this.errorMessage = "";
                                //We get the id of the new SOP
                                _this.sopId = res['data'];
                                _this.sopId = _this.sopId['sop_id'];
                                //We store this id in the local storage to re-use it for the activities creation
                                localStorage.setItem('Sop_id', _this.sopId);
                                //We insert the unit in the Database too
                                _this.insertUnits();
                            }, function (error) {
                                _this.errorMessage = error.error.message;
                            })];
                    case 1:
                        _k.sent();
                        _k.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SopCreationComponent.prototype.insertUnits = function () {
        var _this = this;
        var success = true;
        var _loop_1 = function (u) {
            this_1._unitService.createUnit(u).subscribe(function (res) {
                _this.errorMessage = "";
                _this._unitService.bindUnitSop(res['data']['unit_id'], _this.sopId).subscribe(function (res) {
                    _this.errorMessage = "";
                    if (success && _this.units.indexOf(u) == (_this.units.length - 1)) {
                        _this.router.navigate(['/', 'activity-creation']);
                    }
                }, function (error) {
                    _this.errorMessage = error.error.message;
                    success = false;
                });
            }, function (error) {
                _this.errorMessage = error.error.message;
                success = false;
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
            var u = _a[_i];
            _loop_1(u);
        }
    };
    // Active management of the number navigation background
    SopCreationComponent.prototype.numberNavigation = function ($event, stepName) {
        var clickedElement = $event.target || $event.srcElement;
        if (clickedElement.className == "page-link" || (clickedElement.className == "page-link no-hover fa fa-arrow-right" && this.stepSelected < 8) || (clickedElement.className == "page-link no-hover fa fa-arrow-left" && this.stepSelected > -1)) {
            var currentNumberActive = clickedElement.parentElement.parentElement.querySelector(".active");
            if (currentNumberActive) {
                currentNumberActive.classList.remove("active");
            }
            if (clickedElement.className == "page-link") {
                clickedElement.parentElement.className += " active";
            }
            else if (clickedElement.className == "page-link no-hover fa fa-arrow-left" && this.stepSelected > -1) {
                var id = "#" + stepName.split(" ")[0];
                document.querySelector(id).className += " active";
            }
            else if (clickedElement.className == "page-link no-hover fa fa-arrow-right" && this.stepSelected < 8) {
                var id = "#" + stepName.split(" ")[0];
                document.querySelector(id).className += " active";
            }
        }
    };
    SopCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sop-creation',
            template: __webpack_require__(/*! ./sop-creation.component.html */ "./src/app/component/sop-list/sop-creation/sop-creation.component.html"),
            styles: [__webpack_require__(/*! ./sop-creation.component.scss */ "./src/app/component/sop-list/sop-creation/sop-creation.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_1__["SopService"],
            _objects_member_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _objects_unit_unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"]])
    ], SopCreationComponent);
    return SopCreationComponent;
}());



/***/ }),

/***/ "./src/app/component/sop-list/sop-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/sop-list/sop-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-form\r\n{\r\n  margin-bottom: 20px;\r\n  margin-top: 0;\r\n}\r\n\r\n#search-bar {\r\n  margin-bottom: 0%;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/component/sop-list/sop-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/sop-list/sop-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row row-first\">\r\n    <div class=\"col\">\r\n      <button type=\"button\" class=\"btn btn-outline-default waves-effect\" [routerLink]=\"['/sop-creation']\"><h6 class=\"no-margin-bottom\"><i class=\"fa fa-plus mr-3\"></i>New SOP</h6></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-first justify-content-end\">\r\n    <div class=\" md-form\" id=\"search-bar\">\r\n      <input id=\"search\" (keyup)=\"search()\" class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\">\r\n\r\n    <div class=\"col-12 card card-cascade hoverable\">\r\n      <!--Table-->\r\n      <div class=\"card-body card-body-cascade\">\r\n        <table class=\"table table-borderless table-hover table-fixed\" id=\"sop-table\">\r\n\r\n          <!--Table head-->\r\n          <thead class=\"\">\r\n            <tr class=\"text-white\">\r\n              <th style=\"width:5%;\"></th>\r\n              <th style=\"width:10%;\"  (click)=\"sortTable(1)\"><a>Number</a></th>\r\n              <th style=\"width:40%;\" (click)=\"sortTable(2)\"><a>Name</a></th>\r\n              <th style=\"width:20%;\" (click)=\"sortTable(3)\"><a>Creation Date</a></th>\r\n              <th style=\"width:20%;\" (click)=\"sortTable(4)\"><a>Approved By</a></th>\r\n              <th style=\"width:5%;\"></th>\r\n            </tr>\r\n          </thead>\r\n          <!--Table head-->\r\n\r\n          <!--Table body-->\r\n          <tbody>\r\n            <tr *ngFor=\"let sop of sopList\">\r\n              <td scope=\"row\">\r\n                <a data-toggle=\"modal\" data-target=\"#actionModal\"><i class=\"fa fa-cog text-blue\" (click)=\"selectSop(sop)\"></i></a>\r\n              </td>\r\n              <td>{{sop.sop_id}}</td>\r\n              <td>{{sop.sop_title.substr(0,50)}}</td>\r\n              <td>{{sop.sop_creation | date:\"MM/dd/yyyy\"}}</td>\r\n              <td>{{sop.sop_approvment}}</td>\r\n              <td>\r\n                <a data-toggle=\"modal\" data-target=\"#warningModal\" (click)=\"selectSop(sop)\"><i class=\"fa fa-close text-red\"></i></a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n          <!--Table body-->\r\n\r\n        </table>\r\n        <!--Table-->\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-action title={{sopSelected.sop_title}}\r\n            text=\"\"\r\n            buttons={{buttonsTitles}}\r\n            links={{buttonsLinks}}\r\n            [isLinkActive]=true\r\n>\r\n</app-action>\r\n\r\n<!-- Modal warning -->\r\n<app-warning title=\"Delete SOP {{sopSelected.sop_id}}\"\r\n             text=\"Are you sure you want to delete the SOP : {{sopSelected.sop_title}} from the SOP list ? All activities linked will be destroyed.\"\r\n             link=\"sop-list\"\r\n             (success)=\"deleteSop(sopSelected.sop_id)\"\r\n             [isLink]=false>\r\n</app-warning>\r\n"

/***/ }),

/***/ "./src/app/component/sop-list/sop-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/sop-list/sop-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SopListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SopListComponent", function() { return SopListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/sop/sop.service */ "./src/app/objects/sop/sop.service.ts");
/* harmony import */ var _objects_sop_sop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/sop/sop */ "./src/app/objects/sop/sop.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SopListComponent = /** @class */ (function () {
    function SopListComponent(_sopService) {
        this._sopService = _sopService;
        /* ----- Data ----- */
        this.errorMessage = "";
        this.sopSelected = new _objects_sop_sop__WEBPACK_IMPORTED_MODULE_2__["Sop"]();
        this.buttonsTitles = ['Set up SOP informations', 'Set up activites', 'Set up jobs'];
        this.buttonsLinks = ['', 'activity-creation', 'job-list'];
    }
    SopListComponent.prototype.ngOnInit = function () {
        this.getAllSop();
        this._sopService.removeSopIdLocal();
        console.log(this.buttonsTitles);
    };
    SopListComponent.prototype.getAllSop = function () {
        var _this = this;
        this._sopService.selectAll()
            .subscribe(function (res) {
            _this.errorMessage = "";
            _this.sopList = res['data'];
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    SopListComponent.prototype.deleteSop = function (sop_id) {
        var _this = this;
        console.log('hey');
        this._sopService.delete(sop_id).subscribe(function (res) {
            _this.errorMessage = "";
            _this.getAllSop();
        }, function (error) {
            _this.errorMessage = error.error.message;
        });
    };
    SopListComponent.prototype.selectSop = function (clickedSop) {
        this.sopSelected = clickedSop;
        localStorage.setItem('Sop_id', clickedSop.sop_id);
    };
    SopListComponent.prototype.sortTable = function (n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("sop-table");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /* Loop through all table rows (except the
            first, which contains table headers): */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /* If a switch has been marked, make the switch
                and mark that a switch has been done: */
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                // Each time a switch is done, increase this count by 1:
                switchcount++;
            }
            else {
                /* If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again. */
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    SopListComponent.prototype.search = function () {
        // Declare variables
        var input, filter, table, tr, td, i;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        table = document.getElementById("sop-table");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            console.log(td);
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    SopListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sop-list',
            template: __webpack_require__(/*! ./sop-list.component.html */ "./src/app/component/sop-list/sop-list.component.html"),
            styles: [__webpack_require__(/*! ./sop-list.component.css */ "./src/app/component/sop-list/sop-list.component.css")]
        }),
        __metadata("design:paramtypes", [_objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_1__["SopService"]])
    ], SopListComponent);
    return SopListComponent;
}());



/***/ }),

/***/ "./src/app/component/sop-list/sop/sop.component.css":
/*!**********************************************************!*\
  !*** ./src/app/component/sop-list/sop/sop.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/sop-list/sop/sop.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/sop-list/sop/sop.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sop works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/sop-list/sop/sop.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/sop-list/sop/sop.component.ts ***!
  \*********************************************************/
/*! exports provided: SopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SopComponent", function() { return SopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SopComponent = /** @class */ (function () {
    function SopComponent() {
    }
    SopComponent.prototype.ngOnInit = function () {
    };
    SopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sop',
            template: __webpack_require__(/*! ./sop.component.html */ "./src/app/component/sop-list/sop/sop.component.html"),
            styles: [__webpack_require__(/*! ./sop.component.css */ "./src/app/component/sop-list/sop/sop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SopComponent);
    return SopComponent;
}());



/***/ }),

/***/ "./src/app/component/staff-list/staff-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/staff-list/staff-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/staff-list/staff-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/staff-list/staff-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  staff-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/staff-list/staff-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/staff-list/staff-list.component.ts ***!
  \**************************************************************/
/*! exports provided: StaffListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffListComponent", function() { return StaffListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffListComponent = /** @class */ (function () {
    function StaffListComponent() {
    }
    StaffListComponent.prototype.ngOnInit = function () {
    };
    StaffListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-list',
            template: __webpack_require__(/*! ./staff-list.component.html */ "./src/app/component/staff-list/staff-list.component.html"),
            styles: [__webpack_require__(/*! ./staff-list.component.css */ "./src/app/component/staff-list/staff-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffListComponent);
    return StaffListComponent;
}());



/***/ }),

/***/ "./src/app/component/staff-list/staff/staff.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/staff-list/staff/staff.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/staff-list/staff/staff.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/staff-list/staff/staff.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  staff works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/staff-list/staff/staff.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/staff-list/staff/staff.component.ts ***!
  \***************************************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffComponent = /** @class */ (function () {
    function StaffComponent() {
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/component/staff-list/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/component/staff-list/staff/staff.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/component/work-schedule/work-schedule.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/work-schedule/work-schedule.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/work-schedule/work-schedule.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/work-schedule/work-schedule.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  work-schedule works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/work-schedule/work-schedule.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/work-schedule/work-schedule.component.ts ***!
  \********************************************************************/
/*! exports provided: WorkScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkScheduleComponent", function() { return WorkScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkScheduleComponent = /** @class */ (function () {
    function WorkScheduleComponent() {
    }
    WorkScheduleComponent.prototype.ngOnInit = function () {
    };
    WorkScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-schedule',
            template: __webpack_require__(/*! ./work-schedule.component.html */ "./src/app/component/work-schedule/work-schedule.component.html"),
            styles: [__webpack_require__(/*! ./work-schedule.component.css */ "./src/app/component/work-schedule/work-schedule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkScheduleComponent);
    return WorkScheduleComponent;
}());



/***/ }),

/***/ "./src/app/documents/pdf-gantt/pdf-gantt.component.html":
/*!**************************************************************!*\
  !*** ./src/app/documents/pdf-gantt/pdf-gantt.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pdf-gantt works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/documents/pdf-gantt/pdf-gantt.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/documents/pdf-gantt/pdf-gantt.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/pdf-gantt/pdf-gantt.component.ts":
/*!************************************************************!*\
  !*** ./src/app/documents/pdf-gantt/pdf-gantt.component.ts ***!
  \************************************************************/
/*! exports provided: PdfGanttComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfGanttComponent", function() { return PdfGanttComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdfGanttComponent = /** @class */ (function () {
    function PdfGanttComponent() {
    }
    PdfGanttComponent.prototype.ngOnInit = function () {
        this.download();
    };
    PdfGanttComponent.prototype.download = function () {
        var columns = [{ title: "0", dataKey: "0" },
            { title: "1", dataKey: "1" },
            { title: "2", dataKey: "2" },
            { title: "3", dataKey: "3" }
        ];
        var rows = [
            ["Work Code", "00000000", "Project Code", "24200"],
            ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
        ];
        var doc = new jsPDF('l', 'pt');
        doc.autoTableSetDefaults({
            margin: { top: 30 },
            addPageContent: function (data) {
                doc.setFontSize(14);
                doc.text('GANTT CHART', 380, 50);
            }
        });
        doc.autoTable(columns, rows, {
            theme: 'plain',
            styles: {
                lineColor: 0,
                lineWidth: 0
            },
            showHeader: 'never',
            startY: 60,
            drawRow: function (row, data) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(10);
            },
            drawCell: function (cell, data) {
                // Rowspan
            }
        });
        var columns2 = [{ title: "No", dataKey: "0" },
            { title: "Activity", dataKey: "1" },
            { title: "Target Date", dataKey: "2" },
            { title: "Finished Date", dataKey: "3" },
            { title: "Evaluation", dataKey: "4" },
            { title: "Staff Name", dataKey: "5" },
            { title: "Sign", dataKey: "6" },
            { title: "Note", dataKey: "7" }
        ];
        var rows2 = [
            ["1", "Step I Process", "", "", "", "Staff 1", "", ""],
            ["2", "Step II Process", "", "", "", "Staff 1, Staff 2", "", ""],
            ["3", "Step III Process", "", "", "", "Staff 1", "", ""],
            ["4", "Step IV Process", "", "", "", "Staff 1", "", ""],
            ["5", "Step V Process", "", "", "", "Staff 1", "", ""],
            ["6", "Step VI Process", "", "", "", "Staff 1", "", ""],
            ["7", "Step VII Process", "", "", "", "Staff 1", "", ""],
            ["8", "Step VIII Process", "", "", "", "Staff 1", "", ""],
            ["9", "Step IX Process", "", "", "", "Staff 1", "", ""],
            ["1", "Step X Process", "", "", "", "Staff 1", "", ""],
        ];
        doc.autoTable(columns2, rows2, {
            theme: 'plain',
            styles: {
                lineColor: 0,
                lineWidth: 1
            },
            showHeader: 'everyPage',
            startY: 120,
            drawRow: function (row, data) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(10);
            },
            drawCell: function (cell, data) {
                // Rowspan
            }
        });
        doc.save("Gantt-charts.pdf");
    };
    PdfGanttComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdf-gantt',
            template: __webpack_require__(/*! ./pdf-gantt.component.html */ "./src/app/documents/pdf-gantt/pdf-gantt.component.html"),
            styles: [__webpack_require__(/*! ./pdf-gantt.component.scss */ "./src/app/documents/pdf-gantt/pdf-gantt.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PdfGanttComponent);
    return PdfGanttComponent;
}());



/***/ }),

/***/ "./src/app/documents/pdf-performance-report/pdf-performance-report.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/documents/pdf-performance-report/pdf-performance-report.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pdf-performance-report works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/documents/pdf-performance-report/pdf-performance-report.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/documents/pdf-performance-report/pdf-performance-report.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/pdf-performance-report/pdf-performance-report.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/documents/pdf-performance-report/pdf-performance-report.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PdfPerformanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPerformanceReportComponent", function() { return PdfPerformanceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdfPerformanceReportComponent = /** @class */ (function () {
    function PdfPerformanceReportComponent() {
    }
    PdfPerformanceReportComponent.prototype.ngOnInit = function () {
        this.download();
    };
    PdfPerformanceReportComponent.prototype.download = function () {
        var columns = [{ title: "0", dataKey: "0" },
            { title: "1", dataKey: "1" },
            { title: "2", dataKey: "2" },
            { title: "3", dataKey: "3" }
        ];
        var rows = [
            ["Staff Name", "Test name", "", ""]
        ];
        var doc = new jsPDF('l', 'pt');
        doc.autoTableSetDefaults({
            margin: { top: 30 },
            addPageContent: function (data) {
                doc.setFontSize(14);
                doc.text('STAFF PERFORMANCE REPORT', 320, 50);
            }
        });
        doc.autoTable(columns, rows, {
            theme: 'plain',
            styles: {
                lineColor: 0,
                lineWidth: 0
            },
            showHeader: 'never',
            startY: 60,
            drawRow: function (row, data) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(10);
            },
            drawCell: function (cell, data) {
                // Rowspan
            }
        });
        var columns2 = [{ title: "No", dataKey: "0" },
            { title: "WORK PROJECT", dataKey: "1" },
            { title: "", dataKey: "2" },
            { title: "TARGET", dataKey: "3" },
            { title: "", dataKey: "4" },
            { title: "", dataKey: "5" },
            { title: "REALISATION", dataKey: "6" },
            { title: "", dataKey: "7" },
            { title: "PERFORMANCE \n VALUE", dataKey: "8" }
        ];
        var rows2 = [
            ["", "", "", "OUTPUT QUANTITY", "DURATION", "", "OUTPUT QUANTITY", "", ""],
            ["(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(7)", "(8)", "(11)"],
            ["1", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
            ["2", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
            ["3", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
            ["4", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
            ["5", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
            ["6", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
            ["", "TOTAL PERFORMANCE VALUE", "", "", "", "", "", "", ""]
        ];
        doc.autoTable(columns2, rows2, {
            theme: 'plain',
            styles: {
                overflow: 'linebreak',
                lineColor: 0,
                lineWidth: 0.3,
                halign: 'left',
                cellPadding: 2
            },
            headerStyles: {
                fontSize: 8,
                halign: 'center',
            },
            showHeader: 'everyPage',
            startY: 100,
            drawRow: function (row, data) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(8);
            },
            drawCell: function (cell, data) {
                // Rowspan
                doc.setFontSize(8);
            }
        });
        doc.save("performance-report.pdf");
    };
    PdfPerformanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdf-performance-report',
            template: __webpack_require__(/*! ./pdf-performance-report.component.html */ "./src/app/documents/pdf-performance-report/pdf-performance-report.component.html"),
            styles: [__webpack_require__(/*! ./pdf-performance-report.component.scss */ "./src/app/documents/pdf-performance-report/pdf-performance-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PdfPerformanceReportComponent);
    return PdfPerformanceReportComponent;
}());



/***/ }),

/***/ "./src/app/documents/pdf-performance-target/pdf-performance-target.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/documents/pdf-performance-target/pdf-performance-target.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pdf-performance-target works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/documents/pdf-performance-target/pdf-performance-target.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/documents/pdf-performance-target/pdf-performance-target.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/pdf-performance-target/pdf-performance-target.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/documents/pdf-performance-target/pdf-performance-target.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PdfPerformanceTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPerformanceTargetComponent", function() { return PdfPerformanceTargetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdfPerformanceTargetComponent = /** @class */ (function () {
    function PdfPerformanceTargetComponent() {
    }
    PdfPerformanceTargetComponent.prototype.ngOnInit = function () {
        this.download();
    };
    PdfPerformanceTargetComponent.prototype.download = function () {
        var columns = [{ title: "0", dataKey: "0" },
            { title: "1", dataKey: "1" },
            { title: "2", dataKey: "2" },
            { title: "3", dataKey: "3" }
        ];
        var rows = [
            ["Staff Name", "Test name", "", ""]
        ];
        var doc = new jsPDF('l', 'pt');
        doc.autoTableSetDefaults({
            margin: { top: 30 },
            addPageContent: function (data) {
                doc.setFontSize(14);
                doc.text('STAFF PERFORMANCE TARGET', 320, 50);
            }
        });
        doc.autoTable(columns, rows, {
            theme: 'plain',
            styles: {
                lineColor: 0,
                lineWidth: 0
            },
            showHeader: 'never',
            startY: 60,
            drawRow: function (row, data) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(10);
            },
            drawCell: function (cell, data) {
                // Rowspan
            }
        });
        var columns2 = [{ title: "No", dataKey: "0" },
            { title: "WORK PROJECT", dataKey: "1" },
            { title: "", dataKey: "2" },
            { title: "Target", dataKey: "3" },
            { title: "", dataKey: "4" },
            { title: "", dataKey: "5" },
            { title: "Note", dataKey: "6" }
        ];
        var rows2 = [
            ["", "", "", "OUTPUT QUANTITY", "DURATION", "", ""],
            ["(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(7)"],
            ["1", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", ""],
            ["2", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", ""],
            ["3", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", ""],
            ["4", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", ""],
            ["5", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", ""],
            ["6", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", ""]
        ];
        doc.autoTable(columns2, rows2, {
            theme: 'plain',
            styles: {
                overflow: 'linebreak',
                lineColor: 0,
                lineWidth: 0.3,
                halign: 'left',
                cellPadding: 2
            },
            headerStyles: {
                fontSize: 8,
                halign: 'center',
            },
            showHeader: 'everyPage',
            startY: 100,
            drawRow: function (row, data) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(8);
            },
            drawCell: function (cell, data) {
                // Rowspan
                doc.setFontSize(8);
            }
        });
        doc.save("performance-target-evaluation.pdf");
    };
    PdfPerformanceTargetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdf-performance-target',
            template: __webpack_require__(/*! ./pdf-performance-target.component.html */ "./src/app/documents/pdf-performance-target/pdf-performance-target.component.html"),
            styles: [__webpack_require__(/*! ./pdf-performance-target.component.scss */ "./src/app/documents/pdf-performance-target/pdf-performance-target.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PdfPerformanceTargetComponent);
    return PdfPerformanceTargetComponent;
}());



/***/ }),

/***/ "./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pdf-progress-evaluation works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PdfProgressEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfProgressEvaluationComponent", function() { return PdfProgressEvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdfProgressEvaluationComponent = /** @class */ (function () {
    function PdfProgressEvaluationComponent() {
        this.is_week = false;
        this.is_month = true;
        this.is_trimester = false;
        this.is_year = false;
    }
    PdfProgressEvaluationComponent.prototype.ngOnInit = function () {
        this.download();
    };
    PdfProgressEvaluationComponent.prototype.download = function () {
        if (this.is_week) {
            //=========================== START WEEK MODEL =================================
            var columns = [{ title: "0", dataKey: "0" },
                { title: "1", dataKey: "1" },
                { title: "2", dataKey: "2" },
                { title: "3", dataKey: "3" }
            ];
            var rows = [
                ["Work Code", "00000000", "Project Code", "24200"],
                ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
                ["Start Date", "1-Jan-18", "", ""],
                ["Finished Date", "31-Jan-18", "", ""],
            ];
            var doc = new jsPDF('l', 'pt');
            doc.autoTableSetDefaults({
                margin: { top: 30 },
                addPageContent: function (data) {
                    doc.setFontSize(14);
                    doc.text('VOLUME PROGRESS EVALUATION', 320, 50);
                }
            });
            doc.autoTable(columns, rows, {
                theme: 'plain',
                styles: {
                    lineColor: 0,
                    lineWidth: 0
                },
                showHeader: 'never',
                startY: 60,
                drawRow: function (row, data) {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(10);
                },
                drawCell: function (cell, data) {
                    // Rowspan
                }
            });
            var columns2 = [{ title: "No", dataKey: "0" },
                { title: "Staff Name", dataKey: "1" },
                { title: "Total Target", dataKey: "2" },
                { title: "Total Target \n vs Details", dataKey: "3" },
                { title: "", dataKey: "4" },
                { title: "", dataKey: "5" },
                { title: "", dataKey: "6" },
                { title: "", dataKey: "7" },
                { title: "", dataKey: "8" },
                { title: "", dataKey: "9" },
                { title: "", dataKey: "10" },
                { title: "W1", dataKey: "11" },
                { title: "", dataKey: "12" },
                { title: "", dataKey: "13" },
                { title: "", dataKey: "14" },
                { title: "", dataKey: "15" },
                { title: "", dataKey: "16" },
                { title: "", dataKey: "17" },
                { title: "", dataKey: "18" },
                { title: "Total Finished", dataKey: "19" },
                { title: "%", dataKey: "20" },
                { title: "Note", dataKey: "21" }
            ];
            var rows2 = [
                ["", "", "", "", "", "D1", "", "", "D2", "", "", "D3", "", "", "D4", "", "", "D5", "", "", "", ""],
                ["", "", "", "", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "", "", ""],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["TOTAL", "", "0", "Same", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0", "", ""],
            ];
            doc.autoTable(columns2, rows2, {
                theme: 'plain',
                styles: {
                    overflow: 'linebreak',
                    lineColor: 0,
                    lineWidth: 0.3,
                    halign: 'center',
                    cellPadding: 2
                },
                headerStyles: {
                    fontSize: 7
                },
                showHeader: 'everyPage',
                startY: 160,
                drawRow: function (row, data) {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(6);
                },
                drawCell: function (cell, data) {
                    // Rowspan
                    doc.setFontSize(6);
                }
            });
            doc.save("progress-evaluation.pdf");
            //=========================== END WEEK MODEL =================================
        }
        else if (this.is_month) {
            //=========================== START MONTH MODEL =================================
            //=========================== START WEEK MODEL =================================
            var columns = [{ title: "0", dataKey: "0" },
                { title: "1", dataKey: "1" },
                { title: "2", dataKey: "2" },
                { title: "3", dataKey: "3" }
            ];
            var rows = [
                ["Work Code", "00000000", "Project Code", "24200"],
                ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
                ["Start Date", "1-Jan-18", "", ""],
                ["Finished Date", "31-Jan-18", "", ""],
            ];
            var doc = new jsPDF('l', 'pt');
            doc.autoTableSetDefaults({
                margin: { top: 30 },
                addPageContent: function (data) {
                    doc.setFontSize(14);
                    doc.text('VOLUME PROGRESS EVALUATION', 320, 50);
                }
            });
            doc.autoTable(columns, rows, {
                theme: 'plain',
                styles: {
                    lineColor: 0,
                    lineWidth: 0
                },
                showHeader: 'never',
                startY: 60,
                drawRow: function (row, data) {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(10);
                },
                drawCell: function (cell, data) {
                    // Rowspan
                }
            });
            var columns2 = [{ title: "No", dataKey: "0" },
                { title: "Staff Name", dataKey: "1" },
                { title: "Total Target", dataKey: "2" },
                { title: "Total Target \n vs Details", dataKey: "3" },
                { title: "", dataKey: "4" },
                { title: "", dataKey: "5" },
                { title: "", dataKey: "6" },
                { title: "", dataKey: "7" },
                { title: "", dataKey: "8" },
                { title: "", dataKey: "9" },
                { title: "M1", dataKey: "10" },
                { title: "", dataKey: "11" },
                { title: "", dataKey: "12" },
                { title: "", dataKey: "13" },
                { title: "", dataKey: "14" },
                { title: "", dataKey: "15" },
                { title: "Total Finished", dataKey: "19" },
                { title: "%", dataKey: "20" },
                { title: "Note", dataKey: "21" }
            ];
            var rows2 = [
                ["", "", "", "", "", "W1", "", "", "W2", "", "", "W3", "", "", "W4", "", "", "", ""],
                ["", "", "", "", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "", "", ""],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["TOTAL", "", "0", "Same", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0", "", ""],
            ];
            doc.autoTable(columns2, rows2, {
                theme: 'plain',
                styles: {
                    overflow: 'linebreak',
                    lineColor: 0,
                    lineWidth: 0.3,
                    halign: 'center',
                    cellPadding: 2
                },
                headerStyles: {
                    fontSize: 7
                },
                showHeader: 'everyPage',
                startY: 160,
                drawRow: function (row, data) {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(6);
                },
                drawCell: function (cell, data) {
                    // Rowspan
                    doc.setFontSize(6);
                }
            });
            doc.save("progress-evaluation.pdf");
            //=========================== END MONTH MODEL =================================
        }
        else if (this.is_trimester) {
            //=========================== START TRIMESTER MODEL =================================
            var columns = [{ title: "0", dataKey: "0" },
                { title: "1", dataKey: "1" },
                { title: "2", dataKey: "2" },
                { title: "3", dataKey: "3" }
            ];
            var rows = [
                ["Work Code", "00000000", "Project Code", "24200"],
                ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
                ["Start Date", "1-Jan-18", "", ""],
                ["Finished Date", "31-Jan-18", "", ""],
            ];
            var doc = new jsPDF('l', 'pt');
            doc.autoTableSetDefaults({
                margin: { top: 30 },
                addPageContent: function (data) {
                    doc.setFontSize(14);
                    doc.text('VOLUME PROGRESS EVALUATION', 320, 50);
                }
            });
            doc.autoTable(columns, rows, {
                theme: 'plain',
                styles: {
                    lineColor: 0,
                    lineWidth: 0
                },
                showHeader: 'never',
                startY: 60,
                drawRow: function (row, data) {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(10);
                },
                drawCell: function (cell, data) {
                    // Rowspan
                }
            });
            var columns2 = [{ title: "No", dataKey: "0" },
                { title: "Staff Name", dataKey: "1" },
                { title: "Total Target", dataKey: "2" },
                { title: "Total Target \n vs Details", dataKey: "3" },
                { title: "", dataKey: "4" },
                { title: "", dataKey: "5" },
                { title: "", dataKey: "6" },
                { title: "", dataKey: "7" },
                { title: "", dataKey: "8" },
                { title: "", dataKey: "9" },
                { title: "T1", dataKey: "10" },
                { title: "", dataKey: "11" },
                { title: "", dataKey: "12" },
                { title: "", dataKey: "13" },
                { title: "", dataKey: "14" },
                { title: "", dataKey: "15" },
                { title: "Total Finished", dataKey: "19" },
                { title: "%", dataKey: "20" },
                { title: "Note", dataKey: "21" }
            ];
            var rows2 = [
                ["", "", "", "", "", "M1", "", "", "M2", "", "", "M3", "", "", "M4", "", "", "", ""],
                ["", "", "", "", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "", "", ""],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["TOTAL", "", "0", "Same", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0", "", ""],
            ];
            doc.autoTable(columns2, rows2, {
                theme: 'plain',
                styles: {
                    overflow: 'linebreak',
                    lineColor: 0,
                    lineWidth: 0.3,
                    halign: 'center',
                    cellPadding: 2
                },
                headerStyles: {
                    fontSize: 7
                },
                showHeader: 'everyPage',
                startY: 160,
                drawRow: function (row, data) {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(6);
                },
                drawCell: function (cell, data) {
                    // Rowspan
                    doc.setFontSize(6);
                }
            });
            doc.save("progress-evaluation.pdf");
            //=========================== END TRIMESTER MODEL =================================
        }
        else if (this.is_year) {
            //=========================== START YEAR MODEL =================================
            var columns = [{ title: "0", dataKey: "0" },
                { title: "1", dataKey: "1" },
                { title: "2", dataKey: "2" },
                { title: "3", dataKey: "3" }
            ];
            var rows = [
                ["Work Code", "00000000", "Project Code", "24200"],
                ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
                ["Start Date", "1-Jan-18", "", ""],
                ["Finished Date", "31-Jan-18", "", ""],
            ];
            var doc = new jsPDF('l', 'pt');
            doc.autoTableSetDefaults({
                margin: { top: 30 },
                addPageContent: function (data) {
                    doc.setFontSize(14);
                    doc.text('VOLUME PROGRESS EVALUATION', 320, 50);
                }
            });
            doc.autoTable(columns, rows, {
                theme: 'plain',
                styles: {
                    lineColor: 0,
                    lineWidth: 0
                },
                showHeader: 'never',
                startY: 60,
                drawRow: function (row, data) {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(10);
                },
                drawCell: function (cell, data) {
                    // Rowspan
                }
            });
            var columns2 = [{ title: "No", dataKey: "0" },
                { title: "Staff Name", dataKey: "1" },
                { title: "Total Target", dataKey: "2" },
                { title: "Total Target \n vs Details", dataKey: "3" },
                { title: "", dataKey: "4" },
                { title: "", dataKey: "5" },
                { title: "", dataKey: "6" },
                { title: "", dataKey: "7" },
                { title: "", dataKey: "8" },
                { title: "", dataKey: "9" },
                { title: "Y1", dataKey: "10" },
                { title: "", dataKey: "11" },
                { title: "", dataKey: "12" },
                { title: "", dataKey: "13" },
                { title: "", dataKey: "14" },
                { title: "", dataKey: "15" },
                { title: "Total Finished", dataKey: "19" },
                { title: "%", dataKey: "20" },
                { title: "Note", dataKey: "21" }
            ];
            var rows2 = [
                ["", "", "", "", "", "T1", "", "", "T2", "", "", "T3", "", "", "T4", "", "", "", ""],
                ["", "", "", "", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%", "", "", ""],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "0", "", "text"],
                ["TOTAL", "", "0", "Same", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0", "", ""],
            ];
            doc.autoTable(columns2, rows2, {
                theme: 'plain',
                styles: {
                    overflow: 'linebreak',
                    lineColor: 0,
                    lineWidth: 0.3,
                    halign: 'center',
                    cellPadding: 2
                },
                headerStyles: {
                    fontSize: 7
                },
                showHeader: 'everyPage',
                startY: 160,
                drawRow: function (row, data) {
                    // Colspan
                    doc.setFontStyle('bold');
                    doc.setFontSize(6);
                },
                drawCell: function (cell, data) {
                    // Rowspan
                    doc.setFontSize(6);
                }
            });
            doc.save("progress-evaluation.pdf");
            //=========================== END YEAR MODEL =================================
        }
    };
    PdfProgressEvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdf-progress-evaluation',
            template: __webpack_require__(/*! ./pdf-progress-evaluation.component.html */ "./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./pdf-progress-evaluation.component.scss */ "./src/app/documents/pdf-progress-evaluation/pdf-progress-evaluation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PdfProgressEvaluationComponent);
    return PdfProgressEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/documents/pdf-sop/pdf-sop.component.html":
/*!**********************************************************!*\
  !*** ./src/app/documents/pdf-sop/pdf-sop.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/pdf-sop/pdf-sop.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/documents/pdf-sop/pdf-sop.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documents/pdf-sop/pdf-sop.component.ts":
/*!********************************************************!*\
  !*** ./src/app/documents/pdf-sop/pdf-sop.component.ts ***!
  \********************************************************/
/*! exports provided: PdfSopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfSopComponent", function() { return PdfSopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _objects_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/organisation/organisation.service */ "./src/app/objects/organisation/organisation.service.ts");
/* harmony import */ var _objects_branch_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objects/branch/branch.service */ "./src/app/objects/branch/branch.service.ts");
/* harmony import */ var _objects_department_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../objects/department/department.service */ "./src/app/objects/department/department.service.ts");
/* harmony import */ var _objects_sub_department_sub_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../objects/sub_department/sub-department.service */ "./src/app/objects/sub_department/sub-department.service.ts");
/* harmony import */ var _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../objects/sop/sop.service */ "./src/app/objects/sop/sop.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _objects_project_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../objects/project/project.service */ "./src/app/objects/project/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var PdfSopComponent = /** @class */ (function () {
    function PdfSopComponent(_organisationService, _branchService, _departmentService, _subDepartmentService, _sopService, _projectService) {
        this._organisationService = _organisationService;
        this._branchService = _branchService;
        this._departmentService = _departmentService;
        this._subDepartmentService = _subDepartmentService;
        this._sopService = _sopService;
        this._projectService = _projectService;
        this.sop_id = "";
        this.project_id = "1";
        this.organisation_name = "";
        this.branch_name = "";
        this.department_name = "";
        this.sub_department_name = "";
        this.sop_title = "NA";
        this.sop_creation = new Date();
        this.sop_revision = new Date();
        this.sop_published = new Date();
        this.sop_approvment = "NA";
        this.sop_rules = "NA";
        this.sop_warning = "NA";
        this.sop_staff_qualification = "NA";
        this.sop_tools = "NA";
        this.sop_type_reports = "NA";
        this.sop_objectives = "NA";
        this.units = [""];
        this.activities = [];
    }
    PdfSopComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.sop_id === "" && this.project_id === "") {
            console.log("ERREUR : Aucune donnée envoyé au componnent de création du PDF.");
        }
        else if (this.sop_id !== "") {
            this.getSOP(this.sop_id);
            setTimeout(function () {
                console.log(_this.sop_title);
                //console.log("date de creation : "+ );
                console.log("fin");
                //this.download(this.sop_title);
            }, 1000);
            //let value = this.sop_creation.transform(value, 'dd/MM/yyyy');
        }
        else if (this.project_id !== "") {
            this.getProject(this.project_id);
            setTimeout(function () {
                console.log(_this.sop_title);
                //console.log("date de creation : "+ );
                console.log("fin");
                //this.download(this.sop_title);
            }, 2000);
        }
    };
    PdfSopComponent.prototype.download = function (sop_title) {
        var columns = [{ title: "0", dataKey: "0" },
            { title: "1", dataKey: "1" },
            { title: "2", dataKey: "2" },
            { title: "3", dataKey: "3" }
        ];
        var rows = [
            ["", this.organisation_name, "Creation Date", new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.sop_creation, 'dd-MM-yyyy')],
            ["", this.branch_name, "Revision Date", new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.sop_revision, 'dd-MM-yyyy')],
            ["", this.department_name, "Published Date", new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.sop_published, 'dd-MM-yyyy')],
            ["", this.sub_department_name, "Approved By", this.sop_approvment],
            ["", "", "", ""]
        ];
        var doc = new jsPDF('l', 'pt');
        doc.autoTable(columns, rows, {
            theme: 'plain',
            styles: {
                lineColor: 0,
                lineWidth: 1
            },
            showHeader: 'never',
            startY: 60,
            drawRow: function (row, data) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(10);
                if (row.index === 4) {
                    doc.setTextColor(0, 0, 0);
                    doc.rect(data.settings.margin.left, row.y, data.table.width, 40, 'S');
                    doc.autoTableText(sop_title, data.settings.margin.left + data.table.width / 2, row.y + row.height, {
                        halign: 'center',
                        valign: 'middle'
                    });
                    data.cursor.y += 60;
                }
            },
            drawCell: function (cell, data) {
                // Rowspan
                if (data.row.index === 4) {
                    if (data.column.dataKey === '0') {
                        if (data.row.index % 5 === 0) {
                            doc.rect(cell.x, cell.y, data.table.width, cell.height * 5, 'S');
                            doc.autoTableText("Logo", cell.x + cell.width / 2, cell.y + cell.height * 5 / 2, {
                                halign: 'center',
                                valign: 'middle'
                            });
                        }
                        return false;
                    }
                    return false;
                }
            }
        });
        var columns = [{ title: "0", dataKey: "0" },
            { title: "1", dataKey: "1" },
            { title: "2", dataKey: "2" }
        ];
        var rows = [
            ["Base Rule/Regulation", "", "Staff Qualifications"],
            [this.sop_rules, "", this.sop_staff_qualification],
            ["Related Working Units", "", "Supporting tools"],
            ["No units", "", this.sop_tools],
            ["Warning", "", "Types of Forms and Reports"],
            [this.sop_warning, "", this.sop_type_reports],
            ["", "", "", ""]
        ];
        var sopObjectives = this.sop_objectives;
        doc.autoTable(columns, rows, {
            theme: 'plain',
            styles: {
                lineColor: 0,
                lineWidth: 1
            },
            showHeader: 'never',
            startY: 210,
            drawRow: function (row2, data2) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(10);
                if (row2.index === 6) {
                    doc.setTextColor(0, 0, 0);
                    doc.rect(data2.settings.margin.left, row2.y, data2.table.width, 40, 'S');
                    doc.autoTableText(sopObjectives, data2.settings.margin.left + data2.table.width / 2, row2.y + row2.height, {
                        halign: 'left',
                        valign: 'middle'
                    });
                    data2.cursor.y += 60;
                }
            },
            drawCell: function (cell2, data2) {
                // Rowspan
                if (data2.row.index === 6) {
                    if (data2.column.dataKey === '1') {
                        if (data2.row.index % 6 === 0 && data2.row.index !== 6) {
                            doc.rect(cell2.x, cell2.y, 45, cell2.height * 6, 'S');
                            doc.autoTableText("", cell2.x + cell2.width / 2, cell2.y + cell2.height * 6 / 2, {
                                halign: 'left',
                                valign: 'middle'
                            });
                        }
                        return false;
                    }
                    return false;
                }
            }
        });
        doc.addPage();
        var columns = [{ title: "0", dataKey: "0" },
            { title: "1", dataKey: "1" },
            { title: "2", dataKey: "2" },
            { title: "3", dataKey: "3" },
            { title: "4", dataKey: "4" },
            { title: "5", dataKey: "5" },
            { title: "6", dataKey: "6" },
            { title: "7", dataKey: "7" },
            { title: "8", dataKey: "8" }
        ];
        var rows = [
            ["No", "Activity", "Unit 1", "Unit 2", "Unit 3", "Unit 4", "Supporting \n Materials/input", "Duration", "Output"],
            ["1", "description", "schema", "schema", "schema", "schema", "text", "time", "text"],
            ["2", "description", "schema", "schema", "schema", "schema", "text", "time", "text"],
            ["3", "description", "schema", "schema", "schema", "schema", "text", "time", "text"],
            ["4", "description", "schema", "schema", "schema", "schema", "text", "time", "text"],
        ];
        doc.autoTable(columns, rows, {
            theme: 'plain',
            styles: {
                lineColor: 0,
                lineWidth: 1
            },
            showHeader: 'never',
            startY: 10,
            drawRow: function (row2, data2) {
                // Colspan
                doc.setFontStyle('bold');
                doc.setFontSize(10);
            },
            drawCell: function (cell2, data2) {
                // Rowspan
            }
        });
        doc.save("sop.pdf");
    };
    PdfSopComponent.prototype.getAllSopFromProject = function (idProject) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._projectService.selectAllFromProject(idProject)
                            .subscribe(function (res) {
                            console.log(res['data']);
                            // Take all the sop informations and preparing them for display in the var
                            _this.sop_creation = new Date(res['data'][0]['sop_creation']);
                            _this.sop_revision = new Date(res['data'][0]['sop_revision']);
                            _this.sop_published = new Date(res['data'][0]['sop_published']);
                            _this.sop_approvment = res['data'][0]['sop_approvment'];
                            _this.sop_rules = res['data'][0]['sop_rules'];
                            _this.sop_warning = res['data'][0]['sop_warning'];
                            _this.sop_staff_qualification = res['data'][0]['sop_staff_qualification'];
                            _this.sop_tools = res['data'][0]['sop_tools'];
                            _this.sop_type_reports = res['data'][0]['sop_type_reports'];
                            _this.sop_objectives = res['data'][0]['sop_objectives'];
                            _this.sop_title = "STANDARD OPERATION PROCEDURE \n " + res['data'][0]['sop_title'];
                            //creating a table of the units working for this project
                            var counter = 0;
                            for (var _i = 0, _a = res['data']; _i < _a.length; _i++) {
                                var job = _a[_i];
                                for (var _b = 0, _c = job['activities']; _b < _c.length; _b++) {
                                    var activitie = _c[_b];
                                    for (var _d = 0, _e = activitie['activity_unit']; _d < _e.length; _d++) {
                                        var unit = _e[_d];
                                        if (!_this.isInUnitTable(unit)) {
                                            console.log(unit);
                                            if (counter == 0) {
                                                _this.units[0] = unit;
                                            }
                                            else {
                                                _this.units.push(unit);
                                            }
                                        }
                                        counter = counter + 1;
                                    }
                                }
                            }
                            console.log("Tableau final 1 : " + _this.units);
                            //End unit tab filling up
                            var counter2 = 0;
                            for (var _f = 0, _g = res['data']; _f < _g.length; _f++) {
                                var job = _g[_f];
                                for (var _h = 0, _j = job['activities']; _h < _j.length; _h++) {
                                    var activitie = _j[_h];
                                    console.log(activitie);
                                    if (activitie['activity_is_father'] === null) {
                                        var temp = [];
                                        temp.push(activitie['activity_id']);
                                        temp.push(activitie['activity_title']);
                                        for (var _k = 0, _l = _this.units; _k < _l.length; _k++) {
                                            var i = _l[_k];
                                            temp.push("");
                                        }
                                        _this.activities.push(temp);
                                    }
                                    else {
                                        var pointeur = 0;
                                        for (var j in _this.activities) {
                                            if (j[0] === activitie['activity_id']) {
                                                if (activitie['activity_unit'] == null) {
                                                    var points = 0;
                                                    var res_1 = void 0;
                                                    for (var _m = 0, _o = _this.units; _m < _o.length; _m++) {
                                                        var unit = _o[_m];
                                                        if (unit == activitie['activity_unit'][0]) {
                                                            res_1 = points;
                                                        }
                                                        points = points + 1;
                                                    }
                                                    if (res_1 !== null) {
                                                        _this.activities[pointeur][res_1 + 2] = activitie['activity_title'];
                                                    }
                                                }
                                            }
                                            pointeur = pointeur + 1;
                                        }
                                    }
                                }
                            }
                            console.log("Tableau final 2 : " + _this.activities);
                        }, //end subscribe
                        function (//end subscribe
                        error) {
                            console.log("ERREUR : ", error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PdfSopComponent.prototype.getOrganisation = function (idSubDepartment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._organisationService.selectSchema(idSubDepartment)
                            .subscribe(function (res) {
                            console.log(res['data']);
                            _this.sub_department_name = res['data'][0]['sub_department_name'];
                            _this.department_name = res['data'][0]['department_name'];
                            _this.branch_name = res['data'][0]['branch_name'];
                            _this.organisation_name = res['data'][0]['organisation_name'];
                        }, function (error) {
                            console.log("ERREUR : ", error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PdfSopComponent.prototype.getSOP = function (idSop) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ici : " + idSop);
                        return [4 /*yield*/, this._sopService.getSop(idSop)
                                .subscribe(function (res) {
                                console.log(res['data']);
                                //this.res=res['data'];
                                _this.sop_creation = new Date(res['data']['sop_creation']);
                                _this.sop_revision = new Date(res['data']['sop_revision']);
                                _this.sop_published = new Date(res['data']['sop_published']);
                                _this.sop_approvment = res['data']['sop_approvment'];
                                _this.sop_rules = res['data']['sop_rules'];
                                _this.sop_warning = res['data']['sop_warning'];
                                _this.sop_staff_qualification = res['data']['sop_staff_qualification'];
                                _this.sop_tools = res['data']['sop_tools'];
                                _this.sop_type_reports = res['data']['sop_type_reports'];
                                _this.sop_objectives = res['data']['sop_objectives'];
                                _this.sop_title = "STANDARD OPERATION PROCEDURE \n " + res['data']['sop_title'];
                                console.log(res['data']['sop_title']);
                            }, function (error) {
                                console.log("ERREUR : ", error);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PdfSopComponent.prototype.getProject = function (idProject) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ici projet id : " + idProject);
                        return [4 /*yield*/, this._projectService.getProject(idProject)
                                .subscribe(function (res) {
                                console.log(res['data']);
                                //this.res=res['data'];
                                _this.getOrganisation(res['data']['sub_department_id']);
                                _this.getAllSopFromProject(idProject);
                            }, function (error) {
                                console.log("ERREUR : ", error);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PdfSopComponent.prototype.isInUnitTable = function (value) {
        var exist = false;
        for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
            var pin = _a[_i];
            if (pin == value && !exist) {
                exist = true;
            }
        }
        return exist;
    };
    PdfSopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdf-sop',
            template: __webpack_require__(/*! ./pdf-sop.component.html */ "./src/app/documents/pdf-sop/pdf-sop.component.html"),
            styles: [__webpack_require__(/*! ./pdf-sop.component.scss */ "./src/app/documents/pdf-sop/pdf-sop.component.scss")]
        }),
        __metadata("design:paramtypes", [_objects_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"],
            _objects_branch_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"],
            _objects_department_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"],
            _objects_sub_department_sub_department_service__WEBPACK_IMPORTED_MODULE_5__["SubDepartmentService"],
            _objects_sop_sop_service__WEBPACK_IMPORTED_MODULE_6__["SopService"],
            _objects_project_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"]])
    ], PdfSopComponent);
    return PdfSopComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(memberService, myRoute) {
        this.memberService = memberService;
        this.myRoute = myRoute;
    }
    /*canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot){
      if(this.memberService.isLoggedIn()){
        return true;
      }else{
        this.myRoute.navigate(["authentification"]);
        return false;
      }
    }*/
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        //get user data
        return this.memberService.setUserDetails().pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.memberService.logout();
            _this.myRoute.navigate(['/authentification']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('some message');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res !== null) {
                _this.memberService.storeUserDataFull(res['data']);
                return true;
            }
            else {
                _this.memberService.logout();
                _this.myRoute.navigate(['/authentification']);
                return false;
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/objects/activity/activity.service.ts":
/*!******************************************************!*\
  !*** ./src/app/objects/activity/activity.service.ts ***!
  \******************************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityService = /** @class */ (function () {
    function ActivityService(http, router) {
        this.http = http;
        this.router = router;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    ActivityService.prototype.createActivity = function (activity_title, activity_description, activity_type_duration, activity_duration, activity_type, activity_type_output, activity_shape, activity_id_is_father, sop_id, managment_level_id) {
        var body = {
            activity_description: activity_description,
            activity_shape: activity_shape,
            activity_title: activity_title,
            activity_id_is_father: activity_id_is_father,
            sop_id: sop_id,
            activity_type_duration: activity_type_duration,
            activity_duration: activity_duration,
            activity_type: activity_type,
            activity_type_output: activity_type_output,
            managment_level_id: managment_level_id
        };
        console.log(body);
        this.generateHeaders();
        return this.http.post(this.domain + '/api/activity/create', body, this.httpOptions);
    };
    ActivityService.prototype.select = function (activity_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/activity/find_one/' + activity_id, this.httpOptions);
    };
    ActivityService.prototype.selectAllFromSop = function (sop_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/activity/all_from_sop/' + sop_id, this.httpOptions);
    };
    ActivityService.prototype.selectAllFromJob = function (job_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/activity/all_from_job/' + job_id, this.httpOptions);
    };
    ActivityService.prototype.selectAllFromUnit = function (unit_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/activity/all_from_unit/' + unit_id, this.httpOptions);
    };
    ActivityService.prototype.delete = function (activity_id) {
        this.generateHeaders();
        console.log("activity id : ", activity_id);
        return this.http.delete(this.domain + '/api/activity/delete/' + activity_id, this.httpOptions);
    };
    ActivityService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    ActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/objects/activity/activity.ts":
/*!**********************************************!*\
  !*** ./src/app/objects/activity/activity.ts ***!
  \**********************************************/
/*! exports provided: Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
var Activity = /** @class */ (function () {
    function Activity() {
    }
    return Activity;
}());



/***/ }),

/***/ "./src/app/objects/branch/branch.service.ts":
/*!**************************************************!*\
  !*** ./src/app/objects/branch/branch.service.ts ***!
  \**************************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BranchService = /** @class */ (function () {
    function BranchService(http) {
        this.http = http;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    BranchService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    BranchService.prototype.add = function (branchName, organisationId) {
        var body = {
            branch_name: branchName,
            organisation_id: organisationId
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/branch/create', body, this.httpOptions);
    };
    BranchService.prototype.selectAllFromOrganisation = function (organisation) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/branch/all?organisation=' + organisation, this.httpOptions);
    };
    BranchService.prototype.delete = function (branch) {
        this.generateHeaders();
        return this.http.delete(this.domain + '/api/branch/delete/' + branch, this.httpOptions);
    };
    BranchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BranchService);
    return BranchService;
}());



/***/ }),

/***/ "./src/app/objects/department/department.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/objects/department/department.service.ts ***!
  \**********************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    DepartmentService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    DepartmentService.prototype.add = function (departmentName, branchId) {
        var body = {
            department_name: departmentName,
            branch_id: branchId
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/department/create', body, this.httpOptions);
    };
    DepartmentService.prototype.selectAllFromBranch = function (branch) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/department/all?branch=' + branch, this.httpOptions);
    };
    DepartmentService.prototype.delete = function (department) {
        this.generateHeaders();
        return this.http.delete(this.domain + '/api/department/delete/' + department, this.httpOptions);
    };
    DepartmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/objects/job/job.service.ts":
/*!********************************************!*\
  !*** ./src/app/objects/job/job.service.ts ***!
  \********************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobService = /** @class */ (function () {
    function JobService(http, router) {
        this.http = http;
        this.router = router;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    JobService.prototype.createJob = function (job_name, jobe_code, sop_id) {
        var body = {
            job_name: job_name,
            job_code: jobe_code,
            sop_id: sop_id
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/job/create', body, this.httpOptions);
    };
    JobService.prototype.select = function (job_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/job/find_one/' + job_id, this.httpOptions);
    };
    JobService.prototype.selectAllFromSop = function (sop_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/job/all_from_sop/' + sop_id, this.httpOptions);
    };
    JobService.prototype.bind_job_activity = function (job_id, activity_id) {
        this.generateHeaders();
        var body = {
            activity_id: activity_id,
            job_id: job_id
        };
        return this.http.post(this.domain + '/api/job/bind_job_activity/', body, this.httpOptions);
    };
    JobService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    JobService.prototype.getJobIdLocal = function () {
        if (localStorage.getItem("Job_id") === null) {
            this.router.navigate(['/', 'job-list']);
        }
        else {
            var job_id = localStorage.getItem('Job_id');
            return job_id;
        }
    };
    JobService.prototype.removeJobIdLocal = function () {
        localStorage.removeItem('Job_id');
    };
    JobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/objects/job/job.ts":
/*!************************************!*\
  !*** ./src/app/objects/job/job.ts ***!
  \************************************/
/*! exports provided: Job */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Job", function() { return Job; });
var Job = /** @class */ (function () {
    function Job() {
    }
    return Job;
}());



/***/ }),

/***/ "./src/app/objects/managment_level/managment-level.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/objects/managment_level/managment-level.service.ts ***!
  \********************************************************************/
/*! exports provided: ManagmentLevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagmentLevelService", function() { return ManagmentLevelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagmentLevelService = /** @class */ (function () {
    function ManagmentLevelService(http) {
        this.http = http;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    ManagmentLevelService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    ManagmentLevelService.prototype.selectAll = function () {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/managment_level/all', this.httpOptions);
    };
    ManagmentLevelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ManagmentLevelService);
    return ManagmentLevelService;
}());



/***/ }),

/***/ "./src/app/objects/member/member.service.ts":
/*!**************************************************!*\
  !*** ./src/app/objects/member/member.service.ts ***!
  \**************************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberService = /** @class */ (function () {
    function MemberService(http) {
        this.http = http;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    MemberService.prototype.select = function (member_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/member/find_one/' + member_id, this.httpOptions);
    };
    MemberService.prototype.auth = function (mail, password) {
        var body = {
            mail: mail,
            password: password
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/member/login', body, this.httpOptions);
    };
    MemberService.prototype.seedCheck = function (seed) {
        var body = {
            seed: seed
        };
        this.generateHeaders();
        return this.http.put(this.domain + '/api/member/validate_registration', body, this.httpOptions);
    };
    MemberService.prototype.register = function (mail, password, first_name, name, is_admin, sub_department_id, managment_level) {
        var body = {
            mail: mail,
            password: password,
            first_name: first_name,
            name: name,
            is_admin: is_admin,
            sub_department_id: sub_department_id,
            managment_level_id: managment_level
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/member/register', body, this.httpOptions);
    };
    MemberService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    MemberService.prototype.storeUserData = function (token) {
        localStorage.setItem('Token', token);
    };
    MemberService.prototype.storeUserDataFull = function (user) {
        localStorage.setItem('Id', user['member_id']);
        localStorage.setItem('FirstName', user['member_first_name']);
        localStorage.setItem('Name', user['member_name']);
        localStorage.setItem('Mail', user['member_mail']);
    };
    MemberService.prototype.getUserDataFull = function () {
        if (localStorage.getItem("Mail") === null) {
            return {
                mail: "Erreur",
                first_name: "Erreur",
                name: "Erreur"
            };
        }
        else {
            return {
                id: localStorage.getItem("Id"),
                mail: localStorage.getItem("Mail"),
                first_name: localStorage.getItem("FirstName"),
                name: localStorage.getItem("Name")
            };
        }
    };
    MemberService.prototype.logout = function () {
        localStorage.clear();
    };
    MemberService.prototype.getToken = function () {
        return localStorage.getItem("Token");
    };
    MemberService.prototype.isLoggedIn = function () {
        return this.getToken() !== null;
    };
    MemberService.prototype.setUserDetails = function () {
        var body = {};
        this.generateHeaders();
        return this.http.post(this.domain + '/api/member/loggedIn', body, this.httpOptions);
    };
    MemberService.prototype.selectAll = function () {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/member/all', this.httpOptions);
    };
    MemberService.prototype.selectAllWaiting = function () {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/member/waiting_member', this.httpOptions);
    };
    MemberService.prototype.validateUser = function (idUser) {
        var body = {
            member_id: idUser
        };
        console.log(idUser);
        this.generateHeaders();
        return this.http.put(this.domain + '/api/member/validate_member', body, this.httpOptions);
    };
    MemberService.prototype.passwordUpdate = function (actual, newP, confP) {
        var body = {
            member_mail: localStorage.getItem("Mail"),
            old_password: actual,
            new_password1: newP,
            new_password2: confP
        };
        console.log(localStorage.getItem("Mail"));
        this.generateHeaders();
        return this.http.put(this.domain + '/api/member/update_password', body, this.httpOptions);
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/objects/member_activity_project/member-activity-project.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/objects/member_activity_project/member-activity-project.service.ts ***!
  \************************************************************************************/
/*! exports provided: MemberActivityProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberActivityProjectService", function() { return MemberActivityProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberActivityProjectService = /** @class */ (function () {
    function MemberActivityProjectService(http, router) {
        this.http = http;
        this.router = router;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVEUR_URL;
    }
    MemberActivityProjectService.prototype.selectAllFromProject = function (project_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/project/all_member_activity_project/' + project_id, this.httpOptions);
    };
    MemberActivityProjectService.prototype.selectAllFromProjectDistinct = function (project_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/project/all_member_activity_project_distinct/' + project_id, this.httpOptions);
    };
    MemberActivityProjectService.prototype.update = function (m_a_p) {
        var body = {
            project_id: m_a_p.project_id,
            member_id: m_a_p.member_id,
            activity_id: m_a_p.activity_id,
            target_date: m_a_p.target_date,
            date_begin: m_a_p.date_begin,
            evaluation: m_a_p.evaluation,
            finished_date: m_a_p.finished_date,
            sign: m_a_p.sign,
            note: m_a_p.note,
            target_quantity: m_a_p.target_quantity,
            finished_quantity: m_a_p.finished_quantity,
            finished_duration: m_a_p.finished_duration
        };
        this.generateHeaders();
        return this.http.put(this.domain + '/api/project/update_member_activity_project', body, this.httpOptions);
    };
    MemberActivityProjectService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    MemberActivityProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MemberActivityProjectService);
    return MemberActivityProjectService;
}());



/***/ }),

/***/ "./src/app/objects/member_activity_project/member-activity-project.ts":
/*!****************************************************************************!*\
  !*** ./src/app/objects/member_activity_project/member-activity-project.ts ***!
  \****************************************************************************/
/*! exports provided: MemberActivityProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberActivityProject", function() { return MemberActivityProject; });
var MemberActivityProject = /** @class */ (function () {
    function MemberActivityProject() {
    }
    return MemberActivityProject;
}());



/***/ }),

/***/ "./src/app/objects/organisation/organisation.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/objects/organisation/organisation.service.ts ***!
  \**************************************************************/
/*! exports provided: OrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return OrganisationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganisationService = /** @class */ (function () {
    function OrganisationService(http) {
        this.http = http;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    OrganisationService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    OrganisationService.prototype.add = function (organisationName) {
        var body = {
            organisation_name: organisationName
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/organisation/create', body, this.httpOptions);
    };
    OrganisationService.prototype.selectAll = function () {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/organisation/all', this.httpOptions);
    };
    OrganisationService.prototype.delete = function (organisation) {
        this.generateHeaders();
        return this.http.delete(this.domain + '/api/organisation/delete/' + organisation, this.httpOptions);
    };
    OrganisationService.prototype.selectSchema = function (sub_dep_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/sub_department/find_one/' + sub_dep_id, this.httpOptions);
    };
    OrganisationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrganisationService);
    return OrganisationService;
}());



/***/ }),

/***/ "./src/app/objects/project/project.service.ts":
/*!****************************************************!*\
  !*** ./src/app/objects/project/project.service.ts ***!
  \****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(http, router) {
        this.http = http;
        this.router = router;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    ProjectService.prototype.selectAll = function () {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/project/all', this.httpOptions);
    };
    ProjectService.prototype.select = function (project_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/project/find_one/' + project_id, this.httpOptions);
    };
    ProjectService.prototype.createProject = function (project_title, project_code, project_work_code, project_start, project_end, sub_department_id) {
        var body = {
            project_title: project_title,
            project_code: project_code,
            project_work_code: project_work_code,
            project_start: project_start,
            project_end: project_end,
            sub_department_id: sub_department_id
        };
        console.log(body);
        this.generateHeaders();
        return this.http.post(this.domain + '/api/project/create', body, this.httpOptions);
    };
    ProjectService.prototype.bindProjectJob = function (project_id, job_id) {
        var body = {
            project_id: project_id,
            job_id: job_id
        };
        console.log(body);
        this.generateHeaders();
        return this.http.post(this.domain + '/api/project/bind_project_job', body, this.httpOptions);
    };
    ProjectService.prototype.bindMemberUnitProject = function (project_id, unit_id, member_id) {
        var body = {
            project_id: project_id,
            unit_id: unit_id,
            member_id: member_id
        };
        console.log(body);
        this.generateHeaders();
        return this.http.post(this.domain + '/api/project/bind_member_unit_project', body, this.httpOptions);
    };
    ProjectService.prototype.bindMemberActivityProject = function (project_id, member_id, activity_id, target_date, date_begin, evaluation, finished_date, sign, note, target_quantity, finished_quantity, finished_duration) {
        var body = {
            project_id: project_id,
            member_id: member_id,
            activity_id: activity_id,
            target_date: target_date,
            date_begin: date_begin,
            evaluation: evaluation,
            finished_date: finished_date,
            sign: sign,
            note: note,
            target_quantity: target_quantity,
            finished_quantity: finished_quantity,
            finished_duration: finished_duration
        };
        console.log(body);
        this.generateHeaders();
        return this.http.post(this.domain + '/api/project/bind_member_activity_project', body, this.httpOptions);
    };
    ProjectService.prototype.delete = function (project_id) {
        this.generateHeaders();
        return this.http.delete(this.domain + '/api/project/delete/' + project_id, this.httpOptions);
    };
    ProjectService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    ProjectService.prototype.getProject = function (project_id) {
        this.generateHeaders();
        console.log(project_id);
        return this.http.get(this.domain + '/api/project/find_One/' + project_id, this.httpOptions);
    };
    ProjectService.prototype.selectAllFromProject = function (project_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/activity/all_from_all_job_from_project/' + project_id, this.httpOptions);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/objects/project/project.ts":
/*!********************************************!*\
  !*** ./src/app/objects/project/project.ts ***!
  \********************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/objects/sop/sop.service.ts":
/*!********************************************!*\
  !*** ./src/app/objects/sop/sop.service.ts ***!
  \********************************************/
/*! exports provided: SopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SopService", function() { return SopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SopService = /** @class */ (function () {
    function SopService(http, router) {
        this.http = http;
        this.router = router;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    SopService.prototype.createSop = function (sop_title, sop_creation, sop_revision, sop_published, sop_approvement, sop_rules, sop_warning, sop_staff_qualification, sop_tools, sop_type_reports, sop_objectives) {
        var body = {
            sop_title: sop_title,
            sop_creation: sop_creation,
            sop_revision: sop_revision,
            sop_published: sop_published,
            sop_approvment: sop_approvement,
            sop_rules: sop_rules,
            sop_warning: sop_warning,
            sop_staff_qualification: sop_staff_qualification,
            sop_tools: sop_tools,
            sop_type_reports: sop_type_reports,
            sop_objectives: sop_objectives
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/sop/create', body, this.httpOptions);
    };
    SopService.prototype.selectAll = function () {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/sop/all', this.httpOptions);
    };
    SopService.prototype.delete = function (sop_id) {
        this.generateHeaders();
        return this.http.delete(this.domain + '/api/sop/delete/' + sop_id, this.httpOptions);
    };
    SopService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    SopService.prototype.getSopIdLocal = function () {
        if (localStorage.getItem("Sop_id") === null) {
            this.router.navigate(['/', 'sop-list']);
        }
        else {
            var sop_id = localStorage.getItem('Sop_id');
            return sop_id;
        }
    };
    SopService.prototype.removeSopIdLocal = function () {
        localStorage.removeItem('Sop_id');
    };
    SopService.prototype.getSop = function (sop_id) {
        this.generateHeaders();
        console.log(sop_id);
        return this.http.get(this.domain + '/api/sop/findOne/' + sop_id, this.httpOptions);
    };
    SopService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SopService);
    return SopService;
}());



/***/ }),

/***/ "./src/app/objects/sop/sop.ts":
/*!************************************!*\
  !*** ./src/app/objects/sop/sop.ts ***!
  \************************************/
/*! exports provided: Sop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sop", function() { return Sop; });
var Sop = /** @class */ (function () {
    function Sop() {
    }
    return Sop;
}());



/***/ }),

/***/ "./src/app/objects/sub_department/sub-department.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/objects/sub_department/sub-department.service.ts ***!
  \******************************************************************/
/*! exports provided: SubDepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubDepartmentService", function() { return SubDepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubDepartmentService = /** @class */ (function () {
    function SubDepartmentService(http) {
        this.http = http;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVEUR_URL;
    }
    SubDepartmentService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    SubDepartmentService.prototype.add = function (subDepartmentName, departmentId) {
        var body = {
            sub_department_name: subDepartmentName,
            department_id: departmentId
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/sub_department/create', body, this.httpOptions);
    };
    SubDepartmentService.prototype.selectAllFromDepartment = function (department) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/sub_department/all?department=' + department, this.httpOptions);
    };
    SubDepartmentService.prototype.delete = function (sub_department) {
        this.generateHeaders();
        return this.http.delete(this.domain + '/api/sub_department/delete/' + sub_department, this.httpOptions);
    };
    SubDepartmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SubDepartmentService);
    return SubDepartmentService;
}());



/***/ }),

/***/ "./src/app/objects/unit/unit.service.ts":
/*!**********************************************!*\
  !*** ./src/app/objects/unit/unit.service.ts ***!
  \**********************************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnitService = /** @class */ (function () {
    function UnitService(http, router) {
        this.http = http;
        this.router = router;
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVEUR_URL;
    }
    UnitService.prototype.createUnit = function (unit_name) {
        var body = {
            unit_name: unit_name
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/unit/create', body, this.httpOptions);
    };
    UnitService.prototype.bindUnitSop = function (unit_id, sop_id) {
        var body = {
            unit_id: unit_id,
            sop_id: sop_id
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/sop/bind_sop_unit', body, this.httpOptions);
    };
    UnitService.prototype.bindUnitActivity = function (unit_id, activity_id) {
        var body = {
            unit_id: unit_id,
            activity_id: activity_id
        };
        this.generateHeaders();
        return this.http.post(this.domain + '/api/unit/execute_activity', body, this.httpOptions);
    };
    UnitService.prototype.selectAllFromSop = function (sop_id) {
        this.generateHeaders();
        return this.http.get(this.domain + '/api/unit/all_from_sop/' + sop_id, this.httpOptions);
    };
    UnitService.prototype.generateHeaders = function () {
        if (localStorage.getItem("Token") === null) {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("Token")
                })
            };
        }
    };
    UnitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UnitService);
    return UnitService;
}());



/***/ }),

/***/ "./src/app/shared/Loader/loader/loader.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/Loader/loader/loader.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"loader\">\r\n        <div class=\"loader-inner\">\r\n          <div class=\"loading one\"></div>\r\n        </div>\r\n        <div class=\"loader-inner\">\r\n          <div class=\"loading two\"></div>\r\n        </div>\r\n        <div class=\"loader-inner\">\r\n          <div class=\"loading three\"></div>\r\n        </div>\r\n        <div class=\"loader-inner\">\r\n          <div class=\"loading four\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/Loader/loader/loader.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/Loader/loader/loader.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  width: 150px;\n  height: 150px;\n  margin: 40px auto;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  font-size: 0;\n  line-height: 0;\n  -webkit-animation: rotate-loader 5s infinite;\n          animation: rotate-loader 5s infinite;\n  padding: 25px;\n  border: 1px solid #085193; }\n\n.loader .loader-inner {\n  position: relative;\n  display: inline-block;\n  width: 50%;\n  height: 50%; }\n\n.loader .loading {\n  position: absolute;\n  background: #085193; }\n\n.loader .one {\n  width: 100%;\n  bottom: 0;\n  height: 0;\n  -webkit-animation: loading-one 1s infinite;\n          animation: loading-one 1s infinite; }\n\n.loader .two {\n  width: 0;\n  height: 100%;\n  left: 0;\n  -webkit-animation: loading-two 1s infinite;\n          animation: loading-two 1s infinite;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s; }\n\n.loader .three {\n  width: 0;\n  height: 100%;\n  right: 0;\n  -webkit-animation: loading-two 1s infinite;\n          animation: loading-two 1s infinite;\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s; }\n\n.loader .four {\n  width: 100%;\n  top: 0;\n  height: 0;\n  -webkit-animation: loading-one 1s infinite;\n          animation: loading-one 1s infinite;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n\n@-webkit-keyframes loading-one {\n  0% {\n    height: 0;\n    opacity: 1; }\n  12.5% {\n    height: 100%;\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  100% {\n    height: 100%;\n    opacity: 0; } }\n\n@keyframes loading-one {\n  0% {\n    height: 0;\n    opacity: 1; }\n  12.5% {\n    height: 100%;\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  100% {\n    height: 100%;\n    opacity: 0; } }\n\n@-webkit-keyframes loading-two {\n  0% {\n    width: 0;\n    opacity: 1; }\n  12.5% {\n    width: 100%;\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  100% {\n    width: 100%;\n    opacity: 0; } }\n\n@keyframes loading-two {\n  0% {\n    width: 0;\n    opacity: 1; }\n  12.5% {\n    width: 100%;\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  100% {\n    width: 100%;\n    opacity: 0; } }\n\n@-webkit-keyframes rotate-loader {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  20% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  25% {\n    -webkit-transform: rotate(-135deg);\n            transform: rotate(-135deg); }\n  45% {\n    -webkit-transform: rotate(-135deg);\n            transform: rotate(-135deg); }\n  50% {\n    -webkit-transform: rotate(-225deg);\n            transform: rotate(-225deg); }\n  70% {\n    -webkit-transform: rotate(-225deg);\n            transform: rotate(-225deg); }\n  75% {\n    -webkit-transform: rotate(-315deg);\n            transform: rotate(-315deg); }\n  95% {\n    -webkit-transform: rotate(-315deg);\n            transform: rotate(-315deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes rotate-loader {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  20% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  25% {\n    -webkit-transform: rotate(-135deg);\n            transform: rotate(-135deg); }\n  45% {\n    -webkit-transform: rotate(-135deg);\n            transform: rotate(-135deg); }\n  50% {\n    -webkit-transform: rotate(-225deg);\n            transform: rotate(-225deg); }\n  70% {\n    -webkit-transform: rotate(-225deg);\n            transform: rotate(-225deg); }\n  75% {\n    -webkit-transform: rotate(-315deg);\n            transform: rotate(-315deg); }\n  95% {\n    -webkit-transform: rotate(-315deg);\n            transform: rotate(-315deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n"

/***/ }),

/***/ "./src/app/shared/Loader/loader/loader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/Loader/loader/loader.component.ts ***!
  \**********************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/Loader/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/Loader/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/nav-bar/nav-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/layout/nav-bar/nav-bar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LIGHT BLACK #222222 */\r\n\r\n.navbar-brand {\r\n  max-width: 2%;\r\n  height: auto;\r\n}\r\n\r\n.navbar {\r\n  background-color: white !important;\r\n}\r\n\r\n.navbar a{\r\n  color: #222222 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/layout/nav-bar/nav-bar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/nav-bar/nav-bar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\r\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-dark primary-color hoverable\">\r\n\r\n  <!-- Navbar brand -->\r\n  <img src=\"../../../../assets/images/logo-stikom.png\" class=\"navbar-brand img-fluid\" />\r\n\r\n  <!-- Collapse button -->\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\" aria-controls=\"basicExampleNav\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!-- Collapsible content -->\r\n  <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\r\n\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home']\" >Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" *ngIf=\"_memberService.isLoggedIn()\" [routerLink]=\"['/admin-users']\" >Admin Users\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" *ngIf=\"_memberService.isLoggedIn()\" [routerLink]=\"['/admin-organization-management']\" >Admin organizations\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" *ngIf=\"_memberService.isLoggedIn()\" [routerLink]=\"['/personal-achievement']\" >Personal achievement\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"_memberService.isLoggedIn()\" [routerLink]=\"['/project-list']\" >Projects</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"_memberService.isLoggedIn()\" [routerLink]=\"['/sop-list']\" >SOP</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"_memberService.isLoggedIn()\" [routerLink]=\"['/account']\" >My Account</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"!_memberService.isLoggedIn()\" [routerLink]=\"['/authentification']\" >Log In</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"_memberService.isLoggedIn()\" (click)=\"onLogoutClick()\" >Log Out</a>\r\n      </li>\r\n\r\n    </ul>\r\n    <!-- Links -->\r\n\r\n    <form class=\"form-inline\">\r\n      <div class=\"md-form my-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- Collapsible content -->\r\n\r\n</nav>\r\n<!--/.Navbar-->\r\n"

/***/ }),

/***/ "./src/app/shared/layout/nav-bar/nav-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/nav-bar/nav-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../objects/member/member.service */ "./src/app/objects/member/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(_memberService, router) {
        this._memberService = _memberService;
        this.router = router;
        this.isLoggedIn = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var result = this._memberService.isLoggedIn();
        if (result) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    NavBarComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this._memberService.logout();
        setTimeout(function () {
            _this.router.navigate(['/home']);
        }, 500);
    };
    NavBarComponent.prototype.isActive = function (page) {
        this.reg = new RegExp("^/" + page);
        return this.reg.test(this.router.url);
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/shared/layout/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/shared/layout/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_objects_member_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/modals/action/action.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/modals/action/action.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Central Modal Medium Success -->\r\n<div class=\"modal fade\" id=\"actionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-notify modal-warning\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">{{title}}</p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <div class=\"text-center\">\r\n          <i id=\"iconDisplayed\" class=\"fa fa-cog fa-4x mb-3 animated rotateIn\"></i>\r\n          <p>{{text}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Vertical button group\">\r\n          <button *ngFor=\"let b of buttonsArray;\" type=\"button\" class=\"btn btn-outline-default ml-0\" (click)=\"goDestination(linksArray[buttonsArray.indexOf(b)]);\" data-dismiss=\"modal\">{{b}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n<!-- Central Modal Medium Success-->\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/modals/action/action.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/modals/action/action.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-dialog.modal-notify.modal-warning .modal-header {\n  background-color: #085193 !important; }\n\n#iconDisplayed {\n  color: #085193 !important; }\n"

/***/ }),

/***/ "./src/app/shared/modals/action/action.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/modals/action/action.component.ts ***!
  \**********************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionComponent = /** @class */ (function () {
    function ActionComponent(router) {
        this.router = router;
        /* ----- Data ----- */
        this.title = "";
        this.text = "";
        this.isLinkActive = true;
    }
    ActionComponent.prototype.ngOnInit = function () {
        this.buttonsArray = this.buttons.split(',');
        this.linksArray = this.links.split(',');
    };
    ActionComponent.prototype.goDestination = function (link) {
        if (this.isLinkActive) {
            this.router.navigate(['/', link]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionComponent.prototype, "links", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActionComponent.prototype, "isLinkActive", void 0);
    ActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action',
            template: __webpack_require__(/*! ./action.component.html */ "./src/app/shared/modals/action/action.component.html"),
            styles: [__webpack_require__(/*! ./action.component.scss */ "./src/app/shared/modals/action/action.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/modals/confirmation/confirmation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/modals/confirmation/confirmation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Central Modal Medium Success -->\r\n<div class=\"modal fade\" id=\"confirmationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-notify modal-warning\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">{{title}}</p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <div class=\"text-center\">\r\n          <i id=\"iconDisplayed\" class=\"fa fa-exclamation-circle fa-4x mb-3 animated rotateIn\"></i>\r\n          <p>{{text}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-success waves-effect\" (click)=\"goDestination();\" data-dismiss=\"modal\" >Yes</a>\r\n        <a type=\"button\" class=\"btn btn-outline-secondary waves-effect\" data-dismiss=\"modal\">No</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n<!-- Central Modal Medium Success-->\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/modals/confirmation/confirmation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/modals/confirmation/confirmation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-dialog.modal-notify.modal-warning .modal-header {\n  background-color: #ffa701 !important; }\n\n#iconDisplayed {\n  color: #ffa701 !important; }\n"

/***/ }),

/***/ "./src/app/shared/modals/confirmation/confirmation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/modals/confirmation/confirmation.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(router) {
        this.router = router;
        /* ----- Data ----- */
        this.title = "";
        this.text = "";
        this.link = "";
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent.prototype.goDestination = function () {
        if (this.isLinkActive == true) {
            this.router.navigate(['/', this.link]);
        }
        else {
            this.success.emit(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmationComponent.prototype, "isLinkActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmationComponent.prototype, "success", void 0);
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/shared/modals/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/shared/modals/confirmation/confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/shared/modals/warning/warning.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/modals/warning/warning.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Central Modal Medium Success -->\r\n<div class=\"modal fade\" id=\"warningModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-notify modal-warning\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">{{title}}</p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <div class=\"text-center\">\r\n          <i id=\"iconDisplayed\" class=\"fa fa-exclamation-circle fa-4x mb-3 animated rotateIn\"></i>\r\n          <p>{{text}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"goDestination();\" data-dismiss=\"modal\" >I'm sure</a>\r\n        <a type=\"button\" class=\"btn btn-outline-default waves-effect\" data-dismiss=\"modal\">Cancel</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n<!-- Central Modal Medium Success-->\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/modals/warning/warning.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/modals/warning/warning.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-dialog.modal-notify.modal-warning .modal-header {\n  background-color: #e5242c !important; }\n\n#iconDisplayed {\n  color: #e5242c !important; }\n"

/***/ }),

/***/ "./src/app/shared/modals/warning/warning.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/modals/warning/warning.component.ts ***!
  \************************************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarningComponent = /** @class */ (function () {
    function WarningComponent(router) {
        this.router = router;
        /* ----- Data ----- */
        this.title = "";
        this.link = "";
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WarningComponent.prototype.ngOnInit = function () {
    };
    WarningComponent.prototype.goDestination = function () {
        if (this.isLink) {
            this.router.navigate(['/', this.link]);
        }
        else {
            console.log("Get out");
            this.success.emit(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WarningComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WarningComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WarningComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], WarningComponent.prototype, "isLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WarningComponent.prototype, "success", void 0);
    WarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warning',
            template: __webpack_require__(/*! ./warning.component.html */ "./src/app/shared/modals/warning/warning.component.html"),
            styles: [__webpack_require__(/*! ./warning.component.scss */ "./src/app/shared/modals/warning/warning.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WarningComponent);
    return WarningComponent;
}());



/***/ }),

/***/ "./src/app/shared/summary/summary.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/summary/summary.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row row-first justify-content-center\">\r\n\r\n    <!-- Card -->\r\n    <div class=\"col-10 col-sm-8 col-md-6 col-xl-4 card card-cascade hoverable\">\r\n\r\n      <!-- Card content -->\r\n      <div class=\"card-body card-body-cascade\">\r\n\r\n        <p class=\"h4 text-center mb-4\" >{{title}}</p>\r\n\r\n\r\n          <p class=\"text-center mb-4\">\r\n            {{text}}\r\n          </p>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <a class=\"btn btn-default\" (click)=\"goDestination()\" >{{buttonTitle}}</a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/summary/summary.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/summary/summary.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/summary/summary.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/summary/summary.component.ts ***!
  \*****************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(router, _location) {
        this.router = router;
        this._location = _location;
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent.prototype.goDestination = function () {
        if (this.link == "back") {
            this._location.back();
        }
        else {
            this.router.navigate(['/', this.link]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "buttonTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "text", void 0);
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/shared/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.scss */ "./src/app/shared/summary/summary.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    SERVEUR_URL: "http://localhost:1330"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ENZO\WebstormProjects\stikom\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map