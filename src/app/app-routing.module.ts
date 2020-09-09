import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MenuComponent } from './menu/menu.component';
import { ChartComponent } from './chart/chart.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DetaileventComponent } from './detailevent/detailevent.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forget',component:ForgetpasswordComponent},
  {path:'menu',component:MenuComponent,children:[
  {path:'tables',component:DataTableComponent},
  {path:'charts',component:ChartComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'detailevent',component:DetaileventComponent},
  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
