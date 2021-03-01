/*
 * @Author: your name
 * @Date: 2021-02-21 20:21:43
 * @LastEditTime: 2021-02-21 22:02:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo08\src\app\components\newscontent\newscontent.component.ts
 */
/*
get传值：
  1.跳转
  <ul>
      <li *ngFor="let item of list;let key=index">
          <a [routerLink]="[ '/newscontent' ]" [queryParams]="{aid:key,name:'zhangsan'}">跳转到新闻详情</a>
          <a href="#">{{key}}---{{item}}</a>
      </li>


  </ul>
  2.接收：
    //引入ActivatedRoute
      import { ActivatedRoute } from '@angular/router';
    //声明
      constructor(public route:ActivatedRoute) { }
    //获取get传值
      this.route.queryParams.subscribe((data)=>{

        console.log(data);
      })
动态路由
  1.配置动态路由
    //aid动态路由
      { path:'newscontent/:aid',component:NewscontentComponent },
  2.跳转
    <ul>

      <li *ngFor="let item of list;let key=index">

          <a [routerLink]="[ '/newscontent' , key ]">{{key}}---{{item}}</a>
      </li>
    </ul>
  3.接收
    //引入ActivatedRoute
      import { ActivatedRoute } from '@angular/router';
    //声明
      constructor(public route:ActivatedRoute) { }
    //获取get传值
      this.route.params.subscribe((data)=>{

      console.log(data);
    })
*/
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.scss']
})
export class NewscontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {

    // console.log(this.route);
/*
    //get传值
    this.route.queryParams.subscribe((data)=>{

      console.log(data);
    })
*/

//获取动态路由传值
    this.route.params.subscribe((data)=>{

      console.log(data);
    })
  }
}
