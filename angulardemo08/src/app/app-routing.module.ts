/*
 * @Author: your name
 * @Date: 2021-02-10 14:06:18
 * @LastEditTime: 2021-02-21 22:08:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo08\src\app\app-routing.module.ts
 */
//配置路由的模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//引入组件
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
//配置路由
const routes: Routes = [
{ path:'home',component:HomeComponent },
{ path:'news',component:NewsComponent },
{ path:'product',component:ProductComponent },

//aid动态路由
{ path:'newscontent/:aid',component:NewscontentComponent },
{ path:'productcontent/:pid',component:ProductcontentComponent },
//匹配不到路由的时候加载的组件，或者跳转的路由
{ path:'**',/*任意的路由 */
//component:HomeComponent
redirectTo:'home' 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
