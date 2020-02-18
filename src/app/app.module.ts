import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyRecruitmentFormComponent } from './company-recruitment-form/company-recruitment-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsuccessComponent } from './formsuccess/formsuccess.component';

const routes: Routes = [
  {path: '', component: CompanyRecruitmentFormComponent},
  {path: 'company-recruitment-form', component: CompanyRecruitmentFormComponent},
  {path: 'form', component: FormComponent},
  {path: 'formsuccess', component: FormsuccessComponent},
  {path: 'view', component: ViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyRecruitmentFormComponent,
    ViewComponent,
    FormComponent,
    FormsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
