import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './administrator/create/create-customer/create-customer.component';
import { CreateEngineerComponent } from './administrator/create/create-engineer/create-engineer.component';
import { CreateManagerComponent } from './administrator/create/create-manager/create-manager.component';
import { ComplaintFeedbackComponent } from './customer/complaint-feedback/complaint-feedback.component';
import { CreateComplaintComponent } from './customer/create-complaint/create-complaint.component';
import { CustomerComponent } from './customer/customer.component';
import { TrackComplaintComponent } from './customer/track-complaint/track-complaint.component';
import { ViewComplaintsComponent } from './customer/view-complaints/view-complaints.component';
import { LoginComponent } from './login/login.component';
import { ComplaintListComponent } from './manager/complaint-list/complaint-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin',children:[
    {path:'create',children:[
      {path:"customer",component:CreateCustomerComponent},
      {path:"manager",component:CreateManagerComponent},
      {path:"engineer",component:CreateEngineerComponent}
    ]}
  ]},
  {path:'customer',children:[
    {path:'complaint',component:CreateComplaintComponent},
    {path:'complaintList',component:ViewComplaintsComponent},
    {path:'track',component:ComplaintFeedbackComponent}
  ]},
  {path:'manager',children:[
    {path:'complaints',component:ComplaintListComponent}
  ]},
  {path:'engineer',children:[
    {path:'complaints',component:ViewComplaintsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
