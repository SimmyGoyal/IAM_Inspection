import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from "ngx-tooltip";
// import{ HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ClaimComponent } from './dashboard/claim/claim.component';

import { ContactComponent } from './dashboard/contact/contact.component';
import { AboutusComponent } from './dashboard/aboutus/aboutus.component';
import { InspectionComponent } from './inspection/inspection.component';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import{NgxPaginationModule}from "ngx-pagination";
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[
  {
    path:'login',
    component:LoginComponent,
    data:{
      title:'Login Page'
    }
  },
  {
    path:'Registration',
    component:RegisterComponent,
    data:{
      title:'Register Page'
    }
  },
  {
    path:'',
    component:DashboardComponent,
  },
  
  
  {
    path:'aboutus',
    component:AboutusComponent,
    data:{
      title:'aboutus Page'
    }
  },
  {
    path:'userlist',
    component:UserlistComponent,
    data:{
      title:'Userlist Page'
    }
  },
  {
    path:'contact',
    component:ContactComponent,
    data:{
      title:'contact Page'
    }
  },
  {
    path:'claim',
    component:ClaimComponent,
    data:{
      title:'contact Page'
    }
  },
  {
    path:'inspection',
    component:InspectionComponent,
    
  },
  {
    path:'edit',
    component:EditComponent,
    
  },
  
  
  

]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
      ClaimComponent,
   InspectionComponent,
    ContactComponent,
    AboutusComponent,
    UserlistComponent,
    EditComponent,
   
 
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
   
  HttpClientModule,NgxPaginationModule,TooltipModule, FormsModule,ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
