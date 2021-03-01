/*
 * @Author: your name
 * @Date: 2021-02-24 10:54:26
 * @LastEditTime: 2021-02-24 20:00:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo09\src\app\app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
  import { WelcomeComponent } from './components/home/welcome/welcome.component';
  import { SettingComponent } from './components/home/setting/setting.component';
import { ProductComponent } from './components/product/product.component';
  import { PcateComponent } from './components/product/pcate/pcate.component';
  import { PlistComponent } from './components/product/plist/plist.component';
import { NewsComponent } from './components/news/news.component';
const routes: Routes = [

  {
    
    path:'home',component:HomeComponent,
    children:[

      {path:'welcome',component:WelcomeComponent},
      
      {path:'setting',component:SettingComponent},

      {path:'**',redirectTo:'welcome'}
    
    ]
  
  },
  {
    path:'product',component:ProductComponent,
    children:[

      {path:'plist',component: PlistComponent},
      
      {path:'pcate',component:PcateComponent},

      {path:'**',redirectTo:'pcate'}
    
    ]
  
},

{  path:'news',component:NewsComponent,},

  {path:'**',redirectTo:'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
