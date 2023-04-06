import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { FollowerComponent } from './follower/follower.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"Page1",component:Page1Component
  },
  {
    path:"Page2/:id",component:Page2Component
  },
  {
    path:"Page3/:id/:username",component:Page3Component
  },
  {
    path:"Follower",component:FollowerComponent
  },
  {
    path:"myFollower",component:MyfollowerComponent
  },
  {
    path:"QueryParameter",component:QueryparameterComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
