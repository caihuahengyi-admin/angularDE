/*
 * @Author: your name
 * @Date: 2020-12-28 22:27:45
 * @LastEditTime: 2021-01-10 10:36:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo06\src\app\components\home\home.component.ts
 */
import { assertPlatform, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public title:string="首页组件的标题";

  public msg:string="我是父组件的msg";
  constructor() { }

  ngOnInit(): void {
  }


  run(){

    alert("我是父组件中的run方法");
  }
}
