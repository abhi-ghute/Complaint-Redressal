import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './administrator/create/create-customer/create-customer.component';
import { CreateEngineerComponent } from './administrator/create/create-engineer/create-engineer.component';
import { CreateManagerComponent } from './administrator/create/create-manager/create-manager.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin',children:[
    {path:'create',children:[
      {path:"customer",component:CreateCustomerComponent},
      {path:"manager",component:CreateManagerComponent},
      {path:"engineer",component:CreateEngineerComponent}
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
