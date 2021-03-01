/*
 * @Author: your name
 * @Date: 2020-11-14 09:03:37
 * @LastEditTime: 2020-11-14 13:21:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo01\src\app\app.module.ts
 */
/*这个文件是Angular根模块，告诉Angular如何组装应用 */

// BrowserModule 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
